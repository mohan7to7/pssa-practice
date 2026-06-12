// User Management System with localStorage
class UserManager {
    constructor() {
        this.storageKey = 'pssaUsers';
        this.currentUserKey = 'pssaCurrentUser';
        this.progressKey = 'pssaProgress';
        // Default to 25 levels, or use CONFIG if available
        this.levelsPerSubject = typeof CONFIG !== 'undefined' ? CONFIG.LEVELS_PER_SUBJECT : 25;
    }

    // Get current user from session
    getCurrentUser() {
        const userId = sessionStorage.getItem(this.currentUserKey);
        if (!userId) return null;

        const users = this.getAllUsers();
        return users.find(u => u.id === userId) || null;
    }

    // Get all users
    getAllUsers() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('Error reading users:', e);
            return [];
        }
    }

    // Create new user
    createUser(name, gradeLevel) {
        if (!name || !gradeLevel) {
            throw new Error('Name and grade level are required');
        }

        const users = this.getAllUsers();
        const userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);

        const newUser = {
            id: userId,
            name: name,
            gradeLevel: gradeLevel,
            createdAt: new Date().toISOString(),
            lastActive: new Date().toISOString()
        };

        users.push(newUser);
        localStorage.setItem(this.storageKey, JSON.stringify(users));

        // Set as current user
        sessionStorage.setItem(this.currentUserKey, userId);

        // Initialize progress for this user
        this.initializeUserProgress(userId);

        return newUser;
    }

    // Set current user
    setCurrentUser(userId) {
        const users = this.getAllUsers();
        const user = users.find(u => u.id === userId);

        if (!user) {
            throw new Error('User not found');
        }

        // Update last active time
        user.lastActive = new Date().toISOString();
        localStorage.setItem(this.storageKey, JSON.stringify(users));

        // Set as current user
        sessionStorage.setItem(this.currentUserKey, userId);
        return user;
    }

    // Initialize user progress
    initializeUserProgress(userId) {
        const grades = ['K', '1', '2', '3', '4', '5'];
        const subjects = ['math', 'english', 'social', 'science'];

        const progress = {
            userId: userId,
            grades: {}
        };

        grades.forEach(grade => {
            progress.grades[grade] = {};
            subjects.forEach(subject => {
                progress.grades[grade][subject] = {
                    levels: Array.from({ length: this.levelsPerSubject }, (_, i) => ({
                        levelNum: i + 1,
                        completed: false,
                        score: 0,
                        attempts: 0,
                        timestamp: null,
                        locked: i > 0 // First level unlocked, others locked
                    }))
                };
            });
        });

        this.saveUserProgress(userId, progress);
        return progress;
    }

    // Get user progress
    getUserProgress(userId = null) {
        const user = userId ? { id: userId } : this.getCurrentUser();
        if (!user) return null;

        try {
            const allProgress = localStorage.getItem(this.progressKey);
            const progressMap = allProgress ? JSON.parse(allProgress) : {};

            if (!progressMap[user.id]) {
                this.initializeUserProgress(user.id);
                return this.getUserProgress(user.id);
            }

            const progress = progressMap[user.id];

            // Migration: Upgrade users with old 10-level structure to 25 levels
            this.migrateProgressTo25Levels(user.id, progress);

            return progress;
        } catch (e) {
            console.error('Error reading progress:', e);
            return null;
        }
    }

    // Migrate progress from 10 levels to 25 levels (for existing users)
    migrateProgressTo25Levels(userId, progress) {
        let needsUpdate = false;
        const subjects = ['math', 'english', 'social', 'science'];
        const grades = ['K', '1', '2', '3', '4', '5'];

        grades.forEach(grade => {
            if (progress.grades[grade]) {
                subjects.forEach(subject => {
                    if (progress.grades[grade][subject]) {
                        const levels = progress.grades[grade][subject].levels;
                        // Check if user has old 10-level structure
                        if (levels && levels.length < this.levelsPerSubject) {
                            // Extend to 25 levels, preserving old level data
                            const oldLength = levels.length;
                            for (let i = oldLength; i < this.levelsPerSubject; i++) {
                                levels.push({
                                    levelNum: i + 1,
                                    completed: false,
                                    score: 0,
                                    attempts: 0,
                                    timestamp: null,
                                    locked: true
                                });
                            }
                            // Unlock level 11 if user completed level 10
                            if (oldLength >= 10 && levels[9]?.completed) {
                                levels[10].locked = false;
                            }
                            needsUpdate = true;
                        }
                    }
                });
            }
        });

        // Save updated progress
        if (needsUpdate) {
            this.saveUserProgress(userId, progress);
        }
    }

    // Save user progress
    saveUserProgress(userId, progress) {
        try {
            const allProgress = localStorage.getItem(this.progressKey);
            const progressMap = allProgress ? JSON.parse(allProgress) : {};

            progressMap[userId] = progress;
            localStorage.setItem(this.progressKey, JSON.stringify(progressMap));
            return true;
        } catch (e) {
            console.error('Error saving progress:', e);
            return false;
        }
    }

    // Check if level is unlocked
    isLevelUnlocked(userId, grade, subject, levelNum) {
        const progress = this.getUserProgress(userId);
        if (!progress) return false;

        const subjectProgress = progress.grades[grade]?.[subject];
        if (!subjectProgress) return false;

        const level = subjectProgress.levels.find(l => l.levelNum === levelNum);
        if (!level) return false;

        return !level.locked;
    }

    // Complete level
    completeLevelWithScore(userId, grade, subject, levelNum, score, totalQuestions) {
        const progress = this.getUserProgress(userId);
        if (!progress) return false;

        const subjectProgress = progress.grades[grade]?.[subject];
        if (!subjectProgress) return false;

        const level = subjectProgress.levels.find(l => l.levelNum === levelNum);
        if (!level) return false;

        // Calculate percentage
        const percentage = Math.round((score / totalQuestions) * 100);
        const passingPercentage = 70; // 70% to pass

        level.completed = true;
        level.score = percentage;
        level.attempts = (level.attempts || 0) + 1;
        level.timestamp = new Date().toISOString();

        // If passed, unlock next level
        if (percentage >= passingPercentage && levelNum < this.levelsPerSubject) {
            const nextLevel = subjectProgress.levels.find(l => l.levelNum === levelNum + 1);
            if (nextLevel) {
                nextLevel.locked = false;
            }
        }

        this.saveUserProgress(userId, progress);
        return {
            passed: percentage >= passingPercentage,
            percentage: percentage,
            nextLevelUnlocked: percentage >= passingPercentage && levelNum < this.levelsPerSubject
        };
    }
    // Get level statistics
    getLevelStats(userId, grade, subject, levelNum) {
        const progress = this.getUserProgress(userId);
        if (!progress) return null;

        return progress.grades[grade]?.[subject]?.levels.find(l => l.levelNum === levelNum) || null;
    }
    // Clear all user data (for testing)
    clearAllData() {
        localStorage.removeItem(this.storageKey);
        localStorage.removeItem(this.progressKey);
        sessionStorage.removeItem(this.currentUserKey);
    }
}
// Initialize global user manager
const userManager = new UserManager();