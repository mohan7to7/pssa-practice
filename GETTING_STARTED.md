# PSSA Practice Hub - Getting Started Guide

## 🎯 Quick Start (5 Minutes)

### Step 1: Open in Browser
- Open `login.html` (or `index.html` - it redirects)
- You should see the PSSA Practice Hub login page

### Step 2: Create Your First User
- Enter a name (e.g., "Sarah" or "Alex")
- Select a grade (Kindergarten through 5th Grade)
- Click "Create New User"
- You'll be taken to the Dashboard

### Step 3: Explore the Dashboard
- You see 4 subject cards: 📐 Math, 📚 English, 🌍 Social Studies, 🔬 Science
- Each subject shows levels 1-10 with progress bars
- Level 1 is **unlocked** (white with number)
- Levels 2-10 are **locked** (gray with 🔒)

### Step 4: Take Your First Quiz
- Click on a subject (e.g., Math)
- Click on Level 1
- Answer 5 questions
- View your score

### Step 5: Understand the Rules
- **70% or higher** = Pass and unlock next level
- **Below 70%** = Level locked, try again
- After passing, go back to dashboard to see Level 2 unlocked

---

## 📱 Multi-Device Support

✅ Works on phones (375px+)
✅ Works on tablets (768px+)
✅ Works on desktops (1024px+)
✅ Works offline (data saved locally)

---

## 👥 Multiple Users

The system supports multiple children on the same device:

1. First child creates account: "John - Grade 3"
2. Second child creates account: "Sarah - Grade 2"
3. Each child's progress is saved separately
4. Login shows list of all previous users
5. Click on user name to continue their learning

---

## 🔒 How Security Works

### Level Locking:
- Level 1 starts unlocked
- Complete with 70%+ to unlock Level 2
- Level 2 cannot be accessed until Level 1 is done
- **Children can't cheat by clicking on Level 5!**

### Session Security:
- User stays logged in during session
- Logging out clears session
- Closing browser also clears session
- Reopening browser shows login (user data saved)

### Data Protection:
- Each user has unique ID
- Progress saved for each user separately
- Data stored in browser localStorage
- Clearing browser data clears all saved progress

---

## 📊 What Gets Tracked

For each level, the system tracks:
- ✅ Completed (yes/no)
- 📊 Score (percentage)
- 🔄 Attempts (how many times tried)
- ⏰ Timestamp (when completed)
- 🔓 Locked/Unlocked status

---

## ❓ FAQs

**Q: Can children skip levels?**
A: No. Levels are locked until previous level is completed with 70%.

**Q: What if they score 69%?**
A: They can retake the level. Next level stays locked until they get 70%+.

**Q: Where is the data saved?**
A: In the browser's localStorage (local computer storage, not cloud).

**Q: Will data be lost if browser is closed?**
A: No. Data persists. Only session data is lost.

**Q: Will data be lost if browser cache is cleared?**
A: Yes. Clearing browser cache/data clears localStorage.

**Q: Can they take a quiz multiple times?**
A: Yes! They can retake any completed level to try for better score.

**Q: Is there a teacher dashboard?**
A: Not yet. It's a future feature.

**Q: Can I add more questions?**
A: Yes! Edit `js/questionBank.js` to add more questions per level.

---

## 🛠️ For Parents/Teachers

### Monitor Progress:
1. Create an adult user account
2. View the Dashboard
3. See which levels each student has completed
4. See average scores and attempts
5. Encourage students to practice weak areas

### Adding Content:
1. Open `js/questionBank.js`
2. Add more questions for specific grades/levels
3. Save and reload browser
4. Questions appear in quizzes automatically

### Setting Expectations:
- Each level has 5 questions
- 70% = 3.5+ correct answers
- Students should aim for 80-100%
- Retakes are encouraged!

---

## 🎮 Sample Learning Journey

**Day 1 - First Visit:**
- Create account: "Maya - Grade 3"
- Try Math Level 1
- Score: 80% ✅ → Level 2 unlocked
- Try Math Level 2
- Score: 65% ❌ → Try again

**Day 2 - Second Visit:**
- Login as Maya
- Retry Math Level 2
- Score: 75% ✅ → Level 3 unlocked
- Try English Level 1
- Score: 85% ✅ → English Level 2 unlocked

**Week 1 Status:**
- Math: Level 3 unlocked (2/3 levels done)
- English: Level 2 unlocked
- Social Studies: Level 1 (not started)
- Science: Level 1 (not started)
- Average Score: 81%
- Total Attempts: 6

---

## 📞 Troubleshooting

**Problem: Login page won't load**
- ✓ Make sure you're opening login.html or index.html
- ✓ Check browser supports JavaScript
- ✓ Try different browser

**Problem: Quiz won't start**
- ✓ Make sure you're logged in
- ✓ Make sure level is not locked
- ✓ Try refreshing page
- ✓ Check browser console for errors

**Problem: Data disappeared**
- ✓ Check if browser cache was cleared
- ✓ Try accessing from same browser
- ✓ Data is saved in browser, not cloud

**Problem: Can't see next level**
- ✓ Did you get 70%+ on current level?
- ✓ Did you click "Next Level" button?
- ✓ Go back to dashboard to see updated progress

---

## 🌟 Features Overview

### Current Features:
✅ Kindergarten through 5th Grade
✅ 4 Subjects (Math, English, Social Studies, Science)
✅ 10 Levels per Subject per Grade
✅ User Management & Progress Tracking
✅ Session-based Security
✅ Level Locking & Progression
✅ Score Tracking & Statistics
✅ Responsive Mobile Design
✅ Offline Data Storage
✅ Multiple Users Support

### Planned Features:
🔜 Teacher Dashboard
🔜 Certificates & Badges
🔜 Progress Reports & Export
🔜 Timed Quizzes
🔜 Hints System
🔜 Video Tutorials
🔜 Parent Portal
🔜 Cloud Sync (across devices)

---

## 📚 Learning Tips

1. **Start with Level 1** - Build confidence
2. **Aim for 85%+** - Not just 70%
3. **Try all subjects** - Well-rounded learning
4. **Retake for improvement** - Practice makes perfect
5. **Regular practice** - Few minutes daily is better than marathon sessions
6. **Track progress** - Use the dashboard stats to see improvement

---

## 🚀 Ready to Learn!

Open your browser and go to **login.html** to start your PSSA practice journey! 🎓

Good luck! 🌟

