// Question bank organized by grade, subject, and level
const questionBank = {
    K: {
        math: {
            1: [
                { question: "How many dots do you see? ●●●", answers: [{ text: "2", correct: false }, { text: "3", correct: true }, { text: "4", correct: false }, { text: "5", correct: false }] },
                { question: "Which is bigger? 🐘 or 🐁", answers: [{ text: "🐁", correct: false }, { text: "🐘", correct: true }] }
            ],
            2: [
                { question: "What comes after 5? 1, 2, 3, 4, 5, ?", answers: [{ text: "4", correct: false }, { text: "6", correct: true }, { text: "7", correct: false }] }
            ]
        },
        english: {
            1: [
                { question: "Which letter comes first? A or B?", answers: [{ text: "A", correct: true }, { text: "B", correct: false }] }
            ],
            2: [
                { question: "Which word rhymes with 'cat'?", answers: [{ text: "dog", correct: false }, { text: "hat", correct: true }, { text: "tree", correct: false }] }
            ]
        },
        social: {
            1: [
                { question: "What color is the sky?", answers: [{ text: "Green", correct: false }, { text: "Blue", correct: true }, { text: "Red", correct: false }] }
            ],
            2: [
                { question: "How many seasons are there?", answers: [{ text: "2", correct: false }, { text: "3", correct: false }, { text: "4", correct: true }] }
            ]
        },
        science: {
            1: [
                { question: "Do birds have wings?", answers: [{ text: "Yes", correct: true }, { text: "No", correct: false }] }
            ],
            2: [
                { question: "Can fish live in water?", answers: [{ text: "Yes", correct: true }, { text: "No", correct: false }] }
            ]
        }
    },
    1: {
        math: {
            1: [
                { question: "What is 2 + 1?", answers: [{ text: "2", correct: false }, { text: "3", correct: true }, { text: "4", correct: false }] },
                { question: "What is 5 - 2?", answers: [{ text: "2", correct: false }, { text: "3", correct: true }, { text: "4", correct: false }] }
            ],
            2: [
                { question: "What is 3 + 3?", answers: [{ text: "5", correct: false }, { text: "6", correct: true }, { text: "7", correct: false }] }
            ]
        },
        english: {
            1: [
                { question: "Which word starts with 'S'?", answers: [{ text: "Apple", correct: false }, { text: "Sun", correct: true }, { text: "Dog", correct: false }] }
            ],
            2: [
                { question: "What is the past tense of 'run'?", answers: [{ text: "Running", correct: false }, { text: "Ran", correct: true }, { text: "Will run", correct: false }] }
            ]
        },
        social: {
            1: [
                { question: "What is the capital of the United States?", answers: [{ text: "New York", correct: false }, { text: "Washington, D.C.", correct: true }, { text: "Los Angeles", correct: false }] }
            ],
            2: [
                { question: "How many months are in a year?", answers: [{ text: "10", correct: false }, { text: "12", correct: true }, { text: "14", correct: false }] }
            ]
        },
        science: {
            1: [
                { question: "What do plants need to grow?", answers: [{ text: "Water, sunlight, and soil", correct: true }, { text: "Only water", correct: false }, { text: "Only sunlight", correct: false }] }
            ],
            2: [
                { question: "Is a penguin a bird?", answers: [{ text: "Yes", correct: true }, { text: "No", correct: false }] }
            ]
        }
    },
    2: {
        math: {
            1: [
                { question: "What is 10 + 5?", answers: [{ text: "14", correct: false }, { text: "15", correct: true }, { text: "16", correct: false }] }
            ],
            2: [
                { question: "What is 20 - 8?", answers: [{ text: "10", correct: false }, { text: "12", correct: true }, { text: "14", correct: false }] }
            ]
        },
        english: {
            1: [
                { question: "Which is a noun?", answers: [{ text: "Run", correct: false }, { text: "Dog", correct: true }, { text: "Fast", correct: false }] }
            ],
            2: [
                { question: "What is the plural of 'cat'?", answers: [{ text: "Cates", correct: false }, { text: "Cats", correct: true }, { text: "Catz", correct: false }] }
            ]
        },
        social: {
            1: [
                { question: "Which country are we in?", answers: [{ text: "Canada", correct: false }, { text: "United States", correct: true }, { text: "Mexico", correct: false }] }
            ],
            2: [
                { question: "What is a community?", answers: [{ text: "A group of people living together", correct: true }, { text: "Only one person", correct: false }, { text: "A building", correct: false }] }
            ]
        },
        science: {
            1: [
                { question: "What is the largest planet?", answers: [{ text: "Earth", correct: false }, { text: "Jupiter", correct: true }, { text: "Mars", correct: false }] }
            ],
            2: [
                { question: "Do all animals have backbones?", answers: [{ text: "Yes", correct: false }, { text: "No", correct: true }] }
            ]
        }
    },
    3: {
        math: {
            1: [
                { question: "What is 15 + 25?", answers: [{ text: "35", correct: false }, { text: "40", correct: true }, { text: "45", correct: false }] }
            ],
            2: [
                { question: "What is 50 - 30?", answers: [{ text: "15", correct: false }, { text: "20", correct: true }, { text: "25", correct: false }] }
            ]
        },
        english: {
            1: [
                { question: "What is a verb?", answers: [{ text: "An action word", correct: true }, { text: "A naming word", correct: false }, { text: "A color", correct: false }] }
            ],
            2: [
                { question: "Which is a sentence fragment?", answers: [{ text: "The dog barks.", correct: false }, { text: "Running fast.", correct: true }] }
            ]
        },
        social: {
            1: [
                { question: "What are the 50 states divided into?", answers: [{ text: "Counties", correct: true }, { text: "Cities", correct: false }, { text: "Towns", correct: false }] }
            ],
            2: [
                { question: "What is a map?", answers: [{ text: "A drawing of an area", correct: true }, { text: "A type of food", correct: false }] }
            ]
        },
        science: {
            1: [
                { question: "What are the three states of matter?", answers: [{ text: "Solid, Liquid, Gas", correct: true }, { text: "Hot, Cold, Warm", correct: false }] }
            ],
            2: [
                { question: "What is photosynthesis?", answers: [{ text: "How plants make food using sunlight", correct: true }, { text: "How animals eat", correct: false }] }
            ]
        }
    },
    4: {
        math: {
            1: [
                { question: "What is 25 × 4?", answers: [{ text: "75", correct: false }, { text: "100", correct: true }, { text: "125", correct: false }] }
            ],
            2: [
                { question: "What is 144 ÷ 12?", answers: [{ text: "10", correct: false }, { text: "12", correct: true }, { text: "14", correct: false }] }
            ]
        },
        english: {
            1: [
                { question: "What is an adjective?", answers: [{ text: "A word that describes", correct: true }, { text: "An action word", correct: false }, { text: "A naming word", correct: false }] }
            ],
            2: [
                { question: "Which word is spelled correctly?", answers: [{ text: "Recieve", correct: false }, { text: "Receive", correct: true }, { text: "Recive", correct: false }] }
            ]
        },
        social: {
            1: [
                { question: "What is a continent?", answers: [{ text: "A large area of land", correct: true }, { text: "A type of weather", correct: false }] }
            ],
            2: [
                { question: "What are natural resources?", answers: [{ text: "Things found in nature that people use", correct: true }, { text: "Man-made objects", correct: false }] }
            ]
        },
        science: {
            1: [
                { question: "What are the planets in our solar system?", answers: [{ text: "8 planets", correct: true }, { text: "9 planets", correct: false }, { text: "10 planets", correct: false }] }
            ],
            2: [
                { question: "What is the water cycle?", answers: [{ text: "Evaporation, Condensation, Precipitation", correct: true }, { text: "Freezing only", correct: false }] }
            ]
        }
    },
    5: {
        math: {
            1: [
                { question: "What is 123 + 456?", answers: [{ text: "569", correct: false }, { text: "579", correct: true }, { text: "589", correct: false }] }
            ],
            2: [
                { question: "What is 50% of 200?", answers: [{ text: "100", correct: true }, { text: "150", correct: false }, { text: "200", correct: false }] }
            ]
        },
        english: {
            1: [
                { question: "What is a preposition?", answers: [{ text: "A word showing location or time", correct: true }, { text: "An action word", correct: false }, { text: "A describing word", correct: false }] }
            ],
            2: [
                { question: "What is a complex sentence?", answers: [{ text: "A sentence with independent and dependent clauses", correct: true }, { text: "A short sentence", correct: false }] }
            ]
        },
        social: {
            1: [
                { question: "What is a democracy?", answers: [{ text: "A government of the people, by the people", correct: true }, { text: "A type of weather", correct: false }] }
            ],
            2: [
                { question: "What are checks and balances?", answers: [{ text: "A system that keeps one branch from having too much power", correct: true }, { text: "Banking concepts", correct: false }] }
            ]
        },
        science: {
            1: [
                { question: "What is the scientific method?", answers: [{ text: "Steps for testing ideas", correct: true }, { text: "A type of science", correct: false }] }
            ],
            2: [
                { question: "What is an ecosystem?", answers: [{ text: "A community of organisms and their environment", correct: true }, { text: "Only animals", correct: false }] }
            ]
        }
    }
};

