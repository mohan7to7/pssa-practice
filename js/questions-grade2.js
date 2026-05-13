// Grade 2 Question Bank
const grade2Questions = {
    math: {
        1: [
            { question: "What is 25 + 15?", answers: [{ text: "39", correct: false }, { text: "40", correct: true }, { text: "41", correct: false }] },
            { question: "What is 30 - 12?", answers: [{ text: "17", correct: false }, { text: "18", correct: true }, { text: "19", correct: false }] },
            { question: "What is 6 × 3?", answers: [{ text: "17", correct: false }, { text: "18", correct: true }, { text: "19", correct: false }] },
            { question: "What is 20 ÷ 4?", answers: [{ text: "4", correct: false }, { text: "5", correct: true }, { text: "6", correct: false }] },
            { question: "What is 45 + 35?", answers: [{ text: "79", correct: false }, { text: "80", correct: true }, { text: "81", correct: false }] }
        ]
    },
    english: {
        1: [
            { question: "What is a noun?", answers: [{ text: "A person, place, or thing", correct: true }, { text: "An action", correct: false }, { text: "A description", correct: false }] },
            { question: "What is a verb?", answers: [{ text: "An action word", correct: true }, { text: "A naming word", correct: false }, { text: "A describing word", correct: false }] },
            { question: "What is an adjective?", answers: [{ text: "A describing word", correct: true }, { text: "An action word", correct: false }, { text: "A naming word", correct: false }] },
            { question: "What is a compound word?", answers: [{ text: "Two words joined", correct: true }, { text: "A long word", correct: false }, { text: "A short word", correct: false }] },
            { question: "What is a contraction?", answers: [{ text: "Two words combined", correct: true }, { text: "A sentence", correct: false }, { text: "A paragraph", correct: false }] }
        ]
    },
    social: {
        1: [
            { question: "What is a map key?", answers: [{ text: "Explains map symbols", correct: true }, { text: "The map title", correct: false }, { text: "The map border", correct: false }] },
            { question: "What is a compass rose?", answers: [{ text: "Shows directions", correct: true }, { text: "A flower", correct: false }, { text: "A type of map", correct: false }] },
            { question: "What is a globe?", answers: [{ text: "Model of Earth", correct: true }, { text: "A map", correct: false }, { text: "A star", correct: false }] },
            { question: "What is a continent?", answers: [{ text: "Large area of land", correct: true }, { text: "A country", correct: false }, { text: "A city", correct: false }] },
            { question: "What is an ocean?", answers: [{ text: "Large body of water", correct: true }, { text: "A lake", correct: false }, { text: "A river", correct: false }] }
        ]
    },
    science: {
        1: [
            { question: "What are the three states of matter?", answers: [{ text: "Solid, Liquid, Gas", correct: true }, { text: "Hot, Cold, Warm", correct: false }, { text: "Big, Small, Tiny", correct: false }] },
            { question: "What is a solid?", answers: [{ text: "Has definite shape", correct: true }, { text: "Takes container shape", correct: false }, { text: "Fills entire space", correct: false }] },
            { question: "What is a liquid?", answers: [{ text: "Takes container shape", correct: true }, { text: "Has definite shape", correct: false }, { text: "Fills entire space", correct: false }] },
            { question: "What is a gas?", answers: [{ text: "Fills entire space", correct: true }, { text: "Has definite shape", correct: false }, { text: "Takes container shape", correct: false }] },
            { question: "What is energy?", answers: [{ text: "Ability to do work", correct: true }, { text: "A type of matter", correct: false }, { text: "A type of rock", correct: false }] }
        ]
    }
};

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { grade2Questions };
}

// Export for browser
if (typeof window !== 'undefined') {
    window.grade2Questions = grade2Questions;
}