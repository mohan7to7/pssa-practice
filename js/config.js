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
    // Upgraded: Fixed broken unicode emojis and synced color palettes with new CSS variables
    SUBJECTS: {
        math: {
            name: 'Math',
            icon: '📐',
            color: '#4f46e5', // Indigo Accents
            folder: 'math'
        },
        english: {
            name: 'English',
            icon: '📚',
            color: '#7c3aed', // Purple Accents
            folder: 'english'
        },
        science: {
            name: 'Science',
            icon: '🔬',
            color: '#10b981', // Modern Emerald Success
            folder: 'science'
        },
        social: {
            name: 'Social Studies',
            icon: '🌍',
            color: '#f59e0b', // Modern Amber Warmth
            folder: 'social'
        }
    },
    SUBJECT_CODES: ['math', 'english', 'science', 'social'],

    // ===== CENTRAL DESIGN SYSTEM THEME =====
    // Upgraded: Added global design tokens to programmatically adjust themes across the UI layout
    THEME: {
        colors: {
            primary: '#4f46e5',
            primaryGradient: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
            success: '#10b981',
            successGradient: 'linear-gradient(135deg, #27ae60 0%, #229954 100%)',
            danger: '#ef4444',
            warning: '#f59e0b',
            background: '#f8fafc',
            textMain: '#1e293b',
            textMuted: '#64748b',
            cardBg: '#ffffff',
            borderColor: '#e2e8f0'
        },
        transitions: {
            default: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
            fast: 'all 0.15s ease'
        }
    },

    // ===== QUIZ SETTINGS =====
    LEVELS_PER_SUBJECT: 10,          // Number of levels per subject
    QUESTIONS_PER_LEVEL: 25,         // Number of questions per level
    PASSING_PERCENTAGE: 70,          // Percentage needed to pass a level
    TIMER_DURATION: 60,              // Seconds per question

    // ===== TIMER COLOR THRESHOLDS =====
    // Upgraded: Shifted to modern semantic system states (Emerald, Amber, Rose alert tokens)
    TIMER_COLORS: {
        green: { min: 21, max: 60, color: '#10b981' },      // 21-60 seconds
        orange: { min: 11, max: 20, color: '#f59e0b' },     // 11-20 seconds
        red: { min: 0, max: 10, color: '#ef4444' }          // 0-10 seconds
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