// Expand question bank with more questions for each level
function expandQuestionBank() {
    return questionBank;
}

// Get questions for a specific grade, subject, and level
function getQuestionsForLevel(grade, subject, levelNum) {
    try {
        const questions = questionBank[grade]?.[subject]?.[levelNum];
        if (!questions || questions.length === 0) {
            return generatePlaceholderQuestions(grade, subject, levelNum);
        }
        return questions;
    } catch (e) {
        console.error('Error getting questions:', e);
        return generatePlaceholderQuestions(grade, subject, levelNum);
    }
}

// Generate placeholder questions for missing content
function generatePlaceholderQuestions(grade, subject, levelNum) {
    return [
        {
            question: `${subject.charAt(0).toUpperCase() + subject.slice(1)} Level ${levelNum} - Question 1`,
            answers: [
                { text: "Option A", correct: true },
                { text: "Option B", correct: false },
                { text: "Option C", correct: false },
                { text: "Option D", correct: false }
            ]
        },
        {
            question: `${subject.charAt(0).toUpperCase() + subject.slice(1)} Level ${levelNum} - Question 2`,
            answers: [
                { text: "Option A", correct: false },
                { text: "Option B", correct: true },
                { text: "Option C", correct: false },
                { text: "Option D", correct: false }
            ]
        }
    ];
}