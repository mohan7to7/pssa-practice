// Grade 4 Question Bank
const grade4Questions = {
    math: {
        1: [
            { question: "What is 234 + 156?", answers: [{ text: "389", correct: false }, { text: "390", correct: true }, { text: "391", correct: false }] },
            { question: "What is 500 - 234?", answers: [{ text: "265", correct: false }, { text: "266", correct: true }, { text: "267", correct: false }] },
            { question: "What is 12 × 12?", answers: [{ text: "143", correct: false }, { text: "144", correct: true }, { text: "145", correct: false }] },
            { question: "What is 96 ÷ 8?", answers: [{ text: "11", correct: false }, { text: "12", correct: true }, { text: "13", correct: false }] },
            { question: "What is 345 + 455?", answers: [{ text: "799", correct: false }, { text: "800", correct: true }, { text: "801", correct: false }] }
        ],
        2: [
            { question: "What is 1/2 + 1/4?", answers: [{ text: "1/2", correct: false }, { text: "3/4", correct: true }, { text: "1", correct: false }] },
            { question: "What is 3/4 - 1/2?", answers: [{ text: "1/4", correct: true }, { text: "1/2", correct: false }, { text: "1", correct: false }] },
            { question: "What is 2/3 × 3/4?", answers: [{ text: "1/2", correct: true }, { text: "1", correct: false }, { text: "2/7", correct: false }] },
            { question: "What is 1/2 ÷ 1/4?", answers: [{ text: "2", correct: true }, { text: "1/2", correct: false }, { text: "4", correct: false }] },
            { question: "What is the decimal for 1/4?", answers: [{ text: "0.25", correct: true }, { text: "0.5", correct: false }, { text: "0.75", correct: false }] }
        ]
    },
    english: {
        1: [
            { question: "What is a preposition?", answers: [{ text: "A word showing location or time", correct: true }, { text: "An action word", correct: false }, { text: "A describing word", correct: false }] },
            { question: "What is a conjunction?", answers: [{ text: "A word that connects", correct: true }, { text: "A describing word", correct: false }, { text: "An action word", correct: false }] },
            { question: "What are common conjunctions?", answers: [{ text: "and, but, or", correct: true }, { text: "the, a, an", correct: false }, { text: "in, on, at", correct: false }] },
            { question: "What is a pronoun?", answers: [{ text: "A word that replaces a noun", correct: true }, { text: "A naming word", correct: false }, { text: "An action word", correct: false }] },
            { question: "What are common pronouns?", answers: [{ text: "he, she, it, they", correct: true }, { text: "run, walk, jump", correct: false }, { text: "happy, sad, big", correct: false }] }
        ],
        2: [
            { question: "What is a complex sentence?", answers: [{ text: "A sentence with independent and dependent clauses", correct: true }, { text: "A short sentence", correct: false }, { text: "A sentence with many words", correct: false }] },
            { question: "What is a topic sentence?", answers: [{ text: "The sentence that states the main idea", correct: true }, { text: "The last sentence", correct: false }, { text: "Any sentence", correct: false }] },
            { question: "What are supporting details?", answers: [{ text: "Information that supports the main idea", correct: true }, { text: "The conclusion", correct: false }, { text: "The title", correct: false }] },
            { question: "What is a conclusion?", answers: [{ text: "The final thought or summary", correct: true }, { text: "The beginning", correct: false }, { text: "The middle", correct: false }] },
            { question: "What is an outline?", answers: [{ text: "A plan for writing", correct: true }, { text: "A final draft", correct: false }, { text: "A rough sketch", correct: false }] }
        ]
    },
    social: {
        1: [
            { question: "What is a democracy?", answers: [{ text: "A government of the people", correct: true }, { text: "A type of weather", correct: false }, { text: "A type of business", correct: false }] },
            { question: "What are checks and balances?", answers: [{ text: "A system that keeps one branch from having too much power", correct: true }, { text: "Banking concepts", correct: false }, { text: "A military system", correct: false }] },
            { question: "What are the three branches of government?", answers: [{ text: "Legislative, Executive, Judicial", correct: true }, { text: "Army, Navy, Air Force", correct: false }, { text: "State, Federal, Local", correct: false }] },
            { question: "What does the legislative branch do?", answers: [{ text: "Makes laws", correct: true }, { text: "Enforces laws", correct: false }, { text: "Interprets laws", correct: false }] },
            { question: "What does the executive branch do?", answers: [{ text: "Enforces laws", correct: true }, { text: "Makes laws", correct: false }, { text: "Interprets laws", correct: false }] }
        ],
        2: [
            { question: "What are continents?", answers: [{ text: "The seven large areas of land", correct: true }, { text: "Countries", correct: false }, { text: "States", correct: false }] },
            { question: "What is a prime meridian?", answers: [{ text: "The line at 0 degrees longitude", correct: true }, { text: "The equator", correct: false }, { text: "A mountain range", correct: false }] },
            { question: "What is the equator?", answers: [{ text: "An imaginary line dividing Earth into North and South", correct: true }, { text: "A continent", correct: false }, { text: "A country", correct: false }] },
            { question: "What are latitude lines?", answers: [{ text: "Lines running east and west", correct: true }, { text: "Lines running north and south", correct: false }, { text: "Mountain ranges", correct: false }] },
            { question: "What are longitude lines?", answers: [{ text: "Lines running north and south", correct: true }, { text: "Lines running east and west", correct: false }, { text: "Equator lines", correct: false }] }
        ]
    },
    science: {
        1: [
            { question: "What is the scientific method?", answers: [{ text: "Steps for testing ideas", correct: true }, { text: "A type of science", correct: false }, { text: "A laboratory tool", correct: false }] },
            { question: "What is an ecosystem?", answers: [{ text: "Community of organisms and their environment", correct: true }, { text: "Only animals", correct: false }, { text: "Only plants", correct: false }] },
            { question: "What is a food web?", answers: [{ text: "Multiple food chains connected", correct: true }, { text: "A single food chain", correct: false }, { text: "Animals eating plants", correct: false }] },
            { question: "What are decomposers?", answers: [{ text: "Organisms that break down dead material", correct: true }, { text: "Producers", correct: false }, { text: "Consumers", correct: false }] },
            { question: "What is biodiversity?", answers: [{ text: "Variety of life in an ecosystem", correct: true }, { text: "Same species", correct: false }, { text: "One type of organism", correct: false }] }
        ],
        2: [
            { question: "What are the planets?", answers: [{ text: "8 bodies orbiting the sun", correct: true }, { text: "9 bodies", correct: false }, { text: "7 bodies", correct: false }] },
            { question: "What is the largest planet?", answers: [{ text: "Jupiter", correct: true }, { text: "Saturn", correct: false }, { text: "Neptune", correct: false }] },
            { question: "What is the closest planet to the sun?", answers: [{ text: "Mercury", correct: true }, { text: "Venus", correct: false }, { text: "Earth", correct: false }] },
            { question: "What is the water cycle?", answers: [{ text: "Evaporation, Condensation, Precipitation", correct: true }, { text: "Freezing only", correct: false }, { text: "Melting only", correct: false }] },
            { question: "What is weather?", answers: [{ text: "Day-to-day atmospheric conditions", correct: true }, { text: "Long-term patterns", correct: false }, { text: "Climate", correct: false }] }
        ]
    }
};

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { grade4Questions };
}

// Export for browser
if (typeof window !== 'undefined') {
    window.grade4Questions = grade4Questions;
}