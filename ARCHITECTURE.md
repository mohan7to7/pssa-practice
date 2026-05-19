# 🏗️ PSSA Practice Hub - Project Architecture

## Overview

The PSSA Practice Hub is a progressive, multi-grade learning platform designed for K-5 students. The architecture follows a modular, grade-based structure that allows easy content updates without affecting core architecture.

---

## 📂 Project Structure

```
pssa-practice/
├── 📄 index.html                    # Main landing page
├── 📄 login.html                    # User authentication & login
├── 📄 dashboard.html                # User dashboard & grade/subject selection
├── 📄 style.css                     # Global styling
├── README.md                        # Project documentation
├── GETTING_STARTED.md               # Quick start guide
├── ARCHITECTURE.md                  # This file - architecture documentation
├── DEVELOPMENT_GUIDE.md             # Guide for developers
│
├── 📁 css/
│   └── timer.css                    # Timer-specific styling
│
├── 📁 js/                           # Core JavaScript modules
│   ├── config.js                    # ⭐ NEW: Centralized configuration
│   ├── utils.js                     # ⭐ NEW: Shared utility functions
│   ├── userManager.js               # User authentication & progress tracking
│   ├── questionBank.js              # Central question repository (all grades/subjects)
│   ├── timerManager.js              # Quiz timer management
│   ├── script.js                    # Global initialization script
│   │
│   ├── math.js                      # Math quiz logic
│   ├── english.js                   # English quiz logic
│   ├── science.js                   # Science quiz logic
│   ├── social.js                    # Social Studies quiz logic
│   │
│   ├── questions-k.js               # Kindergarten questions
│   ├── questions-grade1.js          # Grade 1 questions
│   ├── questions-grade2.js          # Grade 2 questions
│   ├── questions-grade3.js          # Grade 3 questions
│   ├── questions-grade4.js          # Grade 4 questions (Updated to 25 Q/level)
│   ├── questions-grade5.js          # Grade 5 questions
│   │
│   └── questionBanks/               # Additional question storage
│       └── grade4-questions.json    # Grade 4 data (JSON format)
│
├── 📁 K/                            # Kindergarten folder
│   └── index.html                   # Subject selection for Kindergarten
│
├── 📁 1/                            # Grade 1 (future structure)
│   └── index.html                   # Subject selection for Grade 1
│
├── 📁 2/                            # Grade 2 (future structure)
│   └── index.html                   # Subject selection for Grade 2
│
├── 📁 3/                            # Grade 3 (future structure)
│   └── index.html                   # Subject selection for Grade 3
│
├── 📁 4/                            # Grade 4 (future structure)
│   └── index.html                   # Subject selection for Grade 4
│
├── 📁 5/                            # Grade 5 (future structure)
│   └── index.html                   # Subject selection for Grade 5
│
├── 📁 math/
│   ├── index.html                   # Math subject selection
│   └── quiz.html                    # Math quiz template
│
├── 📁 english/
│   ├── index.html                   # English subject selection
│   └── quiz.html                    # English quiz template
│
├── 📁 science/
│   ├── index.html                   # Science subject selection
│   └── quiz.html                    # Science quiz template
│
└── 📁 social/
    ├── index.html                   # Social Studies subject selection
    └── quiz.html                    # Social Studies quiz template
```

---

## 🔐 Architecture Layers

### 1. **Presentation Layer** (HTML/CSS)
- **index.html** - Landing page, entry point
- **login.html** - Authentication interface
- **dashboard.html** - Main user interface
- ***/index.html** - Subject selection pages
- ***/quiz.html** - Quiz interface templates
- **style.css** - Global styling
- **css/timer.css** - Timer-specific styles

### 2. **Business Logic Layer** (JavaScript)
- **config.js** - Configuration & constants ⭐ NEW
- **userManager.js** - User management & authentication
- **questionBank.js** - Question storage & retrieval
- **{subject}.js** - Subject-specific quiz logic
- **timerManager.js** - Timer functionality

### 3. **Utility Layer** (JavaScript)
- **utils.js** - Shared utility functions ⭐ NEW
- **script.js** - Global initialization

### 4. **Data Layer**
- **questions-gradeX.js** - Grade-specific questions
- **localStorage** - Client-side data persistence

---

## 🎯 Key Components

### userManager.js
**Purpose:** User authentication and progress tracking

**Key Functions:**
- `createUser(name, gradeLevel)` - Create new user
- `getUser(userId)` - Retrieve user data
- `getAllUsers()` - Get all users
- `getCurrentUser()` - Get currently logged-in user
- `setCurrentUser(userId)` - Set active user
- `getUserProgress(userId)` - Get user's progress
- `updateProgress(userId, gradeLevel, subject, level, score)` - Update progress
- `unlockNextLevel(userId, gradeLevel, subject, level)` - Unlock next level

