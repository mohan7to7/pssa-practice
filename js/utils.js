/**
 * PSSA Practice Hub - Utility Functions
 * Shared utility functions used across the application
 * Helps maintain DRY principle and code reusability
 */

const Utils = {

    // ===== DOM UTILITIES =====

    /**
     * Safely get element by ID
     * @param {string} elementId - The element ID to find
     * @returns {Element|null} The element or null
     */
    getElementById: function(elementId) {
        return document.getElementById(elementId) || null;
    },

    /**
     * Safe class addition to element
     * @param {string} elementId - The element ID
     * @param {string} className - The class to add
     */
    addClass: function(elementId, className) {
        const element = this.getElementById(elementId);
        if (element) element.classList.add(className);
    },

    /**
     * Safe class removal from element
     * @param {string} elementId - The element ID
     * @param {string} className - The class to remove
     */
    removeClass: function(elementId, className) {
        const element = this.getElementById(elementId);
        if (element) element.classList.remove(className);
    },

    /**
     * Toggle class on element
     * @param {string} elementId - The element ID
     * @param {string} className - The class to toggle
     */
    toggleClass: function(elementId, className) {
        const element = this.getElementById(elementId);
        if (element) element.classList.toggle(className);
    },

    // ===== STORAGE UTILITIES =====

    /**
     * Save data to localStorage with error handling
     * @param {string} key - The storage key
     * @param {*} value - The value to store
     * @returns {boolean} Success status
     */
    saveToStorage: function(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error(`Error saving to localStorage: ${key}`, error);
            return false;
        }
    },

    /**
     * Retrieve data from localStorage with error handling
     * @param {string} key - The storage key
     * @param {*} defaultValue - Default value if key not found
     * @returns {*} The stored value or default
     */
    getFromStorage: function(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error(`Error reading from localStorage: ${key}`, error);
            return defaultValue;
        }
    },

    /**
     * Remove item from localStorage
     * @param {string} key - The storage key
     */
    removeFromStorage: function(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error(`Error removing from localStorage: ${key}`, error);
        }
    },

    /**
     * Clear all localStorage items
     */
    clearStorage: function() {
        try {
            localStorage.clear();
        } catch (error) {
            console.error('Error clearing localStorage', error);
        }
    },

    // ===== VALIDATION UTILITIES =====

    /**
     * Validate username
     * @param {string} name - Username to validate
     * @returns {object} Validation result {isValid: boolean, message: string}
     */
    validateUsername: function(name) {
        if (!name || name.trim() === '') {
            return { isValid: false, message: 'Name is required' };
        }
        if (name.length < CONFIG.VALIDATION.minNameLength) {
            return { isValid: false, message: `Name must be at least ${CONFIG.VALIDATION.minNameLength} characters` };
        }
        if (name.length > CONFIG.VALIDATION.maxNameLength) {
            return { isValid: false, message: `Name must be less than ${CONFIG.VALIDATION.maxNameLength} characters` };
        }
        if (!CONFIG.VALIDATION.usernamePattern.test(name)) {
            return { isValid: false, message: 'Name contains invalid characters' };
        }
        return { isValid: true, message: 'Valid' };
    },

    /**
     * Validate email format
     * @param {string} email - Email to validate
     * @returns {boolean} Is valid email
     */
    validateEmail: function(email) {
        return CONFIG.VALIDATION.emailPattern.test(email);
    },

    /**
     * Check if grade is valid
     * @param {string} grade - Grade to validate
     * @returns {boolean} Is valid grade
     */
    isValidGrade: function(grade) {
        return CONFIG.GRADE_CODES.includes(grade.toString());
    },

    /**
     * Check if subject is valid
     * @param {string} subject - Subject to validate
     * @returns {boolean} Is valid subject
     */
    isValidSubject: function(subject) {
        return CONFIG.SUBJECT_CODES.includes(subject);
    },

    // ===== NOTIFICATION UTILITIES =====

    /**
     * Show notification/toast message
     * @param {string} message - Message to display
     * @param {string} type - 'success', 'error', 'info', 'warning'
     * @param {number} duration - Duration in milliseconds
     */
    showNotification: function(message, type = 'info', duration = CONFIG.UI.toastDuration) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 5px;
            z-index: 10000;
            font-weight: bold;
            animation: slideIn 0.3s ease;
            background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : type === 'warning' ? '#f39c12' : '#3498db'};
            color: white;
        `;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, duration);
    },

    /**
     * Show alert dialog
     * @param {string} title - Dialog title
     * @param {string} message - Dialog message
     * @param {string} type - 'info', 'warning', 'error', 'success'
     */
    showAlert: function(title, message, type = 'info') {
        alert(`${title}\n\n${message}`);
    },

    // ===== STRING UTILITIES =====

    /**
     * Capitalize first letter of string
     * @param {string} str - String to capitalize
     * @returns {string} Capitalized string
     */
    capitalize: function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    /**
     * Format percentage with decimals
     * @param {number} value - Percentage value
     * @param {number} decimals - Number of decimal places
     * @returns {string} Formatted percentage
     */
    formatPercentage: function(value, decimals = 1) {
        return parseFloat(value).toFixed(decimals) + '%';
    },

    /**
     * Format date to readable format
     * @param {string|Date} date - Date to format
     * @returns {string} Formatted date
     */
    formatDate: function(date) {
        const d = new Date(date);
        return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
    },

    /**
     * Format timestamp to relative time (e.g., "2 hours ago")
     * @param {string|Date} date - Date to format
     * @returns {string} Relative time string
     */
    formatRelativeTime: function(date) {
        const d = new Date(date);
        const now = new Date();
        const seconds = Math.floor((now - d) / 1000);

        if (seconds < 60) return 'just now';
        if (seconds < 3600) return Math.floor(seconds / 60) + ' minutes ago';
        if (seconds < 86400) return Math.floor(seconds / 3600) + ' hours ago';
        if (seconds < 2592000) return Math.floor(seconds / 86400) + ' days ago';
        return d.toLocaleDateString();
    },

    // ===== CALCULATION UTILITIES =====

    /**
     * Calculate percentage
     * @param {number} obtained - Obtained value
     * @param {number} total - Total value
     * @returns {number} Percentage
     */
    calculatePercentage: function(obtained, total) {
        return total === 0 ? 0 : Math.round((obtained / total) * 100);
    },

    /**
     * Calculate average
     * @param {number[]} values - Array of values
     * @returns {number} Average
     */
    calculateAverage: function(values) {
        return values.length === 0 ? 0 : Math.round(values.reduce((a, b) => a + b, 0) / values.length);
    },

    /**
     * Check if user has passed (meets minimum percentage)
     * @param {number} score - Score percentage
     * @returns {boolean} Has passed
     */
    hasPassed: function(score) {
        return score >= CONFIG.PASSING_PERCENTAGE;
    },

    // ===== ARRAY UTILITIES =====

    /**
     * Shuffle array randomly
     * @param {Array} array - Array to shuffle
     * @returns {Array} Shuffled array
     */
    shuffleArray: function(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    },

    /**
     * Get random element from array
     * @param {Array} array - Array to select from
     * @returns {*} Random element
     */
    getRandomElement: function(array) {
        return array[Math.floor(Math.random() * array.length)];
    },

    /**
     * Remove duplicates from array
     * @param {Array} array - Array to clean
     * @returns {Array} Array without duplicates
     */
    removeDuplicates: function(array) {
        return [...new Set(array)];
    },

    // ===== DEBUG UTILITIES =====

    /**
     * Log message with timestamp
     * @param {string} message - Message to log
     * @param {*} data - Optional data to log
     */
    log: function(message, data = null) {
        const timestamp = new Date().toLocaleTimeString();
        if (data) {
            console.log(`[${timestamp}] ${message}`, data);
        } else {
            console.log(`[${timestamp}] ${message}`);
        }
    },

    /**
     * Log error with timestamp
     * @param {string} message - Error message
     * @param {Error} error - Error object
     */
    logError: function(message, error = null) {
        const timestamp = new Date().toLocaleTimeString();
        console.error(`[${timestamp}] ERROR: ${message}`, error);
    }
};

// Export for use in Node.js/module environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Utils;
}

