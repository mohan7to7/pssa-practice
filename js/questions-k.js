// Kindergarten Question Bank
const gradeKQuestions = {
    math: {
        1: [
            { question: "How many dots? ●●●", answers: [{ text: "2", correct: false }, { text: "3", correct: true }, { text: "4", correct: false }] },
            { question: "Which bigger? 🐘 or 🐁", answers: [{ text: "🐁", correct: false }, { text: "🐘", correct: true }] },
            { question: "Count: 🍎🍎🍎🍎", answers: [{ text: "3", correct: false }, { text: "4", correct: true }, { text: "5", correct: false }] },
            { question: "After 7 comes?", answers: [{ text: "6", correct: false }, { text: "8", correct: true }, { text: "9", correct: false }] },
            { question: "Fingers on one hand?", answers: [{ text: "4", correct: false }, { text: "5", correct: true }, { text: "6", correct: false }] }
        ],
        2: [
            { question: "2 + 1 = ?", answers: [{ text: "2", correct: false }, { text: "3", correct: true }, { text: "4", correct: false }] },
            { question: "3 - 1 = ?", answers: [{ text: "1", correct: false }, { text: "2", correct: true }, { text: "3", correct: false }] },
            { question: "Which is smaller: 3 or 1?", answers: [{ text: "3", correct: false }, { text: "1", correct: true }, { text: "2", correct: false }] },
            { question: "Count: ⭐⭐", answers: [{ text: "1", correct: false }, { text: "2", correct: true }, { text: "3", correct: false }] },
            { question: "What is 5 - 2?", answers: [{ text: "2", correct: false }, { text: "3", correct: true }, { text: "4", correct: false }] }
        ]
    },
    english: {
        1: [
            { question: "What is a noun?", answers: [{ text: "A naming word", correct: true }, { text: "An action word", correct: false }, { text: "A color", correct: false }] },
            { question: "What is a verb?", answers: [{ text: "An action word", correct: true }, { text: "A naming word", correct: false }, { text: "A describing word", correct: false }] },
            { question: "What is an adjective?", answers: [{ text: "A describing word", correct: true }, { text: "An action word", correct: false }, { text: "A naming word", correct: false }] },
            { question: "What is a sentence?", answers: [{ text: "Words that make sense", correct: true }, { text: "A single letter", correct: false }, { text: "A number", correct: false }] },
            { question: "What is a word?", answers: [{ text: "A group of letters", correct: true }, { text: "A number", correct: false }, { text: "A picture", correct: false }] }
        ],
        2: [
            { question: "What rhymes with cat?", answers: [{ text: "Hat", correct: true }, { text: "Dog", correct: false }, { text: "Sun", correct: false }] },
            { question: "What is the opposite of big?", answers: [{ text: "Small", correct: true }, { text: "Tall", correct: false }, { text: "Red", correct: false }] },
            { question: "How many letters in 'cat'?", answers: [{ text: "2", correct: false }, { text: "3", correct: true }, { text: "4", correct: false }] },
            { question: "What is a capital letter?", answers: [{ text: "Big letter at start", correct: true }, { text: "A number", correct: false }, { text: "A small letter", correct: false }] },
            { question: "What is a period?", answers: [{ text: "A punctuation mark", correct: true }, { text: "A letter", correct: false }, { text: "A word", correct: false }] }
        ]
    },
    social: {
        1: [
            { question: "What is a family?", answers: [{ text: "People who love each other", correct: true }, { text: "A school", correct: false }, { text: "A park", correct: false }] },
            { question: "What is a home?", answers: [{ text: "Where we live", correct: true }, { text: "A store", correct: false }, { text: "A hospital", correct: false }] },
            { question: "Who is a teacher?", answers: [{ text: "Someone who helps us learn", correct: true }, { text: "A doctor", correct: false }, { text: "A firefighter", correct: false }] },
            { question: "What is a school?", answers: [{ text: "A place to learn", correct: true }, { text: "A playground", correct: false }, { text: "A store", correct: false }] },
            { question: "What is a friend?", answers: [{ text: "Someone we play with", correct: true }, { text: "A stranger", correct: false }, { text: "A teacher", correct: false }] }
        ],
        2: [
            { question: "What is a rule?", answers: [{ text: "Something to follow", correct: true }, { text: "A game", correct: false }, { text: "A toy", correct: false }] },
            { question: "What is sharing?", answers: [{ text: "Giving to others", correct: true }, { text: "Keeping things", correct: false }, { text: "Running away", correct: false }] },
            { question: "What is being kind?", answers: [{ text: "Being nice to others", correct: true }, { text: "Being loud", correct: false }, { text: "Being first", correct: false }] },
            { question: "What is a community?", answers: [{ text: "People living together", correct: true }, { text: "One person", correct: false }, { text: "A pet", correct: false }] },
            { question: "What is a helper?", answers: [{ text: "Someone who helps", correct: true }, { text: "Someone who watches", correct: false }, { text: "Someone who sleeps", correct: false }] }
        ]
    },
    science: {
        1: [
            { question: "What is a plant?", answers: [{ text: "Something that grows from soil", correct: true }, { text: "A rock", correct: false }, { text: "A cloud", correct: false }] },
            { question: "What do plants need?", answers: [{ text: "Water and sun", correct: true }, { text: "Only sun", correct: false }, { text: "Only water", correct: false }] },
            { question: "What is an animal?", answers: [{ text: "A living thing that moves", correct: true }, { text: "A rock", correct: false }, { text: "A tree", correct: false }] },
            { question: "What is the sun?", answers: [{ text: "A bright light in the sky", correct: true }, { text: "A cloud", correct: false }, { text: "The moon", correct: false }] },
            { question: "What is water?", answers: [{ text: "A clear liquid", correct: true }, { text: "A solid", correct: false }, { text: "A gas", correct: false }] }
        ],
        2: [
            { question: "What is the sky?", answers: [{ text: "The space above us", correct: true }, { text: "The ground", correct: false }, { text: "A building", correct: false }] },
            { question: "What is a cloud?", answers: [{ text: "Water in the sky", correct: true }, { text: "A star", correct: false }, { text: "A rock", correct: false }] },
            { question: "What makes weather?", answers: [{ text: "Sun, clouds, rain", correct: true }, { text: "Only sun", correct: false }, { text: "Only rain", correct: false }] },
            { question: "What is day?", answers: [{ text: "When the sun is out", correct: true }, { text: "When the moon is out", correct: false }, { text: "When we sleep", correct: false }] },
            { question: "What is night?", answers: [{ text: "When the moon is out", correct: true }, { text: "When the sun is out", correct: false }, { text: "When we play", correct: false }] }
        ]
    }
};

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { gradeKQuestions };
}

// Export for browser
if (typeof window !== 'undefined') {
    window.gradeKQuestions = gradeKQuestions;
}