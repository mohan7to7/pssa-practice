# 👨‍💻 PSSA Practice Hub - Development Guide

## Welcome to the Development Team! 

This guide will help you understand how to work with the PSSA Practice Hub codebase, add features, fix bugs, and maintain code quality.

---

## 🚀 Getting Started

### Prerequisites
- Text editor (VS Code, Sublime, etc.) or IDE (WebStorm, IntelliJ)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Basic JavaScript knowledge (ES6+)
- Understanding of HTML and CSS

### Setup
1. Clone or download the project
2. Open the project folder in your editor
3. Open `index.html` in your browser
4. You're ready to develop!

### Project Structure Overview
```
Project Layout:
├── js/
│   ├── config.js          ← Centralized configuration
│   ├── utils.js           ← Shared utilities
│   ├── userManager.js     ← User/authentication logic
│   ├── questionBank.js    ← Question storage
│   └── timerManager.js    ← Timer functionality
│
├── grades/                ← ⭐ Grade-based question organization
│   ├── k/
│   │   └── questions.js   ← Kindergarten questions (easy to update)
│   ├── grade1/
│   │   └── questions.js   ← Grade 1 questions
│   ├── grade2/
│   │   └── questions.js   ← Grade 2 questions
│   ├── grade3/
│   │   └── questions.js   ← Grade 3 questions
│   ├── grade4/
│   │   └── questions.js   ← Grade 4 questions
│   └── grade5/
│       └── questions.js   ← Grade 5 questions
│
└── {subject}/
    ├── index.html         ← Subject selection
    └── quiz.html          ← Quiz template (loads all grade questions)
```

---

## 📖 Code Standards & Best Practices

### JavaScript Standards

#### 1. Use const/let, Never var
```javascript
// ✅ Good
const userName = "John";
let counter = 0;

// ❌ Bad
var name = "John";
```

#### 2. Use Meaningful Names
```javascript
// ✅ Good
function calculateQuizScore(correctAnswers, totalQuestions)
const userProgressData = getUserProgress(userId);

// ❌ Bad
function calc(a, b)
const data = getData();
```

#### 3. Add Comments for Complex Logic
```javascript
// ✅ Good
/**
 * Calculate user's final score
 * @param {number} correct - Number of correct answers
 * @param {number} total - Total questions
 * @returns {number} Score percentage
 */
function calculateScore(correct, total) {
    return Math.round((correct / total) * 100);
}

// ❌ Bad
function calculateScore(a, b) {
    return Math.round((a / b) * 100);
}
```

#### 4. Use Arrow Functions for Callbacks
```javascript
// ✅ Good
setTimeout(() => {
    console.log('Timer complete');
}, 5000);

// ❌ Bad (Old style)
setTimeout(function() {
    console.log('Timer complete');
}, 5000);
```

#### 5. Use Object and Array Destructuring
```javascript
// ✅ Good
const { name, gradeLevel } = user;
const [first, second, ...rest] = questions;

// ❌ Bad
const name = user.name;
const gradeLevel = user.gradeLevel;
const first = questions[0];
```

#### 6. Error Handling
```javascript
// ✅ Good
try {
    const data = JSON.parse(localStorage.getItem('key'));
    return data || [];
} catch (error) {
    console.error('Error parsing data:', error);
    return [];
}

// ❌ Bad
const data = JSON.parse(localStorage.getItem('key'));
```

#### 7. Use CONFIG for Constants
```javascript
// ✅ Good
const passingScore = CONFIG.PASSING_PERCENTAGE;
const grades = CONFIG.GRADE_CODES;

// ❌ Bad
const passingScore = 70;
const grades = ['K', '1', '2', '3', '4', '5'];
```

---

## 🛠️ Common Development Tasks

### Task 1: Add Questions to a Grade

**File:** `grades/gradeX/questions.js` (where X is k, grade1, grade2, etc.)

