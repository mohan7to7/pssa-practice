📘 PSSA Practice Hub – Multi-Grade Learning Platform

A comprehensive online learning platform for PSSA (Pennsylvania System of School Assessment) practice, 
designed for Kindergarten through 5th grade. It features progressive level-based learning, user authentication, progress tracking, 
and timed quizzes with visual feedback.

🎯 Key Features
🧑‍🎓 Multi-Grade Support
Kindergarten through 5th Grade
4 Core Subjects:
Math
English
Social Studies
Science
Grade-specific content and difficulty levels
15+ questions per subject per level
📈 Progressive Level System
10 levels per subject per grade
Sequential unlocking system
Requires 70% score to advance
Tracks attempts and performance history
⏱️ Timed Quiz System (NEW)
60-second timer per question
Visual feedback system:
🟢 Green: 60–21 seconds
🟡 Orange: 20–11 seconds (pulse animation)
🔴 Red: 10–0 seconds (fast pulse)
Auto-mark incorrect if time expires
Displays correct answer after timeout
Timer stops when an answer is selected
Resets for each question
👤 User Management
Create profiles with grade selection
Session-based authentication
Multiple users per device supported
Local progress saving
🔒 Anti-Cheating Features
Session-based validation
Level-locking system
Progress verification before access
Back button disabled during quizzes
Attempt + timestamp tracking
Completion validation
📊 Progress Tracking & Dashboard
Visual progress bars per subject
Level indicators:
🔒 Locked
🔢 Available
✓ Completed
Statistics:
Levels completed
Average score
Total attempts
Detailed performance insights
📱 Responsive Design
Mobile-friendly
Tablet optimized
Desktop compatible
Works offline using localStorage
📁 Project Structure
pssa-practice/
├── index.html
├── login.html
├── dashboard.html
├── style.css
├── js/
│   ├── userManager.js
│   ├── questionBank.js
│   ├── math.js
│   ├── english.js
│   ├── social.js
│   └── science.js
├── math/
├── english/
├── social/
└── science/
🚀 Quick Start
👨‍🎓 For Users

1. First-Time Setup

Open index.html or login.html
Enter name + select grade
Click Create New User

2. Dashboard

Choose a subject
Click an unlocked level (🔢)
Score 70%+ to unlock next level

3. Returning Users

Open login page
Select name from previous users
Click Continue
👨‍💻 For Developers
➕ Add Questions

Edit js/questionBank.js:

const questionBank = {
K: {
math: {
1: [
{
question: "Your question",
answers: [
{ text: "Option 1", correct: false },
{ text: "Correct Answer", correct: true }
]
}
]
}
}
};
⚙️ Modify Settings
Passing Score → userManager.js
const passingPercentage = 70;
Questions per level → questionBank.js
Levels → initializeUserProgress()
🔒 Security Implementation
Authentication
sessionStorage.setItem('pssaCurrentUser', userId);
Level Protection
User must be logged in
Level must be unlocked
Previous level must be passed (≥70%)
📦 Progress Data Structure
{
userId: "user_123",
grades: {
"3": {
math: {
levels: [
{ levelNum: 1, completed: true, score: 85, locked: false }
]
}
}
}
}
💾 Data Storage
Storage Type: localStorage
Capacity: ~5MB
Persistence: Until browser data is cleared

Keys Used:

pssaUsers
pssaProgress
pssaCurrentUser (sessionStorage)
📊 Progress Tracking Includes
✅ Completion status
📈 Score percentage
🔄 Attempts count
⏰ Completion timestamp
🔒 Lock status
🆕 Recent Improvements
Improved navigation structure
Kindergarten landing page
Fixed question bank errors
Unified styling
Better UX for level access
🎨 Customization
Styling: style.css
Questions: questionBank.js
Subjects: dashboard.html
🐛 Known Limitations
localStorage limit (~5MB)
No backend (data can be lost)
Single-device usage only
No export functionality
📌 Pending Updates & Improvements
🔴 High Priority (Core Features)
❌ Failed Questions Review (with explanations)
❌ Full Question Bank Expansion (K–5, all levels)
❌ Add Images/Visual Questions
🟡 Medium Priority
❌ Analytics Dashboard
❌ Hints System
❌ Adaptive Difficulty
❌ Badges & Achievements
❌ Time Tracking
🟢 Low Priority
❌ Question Categories/Tags
❌ Sound Effects
❌ Dark Mode
❌ Leaderboard
❌ Export/Print Reports
❌ Teacher Notes
🔵 Future (Advanced / Backend)
❌ Backend Database (cloud sync)
❌ Parent Portal
❌ Teacher Dashboard
❌ Mobile App
❌ API Integration


Open login.html in your browser and begin learning!

##### Need to fix a bug or want to contribute? Check out the GitHub repository and submit a pull request!




