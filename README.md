# PSSA Practice Hub - Multi-Grade Learning Platform

A comprehensive online learning platform for PSSA (Pennsylvania System of School Assessment) practice with support for Kindergarten through 5th grade, featuring progressive level-based learning, user authentication, and progress tracking.

## 🎯 Key Features

### 1. **Multi-Grade Support**
- Kindergarten through 5th Grade
- 4 Core Subjects: Math, English, Social Studies, Science
- Grade-specific content and difficulty levels

### 2. **Progressive Level System**
- 10 levels per subject per grade
- Sequential unlocking: Must pass Level 1 to unlock Level 2
- 70% score required to progress to next level
- Tracks attempts and performance history

### 3. **User Management**
- Create user profiles with grade selection
- Session-based authentication
- Support for multiple users on same device
- User history and progress saved locally

### 4. **Anti-Cheating Security Features**
- Session-based user validation
- Level locking prevents unauthorized access
- Progress verification before level access
- Back button prevention during quizzes
- Attempt and timestamp tracking
- Completion validation

### 5. **Progress Tracking & Dashboard**
- Visual progress bars per subject
- Level completion indicators (🔒 locked, ✓ completed, 🔢 available)
- Statistics: Levels completed, Average score, Total attempts
- Detailed performance data

### 6. **Responsive Design**
- Mobile-friendly interface
- Tablet optimized
- Desktop friendly
- Works offline with localStorage

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
   - Open `index.html` or `login.html`
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

## 📝 License

Educational use only - PSSA Practice Material

## 👨‍👩‍👧‍👦 Created For

Kindergarten to 5th Grade students practicing for PSSA assessments

---

**Start Learning:** Open `login.html` in your browser to begin! 🎓

