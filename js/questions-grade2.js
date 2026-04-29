// Grade 2 Question Bank
const grade2Questions = {
    math: {
        1: [
            { question: "What is 25 + 15?", answers: [{ text: "39", correct: false }, { text: "40", correct: true }, { text: "41", correct: false }] },
            { question: "What is 30 - 12?", answers: [{ text: "17", correct: false }, { text: "18", correct: true }, { text: "19", correct: false }] },
            { question: "What is 6 × 3?", answers: [{ text: "17", correct: false }, { text: "18", correct: true }, { text: "19", correct: false }] },
            { question: "What is 20 ÷ 4?", answers: [{ text: "4", correct: false }, { text: "5", correct: true }, { text: "6", correct: false }] },
            { question: "What is 45 + 35?", answers: [{ text: "79", correct: false }, { text: "80", correct: true }, { text: "81", correct: false }] }
        ],
        2: [
            { question: "What is 50 + 50?", answers: [{ text: "99", correct: false }, { text: "100", correct: true }, { text: "101", correct: false }] },
            { question: "What is 100 - 25?", answers: [{ text: "74", correct: false }, { text: "75", correct: true }, { text: "76", correct: false }] },
            { question: "What is 7 × 7?", answers: [{ text: "48", correct: false }, { text: "49", correct: true }, { text: "50", correct: false }] },
            { question: "What is 36 ÷ 6?", answers: [{ text: "5", correct: false }, { text: "6", correct: true }, { text: "7", correct: false }] },
            { question: "What is 88 + 12?", answers: [{ text: "99", correct: false }, { text: "100", correct: true }, { text: "101", correct: false }] }
        ]
    },
    english: {
        1: [
            { question: "What is a noun?", answers: [{ text: "A person, place, or thing", correct: true }, { text: "An action", correct: false }, { text: "A description", correct: false }] },
            { question: "What is a verb?", answers: [{ text: "An action word", correct: true }, { text: "A naming word", correct: false }, { text: "A describing word", correct: false }] },
            { question: "What is an adjective?", answers: [{ text: "A describing word", correct: true }, { text: "An action word", correct: false }, { text: "A naming word", correct: false }] },
            { question: "What is a compound word?", answers: [{ text: "Two words joined", correct: true }, { text: "A long word", correct: false }, { text: "A short word", correct: false }] },
            { question: "What is a contraction?", answers: [{ text: "Two words combined", correct: true }, { text: "A sentence", correct: false }, { text: "A paragraph", correct: false }] }
        ],
        2: [
            { question: "What is the main idea?", answers: [{ text: "What a story is about", correct: true }, { text: "A detail", correct: false }, { text: "The ending", correct: false }] },
            { question: "What are details?", answers: [{ text: "Extra information", correct: true }, { text: "The main idea", correct: false }, { text: "The title", correct: false }] },
            { question: "What is a paragraph?", answers: [{ text: "Group of sentences", correct: true }, { text: "A single sentence", correct: false }, { text: "A word", correct: false }] },
            { question: "What is a story problem?", answers: [{ text: "A math story", correct: true }, { text: "A book", correct: false }, { text: "A picture", correct: false }] },
            { question: "What is sequence?", answers: [{ text: "Order of events", correct: true }, { text: "A type of word", correct: false }, { text: "A type of sentence", correct: false }] }
        ]
    },
    social: {
        1: [
            { question: "What is a map key?", answers: [{ text: "Explains map symbols", correct: true }, { text: "The map title", correct: false }, { text: "The map border", correct: false }] },
            { question: "What is a compass rose?", answers: [{ text: "Shows directions", correct: true }, { text: "A flower", correct: false }, { text: "A type of map", correct: false }] },
            { question: "What is a globe?", answers: [{ text: "Model of Earth", correct: true }, { text: "A map", correct: false }, { text: "A star", correct: false }] },
            { question: "What is a continent?", answers: [{ text: "Large area of land", correct: true }, { text: "A country", correct: false }, { text: "A city", correct: false }] },
            { question: "What is an ocean?", answers: [{ text: "Large body of water", correct: true }, { text: "A lake", correct: false }, { text: "A river", correct: false }] }
        ],
        2: [
            { question: "What is a citizen?", answers: [{ text: "Member of a country", correct: true }, { text: "A visitor", correct: false }, { text: "A tourist", correct: false }] },
            { question: "What is a responsibility?", answers: [{ text: "A duty to do", correct: true }, { text: "A right", correct: false }, { text: "A choice", correct: false }] },
            { question: "What is a right?", answers: [{ text: "A freedom we have", correct: true }, { text: "A duty", correct: false }, { text: "A rule", correct: false }] },
            { question: "What is a community helper?", answers: [{ text: "Someone who helps others", correct: true }, { text: "A student", correct: false }, { text: "A parent", correct: false }] },
            { question: "What is a good citizen?", answers: [{ text: "Follows rules and helps", correct: true }, { text: "Breaks rules", correct: false }, { text: "Only looks out for self", correct: false }] }
        ]
    },
    science: {
        1: [
            { question: "What are the three states of matter?", answers: [{ text: "Solid, Liquid, Gas", correct: true }, { text: "Hot, Cold, Warm", correct: false }, { text: "Big, Small, Tiny", correct: false }] },
            { question: "What is a solid?", answers: [{ text: "Has definite shape", correct: true }, { text: "Takes container shape", correct: false }, { text: "Fills entire space", correct: false }] },
            { question: "What is a liquid?", answers: [{ text: "Takes container shape", correct: true }, { text: "Has definite shape", correct: false }, { text: "Fills entire space", correct: false }] },
            { question: "What is a gas?", answers: [{ text: "Fills entire space", correct: true }, { text: "Has definite shape", correct: false }, { text: "Takes container shape", correct: false }] },
            { question: "What is energy?", answers: [{ text: "Ability to do work", correct: true }, { text: "A type of matter", correct: false }, { text: "A type of rock", correct: false }] }
        ],
        2: [
            { question: "What is the water cycle?", answers: [{ text: "Evaporation, Condensation, Precipitation", correct: true }, { text: "Freezing and melting", correct: false }, { text: "Only evaporation", correct: false }] },
            { question: "What is evaporation?", answers: [{ text: "Liquid to gas", correct: true }, { text: "Gas to liquid", correct: false }, { text: "Liquid to solid", correct: false }] },
            { question: "What is condensation?", answers: [{ text: "Gas to liquid", correct: true }, { text: "Liquid to gas", correct: false }, { text: "Liquid to solid", correct: false }] },
            { question: "What is precipitation?", answers: [{ text: "Water falling", correct: true }, { text: "Water evaporating", correct: false }, { text: "Water boiling", correct: false }] },
            { question: "What is a life cycle?", answers: [{ text: "Stages of life", correct: true }, { text: "A type of wheel", correct: false }, { text: "A circle", correct: false }] }
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