**Steps:**
1. Open `grades/grade3/questions.js` (for example)
2. Find the level you want to edit
3. Add questions following the structure:

```javascript
const grade3Questions = {
    math: {
        1: [
            {
                question: "What is 5 + 3?",
                multichoiceOptions: ["7", "8", "9", "10"],
                correctAnswer: "8",
                explanation: "5 + 3 = 8. Count on your fingers!"
            },
            {
                question: "What is 10 - 4?",
                multichoiceOptions: ["5", "6", "7", "8"],
                correctAnswer: "6",
                explanation: "10 - 4 = 6. Subtraction means taking away."
            }
            // Add more questions here...
        ],
        2: [
            // Level 2 questions...
        ]
    },
    english: {
        // English questions...
    }
};
```

**Validation:**
```javascript
// In browser console, test:
console.log(grade3Questions.math[1].length); // Should show number of questions

// Verify each question has required fields:
console.log(grade3Questions.math[1][0].question);
console.log(grade3Questions.math[1][0].multichoiceOptions);
console.log(grade3Questions.math[1][0].correctAnswer);
console.log(grade3Questions.math[1][0].explanation);
```

### Task 2: Modify Configuration Settings

**File:** `js/config.js`

**Examples:**

Change passing percentage:
```javascript
// Line ~52
PASSING_PERCENTAGE: 75,  // Changed from 70 to 75
```

Change questions per level:
```javascript
// Line ~42
QUESTIONS_PER_LEVEL: 30,  // Changed from 25 to 30
```

Change timer duration:
```javascript
// Line ~43
TIMER_DURATION: 90,  // Changed from 60 to 90 seconds
```

Add new grade:
```javascript
// In GRADES object
GRADES: {
    K: 'Kindergarten',
    1: '1st Grade',
    // ... existing grades ...
    6: '6th Grade'  // Add new
}

// In GRADE_CODES array
GRADE_CODES: ['K', '1', '2', '3', '4', '5', '6']  // Add '6'
```

### Task 3: Add a New Utility Function

**File:** `js/utils.js`

**Steps:**
1. Open `js/utils.js`
2. Find appropriate section (or create new one)
3. Add your function following documentation format:

```javascript
// Add to STRING UTILITIES section:

/**
 * Truncate string to specified length
 * @param {string} str - String to truncate
 * @param {number} length - Maximum length
 * @returns {string} Truncated string with ellipsis
 */
truncateString: function(str, length = 50) {
    return str.length > length ? str.substring(0, length) + '...' : str;
},
```

**Usage in other files:**
```javascript
const shortText = Utils.truncateString(longText, 25);
```

### Task 4: Fix a Bug

**Process:**
1. **Identify** - Reproduce the bug and note exact behavior
2. **Find** - Locate the responsible code
3. **Understand** - Read and understand the logic
4. **Test** - Create a test case that fails
5. **Fix** - Make minimal changes to fix issue
6. **Verify** - Test that fix works and doesn't break other features
7. **Document** - Add comment explaining the fix

**Example - Bug Fix:**
```javascript
// ❌ BEFORE (Bug: Allows duplicate usernames)
function addUser(name) {
    const users = getAllUsers();
    users.push({ name: name });
    saveUsers(users);
}

// ✅ AFTER (Fixed: Check for duplicates first)
function addUser(name) {
    const users = getAllUsers();
    
    // Check if user already exists (BUG FIX: Prevent duplicates)
    if (users.some(u => u.name.toLowerCase() === name.toLowerCase())) {
        throw new Error('User with this name already exists');
    }
    
    users.push({ name: name });
    saveUsers(users);
}
```

---

## 📋 Adding New Features

### Feature Example: Add Hints System

**Step 1:** Update CONFIG
```javascript
// js/config.js
CUSTOMIZATION: {
    // ... existing options ...
    showHints: true,           // NEW
    hintsPerQuestion: 2        // NEW
}
```

