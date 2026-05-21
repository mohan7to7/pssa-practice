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
│   ├── config.js                    # ⭐ Centralized configuration
│   ├── utils.js                     # ⭐ Shared utility functions
│   ├── userManager.js               # User authentication & progress tracking
│   ├── questionBank.js              # Central question repository
│   └── timerManager.js              # Quiz timer management
│
├── 📁 grades/                       # ⭐ NEW: Grade-based question organization
│   ├── k/
│   │   └── questions.js             # Kindergarten questions (all subjects)
│   ├── grade1/
│   │   └── questions.js             # Grade 1 questions (all subjects)
│   ├── grade2/
│   │   └── questions.js             # Grade 2 questions (all subjects)
│   ├── grade3/
│   │   └── questions.js             # Grade 3 questions (all subjects)
│   ├── grade4/
│   │   └── questions.js             # Grade 4 questions (all subjects)
│   └── grade5/
│       └── questions.js             # Grade 5 questions (all subjects)
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
- **grades/*/questions.js** - Grade-specific questions (organized by grade folder)
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
7. Quiz calculates score
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
<script src="../grades/k/questions.js"></script>          <!-- K questions -->
<script src="../grades/grade1/questions.js"></script>    <!-- Grade 1 questions -->
<script src="../grades/grade2/questions.js"></script>    <!-- Grade 2 questions -->
<!-- etc. Load all grades to make available to questionBank -->
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
1. Edit `grades/gradeX/questions.js` (where X is the grade level: k, grade1, grade2, etc.)
2. Follow existing JSON structure
3. Ensure 25 questions per level (10 levels)
4. Test on subject quiz page

### Adding New Grade
1. Create `/grades/gradeX/` folder (where X is the new grade)
2. Create `grades/gradeX/questions.js` with questions for all subjects
3. Create `/GradeX` folder (if needed for navigation)
4. Create `GradeX/index.html` (copy from existing)
5. Add grade to CONFIG.GRADES
6. Update all quiz.html files to include new grade's questions script

### Adding New Subject
1. Create `/subject` folder with `index.html` and `quiz.html`
2. Add subject questions to all grade files in `grades/gradeX/questions.js`
3. Add to CONFIG.SUBJECTS
4. Update quiz.html files to reference new subject

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

### v2.1.0 (Current)
- ⭐ Reorganized question files into grade-based folders (`grades/gradeX/questions.js`)
- Simplified file structure for easier content management
- Updated documentation to reflect new organization
- Enhanced maintainability - edit one grade folder without affecting others

### v2.0.0
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


