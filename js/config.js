/**
 * PSSA Practice Hub - Configuration File
 * Centralized configuration for the entire application
 * This file contains all configurable constants and settings
 */

const CONFIG = {
    // ===== APPLICATION SETTINGS =====
    APP_NAME: 'PSSA Practice Hub',
    APP_VERSION: '2.0.0',

    // ===== GRADE LEVELS =====
    GRADES: {
        K: 'Kindergarten',
        1: '1st Grade',
        2: '2nd Grade',
        3: '3rd Grade',
        4: '4th Grade',
        5: '5th Grade'
    },
    GRADE_CODES: ['K', '1', '2', '3', '4', '5'],

    // ===== SUBJECTS =====
    SUBJECTS: {
        math: {
            name: 'Math',
            icon: '📐',
            color: '#3498db',
            folder: 'math'
        },
        english: {
            name: 'English',
            icon: '📚',
            color: '#e74c3c',
            folder: 'english'
        },
        science: {
            name: 'Science',
            icon: '🔬',
            color: '#27ae60',
            folder: 'science'
        },
        social: {
            name: 'Social Studies',
            icon: '🌍',
            color: '#f39c12',
            folder: 'social'
        }
    },
    SUBJECT_CODES: ['math', 'english', 'science', 'social'],

    // ===== QUIZ SETTINGS =====
    LEVELS_PER_SUBJECT: 10,          // Number of levels per subject
    QUESTIONS_PER_LEVEL: 25,         // Number of questions per level (previously 15, now 25)
    PASSING_PERCENTAGE: 70,          // Percentage needed to pass a level
    TIMER_DURATION: 60,              // Seconds per question

    // ===== TIMER COLOR THRESHOLDS =====
    TIMER_COLORS: {
        green: { min: 21, max: 60, color: '#27ae60' },      // 21-60 seconds
        orange: { min: 11, max: 20, color: '#f39c12' },     // 11-20 seconds
        red: { min: 0, max: 10, color: '#e74c3c' }          // 0-10 seconds
    },

    // ===== STORAGE KEYS =====
    STORAGE_KEYS: {
        users: 'pssaUsers',
        progress: 'pssaProgress',
        currentUser: 'pssaCurrentUser',
        settings: 'pssaSettings'
    },

    // ===== SECURITY SETTINGS =====
    SECURITY: {
        sessionTimeout: 30 * 60 * 1000,  // 30 minutes in milliseconds
        requireAuthentication: true,
        enableLevelLocking: true,
        enableProgressTracking: true
    },

    // ===== UI SETTINGS =====
    UI: {
        animationDuration: 300,          // Milliseconds
        toastDuration: 3000,             // Milliseconds
        responsiveBreakpoints: {
            mobile: 480,
            tablet: 768,
            desktop: 1024
        }
    },

    // ===== API/PATH SETTINGS =====
    PATHS: {
        quizTemplate: './quiz.html',
        dashboardPage: './dashboard.html',
        loginPage: './login.html',
        indexPage: './index.html'
    },

    // ===== VALIDATION RULES =====
    VALIDATION: {
        minNameLength: 2,
        maxNameLength: 50,
        usernamePattern: /^[a-zA-Z\s'-]+$/,
        emailPattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },

    // ===== CUSTOMIZATION =====
    CUSTOMIZATION: {
        showExplanations: true,          // Show explanation after answer
        showAnswer: true,                // Show correct answer after submission
        allowRetakes: true,              // Allow retaking completed levels
        showTimer: true,                 // Display timer during quiz
        showProgressBar: true,           // Display progress in quiz
        showScoreCard: true              // Show score card after quiz
    }
};

// Export for use in Node.js/module environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