**Data Structure:**
```javascript
{
    id: "user_123...",
    name: "John",
    gradeLevel: "3",
    createdAt: "2024-01-15T10:30:00Z",
    lastActive: "2024-01-20T15:45:00Z"
}
```

### config.js (NEW)
**Purpose:** Centralized configuration management

**Key Settings:**
- Grade levels (K, 1-5)
- Subjects (Math, English, Science, Social Studies)
- Quiz settings (Questions per level: 25, Passing score: 70%, Timer: 60s)
- Storage keys
- Security settings
- UI customization options

**Benefits:**
- Single source of truth for all configuration
- Easy to modify settings without code changes
- Better maintainability

### utils.js (NEW)
**Purpose:** Reusable utility functions

**Categories:**
- **DOM Utilities** - Element manipulation safely
- **Storage Utilities** - localStorage with error handling
- **Validation Utilities** - Input validation
- **Notification Utilities** - User feedback
- **String Utilities** - Text formatting
- **Calculation Utilities** - Math operations
- **Array Utilities** - Array manipulation
- **Debug Utilities** - Logging functions

**Benefits:**
- DRY principle adherence
- Consistent error handling
- Reusable across all pages
- Better code maintainability

### questionBank.js
**Purpose:** Central question repository

**Key Function:**
- `getQuestionsForLevel(grade, subject, level)` - Retrieve questions

**Data Structure:**
```javascript
{
    question: "2 + 2 = ?",
    multichoiceOptions: ["3", "4", "5"],
    correctAnswer: "4",
    explanation: "Two plus two equals four"
}
```

### timerManager.js
**Purpose:** Quiz timer functionality

**Key Functions:**
- `startTimer(duration, callback)` - Start countdown
- `pauseTimer()` - Pause timer
- `resetTimer()` - Reset to initial state
- `getTimeRemaining()` - Get remaining time
- `updateTimerDisplay()` - Update UI

**Features:**
- Color changes based on remaining time:
  - 🟢 Green: 21-60 seconds
  - 🟡 Orange: 11-20 seconds
  - 🔴 Red: 0-10 seconds
- Auto-mark incorrect on timeout
- Visual feedback and animations

### {subject}.js Files (math.js, english.js, etc.)
**Purpose:** Subject-specific quiz logic

**Key Functions:**
- `loadQuestions()` - Load questions from question bank
- `renderQuestion()` - Display current question
- `checkAnswer()` - Validate user's answer
- `calculateScore()` - Compute final score
- `updateProgress()` - Save progress to user data

---

## 📊 Data Flow

### User Login Flow
```
1. User opens login.html
2. userManager.getAllUsers() retrieves existing users
3. User selects user or creates new user
4. setCurrentUser(userId) activates user session
5. Redirect to dashboard.html
```

### Quiz Flow
```
1. User selects grade and subject on dashboard
2. User clicks level
3. Quiz page loads (e.g., /math/quiz.html)
4. questionBank.getQuestionsForLevel() retrieves questions
5. timerManager starts 60-second timer
6. User answers questions
7. {subject}.js calculates score
8. Progress stored via userManager.updateProgress()
9. Level unlocked if score >= 70%
```

### Progress Tracking
```
localStorage Structure:
{
    "pssaProgress": {
        "user_123": {
            "grades": {
                "3": {
                    "math": {
                        "levels": [
                            {
                                "levelNum": 1,
                                "completed": true,
                                "score": 85,
                                "locked": false,
                                "attempts": 2,
                                "completedAt": "2024-01-15T10:30:00Z"
                            }
                        ]
                    }
                }
            }
        }
    }
}
```

---

## 🔄 Grade-Based Structure Design

### Why Separate Grade Folders?

The project uses separate folders for each grade (K, 1, 2, 3, 4, 5) to:

1. **Easy Content Updates** - Update one grade without affecting others
2. **Clear Organization** - Grade-specific files grouped logically
3. **Scalability** - Easy to add new grades
4. **Maintenance** - Isolated changes reduce regression risk

### Grade Folder Structure
```
Grade_X/
├── index.html               # Subject selection page
└── (Subject folders reference shared quiz.html)
```

### Subject Folder Structure
```
Subject/
├── index.html              # Subject & level selection
└── quiz.html               # Shared quiz template
```

---

## 🔌 Integration Points

### HTML to JavaScript
```html
<script src="js/config.js"></script>    <!-- Load config first -->
<script src="js/utils.js"></script>     <!-- Load utilities -->
<script src="js/userManager.js"></script>
<script src="js/questionBank.js"></script>
<script src="js/timerManager.js"></script>
<script src="js/math.js"></script>
<script src="js/script.js"></script>    <!-- Initialize last -->
```

