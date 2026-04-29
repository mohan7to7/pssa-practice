// Grade 1 Question Bank
const grade1Questions = {
    math: {
        1: [
            { question: "What is 5 + 3?", answers: [{ text: "7", correct: false }, { text: "8", correct: true }, { text: "9", correct: false }] },
            { question: "What is 10 - 4?", answers: [{ text: "5", correct: false }, { text: "6", correct: true }, { text: "7", correct: false }] },
            { question: "What is 2 × 4?", answers: [{ text: "6", correct: false }, { text: "8", correct: true }, { text: "10", correct: false }] },
            { question: "What is 12 ÷ 3?", answers: [{ text: "3", correct: false }, { text: "4", correct: true }, { text: "5", correct: false }] },
            { question: "What is 7 + 5?", answers: [{ text: "11", correct: false }, { text: "12", correct: true }, { text: "13", correct: false }] }
        ],
        2: [
            { question: "What is 15 + 7?", answers: [{ text: "21", correct: false }, { text: "22", correct: true }, { text: "23", correct: false }] },
            { question: "What is 20 - 8?", answers: [{ text: "11", correct: false }, { text: "12", correct: true }, { text: "13", correct: false }] },
            { question: "What is 3 × 5?", answers: [{ text: "14", correct: false }, { text: "15", correct: true }, { text: "16", correct: false }] },
            { question: "What is 18 ÷ 2?", answers: [{ text: "8", correct: false }, { text: "9", correct: true }, { text: "10", correct: false }] },
            { question: "What is 9 + 9?", answers: [{ text: "17", correct: false }, { text: "18", correct: true }, { text: "19", correct: false }] }
        ]
    },
    english: {
        1: [
            { question: "What is a noun?", answers: [{ text: "A person, place, or thing", correct: true }, { text: "An action", correct: false }, { text: "A description", correct: false }] },
            { question: "What is a verb?", answers: [{ text: "An action word", correct: true }, { text: "A naming word", correct: false }, { text: "A describing word", correct: false }] },
            { question: "What is an adjective?", answers: [{ text: "A describing word", correct: true }, { text: "An action word", correct: false }, { text: "A naming word", correct: false }] },
            { question: "What is a sentence?", answers: [{ text: "A complete thought", correct: true }, { text: "A single word", correct: false }, { text: "A letter", correct: false }] },
            { question: "What is a period?", answers: [{ text: "Ends a sentence", correct: true }, { text: "Starts a sentence", correct: false }, { text: "In the middle", correct: false }] }
        ],
        2: [
            { question: "What is a story?", answers: [{ text: "A tale about events", correct: true }, { text: "A math problem", correct: false }, { text: "A song", correct: false }] },
            { question: "What is a character?", answers: [{ text: "A person in a story", correct: true }, { text: "A letter", correct: false }, { text: "A number", correct: false }] },
            { question: "What is the setting?", answers: [{ text: "Where a story happens", correct: true }, { text: "Who is in the story", correct: false }, { text: "What happens", correct: false }] },
            { question: "What is a question?", answers: [{ text: "Asks for information", correct: true }, { text: "Makes a statement", correct: false }, { text: "Gives a command", correct: false }] },
            { question: "What is a capital letter?", answers: [{ text: "Uppercase letter", correct: true }, { text: "Lowercase letter", correct: false }, { text: "A number", correct: false }] }
        ]
    },
    social: {
        1: [
            { question: "What is a map?", answers: [{ text: "A picture of a place", correct: true }, { text: "A type of book", correct: false }, { text: "A game", correct: false }] },
            { question: "What is a community?", answers: [{ text: "People living together", correct: true }, { text: "A single person", correct: false }, { text: "A building", correct: false }] },
            { question: "What are rules?", answers: [{ text: "Things to follow", correct: true }, { text: "Games to play", correct: false }, { text: "Food to eat", correct: false }] },
            { question: "What is a citizen?", answers: [{ text: "Member of a community", correct: true }, { text: "A teacher", correct: false }, { text: "A visitor", correct: false }] },
            { question: "What is a leader?", answers: [{ text: "Someone who guides", correct: true }, { text: "Someone who follows", correct: false }, { text: "Someone who watches", correct: false }] }
        ],
        2: [
            { question: "What is a country?", answers: [{ text: "A land with its own government", correct: true }, { text: "A city", correct: false }, { text: "A street", correct: false }] },
            { question: "What is a flag?", answers: [{ text: "Symbol of a country", correct: true }, { text: "A flower", correct: false }, { text: "A bird", correct: false }] },
            { question: "What is a holiday?", answers: [{ text: "A special day to celebrate", correct: true }, { text: "A school day", correct: false }, { text: "A regular day", correct: false }] },
            { question: "What is a tradition?", answers: [{ text: "Custom passed down", correct: true }, { text: "A new idea", correct: false }, { text: "A game", correct: false }] },
            { question: "What is diversity?", answers: [{ text: "Different kinds of people", correct: true }, { text: "Same people", correct: false }, { text: "One type of person", correct: false }] }
        ]
    },
    science: {
        1: [
            { question: "What are the five senses?", answers: [{ text: "See, hear, smell, taste, touch", correct: true }, { text: "Run, jump, walk, sit, stand", correct: false }, { text: "Read, write, count, draw, sing", correct: false }] },
            { question: "What is a living thing?", answers: [{ text: "Something that grows", correct: true }, { text: "A rock", correct: false }, { text: "Water", correct: false }] },
            { question: "What do plants need?", answers: [{ text: "Water, sun, soil", correct: true }, { text: "Only water", correct: false }, { text: "Only sun", correct: false }] },
            { question: "What is weather?", answers: [{ text: "What's happening outside", correct: true }, { text: "Inside temperature", correct: false }, { text: "A type of animal", correct: false }] },
            { question: "What are animals?", answers: [{ text: "Living things that move", correct: true }, { text: "Plants", correct: false }, { text: "Rocks", correct: false }] }
        ],
        2: [
            { question: "What is a life cycle?", answers: [{ text: "How living things grow", correct: true }, { text: "A type of wheel", correct: false }, { text: "A calendar", correct: false }] },
            { question: "What is a habitat?", answers: [{ text: "Where an animal lives", correct: true }, { text: "A type of food", correct: false }, { text: "A type of animal", correct: false }] },
            { question: "What is food?", answers: [{ text: "What living things eat", correct: true }, { text: "A type of rock", correct: false }, { text: "A type of plant", correct: false }] },
            { question: "What is a seed?", answers: [{ text: "Start of a plant", correct: true }, { text: "A type of rock", correct: false }, { text: "A type of animal", correct: false }] },
            { question: "What is the earth?", answers: [{ text: "Our planet", correct: true }, { text: "A star", correct: false }, { text: "The moon", correct: false }] }
        ]
    }
};

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { grade1Questions };
}

// Export for browser
if (typeof window !== 'undefined') {
    window.grade1Questions = grade1Questions;
}