# PSSA Practice Hub - Multi-Grade Learning Platform

# PSSA Practice Hub - Multi-Grade Learning Platform

A comprehensive online learning platform for PSSA (Pennsylvania System of School Assessment) practice with support for Kindergarten through 5th grade, featuring progressive level-based learning, user authentication, progress tracking, and **timed quizzes with visual feedback**.

## 🎯 Key Features

### 1. **Multi-Grade Support**
- Kindergarten through 5th Grade
- 4 Core Subjects: Math, English, Social Studies, Science
- Grade-specific content and difficulty levels
- 15+ questions per subject per level

### 2. **Progressive Level System**
- 10 levels per subject per grade
- Sequential unlocking: Must pass Level 1 to unlock Level 2
- 70% score required to progress to next level
- Tracks attempts and performance history

### 3. **⏱️ Timed Quiz System** (NEW)
- **60-second timer per question** on all quizzes
- **Visual feedback:**
    - 🟢 Green (normal) - 60-21 seconds remaining
    - 🟡 Orange (warning) - 20-11 seconds remaining with pulse animation
    - 🔴 Red (danger) - 10-0 seconds remaining with faster pulse
- Auto-marks as incorrect if time runs out
- Shows correct answer if time expires
- Timer automatically stops when answer is selected
- Timer resets for each new question

### 4. **User Management**
- Create user profiles with grade selection
- Session-based authentication
- Support for multiple users on same device
- User history and progress saved locally

### 5. **Anti-Cheating Security Features**
- Session-based user validation
- Level locking prevents unauthorized access
- Progress verification before level access
- Back button prevention during quizzes
- Attempt and timestamp tracking
- Completion validation

### 6. **Progress Tracking & Dashboard**
- Visual progress bars per subject
- Level completion indicators (🔒 locked, ✓ completed, 🔢 available)
- Statistics: Levels completed, Average score, Total attempts
- Detailed performance data

### 7. **Responsive Design**
- Mobile-friendly interface
- Tablet optimized
- Desktop friendly
- Works offline with localStorage

## 📁 Project Structure

## 📁 Project Structure

```
pssa-practice/
├── index.html              # Redirects to login
├── login.html              # User authentication
├── dashboard.html          # Learning dashboard
├── style.css               # Shared styling
├── js/
│   ├── userManager.js      # User & progress management
│   ├── questionBank.js     # Question database
│   ├── math.js            # (Legacy - keep for reference)
│   ├── english.js
│   ├── social.js
│   └── science.js
├── math/
│   ├── index.html         # Legacy subject page
│   └── quiz.html          # Universal quiz page
├── english/
│   ├── index.html
│   └── quiz.html
├── social/
│   ├── index.html
│   └── quiz.html
└── science/
    ├── index.html
    └── quiz.html
```

## 🚀 Quick Start

### For Users:
1. **First Time Setup:**
   - Open `index.html` (home page) or go directly to `login.html`
   - Enter your name and select your grade
   - Click "Create New User"

2. **Dashboard:**
   - Select a subject
   - Click an unlocked level (🔢 symbol)
   - Complete the quiz with 70% or higher to unlock the next level

3. **Logging In Again:**
   - Open login page
   - Click your name in "Previous Users" section
   - Click "Continue"

4. **Subject Pages:**
   - Visit individual subject pages (e.g., `math/index.html`) for direct level access
   - Kindergarten students can start from `K/index.html`

### For Developers:

#### Add More Questions:
Edit `js/questionBank.js`:
```javascript
const questionBank = {
    K: {
        math: {
            1: [
                { question: "Your question", answers: [
                    { text: "Option 1", correct: false },
                    { text: "Correct Answer", correct: true }
                ]}
            ]
        }
    }
    // ... more grades and subjects
};
```

#### Modify Difficulty/Settings:
- **Passing Score:** Change in `userManager.js` - `const passingPercentage = 70;`
- **Questions per Level:** Add more to `questionBank.js`
- **Number of Levels:** Modify array length in `initializeUserProgress()`

