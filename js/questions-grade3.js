// Grade 3 Question Bank
const grade3Questions = {
    math: {
        1: [
            { question: "What is 15 + 25?", answers: [{ text: "35", correct: false }, { text: "40", correct: true }, { text: "45", correct: false }] },
            { question: "What is 50 - 30?", answers: [{ text: "15", correct: false }, { text: "20", correct: true }, { text: "25", correct: false }] },
            { question: "What is 12 × 3?", answers: [{ text: "35", correct: false }, { text: "36", correct: true }, { text: "37", correct: false }] },
            { question: "What is 72 ÷ 8?", answers: [{ text: "8", correct: false }, { text: "9", correct: true }, { text: "10", correct: false }] },
            { question: "What is 28 + 32?", answers: [{ text: "59", correct: false }, { text: "60", correct: true }, { text: "61", correct: false }] }
        ],
        2: [
            { question: "What is 125 + 175?", answers: [{ text: "299", correct: false }, { text: "300", correct: true }, { text: "301", correct: false }] },
            { question: "What is 200 - 75?", answers: [{ text: "124", correct: false }, { text: "125", correct: true }, { text: "126", correct: false }] },
            { question: "What is 24 × 5?", answers: [{ text: "119", correct: false }, { text: "120", correct: true }, { text: "121", correct: false }] },
            { question: "What is 144 ÷ 12?", answers: [{ text: "11", correct: false }, { text: "12", correct: true }, { text: "13", correct: false }] },
            { question: "What is 87 + 113?", answers: [{ text: "199", correct: false }, { text: "200", correct: true }, { text: "201", correct: false }] }
        ]
    },
    english: {
        1: [
            { question: "What is a verb?", answers: [{ text: "An action word", correct: true }, { text: "A naming word", correct: false }, { text: "A color", correct: false }] },
            { question: "Which is a sentence fragment?", answers: [{ text: "Running fast.", correct: true }, { text: "The dog barks.", correct: false }, { text: "She runs.", correct: false }] },
            { question: "What is a noun?", answers: [{ text: "A naming word", correct: true }, { text: "An action word", correct: false }, { text: "A describing word", correct: false }] },
            { question: "What is an adjective?", answers: [{ text: "A word that describes", correct: true }, { text: "An action word", correct: false }, { text: "A naming word", correct: false }] },
            { question: "What is a subject?", answers: [{ text: "Who or what the sentence is about", correct: true }, { text: "A topic in school", correct: false }, { text: "A theme", correct: false }] }
        ],
        2: [
            { question: "What is the main idea?", answers: [{ text: "The most important point", correct: true }, { text: "A detail", correct: false }, { text: "A supporting sentence", correct: false }] },
            { question: "What are supporting details?", answers: [{ text: "Information that supports the main idea", correct: true }, { text: "The title", correct: false }, { text: "The conclusion", correct: false }] },
            { question: "What is a topic sentence?", answers: [{ text: "The sentence that states the main idea", correct: true }, { text: "The last sentence", correct: false }, { text: "Any sentence in the paragraph", correct: false }] },
            { question: "What is a paragraph?", answers: [{ text: "A group of sentences about one topic", correct: true }, { text: "A single sentence", correct: false }, { text: "A page", correct: false }] },
            { question: "What is a conclusion?", answers: [{ text: "The final thought or summary", correct: true }, { text: "The beginning", correct: false }, { text: "A supporting detail", correct: false }] }
        ]
    },
    social: {
        1: [
            { question: "What are the 50 states divided into?", answers: [{ text: "Counties", correct: true }, { text: "Cities", correct: false }, { text: "Towns", correct: false }] },
            { question: "What is a map?", answers: [{ text: "A drawing of an area", correct: true }, { text: "A type of food", correct: false }, { text: "A tool", correct: false }] },
            { question: "What is a compass rose?", answers: [{ text: "Shows directions on a map", correct: true }, { text: "A flower", correct: false }, { text: "A decoration", correct: false }] },
            { question: "What direction is between north and east?", answers: [{ text: "Northeast", correct: true }, { text: "Southwest", correct: false }, { text: "Northwest", correct: false }] },
            { question: "What is a legend on a map?", answers: [{ text: "Explains map symbols", correct: true }, { text: "A story", correct: false }, { text: "A historical figure", correct: false }] }
        ],
        2: [
            { question: "What is a need?", answers: [{ text: "Something we must have to survive", correct: true }, { text: "Something we want", correct: false }, { text: "A luxury", correct: false }] },
            { question: "What is a want?", answers: [{ text: "Something we desire but don't need", correct: true }, { text: "Something we need", correct: false }, { text: "A requirement", correct: false }] },
            { question: "What is an economy?", answers: [{ text: "System of money and jobs", correct: true }, { text: "A type of government", correct: false }, { text: "A business only", correct: false }] },
            { question: "What is supply and demand?", answers: [{ text: "How much is available vs. wanted", correct: true }, { text: "Types of stores", correct: false }, { text: "Government control", correct: false }] },
            { question: "What is a producer?", answers: [{ text: "Someone who makes goods", correct: true }, { text: "Someone who sells", correct: false }, { text: "A consumer", correct: false }] }
        ]
    },
    science: {
        1: [
            { question: "What are the three states of matter?", answers: [{ text: "Solid, Liquid, Gas", correct: true }, { text: "Hot, Cold, Warm", correct: false }, { text: "Big, Small, Tiny", correct: false }] },
            { question: "What is density?", answers: [{ text: "How much mass in a certain volume", correct: true }, { text: "Weight only", correct: false }, { text: "Size only", correct: false }] },
            { question: "What is gravity?", answers: [{ text: "Force that pulls objects down", correct: true }, { text: "Wind", correct: false }, { text: "Heat", correct: false }] },
            { question: "What is friction?", answers: [{ text: "Force that resists motion", correct: true }, { text: "A type of energy", correct: false }, { text: "Movement", correct: false }] },
            { question: "What are simple machines?", answers: [{ text: "Tools that make work easier", correct: true }, { text: "Computers", correct: false }, { text: "Motors only", correct: false }] }
        ],
        2: [
            { question: "What is the water cycle?", answers: [{ text: "Evaporation, Condensation, Precipitation", correct: true }, { text: "Freezing only", correct: false }, { text: "Melting only", correct: false }] },
            { question: "What is evaporation?", answers: [{ text: "Water turning into vapor", correct: true }, { text: "Freezing water", correct: false }, { text: "Boiling water", correct: false }] },
            { question: "What is condensation?", answers: [{ text: "Vapor turning into liquid", correct: true }, { text: "Liquid becoming solid", correct: false }, { text: "Freezing", correct: false }] },
            { question: "What is precipitation?", answers: [{ text: "Water falling from clouds", correct: true }, { text: "Water evaporating", correct: false }, { text: "Cloud formation", correct: false }] },
            { question: "What is an ecosystem?", answers: [{ text: "Community of organisms and their environment", correct: true }, { text: "Only animals", correct: false }, { text: "Only plants", correct: false }] }
        ]
    }
};

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { grade3Questions };
}

// Export for browser
if (typeof window !== 'undefined') {
    window.grade3Questions = grade3Questions;
}