**Step 2:** Add utility functions
```javascript
// js/utils.js
/**
 * Get hint for question
 * @param {object} question - Question object
 * @returns {string} Hint text
 */
getHint: function(question) {
    if (!question.hint) return "No hint available";
    return question.hint;
}
```

**Step 3:** Update question structure
```javascript
// js/questions-gradeX.js
{
    question: "What is 5 + 3?",
    multichoiceOptions: ["7", "8", "9", "10"],
    correctAnswer: "8",
    explanation: "5 + 3 = 8",
    hint: "Think of counting on your fingers"  // NEW FIELD
}
```

**Step 4:** Implement in quiz UI
```javascript
// In quiz.html or subject.js
function showHint() {
    if (CONFIG.CUSTOMIZATION.showHints) {
        const hint = Utils.getHint(currentQuestion);
        Utils.showNotification(hint, 'info');
    }
}
```

---

## 🧪 Testing Guide

### Manual Testing Checklist

#### User Management
- [ ] Create new user
- [ ] Login with existing user
- [ ] Logout functionality
- [ ] Multiple users on same device
- [ ] User data persists after refresh

#### Quiz Functionality
- [ ] Quiz loads correct questions
- [ ] Timer counts down correctly
- [ ] Answer submission works
- [ ] Score calculation is accurate
- [ ] Explanation displays after answer
- [ ] Timer auto-marks incorrect on timeout

#### Progress Tracking
- [ ] Level 1 unlocked by default
- [ ] Score >= 70% unlocks next level
- [ ] Score < 70% keeps level locked
- [ ] Progress saves after quiz
- [ ] Returning user sees correct progress

#### Responsive Design
- [ ] Mobile (320px width)
- [ ] Tablet (768px width)
- [ ] Desktop (1024px+ width)
- [ ] All text readable
- [ ] Buttons clickable

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Console Testing
```javascript
// In browser console, verify no errors
console.clear();

// Test user manager
console.log('Users:', userManager.getAllUsers());
console.log('Current User:', userManager.getCurrentUser());

// Test config
console.log('Config:', CONFIG);

// Test utils
console.log('Test percentage:', Utils.calculatePercentage(20, 25));
console.log('Test capitalization:', Utils.capitalize('hello'));

// Check localStorage
console.log('Storage:', localStorage);
```

---

## 🔍 Debugging Tips

### Enable Debug Mode
```javascript
// Add to any file
const DEBUG = true;

if (DEBUG) {
    Utils.log('User created:', newUser);
}
```

### Check Network Activity
1. Open browser DevTools (F12)
2. Go to Network tab
3. Perform action (login, load quiz, etc.)
4. Check all requests completed successfully

### Monitor Storage
```javascript
// In browser console
setInterval(() => {
    console.log('localStorage:', localStorage);
}, 5000);
```

### Debug Quiz Logic
```javascript
// In browser console during quiz
console.log('Current question:', currentQuestion);
console.log('User answer:', userAnswer);
console.log('Correct answer:', currentQuestion.correctAnswer);
console.log('Is correct:', userAnswer === currentQuestion.correctAnswer);
```

---

## 📁 File Organization Guidelines

### When Creating New Files

**Subject Logic File:**
```javascript
// js/newsubject.js
/**
 * NEW SUBJECT - Quiz Logic
 * Handles quiz flow, question loading, and scoring
 */

const NewSubjectQuiz = {
    currentLevel: 1,
    currentQuestionIndex: 0,
    score: 0,
    
    initialize: function() {
        // Initialize logic
    },
    
    loadQuestions: function() {
        // Load questions
    },
    
    // ... other methods
};
```

**Question File:**
```javascript
// js/questions-gradeX.js
const gradeXQuestions = {
    subject1: {
        1: [
            // Level 1 questions
        ],
        2: [
            // Level 2 questions
        ]
    },
    subject2: {
        // More subjects...
    }
};
```

---

## 🚀 Performance Optimization

### Best Practices