## 🔒 Security Implementation

### User Authentication:
```javascript
// Session-based - user ID stored in sessionStorage
// Gets cleared on browser close or logout
sessionStorage.setItem('pssaCurrentUser', userId);
```

### Level Protection:
```javascript
// Before showing quiz, verify:
1. User is logged in
2. Level is unlocked
3. Previous level was completed with 70%+
```

### Progress Storage:
```javascript
// Data structure prevents tampering:
{
    userId: "user_1712345678",
    grades: {
        "3": {
            "math": {
                levels: [
                    { levelNum: 1, completed: true, score: 85, locked: false },
                    { levelNum: 2, completed: false, score: 0, locked: false }
                ]
            }
        }
    }
}
```

## 💾 Data Storage

**Technology:** localStorage (No backend required)
- **Capacity:** ~5MB per user
- **Persistence:** Survives page reloads, cleared on browser data clear
- **Keys:**
  - `pssaUsers`: All user profiles
  - `pssaProgress`: User progress data
  - `pssaCurrentUser` (sessionStorage): Current logged-in user

## 📊 Progress Tracking

Each level tracks:
- ✅ Completion status
- 📈 Score percentage
- 🔄 Number of attempts
- ⏰ Timestamp of completion
- 🔒 Lock status

## 🆕 Recent Improvements

- **Enhanced Navigation:** Improved page structure with dedicated subject pages
- **Kindergarten Support:** Special landing page for kindergarten students
- **Bug Fixes:** Resolved JavaScript syntax errors in question bank
- **Consistent Styling:** Unified design across all pages
- **Better UX:** Direct access to quiz levels from subject pages

## 🎨 Customization

### Branding:
Edit `style.css` for colors and fonts

### Questions:
Add comprehensive questions in `js/questionBank.js`

### Subjects:
Modify subject list in `dashboard.html`

## 🐛 Known Limitations

1. **localStorage Limit:** ~5MB per domain
2. **No Backend:** Data lost if browser data is cleared
3. **Single Device:** Progress doesn't sync across devices
4. **No Export:** Can't export progress reports

## 🔮 Future Enhancements

- Backend database for cloud sync
- Teacher dashboard for monitoring
- Certificates and badges
- Detailed analytics and reports
- Timed quizzes
- Hints system
- Difficulty adjustment based on performance
- Video tutorials
- Parent access portal


**Start Learning:** Open `login.html` in your browser to begin! 🎓
PENDING UPDATES & IMPROVEMENTS LIST
🔴 HIGH PRIORITY - Core Features
❌ Show Failed Questions Review (CRITICAL)
Display all incorrect answers at end of quiz
Show: Question → Student's answer (❌) → Correct answer (✅)
Help students learn from mistakes
Add explanation/hints for each question
Estimated time: 30-45 minutes
❌ Multiple Question Bank Expansion
Currently: Only 2 levels per subject with placeholder questions
Needed: Full questions for all 10 levels across K-5th grades
Estimated time: 2-3 hours (depends on question depth)
❌ Question Images/Visuals
Add images to math questions (visual counting, shapes)
Add visual elements to other subjects
Better for younger students (K-2)
Estimated time: 1-2 hours

🟡 MEDIUM PRIORITY - Enhanced Features
❌ Detailed Analytics Dashboard
Show performance trends
Time spent per question/level
Correct vs incorrect ratio
Subject strengths/weaknesses
Estimated time: 1-2 hours
❌ Hints System
Optional hints for each question
Reduce points slightly if hint used
Encourages learning without giving answer
Estimated time: 45 minutes
❌ Difficulty Adjustment
Adapt questions based on performance
Easier questions if struggling
Harder questions if doing well
Estimated time: 1.5-2 hours
❌ Badges & Achievement System
Achievement unlocks (e.g., "Math Master", "Perfect Score")
Visual badges/trophies
Motivates students
Estimated time: 1 hour
❌ Time Tracking
Show average time per question
Track total quiz time
Display in results
Estimated time: 30 minutes