### Questions Integration
```html
<script src="js/questions-grade3.js"></script>  <!-- Load questions -->
<script src="js/math.js"></script>              <!-- Use in subject logic -->
```

### Configuration Usage
```javascript
// In any file, use CONFIG object:
const gradesArray = CONFIG.GRADE_CODES;
const passingScore = CONFIG.PASSING_PERCENTAGE;
const timerDuration = CONFIG.TIMER_DURATION;
```

### Utils Usage
```javascript
// In any file, use Utils object:
Utils.validateUsername(name);
Utils.saveToStorage(key, data);
Utils.formatPercentage(score);
Utils.showNotification('Quiz complete!', 'success');
```

---

## 🔒 Security Architecture

### Authentication
- Session-based using sessionStorage
- Users verified before level access
- Current user tracked in `pssaCurrentUser`

### Level Locking
- Levels initially locked except Level 1
- Requires 70%+ score on previous level
- Level state stored in progress data

### Progress Verification
- Progress validated before quiz start
- Completion data includes timestamps
- Attempt tracking prevents exploitation

---

## 🎨 Styling Architecture

### Global Styles (style.css)
- General layout and typography
- Color scheme and variables
- Responsive breakpoints
- Component styling

### Component-Specific Styles
- timer.css - Timer-specific animations and colors
- Inline styles in quiz pages for additional customization

### Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px
- Flexbox and Grid layouts

---

## 📈 Performance Considerations

### Optimization Strategies
1. **Lazy Loading** - Questions loaded on-demand
2. **localStorage Caching** - User data cached locally
3. **Efficient DOM Updates** - Minimize repaints/reflows
4. **Code Splitting** - Subject-specific scripts loaded per page
5. **CSS Optimization** - Unified stylesheet with component-specific files

### Scalability
- Can support 10,000+ users (localStorage limit ~5MB)
- Questions organized by grade for easy expansion
- Modular architecture supports feature additions

---

## 🚀 Deployment Structure

### Development Environment
```
Local folder structure matches production
Easy to test HTML files directly in browser
```

### Production Environment
```
Same structure deployed to web server
No build process required (vanilla JS)
Direct file serving via HTTP/HTTPS
```

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript support required
- localStorage support required

---

## 📚 Documentation Files

1. **README.md** - Project overview and features
2. **GETTING_STARTED.md** - Quick start guide for users
3. **ARCHITECTURE.md** - This file, system design documentation
4. **DEVELOPMENT_GUIDE.md** - Developer guide and best practices

---

## 🔧 Adding New Content

### Adding Questions
1. Edit `js/questions-gradeX.js`
2. Follow existing JSON structure
3. Ensure 25 questions per level (10 levels)
4. Test on subject quiz page

### Adding New Grade
1. Create `/Grade_X` folder
2. Create `Grade_X/index.html` (copy from existing)
3. Create question file `js/questions-gradeX.js`
4. Add grade to CONFIG.GRADES

### Adding New Subject
1. Create `/subject` folder with `index.html` and `quiz.html`
2. Create `js/subject.js` with quiz logic
3. Add to CONFIG.SUBJECTS
4. Add questions to all grade files

---

## 🐛 Debugging

### Enable Debug Mode
```javascript
// In browser console:
Utils.log("Debug info");
Utils.logError("Error info", errorObject);
```

### Check User Session
```javascript
// In browser console:
console.log(userManager.getCurrentUser());
console.log(userManager.getUserProgress());
```

### Inspect localStorage
```javascript
// In browser console:
console.log(localStorage);
localStorage.getItem('pssaUsers');
localStorage.getItem('pssaProgress');
```

---

## 📝 Version History

### v2.0.0 (Current)
- ⭐ Added config.js for centralized configuration
- ⭐ Added utils.js for shared utilities
- Enhanced documentation
- Improved grade-based organization
- Updated question count to 25/level

### v1.0.0 (Initial Release)
- Basic structure with grades K-5
- 4 subjects (Math, English, Science, Social)
- 10 levels per subject
- User authentication
- Progress tracking
- Timer functionality

---

## 🎯 Future Improvements

### Short Term
- [ ] Add ARCHITECTURE.md (this file)
- [ ] Add DEVELOPMENT_GUIDE.md
- [ ] Implement config.js
- [ ] Implement utils.js
- [ ] Add unit tests

### Medium Term
- [ ] Backend database integration
- [ ] Cloud sync across devices
- [ ] Teacher dashboard
- [ ] Progress reports & export

### Long Term
- [ ] Mobile app (React Native)
- [ ] Video tutorials
- [ ] AI-powered questions
- [ ] Parent/teacher analytics

---

## 📞 Support

For questions about architecture:
1. Check DEVELOPMENT_GUIDE.md
2. Review code comments
3. Check inline documentation
4. Open browser console for debug logs