#### 1. Use const/let (Block Scoping)
```javascript
// ✅ Good - Only exists in loop
for (let i = 0; i < 10; i++) {
    // i only exists here
}

// ❌ Bad - Exists beyond loop
for (var i = 0; i < 10; i++) {
}
console.log(i); // 10 - exposed!
```

#### 2. Minimize DOM Rewrites
```javascript
// ✅ Good - Single update
const content = '<div>Item 1</div><div>Item 2</div>';
element.innerHTML = content;

// ❌ Bad - Multiple updates
element.innerHTML += '<div>Item 1</div>';
element.innerHTML += '<div>Item 2</div>';
```

#### 3. Use Event Delegation
```javascript
// ✅ Good - Single listener
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        handleButtonClick(e.target);
    }
});

// ❌ Bad - Multiple listeners
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', handleButtonClick);
});
```

#### 4. Cache DOM Elements
```javascript
// ✅ Good
const button = document.getElementById('submitBtn');
button.addEventListener('click', () => { /* ... */ });
button.addEventListener('mouseover', () => { /* ... */ });

// ❌ Bad - Retrieves element each time
document.getElementById('submitBtn').addEventListener('click', () => { /* ... */ });
document.getElementById('submitBtn').addEventListener('mouseover', () => { /* ... */ });
```

---

## 📚 Code Review Checklist

Before submitting code, verify:

- [ ] Code follows naming conventions
- [ ] Comments explain complex logic
- [ ] No console errors or warnings
- [ ] Responsive design works
- [ ] All features tested manually
- [ ] CONFIG used for constants
- [ ] Utils used for common operations
- [ ] Error handling implemented
- [ ] No hardcoded values (except simple numbers)
- [ ] localStorage/sessionStorage used correctly
- [ ] Functions have JSDoc comments
- [ ] No console.log left in production code
- [ ] Code doesn't break existing features

---

## 🐛 Known Issues & Workarounds

### Issue: localStorage Full
**Symptom:** "QuotaExceededError" in console
**Solution:** Clear old user data or expand storage plan

### Issue: Timer runs too fast
**Symptom:** Timer counts faster than clock
**Solution:** Check `timerManager.js` for animation frame timing

### Issue: Questions not loading
**Symptom:** Empty quiz page
**Solution:** Verify question file is loaded and has correct structure

---

## 📞 Getting Help

### Resources
- **ARCHITECTURE.md** - System design
- **GETTING_STARTED.md** - User guide
- **README.md** - Project overview
- **Code comments** - Inline documentation

### Debugging Steps
1. Check browser console for errors (F12)
2. Verify localStorage shows data
3. Test in different browser
4. Clear cache and reload
5. Check that all JS files are loaded

### Common Questions

**Q: Where do I add new questions?**
A: Edit `js/questions-gradeX.js` for grade X

**Q: How do I change the passing score?**
A: Update `CONFIG.PASSING_PERCENTAGE` in `js/config.js`

**Q: How do I add a new grade level?**
A: Create `/Grade_X` folder, add questions file, update CONFIG

**Q: How do I debug a user progress issue?**
A: Check browser console: `console.log(userManager.getUserProgress())`

---

## 🎯 Best Practices Summary

1. **Use CONFIG** - No hardcoded constants
2. **Use Utils** - Don't repeat code
3. **Add Comments** - Document complex logic
4. **Test Manually** - Verify features work
5. **Check Console** - No errors or warnings
6. **Handle Errors** - Try-catch for storage operations
7. **Follow Naming** - Clear, descriptive names
8. **Use JSDoc** - Document function parameters
9. **Keep It DRY** - Don't repeat yourself
10. **Test Responsive** - Works on all devices

---

## 🚀 Ready to Code!

You now have all the information needed to:
- ✅ Understand the project structure
- ✅ Follow code standards
- ✅ Add questions and content
- ✅ Implement features
- ✅ Fix bugs
- ✅ Test your changes
- ✅ Maintain code quality

Happy coding! 🎉


