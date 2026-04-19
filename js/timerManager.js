// Timer Manager - Reusable timer functionality for all quizzes
const timerManager = {
    state: {
        timer: null,
        timeLeft: 60,
        isRunning: false,
        onTimeUp: null
    },

    // Initialize timer with callback
    init: function(onTimeUpCallback) {
        this.state.onTimeUp = onTimeUpCallback;
    },

    // Start the timer
    start: function(duration = 60) {
        this.state.timeLeft = duration;
        this.state.isRunning = true;
        this.updateDisplay();

        this.state.timer = setInterval(() => {
            this.state.timeLeft--;
            this.updateDisplay();

            if (this.state.timeLeft <= 0) {
                this.stop();
                if (this.state.onTimeUp) {
                    this.state.onTimeUp();
                }
            }
        }, 1000);
    },

    // Stop the timer
    stop: function() {
        if (this.state.timer) {
            clearInterval(this.state.timer);
            this.state.timer = null;
            this.state.isRunning = false;
        }
    },

    // Update the timer display
    updateDisplay: function() {
        const timerElement = document.getElementById('timer');
        if (!timerElement) return;

        timerElement.textContent = this.state.timeLeft;
        timerElement.classList.remove('warning', 'danger');

        // Add visual feedback based on time remaining
        if (this.state.timeLeft <= 10) {
            timerElement.classList.add('danger');
        } else if (this.state.timeLeft <= 20) {
            timerElement.classList.add('warning');
        }
    },

    // Reset the timer
    reset: function() {
        this.stop();
        this.state.timeLeft = 60;
        this.state.isRunning = false;
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            timerElement.textContent = '60';
            timerElement.classList.remove('warning', 'danger');
        }
    },

    // Get remaining time
    getTimeLeft: function() {
        return this.state.timeLeft;
    },

    // Check if timer is running
    isRunning: function() {
        return this.state.isRunning;
    }
};