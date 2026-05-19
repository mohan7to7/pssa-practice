// Grade 4 Question Bank
const grade4Questions = {
    math: {
        1: [
            { question: "What is 234 + 156?", answers: [{ text: "390", correct: true }, { text: "389", correct: false }, { text: "391", correct: false }] },
            { question: "What is 500 - 234?", answers: [{ text: "267", correct: false }, { text: "266", correct: true }, { text: "265", correct: false }] },
            { question: "What is 12 × 12?", answers: [{ text: "144", correct: true }, { text: "145", correct: false }, { text: "143", correct: false }] },
            { question: "What is 96 ÷ 8?", answers: [{ text: "12", correct: true }, { text: "13", correct: false }, { text: "11", correct: false }] },
            { question: "What is 345 + 455?", answers: [{ text: "800", correct: true }, { text: "799", correct: false }, { text: "801", correct: false }] },

            { question: "What is 678 + 122?", answers: [{ text: "799", correct: false }, { text: "800", correct: true }, { text: "801", correct: false }] },
            { question: "What is 900 - 450?", answers: [{ text: "450", correct: true }, { text: "451", correct: false }, { text: "449", correct: false }] },
            { question: "What is 15 × 10?", answers: [{ text: "150", correct: true }, { text: "160", correct: false }, { text: "140", correct: false }] },
            { question: "What is 81 ÷ 9?", answers: [{ text: "9", correct: true }, { text: "10", correct: false }, { text: "8", correct: false }] },
            { question: "What is 432 + 368?", answers: [{ text: "800", correct: true }, { text: "799", correct: false }, { text: "801", correct: false }] },

            { question: "What is 700 - 399?", answers: [{ text: "300", correct: false }, { text: "301", correct: true }, { text: "302", correct: false }] },
            { question: "What is 14 × 11?", answers: [{ text: "155", correct: false }, { text: "154", correct: true }, { text: "153", correct: false }] },
            { question: "What is 100 ÷ 4?", answers: [{ text: "24", correct: false }, { text: "25", correct: true }, { text: "26", correct: false }] },
            { question: "What is 567 + 233?", answers: [{ text: "800", correct: true }, { text: "801", correct: false }, { text: "799", correct: false }] },
            { question: "What is 850 - 275?", answers: [{ text: "574", correct: false }, { text: "575", correct: true }, { text: "576", correct: false }] },

            { question: "What is 13 × 12?", answers: [{ text: "155", correct: false }, { text: "157", correct: false }, { text: "156", correct: true }] },
            { question: "What is 144 ÷ 12?", answers: [{ text: "12", correct: true }, { text: "13", correct: false }, { text: "11", correct: false }] },
            { question: "What is 299 + 501?", answers: [{ text: "801", correct: false }, { text: "799", correct: false }, { text: "800", correct: true }] },
            { question: "What is 1000 - 650?", answers: [{ text: "351", correct: false }, { text: "350", correct: true }, { text: "349", correct: false }] },
            { question: "What is 16 × 8?", answers: [{ text: "129", correct: false }, { text: "128", correct: true }, { text: "127", correct: false }] },

            { question: "What is 72 ÷ 6?", answers: [{ text: "11", correct: false }, { text: "13", correct: false }, { text: "12", correct: true }] },
            { question: "What is 615 + 185?", answers: [{ text: "801", correct: false }, { text: "800", correct: true }, { text: "799", correct: false }] },
            { question: "What is 920 - 120?", answers: [{ text: "800", correct: true }, { text: "799", correct: false }, { text: "801", correct: false }] },
            { question: "What is 11 × 11?", answers: [{ text: "122", correct: false }, { text: "120", correct: false }, { text: "121", correct: true }] },
            { question: "What is 63 ÷ 7?", answers: [{ text: "8", correct: false }, { text: "9", correct: true }, { text: "10", correct: false }] }
        ],
        2: [
            { question: "What is 1/2 + 1/4?", answers: [{ text: "1/2", correct: false }, { text: "3/4", correct: true }, { text: "1", correct: false }] },
            { question: "What is 3/4 - 1/2?", answers: [{ text: "1/2", correct: false }, { text: "1/4", correct: true }, { text: "1", correct: false }] },
            { question: "What is 2/3 × 3/4?", answers: [{ text: "1", correct: false }, { text: "1/2", correct: true }, { text: "2/7", correct: false }] },
            { question: "What is 1/2 ÷ 1/4?", answers: [{ text: "1/2", correct: false }, { text: "4", correct: false }, { text: "2", correct: true }] },
            { question: "What is the decimal for 1/4?", answers: [{ text: "0.75", correct: false }, { text: "0.25", correct: true }, { text: "0.5", correct: false }] },

            { question: "What is 1/3 + 1/6?", answers: [{ text: "2/3", correct: false }, { text: "1/3", correct: false }, { text: "1/2", correct: true }] },
            { question: "What is 5/6 - 1/3?", answers: [{ text: "1/2", correct: true }, { text: "1/3", correct: false }, { text: "2/3", correct: false }] },
            { question: "What is 3/5 × 2/3?", answers: [{ text: "2/5", correct: true }, { text: "3/8", correct: false }, { text: "1/2", correct: false }] },
            { question: "What is 3/4 ÷ 1/2?", answers: [{ text: "2", correct: false }, { text: "1/2", correct: false }, { text: "3/2", correct: true }] },
            { question: "What is the decimal for 1/2?", answers: [{ text: "0.75", correct: false }, { text: "0.5", correct: true }, { text: "0.25", correct: false }] },

            { question: "What is 2/5 + 1/5?", answers: [{ text: "3/5", correct: true }, { text: "2/10", correct: false }, { text: "4/5", correct: false }] },
            { question: "What is 7/8 - 3/8?", answers: [{ text: "4/8", correct: false }, { text: "1/2", correct: true }, { text: "3/8", correct: false }] },
            { question: "What is 4/7 × 7/8?", answers: [{ text: "4/8", correct: false }, { text: "1/2", correct: true }, { text: "7/4", correct: false }] },
            { question: "What is 5/6 ÷ 5/6?", answers: [{ text: "0", correct: false }, { text: "1", correct: true }, { text: "5/6", correct: false }] },
            { question: "What is the decimal for 3/4?", answers: [{ text: "0.25", correct: false }, { text: "0.5", correct: false }, { text: "0.75", correct: true }] },

            { question: "What is 1/8 + 3/8?", answers: [{ text: "1/2", correct: true }, { text: "3/8", correct: false }, { text: "4/16", correct: false }] },
            { question: "What is 9/10 - 4/10?", answers: [{ text: "5/10", correct: false }, { text: "1/2", correct: true }, { text: "4/10", correct: false }] },
            { question: "What is 2/9 × 3/4?", answers: [{ text: "1/6", correct: true }, { text: "2/13", correct: false }, { text: "3/8", correct: false }] },
            { question: "What is 6/7 ÷ 3/7?", answers: [{ text: "3", correct: false }, { text: "1/2", correct: false }, { text: "2", correct: true }] },
            { question: "What is the decimal for 1/5?", answers: [{ text: "0.1", correct: false }, { text: "0.25", correct: false }, { text: "0.2", correct: true }] },

            { question: "What is 3/10 + 2/10?", answers: [{ text: "1/2", correct: true }, { text: "3/10", correct: false }, { text: "5/10", correct: false }] },
            { question: "What is 4/5 - 2/5?", answers: [{ text: "1/5", correct: false }, { text: "3/5", correct: false }, { text: "2/5", correct: true }] },
            { question: "What is 5/9 × 3/5?", answers: [{ text: "1/3", correct: true }, { text: "3/9", correct: false }, { text: "5/15", correct: false }] },
            { question: "What is 8/9 ÷ 4/9?", answers: [{ text: "1/2", correct: false }, { text: "4", correct: false }, { text: "2", correct: true }] },
            { question: "What is the decimal for 1/10?", answers: [{ text: "0.1", correct: true }, { text: "1.0", correct: false }, { text: "0.01", correct: false }] }
        ],
        3: [
            { question: "What is 567 + 234 + 189?", answers: [{ text: "989", correct: false }, { text: "991", correct: false }, { text: "990", correct: true }] },
            { question: "What is 1000 - 456 - 234?", answers: [{ text: "311", correct: false }, { text: "309", correct: false }, { text: "310", correct: true }] },
            { question: "What is 15 × 24?", answers: [{ text: "360", correct: true }, { text: "359", correct: false }, { text: "361", correct: false }] },
            { question: "What is 5/6 - 1/3?", answers: [{ text: "1/2", correct: true }, { text: "1/3", correct: false }, { text: "2/3", correct: false }] },
            { question: "What is 0.5 + 0.25 + 0.1?", answers: [{ text: "0.85", correct: true }, { text: "0.86", correct: false }, { text: "0.84", correct: false }] },

            { question: "What is 345 + 123 + 222?", answers: [{ text: "691", correct: false }, { text: "690", correct: true }, { text: "689", correct: false }] },
            { question: "What is 900 - 300 - 250?", answers: [{ text: "349", correct: false }, { text: "351", correct: false }, { text: "350", correct: true }] },
            { question: "What is 18 × 12?", answers: [{ text: "215", correct: false }, { text: "217", correct: false }, { text: "216", correct: true }] },
            { question: "What is 7/8 - 3/4?", answers: [{ text: "1/4", correct: false }, { text: "1/2", correct: false }, { text: "1/8", correct: true }] },
            { question: "What is 0.2 + 0.3 + 0.4?", answers: [{ text: "1.0", correct: false }, { text: "0.9", correct: true }, { text: "0.8", correct: false }] },

            { question: "What is 678 + 111 + 211?", answers: [{ text: "1000", correct: true }, { text: "999", correct: false }, { text: "1001", correct: false }] },
            { question: "What is 800 - 200 - 150?", answers: [{ text: "449", correct: false }, { text: "450", correct: true }, { text: "451", correct: false }] },
            { question: "What is 14 × 25?", answers: [{ text: "350", correct: true }, { text: "351", correct: false }, { text: "349", correct: false }] },
            { question: "What is 3/4 - 1/4?", answers: [{ text: "1/2", correct: true }, { text: "1/4", correct: false }, { text: "3/4", correct: false }] },
            { question: "What is 0.6 + 0.2 + 0.1?", answers: [{ text: "0.9", correct: true }, { text: "0.8", correct: false }, { text: "1.0", correct: false }] },

            { question: "What is 400 + 350 + 250?", answers: [{ text: "999", correct: false }, { text: "1000", correct: true }, { text: "1001", correct: false }] },
            { question: "What is 700 - 100 - 275?", answers: [{ text: "326", correct: false }, { text: "325", correct: true }, { text: "324", correct: false }] },
            { question: "What is 16 × 15?", answers: [{ text: "240", correct: true }, { text: "239", correct: false }, { text: "241", correct: false }] },
            { question: "What is 2/3 - 1/6?", answers: [{ text: "1/2", correct: true }, { text: "1/3", correct: false }, { text: "2/3", correct: false }] },
            { question: "What is 0.7 + 0.1 + 0.05?", answers: [{ text: "0.84", correct: false }, { text: "0.86", correct: false }, { text: "0.85", correct: true }] },

            { question: "What is 555 + 222 + 123?", answers: [{ text: "901", correct: false }, { text: "900", correct: true }, { text: "899", correct: false }] },
            { question: "What is 950 - 300 - 400?", answers: [{ text: "251", correct: false }, { text: "250", correct: true }, { text: "249", correct: false }] },
            { question: "What is 20 × 18?", answers: [{ text: "360", correct: true }, { text: "359", correct: false }, { text: "361", correct: false }] },
            { question: "What is 5/8 - 1/8?", answers: [{ text: "4/8", correct: false }, { text: "1/2", correct: true }, { text: "3/8", correct: false }] },
            { question: "What is 0.9 + 0.05 + 0.05?", answers: [{ text: "0.95", correct: false }, { text: "1.0", correct: true }, { text: "1.05", correct: false }] }
        ],
        4: [
            { question: "If a book costs $12.50 and you buy 3, how much do you spend?", answers: [{ text: "$37.50", correct: true }, { text: "$36.50", correct: false }, { text: "$38.50", correct: false }] },
            { question: "What is the area of a rectangle with length 8 and width 6?", answers: [{ text: "28", correct: false }, { text: "48", correct: true }, { text: "56", correct: false }] },
            { question: "What is 7/8 × 4/5?", answers: [{ text: "4/5", correct: false }, { text: "3/4", correct: false }, { text: "7/10", correct: true }] },
            { question: "What is 144 ÷ 12?", answers: [{ text: "11", correct: false }, { text: "13", correct: false }, { text: "12", correct: true }] },
            { question: "If you have 2.5 liters of water and add 1.75 liters, how much total?", answers: [{ text: "4.25", correct: true }, { text: "4.24", correct: false }, { text: "4.26", correct: false }] },

            { question: "If a pen costs $2.25 and you buy 4, how much do you spend?", answers: [{ text: "$9.25", correct: false }, { text: "$9.00", correct: true }, { text: "$8.75", correct: false }] },
            { question: "What is the area of a rectangle with length 10 and width 5?", answers: [{ text: "55", correct: false }, { text: "45", correct: false }, { text: "50", correct: true }] },
            { question: "What is 3/5 × 2/3?", answers: [{ text: "3/5", correct: false }, { text: "2/5", correct: true }, { text: "1/2", correct: false }] },
            { question: "What is 96 ÷ 8?", answers: [{ text: "11", correct: false }, { text: "13", correct: false }, { text: "12", correct: true }] },
            { question: "If you have 1.5 liters and add 2.25 liters, what is the total?", answers: [{ text: "3.5", correct: false }, { text: "3.75", correct: true }, { text: "4.0", correct: false }] },

            { question: "If a notebook costs $5.75 and you buy 2, how much do you spend?", answers: [{ text: "$12.50", correct: false }, { text: "$10.50", correct: false }, { text: "$11.50", correct: true }] },
            { question: "What is the area of a rectangle with length 7 and width 9?", answers: [{ text: "56", correct: false }, { text: "72", correct: false }, { text: "63", correct: true }] },
            { question: "What is 5/6 × 1/2?", answers: [{ text: "5/6", correct: false }, { text: "1/2", correct: false }, { text: "5/12", correct: true }] },
            { question: "What is 81 ÷ 9?", answers: [{ text: "8", correct: false }, { text: "9", correct: true }, { text: "10", correct: false }] },
            { question: "If you have 3.2 liters and add 1.3 liters, what is the total?", answers: [{ text: "4.5", correct: true }, { text: "4.6", correct: false }, { text: "4.4", correct: false }] },

            { question: "If a toy costs $7.20 and you buy 5, how much do you spend?", answers: [{ text: "$35.00", correct: false }, { text: "$37.00", correct: false }, { text: "$36.00", correct: true }] },
            { question: "What is the area of a rectangle with length 12 and width 4?", answers: [{ text: "48", correct: true }, { text: "44", correct: false }, { text: "52", correct: false }] },
            { question: "What is 4/9 × 3/4?", answers: [{ text: "1/3", correct: true }, { text: "4/9", correct: false }, { text: "3/4", correct: false }] },
            { question: "What is 120 ÷ 10?", answers: [{ text: "12", correct: true }, { text: "14", correct: false }, { text: "10", correct: false }] },
            { question: "If you have 0.75 liters and add 0.25 liters, what is the total?", answers: [{ text: "0.9", correct: false }, { text: "1.1", correct: false }, { text: "1.0", correct: true }] },

            { question: "If a snack costs $1.50 and you buy 6, how much do you spend?", answers: [{ text: "$8.00", correct: false }, { text: "$10.00", correct: false }, { text: "$9.00", correct: true }] },
            { question: "What is the area of a rectangle with length 9 and width 3?", answers: [{ text: "30", correct: false }, { text: "27", correct: true }, { text: "24", correct: false }] },
            { question: "What is 2/7 × 7/8?", answers: [{ text: "2/8", correct: false }, { text: "1/4", correct: true }, { text: "7/2", correct: false }] },
            { question: "What is 64 ÷ 8?", answers: [{ text: "7", correct: false }, { text: "8", correct: true }, { text: "9", correct: false }] },
            { question: "If you have 4.5 liters and add 0.5 liters, what is the total?", answers: [{ text: "4.9", correct: false }, { text: "5.1", correct: false }, { text: "5.0", correct: true }] }
        ],
        5: [
            { question: "What is 35% of 240?", answers: [{ text: "83", correct: false }, { text: "84", correct: true }, { text: "85", correct: false }] },
            { question: "What is the perimeter of a square with side 7?", answers: [{ text: "27", correct: false }, { text: "29", correct: false }, { text: "28", correct: true }] },
            { question: "If 3/4 of a number is 36, what is the number?", answers: [{ text: "49", correct: false }, { text: "47", correct: false }, { text: "48", correct: true }] },
            { question: "What is 2.5 × 4.2?", answers: [{ text: "10.4", correct: false }, { text: "10.6", correct: false }, { text: "10.5", correct: true }] },
            { question: "If a ruler is 12 inches and you need 5 rulers, how many inches total?", answers: [{ text: "60", correct: true }, { text: "61", correct: false }, { text: "59", correct: false }] },

            { question: "What is 25% of 200?", answers: [{ text: "49", correct: false }, { text: "51", correct: false }, { text: "50", correct: true }] },
            { question: "What is the perimeter of a square with side 9?", answers: [{ text: "36", correct: true }, { text: "35", correct: false }, { text: "37", correct: false }] },
            { question: "If 1/2 of a number is 30, what is the number?", answers: [{ text: "61", correct: false }, { text: "59", correct: false }, { text: "60", correct: true }] },
            { question: "What is 3.5 × 2?", answers: [{ text: "7.5", correct: false }, { text: "7", correct: true }, { text: "6.5", correct: false }] },
            { question: "If a rope is 15 inches and you need 4 ropes, how many inches total?", answers: [{ text: "59", correct: false }, { text: "61", correct: false }, { text: "60", correct: true }] },

            { question: "What is 10% of 450?", answers: [{ text: "45", correct: true }, { text: "44", correct: false }, { text: "46", correct: false }] },
            { question: "What is the perimeter of a square with side 5?", answers: [{ text: "20", correct: true }, { text: "21", correct: false }, { text: "19", correct: false }] },
            { question: "If 2/3 of a number is 40, what is the number?", answers: [{ text: "60", correct: true }, { text: "61", correct: false }, { text: "59", correct: false }] },
            { question: "What is 1.2 × 5?", answers: [{ text: "5.5", correct: false }, { text: "6", correct: true }, { text: "6.5", correct: false }] },
            { question: "If a board is 8 inches and you need 7 boards, how many inches total?", answers: [{ text: "55", correct: false }, { text: "56", correct: true }, { text: "57", correct: false }] },

            { question: "What is 50% of 120?", answers: [{ text: "61", correct: false }, { text: "59", correct: false }, { text: "60", correct: true }] },
            { question: "What is the perimeter of a square with side 11?", answers: [{ text: "44", correct: true }, { text: "43", correct: false }, { text: "45", correct: false }] },
            { question: "If 5/6 of a number is 50, what is the number?", answers: [{ text: "59", correct: false }, { text: "61", correct: false }, { text: "60", correct: true }] },
            { question: "What is 4.5 × 2?", answers: [{ text: "8.5", correct: false }, { text: "9.5", correct: false }, { text: "9", correct: true }] },
            { question: "If a stick is 9 inches and you need 6 sticks, how many inches total?", answers: [{ text: "54", correct: true }, { text: "53", correct: false }, { text: "55", correct: false }] },

            { question: "What is 20% of 300?", answers: [{ text: "61", correct: false }, { text: "59", correct: false }, { text: "60", correct: true }] },
            { question: "What is the perimeter of a square with side 6?", answers: [{ text: "25", correct: false }, { text: "23", correct: false }, { text: "24", correct: true }] },
            { question: "If 4/5 of a number is 48, what is the number?", answers: [{ text: "61", correct: false }, { text: "60", correct: true }, { text: "59", correct: false }] },
            { question: "What is 6.3 × 2?", answers: [{ text: "12.7", correct: false }, { text: "12.5", correct: false }, { text: "12.6", correct: true }] },
            { question: "If a cable is 20 inches and you need 3 cables, how many inches total?", answers: [{ text: "59", correct: false }, { text: "60", correct: true }, { text: "61", correct: false }] }
        ]
    },
    english: {
        1: [
            { question: "What is a preposition?", answers: [{ text: "An action word", correct: false }, { text: "A describing word", correct: false }, { text: "A word showing location or time", correct: true }] },
            { question: "What is a conjunction?", answers: [{ text: "A describing word", correct: false }, { text: "An action word", correct: false }, { text: "A word that connects", correct: true }] },
            { question: "What are common conjunctions?", answers: [{ text: "in, on, at", correct: false }, { text: "the, a, an", correct: false }, { text: "and, but, or", correct: true }] },
            { question: "What is a pronoun?", answers: [{ text: "A word that replaces a noun", correct: true }, { text: "An action word", correct: false }, { text: "A naming word", correct: false }] },
            { question: "What are common pronouns?", answers: [{ text: "happy, sad, big", correct: false }, { text: "run, walk, jump", correct: false }, { text: "he, she, it, they", correct: true }] },

            { question: "What is a noun?", answers: [{ text: "An action word", correct: false }, { text: "A connecting word", correct: false }, { text: "A naming word", correct: true }] },
            { question: "What is a verb?", answers: [{ text: "A describing word", correct: false }, { text: "An action word", correct: true }, { text: "A naming word", correct: false }] },
            { question: "What is an adjective?", answers: [{ text: "A describing word", correct: true }, { text: "A naming word", correct: false }, { text: "An action word", correct: false }] },
            { question: "What is an adverb?", answers: [{ text: "A word that describes a verb", correct: true }, { text: "A connecting word", correct: false }, { text: "A naming word", correct: false }] },
            { question: "What is an article?", answers: [{ text: "A word like a, an, the", correct: true }, { text: "A joining word", correct: false }, { text: "An action word", correct: false }] },

            { question: "Which is a proper noun?", answers: [{ text: "city", correct: false }, { text: "dog", correct: false }, { text: "New York", correct: true }] },
            { question: "Which is a common noun?", answers: [{ text: "Monday", correct: false }, { text: "school", correct: true }, { text: "India", correct: false }] },
            { question: "Which word is a verb?", answers: [{ text: "blue", correct: false }, { text: "table", correct: false }, { text: "run", correct: true }] },
            { question: "Which word is an adjective?", answers: [{ text: "happy", correct: true }, { text: "jump", correct: false }, { text: "car", correct: false }] },
            { question: "Which word is an adverb?", answers: [{ text: "quick", correct: false }, { text: "run", correct: false }, { text: "quickly", correct: true }] },

            { question: "Which sentence uses a pronoun?", answers: [{ text: "She is my friend", correct: true }, { text: "The dog barked", correct: false }, { text: "Birds fly", correct: false }] },
            { question: "Which sentence has a conjunction?", answers: [{ text: "She runs fast", correct: false }, { text: "I like apples and bananas", correct: true }, { text: "The sky is blue", correct: false }] },
            { question: "Which sentence has a preposition?", answers: [{ text: "She sings well", correct: false }, { text: "He runs fast", correct: false }, { text: "The book is on the table", correct: true }] },
            { question: "Which word is a preposition?", answers: [{ text: "run", correct: false }, { text: "happy", correct: false }, { text: "under", correct: true }] },
            { question: "Which word is a conjunction?", answers: [{ text: "in", correct: false }, { text: "but", correct: true }, { text: "big", correct: false }] },

            { question: "Which word is a pronoun?", answers: [{ text: "dog", correct: false }, { text: "they", correct: true }, { text: "run", correct: false }] },
            { question: "Which word is an article?", answers: [{ text: "quickly", correct: false }, { text: "the", correct: true }, { text: "and", correct: false }] },
            { question: "Which is a sentence?", answers: [{ text: "cat sleeping", correct: false }, { text: "The cat is sleeping.", correct: true }, { text: "sleeping cat", correct: false }] },
            { question: "What is a sentence?", answers: [{ text: "Just one word", correct: false }, { text: "A group of words with a complete thought", correct: true }, { text: "A naming word", correct: false }] },
            { question: "Which sentence is correct?", answers: [{ text: "He playing.", correct: false }, { text: "He is playing.", correct: true }, { text: "Is he playing", correct: false }] }
        ],
        2: [
            { question: "What is a complex sentence?", answers: [{ text: "A sentence with independent and dependent clauses", correct: true }, { text: "A sentence with many words", correct: false }, { text: "A short sentence", correct: false }] },
            { question: "What is a topic sentence?", answers: [{ text: "Any sentence", correct: false }, { text: "The sentence that states the main idea", correct: true }, { text: "The last sentence", correct: false }] },
            { question: "What are supporting details?", answers: [{ text: "Information that supports the main idea", correct: true }, { text: "The conclusion", correct: false }, { text: "The title", correct: false }] },
            { question: "What is a conclusion?", answers: [{ text: "The middle", correct: false }, { text: "The beginning", correct: false }, { text: "The final thought or summary", correct: true }] },
            { question: "What is an outline?", answers: [{ text: "A rough sketch", correct: false }, { text: "A plan for writing", correct: true }, { text: "A final draft", correct: false }] },

            { question: "What is a paragraph?", answers: [{ text: "A group of sentences about one idea", correct: true }, { text: "A single word", correct: false }, { text: "A title", correct: false }] },
            { question: "What is the main idea?", answers: [{ text: "What the text is mostly about", correct: true }, { text: "The ending", correct: false }, { text: "A small detail", correct: false }] },
            { question: "What is a detail?", answers: [{ text: "The title", correct: false }, { text: "The topic sentence", correct: false }, { text: "Extra information about the main idea", correct: true }] },
            { question: "What is a draft?", answers: [{ text: "A title", correct: false }, { text: "A first version of writing", correct: true }, { text: "The final copy", correct: false }] },
            { question: "What is editing?", answers: [{ text: "Writing a story", correct: false }, { text: "Reading only", correct: false }, { text: "Fixing mistakes in writing", correct: true }] },

            { question: "What is revising?", answers: [{ text: "Improving ideas and content", correct: true }, { text: "Adding a title", correct: false }, { text: "Skipping mistakes", correct: false }] },
            { question: "What is a simple sentence?", answers: [{ text: "A question only", correct: false }, { text: "A sentence with many clauses", correct: false }, { text: "A sentence with one complete thought", correct: true }] },
            { question: "What is a compound sentence?", answers: [{ text: "A very short sentence", correct: false }, { text: "A question", correct: false }, { text: "Two sentences joined by a conjunction", correct: true }] },
            { question: "What is a clause?", answers: [{ text: "A group of words with a subject and verb", correct: true }, { text: "A title", correct: false }, { text: "A single word", correct: false }] },
            { question: "What is an independent clause?", answers: [{ text: "A phrase", correct: false }, { text: "A clause that cannot stand alone", correct: false }, { text: "A clause that can stand alone", correct: true }] },

            { question: "What is a dependent clause?", answers: [{ text: "A clause that cannot stand alone", correct: true }, { text: "A complete sentence", correct: false }, { text: "A title", correct: false }] },
            { question: "What is a transition word?", answers: [{ text: "A naming word", correct: false }, { text: "A word that connects ideas", correct: true }, { text: "An action word", correct: false }] },
            { question: "Which is a transition word?", answers: [{ text: "however", correct: true }, { text: "dog", correct: false }, { text: "run", correct: false }] },
            { question: "What is a title?", answers: [{ text: "A sentence in the middle", correct: false }, { text: "The name of a piece of writing", correct: true }, { text: "A detail", correct: false }] },
            { question: "What is a summary?", answers: [{ text: "A title", correct: false }, { text: "A long paragraph", correct: false }, { text: "A short version of the text", correct: true }] },

            { question: "What is brainstorming?", answers: [{ text: "Writing the final copy", correct: false }, { text: "Checking spelling", correct: false }, { text: "Thinking of ideas before writing", correct: true }] },
            { question: "What is a rough draft?", answers: [{ text: "The final copy", correct: false }, { text: "An early version of writing", correct: true }, { text: "A title", correct: false }] },
            { question: "What is a final draft?", answers: [{ text: "The completed and corrected writing", correct: true }, { text: "A list of ideas", correct: false }, { text: "The first version", correct: false }] },
            { question: "What is a sequence?", answers: [{ text: "A single idea", correct: false }, { text: "The order of events", correct: true }, { text: "A title", correct: false }] },
            { question: "What is a narrative?", answers: [{ text: "A story", correct: true }, { text: "A list", correct: false }, { text: "A title", correct: false }] }
        ],
        3: [
            { question: "What does 'metaphor' mean?", answers: [{ text: "A repeated sound in words", correct: false }, { text: "A comparison using 'like' or 'as'", correct: false }, { text: "A comparison between two things without using 'like' or 'as'", correct: true }] },
            { question: "What is a simile?", answers: [{ text: "A comparison using 'like' or 'as'", correct: true }, { text: "A type of poem", correct: false }, { text: "An action word", correct: false }] },
            { question: "What is personification?", answers: [{ text: "Repeating words", correct: false }, { text: "Giving human qualities to non-human things", correct: true }, { text: "A type of comparison", correct: false }] },
            { question: "What is alliteration?", answers: [{ text: "A type of poem", correct: false }, { text: "Rhyming words", correct: false }, { text: "Repetition of beginning sounds in nearby words", correct: true }] },
            { question: "What is an idiom?", answers: [{ text: "A rhyming pattern", correct: false }, { text: "A phrase that means something different from each word", correct: true }, { text: "A type of sentence", correct: false }] },

            { question: "What is imagery?", answers: [{ text: "A naming word", correct: false }, { text: "A type of sentence", correct: false }, { text: "Words that create pictures in the reader's mind", correct: true }] },
            { question: "What is rhyme?", answers: [{ text: "A long sentence", correct: false }, { text: "Words that start the same", correct: false }, { text: "Words that have the same ending sound", correct: true }] },
            { question: "What is rhythm in poetry?", answers: [{ text: "A sentence", correct: false }, { text: "A type of word", correct: false }, { text: "The beat or flow of a poem", correct: true }] },
            { question: "What is a stanza?", answers: [{ text: "A group of lines in a poem", correct: true }, { text: "A single word", correct: false }, { text: "A paragraph in a story", correct: false }] },
            { question: "What is a poem?", answers: [{ text: "A list of facts", correct: false }, { text: "Writing that often has rhythm and rhyme", correct: true }, { text: "A sentence only", correct: false }] },

            { question: "Which is a simile?", answers: [{ text: "He is a cheetah", correct: false }, { text: "He runs fast", correct: false }, { text: "He is as fast as a cheetah", correct: true }] },
            { question: "Which is a metaphor?", answers: [{ text: "Time is like a thief", correct: false }, { text: "Time is a thief", correct: true }, { text: "Time runs fast", correct: false }] },
            { question: "Which is personification?", answers: [{ text: "The wind is strong", correct: false }, { text: "The wind whispered softly", correct: true }, { text: "The wind blows", correct: false }] },
            { question: "Which is alliteration?", answers: [{ text: "She is happy", correct: false }, { text: "Peter Piper picked peppers", correct: true }, { text: "The dog ran fast", correct: false }] },
            { question: "Which is an idiom?", answers: [{ text: "The rain is cold", correct: false }, { text: "It's raining cats and dogs", correct: true }, { text: "It is raining heavily", correct: false }] },

            { question: "What is onomatopoeia?", answers: [{ text: "A type of sentence", correct: false }, { text: "A comparison", correct: false }, { text: "Words that sound like the noise they make", correct: true }] },
            { question: "Which is onomatopoeia?", answers: [{ text: "happy", correct: false }, { text: "buzz", correct: true }, { text: "run", correct: false }] },
            { question: "What is repetition in poetry?", answers: [{ text: "A title", correct: false }, { text: "Repeating words for effect", correct: true }, { text: "A single sentence", correct: false }] },
            { question: "What is a line in a poem?", answers: [{ text: "A paragraph", correct: false }, { text: "A row of words in a poem", correct: true }, { text: "A title", correct: false }] },
            { question: "What is figurative language?", answers: [{ text: "Simple literal meaning", correct: false }, { text: "Language that uses comparisons or creative meaning", correct: true }, { text: "Only action words", correct: false }] },

            { question: "Which is figurative language?", answers: [{ text: "The stars danced in the sky", correct: true }, { text: "The sky is dark", correct: false }, { text: "Stars are in the sky", correct: false }] },
            { question: "What is hyperbole?", answers: [{ text: "A comparison using like", correct: false }, { text: "An exaggerated statement", correct: true }, { text: "A repeated sound", correct: false }] },
            { question: "Which is a hyperbole?", answers: [{ text: "I am hungry", correct: false }, { text: "I ate lunch", correct: false }, { text: "I am so hungry I could eat a horse", correct: true }] },
            { question: "What is tone in writing?", answers: [{ text: "A title", correct: false }, { text: "A type of sentence", correct: false }, { text: "The feeling or attitude of the writer", correct: true }] },
            { question: "What is mood in writing?", answers: [{ text: "The title", correct: false }, { text: "A single word", correct: false }, { text: "The feeling the reader gets", correct: true }] }
        ],
        4: [
            { question: "What is the purpose of a thesis statement?", answers: [{ text: "To state the main argument or idea of a paper", correct: true }, { text: "To introduce the topic", correct: false }, { text: "To conclude the paper", correct: false }] },
            { question: "What are transitional words?", answers: [{ text: "Words that end paragraphs", correct: false }, { text: "Words that connect ideas between sentences", correct: true }, { text: "Words that start sentences", correct: false }] },
            { question: "What is a dependent clause?", answers: [{ text: "A long clause", correct: false }, { text: "A clause that cannot stand alone as a sentence", correct: true }, { text: "A main clause", correct: false }] },
            { question: "What does 'inference' mean in reading?", answers: [{ text: "Reading every word slowly", correct: false }, { text: "Making a conclusion based on clues in the text", correct: true }, { text: "Quoting the text", correct: false }] },
            { question: "What is an antonym?", answers: [{ text: "A word that rhymes", correct: false }, { text: "A word with the opposite meaning", correct: true }, { text: "A word with the same meaning", correct: false }] },

            { question: "What is a synonym?", answers: [{ text: "A word that rhymes", correct: false }, { text: "A word with the same meaning", correct: true }, { text: "A word with the opposite meaning", correct: false }] },
            { question: "What is context clue?", answers: [{ text: "A definition list", correct: false }, { text: "The title of a story", correct: false }, { text: "Hints in the text to understand meaning", correct: true }] },
            { question: "What is the main idea?", answers: [{ text: "The most important point of a text", correct: true }, { text: "The ending", correct: false }, { text: "A small detail", correct: false }] },
            { question: "What is a supporting detail?", answers: [{ text: "The title", correct: false }, { text: "The first word", correct: false }, { text: "Information that explains the main idea", correct: true }] },
            { question: "What is a summary?", answers: [{ text: "A long explanation", correct: false }, { text: "A title", correct: false }, { text: "A short version of the text", correct: true }] },

            { question: "What is a fact?", answers: [{ text: "Something that can be proven true", correct: true }, { text: "A guess", correct: false }, { text: "A personal belief", correct: false }] },
            { question: "What is an opinion?", answers: [{ text: "A definition", correct: false }, { text: "What someone thinks or feels", correct: true }, { text: "A proven fact", correct: false }] },
            { question: "What is cause and effect?", answers: [{ text: "Why something happens and what happens", correct: true }, { text: "A title", correct: false }, { text: "A type of sentence", correct: false }] },
            { question: "What is compare and contrast?", answers: [{ text: "Finding similarities and differences", correct: true }, { text: "Telling a story", correct: false }, { text: "Giving directions", correct: false }] },
            { question: "What is sequence?", answers: [{ text: "The order of events", correct: true }, { text: "A single idea", correct: false }, { text: "A title", correct: false }] },

            { question: "Which is an antonym for 'hot'?", answers: [{ text: "warm", correct: false }, { text: "heat", correct: false }, { text: "cold", correct: true }] },
            { question: "Which is a synonym for 'happy'?", answers: [{ text: "angry", correct: false }, { text: "joyful", correct: true }, { text: "sad", correct: false }] },
            { question: "What is a prefix?", answers: [{ text: "A word part added to the beginning", correct: true }, { text: "A word part added to the end", correct: false }, { text: "A full sentence", correct: false }] },
            { question: "What is a suffix?", answers: [{ text: "A word part added to the beginning", correct: false }, { text: "A sentence", correct: false }, { text: "A word part added to the end", correct: true }] },
            { question: "What is root word?", answers: [{ text: "The base word without prefixes or suffixes", correct: true }, { text: "A long word", correct: false }, { text: "A sentence", correct: false }] },

            { question: "What is a question word?", answers: [{ text: "Words like who, what, where, when, why", correct: true }, { text: "Words like big and small", correct: false }, { text: "Words like run and jump", correct: false }] },
            { question: "What is a heading?", answers: [{ text: "A detail", correct: false }, { text: "A title of a section", correct: true }, { text: "A sentence in the middle", correct: false }] },
            { question: "What is a caption?", answers: [{ text: "A paragraph", correct: false }, { text: "Text that explains a picture", correct: true }, { text: "A title", correct: false }] },
            { question: "What is a glossary?", answers: [{ text: "A title", correct: false }, { text: "A list of word meanings", correct: true }, { text: "A story", correct: false }] },
            { question: "What is a table of contents?", answers: [{ text: "A list of sections in a book", correct: true }, { text: "A story summary", correct: false }, { text: "A picture", correct: false }] }
        ],
        5: [
            { question: "What is the difference between 'to', 'too', and 'two'?", answers: [{ text: "They all mean the same thing", correct: false }, { text: "They are interchangeable", correct: false }, { text: "'To' = direction, 'too' = also/excessive, 'two' = number 2", correct: true }] },
            { question: "What does 'cite' mean in writing?", answers: [{ text: "To quote or reference a source", correct: true }, { text: "To summarize", correct: false }, { text: "To write about", correct: false }] },
            { question: "What is a primary source?", answers: [{ text: "A summary of an event", correct: false }, { text: "A book about an event", correct: false }, { text: "Original material created during an event", correct: true }] },
            { question: "What is paraphrasing?", answers: [{ text: "Restating information in your own words", correct: true }, { text: "Copying word for word", correct: false }, { text: "Quoting a source", correct: false }] },
            { question: "What is a counterargument?", answers: [{ text: "Supporting your main idea", correct: false }, { text: "An opposing point of view to your argument", correct: true }, { text: "Introducing a new topic", correct: false }] },

            { question: "What is plagiarism?", answers: [{ text: "Using someone else's work without credit", correct: true }, { text: "Writing your own ideas", correct: false }, { text: "Summarizing a text", correct: false }] },
            { question: "What is a secondary source?", answers: [{ text: "A source that explains or analyzes a primary source", correct: true }, { text: "An original document", correct: false }, { text: "A personal story", correct: false }] },
            { question: "What is quoting?", answers: [{ text: "Using the exact words from a source", correct: true }, { text: "Changing the words", correct: false }, { text: "Summarizing briefly", correct: false }] },
            { question: "What is summarizing?", answers: [{ text: "Giving the main points in a shorter form", correct: true }, { text: "Adding new ideas", correct: false }, { text: "Copying everything", correct: false }] },
            { question: "What is evidence in writing?", answers: [{ text: "Facts or examples that support an idea", correct: true }, { text: "A title", correct: false }, { text: "A question", correct: false }] },

            { question: "What is a claim?", answers: [{ text: "A question", correct: false }, { text: "A statement you try to prove", correct: true }, { text: "A summary", correct: false }] },
            { question: "What is an argument?", answers: [{ text: "A question", correct: false }, { text: "A fight", correct: false }, { text: "A reasoned opinion supported by evidence", correct: true }] },
            { question: "What is a source?", answers: [{ text: "Where information comes from", correct: true }, { text: "A question", correct: false }, { text: "A sentence", correct: false }] },
            { question: "What is a bibliography?", answers: [{ text: "A summary", correct: false }, { text: "A list of sources used", correct: true }, { text: "A title", correct: false }] },
            { question: "What is research?", answers: [{ text: "Finding information about a topic", correct: true }, { text: "Guessing answers", correct: false }, { text: "Writing a story", correct: false }] },

            { question: "What is editing for grammar?", answers: [{ text: "Deleting everything", correct: false }, { text: "Checking for correct language use", correct: true }, { text: "Adding new ideas", correct: false }] },
            { question: "What is revising for clarity?", answers: [{ text: "Making ideas easier to understand", correct: true }, { text: "Skipping parts", correct: false }, { text: "Adding mistakes", correct: false }] },
            { question: "What is a draft?", answers: [{ text: "A title", correct: false }, { text: "A final copy", correct: false }, { text: "A version of writing", correct: true }] },
            { question: "What is proofreading?", answers: [{ text: "Checking for spelling and punctuation errors", correct: true }, { text: "Writing a new story", correct: false }, { text: "Adding details", correct: false }] },
            { question: "What is a citation?", answers: [{ text: "Giving credit to a source", correct: true }, { text: "Writing a title", correct: false }, { text: "Copying text", correct: false }] },

            { question: "Which is an example of paraphrasing?", answers: [{ text: "Ignoring the sentence", correct: false }, { text: "Restating a sentence in your own words", correct: true }, { text: "Copying the sentence exactly", correct: false }] },
            { question: "Which is a primary source?", answers: [{ text: "A diary entry", correct: true }, { text: "A textbook", correct: false }, { text: "An article summary", correct: false }] },
            { question: "Which is a secondary source?", answers: [{ text: "A letter", correct: false }, { text: "A history book", correct: true }, { text: "A speech", correct: false }] },
            { question: "Which shows correct use of 'too'?", answers: [{ text: "I want too go", correct: false }, { text: "I want to go too", correct: true }, { text: "I want go too", correct: false }] },
            { question: "Which shows correct use of 'two'?", answers: [{ text: "I have two apples", correct: true }, { text: "I have to apples", correct: false }, { text: "I have too apples", correct: false }] }
        ]
    },
    social: {
        1: [
            { question: "What is a democracy?", answers: [{ text: "A type of weather", correct: false }, { text: "A type of business", correct: false }, { text: "A government of the people", correct: true }] },
            { question: "What are checks and balances?", answers: [{ text: "A system that keeps one branch from having too much power", correct: true }, { text: "Banking concepts", correct: false }, { text: "A military system", correct: false }] },
            { question: "What are the three branches of government?", answers: [{ text: "Army, Navy, Air Force", correct: false }, { text: "State, Federal, Local", correct: false }, { text: "Legislative, Executive, Judicial", correct: true }] },
            { question: "What does the legislative branch do?", answers: [{ text: "Enforces laws", correct: false }, { text: "Interprets laws", correct: false }, { text: "Makes laws", correct: true }] },
            { question: "What does the executive branch do?", answers: [{ text: "Makes laws", correct: false }, { text: "Interprets laws", correct: false }, { text: "Enforces laws", correct: true }] },

            { question: "What does the judicial branch do?", answers: [{ text: "Enforces laws", correct: false }, { text: "Interprets laws", correct: true }, { text: "Makes laws", correct: false }] },
            { question: "Who is the head of the executive branch?", answers: [{ text: "The President", correct: true }, { text: "The Senator", correct: false }, { text: "The Judge", correct: false }] },
            { question: "What is a law?", answers: [{ text: "A suggestion", correct: false }, { text: "A rule made by the government", correct: true }, { text: "A story", correct: false }] },
            { question: "What is the Constitution?", answers: [{ text: "The main set of laws for a country", correct: true }, { text: "A book of stories", correct: false }, { text: "A list of people", correct: false }] },
            { question: "What is a citizen?", answers: [{ text: "A person who belongs to a country", correct: true }, { text: "A tourist", correct: false }, { text: "A visitor", correct: false }] },

            { question: "What is voting?", answers: [{ text: "Writing a story", correct: false }, { text: "Paying money", correct: false }, { text: "Choosing a leader or decision", correct: true }] },
            { question: "What is an election?", answers: [{ text: "A holiday", correct: false }, { text: "A process of choosing leaders", correct: true }, { text: "A meeting", correct: false }] },
            { question: "What is a right?", answers: [{ text: "A job", correct: false }, { text: "A rule to follow", correct: false }, { text: "A freedom people have", correct: true }] },
            { question: "What is a responsibility?", answers: [{ text: "A freedom", correct: false }, { text: "A game", correct: false }, { text: "A duty or job to do", correct: true }] },
            { question: "What is freedom?", answers: [{ text: "The power to act or speak freely", correct: true }, { text: "A rule", correct: false }, { text: "A law", correct: false }] },

            { question: "What is government?", answers: [{ text: "A school", correct: false }, { text: "A family", correct: false }, { text: "A group that makes and enforces rules", correct: true }] },
            { question: "What is a state government?", answers: [{ text: "Government of a city", correct: false }, { text: "Government of a country", correct: false }, { text: "Government of a state", correct: true }] },
            { question: "What is a local government?", answers: [{ text: "Government of a state", correct: false }, { text: "Government of a country", correct: false }, { text: "Government of a city or town", correct: true }] },
            { question: "What is a capital city?", answers: [{ text: "The main city where government is located", correct: true }, { text: "The biggest city", correct: false }, { text: "A small town", correct: false }] },
            { question: "What is a leader?", answers: [{ text: "A person who guides others", correct: true }, { text: "A visitor", correct: false }, { text: "A follower", correct: false }] },

            { question: "What is a rule?", answers: [{ text: "Something people must follow", correct: true }, { text: "A choice", correct: false }, { text: "A story", correct: false }] },
            { question: "Why are laws important?", answers: [{ text: "They are not useful", correct: false }, { text: "They make things confusing", correct: false }, { text: "They keep people safe and organized", correct: true }] },
            { question: "What is fairness?", answers: [{ text: "Treating people equally", correct: true }, { text: "Breaking laws", correct: false }, { text: "Ignoring rules", correct: false }] },
            { question: "What is equality?", answers: [{ text: "Following rules", correct: false }, { text: "Only some people matter", correct: false }, { text: "Everyone is treated the same", correct: true }] },
            { question: "What is a community?", answers: [{ text: "A group of people living together", correct: true }, { text: "A single person", correct: false }, { text: "A country", correct: false }] }
        ],
        2: [
            { question: "What are continents?", answers: [{ text: "Countries", correct: false }, { text: "The seven large areas of land", correct: true }, { text: "States", correct: false }] },
            { question: "What is a prime meridian?", answers: [{ text: "The line at 0 degrees longitude", correct: true }, { text: "A mountain range", correct: false }, { text: "The equator", correct: false }] },
            { question: "What is the equator?", answers: [{ text: "A country", correct: false }, { text: "A continent", correct: false }, { text: "An imaginary line dividing Earth into North and South", correct: true }] },
            { question: "What are latitude lines?", answers: [{ text: "Mountain ranges", correct: false }, { text: "Lines running north and south", correct: false }, { text: "Lines running east and west", correct: true }] },
            { question: "What are longitude lines?", answers: [{ text: "Lines running north and south", correct: true }, { text: "Equator lines", correct: false }, { text: "Lines running east and west", correct: false }] },

            { question: "How many continents are there?", answers: [{ text: "Five", correct: false }, { text: "Seven", correct: true }, { text: "Six", correct: false }] },
            { question: "Which is the largest continent?", answers: [{ text: "Africa", correct: false }, { text: "Europe", correct: false }, { text: "Asia", correct: true }] },
            { question: "Which is the smallest continent?", answers: [{ text: "Europe", correct: false }, { text: "Antarctica", correct: false }, { text: "Australia", correct: true }] },
            { question: "What is a map?", answers: [{ text: "A type of story", correct: false }, { text: "A drawing of a place", correct: true }, { text: "A building", correct: false }] },
            { question: "What is a globe?", answers: [{ text: "A flat map", correct: false }, { text: "A model of Earth", correct: true }, { text: "A book", correct: false }] },

            { question: "What is a hemisphere?", answers: [{ text: "A continent", correct: false }, { text: "A country", correct: false }, { text: "Half of the Earth", correct: true }] },
            { question: "What is the Northern Hemisphere?", answers: [{ text: "The half of Earth north of the equator", correct: true }, { text: "The middle of Earth", correct: false }, { text: "The half south of the equator", correct: false }] },
            { question: "What is the Southern Hemisphere?", answers: [{ text: "The half of Earth south of the equator", correct: true }, { text: "The half north of the equator", correct: false }, { text: "The center of Earth", correct: false }] },
            { question: "What is a compass?", answers: [{ text: "A globe", correct: false }, { text: "A tool that shows direction", correct: true }, { text: "A map", correct: false }] },
            { question: "What are cardinal directions?", answers: [{ text: "Hot, Cold, Warm, Cool", correct: false }, { text: "Up, Down, Left, Right", correct: false }, { text: "North, South, East, West", correct: true }] },

            { question: "What is a scale on a map?", answers: [{ text: "Shows directions", correct: false }, { text: "Shows distance on a map", correct: true }, { text: "Shows colors", correct: false }] },
            { question: "What is a legend on a map?", answers: [{ text: "Explains symbols on a map", correct: true }, { text: "Shows directions", correct: false }, { text: "Shows distance", correct: false }] },
            { question: "What is a symbol on a map?", answers: [{ text: "A number", correct: false }, { text: "A picture that represents something", correct: true }, { text: "A word", correct: false }] },
            { question: "What is an ocean?", answers: [{ text: "A large body of salt water", correct: true }, { text: "A river", correct: false }, { text: "A small lake", correct: false }] },
            { question: "Which is the largest ocean?", answers: [{ text: "Pacific Ocean", correct: true }, { text: "Indian Ocean", correct: false }, { text: "Atlantic Ocean", correct: false }] },

            { question: "What is a country?", answers: [{ text: "A city", correct: false }, { text: "A land with its own government", correct: true }, { text: "A continent", correct: false }] },
            { question: "What is a state?", answers: [{ text: "An ocean", correct: false }, { text: "A part of a country", correct: true }, { text: "A continent", correct: false }] },
            { question: "What is a city?", answers: [{ text: "A large town where people live", correct: true }, { text: "An ocean", correct: false }, { text: "A country", correct: false }] },
            { question: "What is landform?", answers: [{ text: "A country", correct: false }, { text: "A natural feature of Earth’s surface", correct: true }, { text: "A map", correct: false }] },
            { question: "Which is a landform?", answers: [{ text: "Mountain", correct: true }, { text: "Building", correct: false }, { text: "Road", correct: false }] }
        ],
        3: [
            { question: "What is an amendment?", answers: [{ text: "A change or addition to the Constitution", correct: true }, { text: "A type of law", correct: false }, { text: "A court decision", correct: false }] },
            { question: "What is the Bill of Rights?", answers: [{ text: "A list of laws", correct: false }, { text: "The first ten amendments to the Constitution", correct: true }, { text: "The preamble", correct: false }] },
            { question: "What is a citizen?", answers: [{ text: "A tourist", correct: false }, { text: "A member of a state or nation", correct: true }, { text: "A visitor", correct: false }] },
            { question: "What are natural resources?", answers: [{ text: "Man-made products", correct: false }, { text: "Materials from Earth that humans use", correct: true }, { text: "Sports equipment", correct: false }] },
            { question: "What is an economy?", answers: [{ text: "A country", correct: false }, { text: "A system of production and trade", correct: true }, { text: "A type of government", correct: false }] },

            { question: "What is the Constitution?", answers: [{ text: "A newspaper", correct: false }, { text: "A storybook", correct: false }, { text: "The main set of laws of a country", correct: true }] },
            { question: "What is a right?", answers: [{ text: "A punishment", correct: false }, { text: "A rule to follow", correct: false }, { text: "A freedom protected by law", correct: true }] },
            { question: "What is a responsibility?", answers: [{ text: "A freedom", correct: false }, { text: "A reward", correct: false }, { text: "A duty or job citizens should do", correct: true }] },
            { question: "What is a resource?", answers: [{ text: "Something people use to meet needs", correct: true }, { text: "A law", correct: false }, { text: "A rule", correct: false }] },
            { question: "What is a producer?", answers: [{ text: "A traveler", correct: false }, { text: "A person who makes goods or services", correct: true }, { text: "A person who buys goods", correct: false }] },

            { question: "What is a consumer?", answers: [{ text: "A person who buys or uses goods", correct: true }, { text: "A worker only", correct: false }, { text: "A person who makes goods", correct: false }] },
            { question: "What is a good?", answers: [{ text: "An item that people can buy", correct: true }, { text: "A rule", correct: false }, { text: "A service", correct: false }] },
            { question: "What is a service?", answers: [{ text: "Work done for others", correct: true }, { text: "A law", correct: false }, { text: "A product", correct: false }] },
            { question: "What is trade?", answers: [{ text: "A law", correct: false }, { text: "The exchange of goods and services", correct: true }, { text: "A type of government", correct: false }] },
            { question: "What is money?", answers: [{ text: "A service", correct: false }, { text: "Something used to buy goods and services", correct: true }, { text: "A rule", correct: false }] },

            { question: "What is saving?", answers: [{ text: "Spending all money", correct: false }, { text: "Keeping money for future use", correct: true }, { text: "Trading goods", correct: false }] },
            { question: "What is spending?", answers: [{ text: "Earning money", correct: false }, { text: "Using money to buy things", correct: true }, { text: "Saving money", correct: false }] },
            { question: "What is a job?", answers: [{ text: "A game", correct: false }, { text: "Work people do to earn money", correct: true }, { text: "A rule", correct: false }] },
            { question: "What is income?", answers: [{ text: "Money spent", correct: false }, { text: "Money people earn", correct: true }, { text: "Goods traded", correct: false }] },
            { question: "What is a market?", answers: [{ text: "A school", correct: false }, { text: "A government office", correct: false }, { text: "A place where people buy and sell goods", correct: true }] },

            { question: "What is supply?", answers: [{ text: "The amount people want", correct: false }, { text: "The price of goods", correct: false }, { text: "The amount of goods available", correct: true }] },
            { question: "What is demand?", answers: [{ text: "The amount available", correct: false }, { text: "The amount of goods people want", correct: true }, { text: "The cost", correct: false }] },
            { question: "What is a tax?", answers: [{ text: "A reward", correct: false }, { text: "A gift", correct: false }, { text: "Money paid to the government", correct: true }] },
            { question: "What is a government service?", answers: [{ text: "A private job", correct: false }, { text: "A service provided by the government", correct: true }, { text: "A product sold in stores", correct: false }] },
            { question: "What is a community?", answers: [{ text: "A single person", correct: false }, { text: "A group of people living in one place", correct: true }, { text: "A country only", correct: false }] }
        ],
        4: [
            { question: "What is the Supreme Court?", answers: [{ text: "The highest court in the U.S. judicial system", correct: true }, { text: "A police department", correct: false }, { text: "A lower court", correct: false }] },
            { question: "What is a cultural tradition?", answers: [{ text: "A type of music", correct: false }, { text: "A custom or belief passed down through generations", correct: true }, { text: "A new invention", correct: false }] },
            { question: "What is an export?", answers: [{ text: "Goods received from another country", correct: false }, { text: "Goods sent to another country for sale", correct: true }, { text: "A tax", correct: false }] },
            { question: "What is history?", answers: [{ text: "The study of culture", correct: false }, { text: "The study of geography", correct: false }, { text: "The study of past events", correct: true }] },
            { question: "What is a treaty?", answers: [{ text: "A type of document", correct: false }, { text: "A law", correct: false }, { text: "An agreement between countries", correct: true }] },

            { question: "What is an import?", answers: [{ text: "Goods brought into a country", correct: true }, { text: "A tax", correct: false }, { text: "Goods sent out", correct: false }] },
            { question: "What is culture?", answers: [{ text: "A map", correct: false }, { text: "The beliefs and traditions of a group", correct: true }, { text: "A law", correct: false }] },
            { question: "What is a tradition?", answers: [{ text: "A new idea", correct: false }, { text: "A rule", correct: false }, { text: "A custom followed over time", correct: true }] },
            { question: "What is a holiday?", answers: [{ text: "A school subject", correct: false }, { text: "A workday", correct: false }, { text: "A special day of celebration", correct: true }] },
            { question: "What is a landmark?", answers: [{ text: "A rule", correct: false }, { text: "An important place or building", correct: true }, { text: "A law", correct: false }] },

            { question: "What is a monument?", answers: [{ text: "A store", correct: false }, { text: "A structure built to remember something", correct: true }, { text: "A house", correct: false }] },
            { question: "What is a timeline?", answers: [{ text: "A line showing events in order", correct: true }, { text: "A story", correct: false }, { text: "A map", correct: false }] },
            { question: "What is a decade?", answers: [{ text: "A period of 10 years", correct: true }, { text: "A period of 5 years", correct: false }, { text: "A period of 100 years", correct: false }] },
            { question: "What is a century?", answers: [{ text: "A period of 50 years", correct: false }, { text: "A period of 10 years", correct: false }, { text: "A period of 100 years", correct: true }] },
            { question: "What is a historian?", answers: [{ text: "A teacher only", correct: false }, { text: "A scientist", correct: false }, { text: "A person who studies history", correct: true }] },

            { question: "What is an artifact?", answers: [{ text: "A law", correct: false }, { text: "An object from the past", correct: true }, { text: "A new tool", correct: false }] },
            { question: "What is exploration?", answers: [{ text: "Traveling to discover new places", correct: true }, { text: "Reading books", correct: false }, { text: "Staying at home", correct: false }] },
            { question: "What is a colony?", answers: [{ text: "A place settled by people from another land", correct: true }, { text: "A city", correct: false }, { text: "A country", correct: false }] },
            { question: "What is independence?", answers: [{ text: "Following rules", correct: false }, { text: "Freedom from control of another country", correct: true }, { text: "Trading goods", correct: false }] },
            { question: "What is a revolution?", answers: [{ text: "A type of law", correct: false }, { text: "A big change in government or society", correct: true }, { text: "A small event", correct: false }] },

            { question: "What is a leader?", answers: [{ text: "A person who guides others", correct: true }, { text: "A follower", correct: false }, { text: "A visitor", correct: false }] },
            { question: "What is a government?", answers: [{ text: "A group that makes rules for a country", correct: true }, { text: "A school", correct: false }, { text: "A business", correct: false }] },
            { question: "What is a law?", answers: [{ text: "A rule made by the government", correct: true }, { text: "A story", correct: false }, { text: "A suggestion", correct: false }] },
            { question: "What is justice?", answers: [{ text: "Fair treatment under the law", correct: true }, { text: "Breaking rules", correct: false }, { text: "Ignoring laws", correct: false }] },
            { question: "What is equality?", answers: [{ text: "Ignoring rules", correct: false }, { text: "Treating everyone the same", correct: true }, { text: "Treating people differently", correct: false }] }
        ],
        5: [
            { question: "What is a federal system of government?", answers: [{ text: "All power is with state governments", correct: false }, { text: "All power is with the central government", correct: false }, { text: "Power is shared between central and state governments", correct: true }] },
            { question: "What is the role of the Senate?", answers: [{ text: "To interpret laws", correct: false }, { text: "To represent states and make federal laws", correct: true }, { text: "To enforce laws", correct: false }] },
            { question: "What is an immigration policy?", answers: [{ text: "Rules about who can enter and stay in a country", correct: true }, { text: "Rules about trade", correct: false }, { text: "Rules about travel", correct: false }] },
            { question: "What is colonization?", answers: [{ text: "A military strategy", correct: false }, { text: "The establishment of new settlements or territories", correct: true }, { text: "A type of government", correct: false }] },
            { question: "What is the difference between a nation and a state?", answers: [{ text: "Nation = people with same culture, State = political organization", correct: true }, { text: "Nation is larger", correct: false }, { text: "They are the same", correct: false }] },

            { question: "What is the House of Representatives?", answers: [{ text: "A military group", correct: false }, { text: "A court system", correct: false }, { text: "A group that makes laws based on population", correct: true }] },
            { question: "What is Congress?", answers: [{ text: "The police force", correct: false }, { text: "The court system", correct: false }, { text: "The lawmaking branch of government", correct: true }] },
            { question: "What is the role of the President?", answers: [{ text: "To enforce laws and lead the country", correct: true }, { text: "To judge laws", correct: false }, { text: "To make laws only", correct: false }] },
            { question: "What is the role of the courts?", answers: [{ text: "To interpret laws", correct: true }, { text: "To enforce laws", correct: false }, { text: "To make laws", correct: false }] },
            { question: "What is a constitution?", answers: [{ text: "A list of citizens", correct: false }, { text: "A document that outlines government rules", correct: true }, { text: "A storybook", correct: false }] },

            { question: "What is citizenship?", answers: [{ text: "Traveling to a country", correct: false }, { text: "Being a legal member of a country", correct: true }, { text: "Visiting a place", correct: false }] },
            { question: "What is immigration?", answers: [{ text: "Leaving a country", correct: false }, { text: "Traveling for fun", correct: false }, { text: "Moving into a country to live", correct: true }] },
            { question: "What is emigration?", answers: [{ text: "Leaving a country to live elsewhere", correct: true }, { text: "Entering a country", correct: false }, { text: "Visiting a country", correct: false }] },
            { question: "What is a border?", answers: [{ text: "A city", correct: false }, { text: "A line that separates countries", correct: true }, { text: "A river", correct: false }] },
            { question: "What is a lawmaker?", answers: [{ text: "A person who creates laws", correct: true }, { text: "A judge", correct: false }, { text: "A police officer", correct: false }] },

            { question: "What is voting age?", answers: [{ text: "The legal age to vote", correct: true }, { text: "Any age", correct: false }, { text: "Only for leaders", correct: false }] },
            { question: "What is a political party?", answers: [{ text: "A school group", correct: false }, { text: "A group with similar ideas about government", correct: true }, { text: "A celebration", correct: false }] },
            { question: "What is a campaign?", answers: [{ text: "A law", correct: false }, { text: "A war", correct: false }, { text: "Activities to get elected", correct: true }] },
            { question: "What is a ballot?", answers: [{ text: "A meeting", correct: false }, { text: "A law", correct: false }, { text: "A paper or system used to vote", correct: true }] },
            { question: "What is a majority?", answers: [{ text: "Less than half", correct: false }, { text: "More than half", correct: true }, { text: "Exactly half", correct: false }] },

            { question: "What is a minority?", answers: [{ text: "Less than half", correct: true }, { text: "Exactly half", correct: false }, { text: "More than half", correct: false }] },
            { question: "What is public policy?", answers: [{ text: "Government plans and actions", correct: true }, { text: "A personal opinion", correct: false }, { text: "A private rule", correct: false }] },
            { question: "What is a reform?", answers: [{ text: "A change to improve something", correct: true }, { text: "A law only", correct: false }, { text: "Keeping things the same", correct: false }] },
            { question: "What is diplomacy?", answers: [{ text: "Working with other countries to solve problems", correct: true }, { text: "Making laws", correct: false }, { text: "Fighting wars", correct: false }] },
            { question: "What is an alliance?", answers: [{ text: "A partnership between countries", correct: true }, { text: "A border", correct: false }, { text: "A disagreement", correct: false }] }
        ]
    },
    science: {
        1: [
            { question: "What is the scientific method?", answers: [{ text: "A laboratory tool", correct: false }, { text: "Steps for testing ideas", correct: true }, { text: "A type of science", correct: false }] },
            { question: "What is an ecosystem?", answers: [{ text: "Only animals", correct: false }, { text: "Only plants", correct: false }, { text: "Community of organisms and their environment", correct: true }] },
            { question: "What is a food web?", answers: [{ text: "Animals eating plants", correct: false }, { text: "Multiple food chains connected", correct: true }, { text: "A single food chain", correct: false }] },
            { question: "What are decomposers?", answers: [{ text: "Producers", correct: false }, { text: "Organisms that break down dead material", correct: true }, { text: "Consumers", correct: false }] },
            { question: "What is biodiversity?", answers: [{ text: "Same species", correct: false }, { text: "One type of organism", correct: false }, { text: "Variety of life in an ecosystem", correct: true }] },

            { question: "What are producers?", answers: [{ text: "Organisms that make their own food", correct: true }, { text: "Animals that hunt", correct: false }, { text: "Organisms that decompose", correct: false }] },
            { question: "What are consumers?", answers: [{ text: "Organisms that eat other organisms", correct: true }, { text: "Decomposers", correct: false }, { text: "Plants only", correct: false }] },
            { question: "What is a habitat?", answers: [{ text: "A type of food", correct: false }, { text: "A weather pattern", correct: false }, { text: "The natural home of an organism", correct: true }] },
            { question: "What is a population?", answers: [{ text: "A single organism", correct: false }, { text: "A group of the same species in one area", correct: true }, { text: "Different species together", correct: false }] },
            { question: "What is a community?", answers: [{ text: "A single plant", correct: false }, { text: "Different populations living together", correct: true }, { text: "One species only", correct: false }] },

            { question: "What is a food chain?", answers: [{ text: "A plant system", correct: false }, { text: "A sequence of who eats whom", correct: true }, { text: "A group of animals", correct: false }] },
            { question: "What is energy in an ecosystem?", answers: [{ text: "Water only", correct: false }, { text: "Power from the sun used by organisms", correct: true }, { text: "Soil only", correct: false }] },
            { question: "What is the main source of energy for Earth?", answers: [{ text: "The soil", correct: false }, { text: "The Sun", correct: true }, { text: "The Moon", correct: false }] },
            { question: "What is adaptation?", answers: [{ text: "A weather change", correct: false }, { text: "A type of food", correct: false }, { text: "A trait that helps an organism survive", correct: true }] },
            { question: "What is extinction?", answers: [{ text: "When species grow", correct: false }, { text: "When a species no longer exists", correct: true }, { text: "When animals move", correct: false }] },

            { question: "What is a predator?", answers: [{ text: "An animal that hunts others", correct: true }, { text: "An animal that is hunted", correct: false }, { text: "A plant", correct: false }] },
            { question: "What is prey?", answers: [{ text: "An animal that hunts", correct: false }, { text: "A producer", correct: false }, { text: "An animal that is hunted", correct: true }] },
            { question: "What is camouflage?", answers: [{ text: "Blending in with surroundings", correct: true }, { text: "Making noise", correct: false }, { text: "Changing food", correct: false }] },
            { question: "What is a herbivore?", answers: [{ text: "An animal that eats plants", correct: true }, { text: "An animal that eats both", correct: false }, { text: "An animal that eats meat", correct: false }] },
            { question: "What is a carnivore?", answers: [{ text: "An animal that eats meat", correct: true }, { text: "An animal that eats both", correct: false }, { text: "An animal that eats plants", correct: false }] },

            { question: "What is an omnivore?", answers: [{ text: "Only plants", correct: false }, { text: "Only meat", correct: false }, { text: "An animal that eats plants and animals", correct: true }] },
            { question: "What is the environment?", answers: [{ text: "Everything around living things", correct: true }, { text: "Only plants", correct: false }, { text: "Only animals", correct: false }] },
            { question: "What is pollution?", answers: [{ text: "Clean air", correct: false }, { text: "Healthy soil", correct: false }, { text: "Harmful substances in the environment", correct: true }] },
            { question: "What is conservation?", answers: [{ text: "Protecting natural resources", correct: true }, { text: "Destroying habitats", correct: false }, { text: "Using everything quickly", correct: false }] },
            { question: "Why are ecosystems important?", answers: [{ text: "They are not important", correct: false }, { text: "Only animals need them", correct: false }, { text: "They support life on Earth", correct: true }] }
        ],
        2: [
            { question: "What are the planets?", answers: [{ text: "9 bodies", correct: false }, { text: "7 bodies", correct: false }, { text: "8 bodies orbiting the sun", correct: true }] },
            { question: "What is the largest planet?", answers: [{ text: "Jupiter", correct: true }, { text: "Saturn", correct: false }, { text: "Neptune", correct: false }] },
            { question: "What is the closest planet to the sun?", answers: [{ text: "Venus", correct: false }, { text: "Earth", correct: false }, { text: "Mercury", correct: true }] },
            { question: "What is the water cycle?", answers: [{ text: "Melting only", correct: false }, { text: "Freezing only", correct: false }, { text: "Evaporation, Condensation, Precipitation", correct: true }] },
            { question: "What is weather?", answers: [{ text: "Long-term patterns", correct: false }, { text: "Day-to-day atmospheric conditions", correct: true }, { text: "Climate", correct: false }] },

            { question: "What is climate?", answers: [{ text: "Long-term weather patterns", correct: true }, { text: "Daily weather", correct: false }, { text: "Wind only", correct: false }] },
            { question: "What is the sun?", answers: [{ text: "A star at the center of our solar system", correct: true }, { text: "A moon", correct: false }, { text: "A planet", correct: false }] },
            { question: "What is Earth?", answers: [{ text: "The planet we live on", correct: true }, { text: "A moon", correct: false }, { text: "A star", correct: false }] },
            { question: "What is the moon?", answers: [{ text: "A planet", correct: false }, { text: "Earth’s natural satellite", correct: true }, { text: "A star", correct: false }] },
            { question: "What is gravity?", answers: [{ text: "A type of energy", correct: false }, { text: "A force that pulls objects toward Earth", correct: true }, { text: "A gas", correct: false }] },

            { question: "What is precipitation?", answers: [{ text: "Only wind", correct: false }, { text: "Only heat", correct: false }, { text: "Rain, snow, sleet, or hail", correct: true }] },
            { question: "What is evaporation?", answers: [{ text: "Solid turning into liquid", correct: false }, { text: "Liquid turning into gas", correct: true }, { text: "Gas turning into liquid", correct: false }] },
            { question: "What is condensation?", answers: [{ text: "Liquid turning into gas", correct: false }, { text: "Solid turning into gas", correct: false }, { text: "Gas turning into liquid", correct: true }] },
            { question: "What is a cloud?", answers: [{ text: "Smoke", correct: false }, { text: "Dust", correct: false }, { text: "Tiny water droplets in the air", correct: true }] },
            { question: "What is wind?", answers: [{ text: "Still air", correct: false }, { text: "Water movement", correct: false }, { text: "Moving air", correct: true }] },

            { question: "What is temperature?", answers: [{ text: "How hot or cold something is", correct: true }, { text: "Rain amount", correct: false }, { text: "Air movement", correct: false }] },
            { question: "What tool measures temperature?", answers: [{ text: "Thermometer", correct: true }, { text: "Barometer", correct: false }, { text: "Compass", correct: false }] },
            { question: "What tool measures wind direction?", answers: [{ text: "Ruler", correct: false }, { text: "Weather vane", correct: true }, { text: "Thermometer", correct: false }] },
            { question: "What tool measures rainfall?", answers: [{ text: "Thermometer", correct: false }, { text: "Scale", correct: false }, { text: "Rain gauge", correct: true }] },
            { question: "What is a season?", answers: [{ text: "A time of year with certain weather", correct: true }, { text: "A single day", correct: false }, { text: "A type of storm", correct: false }] },

            { question: "How many seasons are there?", answers: [{ text: "Four", correct: true }, { text: "Three", correct: false }, { text: "Five", correct: false }] },
            { question: "Which season is the coldest?", answers: [{ text: "Summer", correct: false }, { text: "Spring", correct: false }, { text: "Winter", correct: true }] },
            { question: "Which season is the warmest?", answers: [{ text: "Fall", correct: false }, { text: "Summer", correct: true }, { text: "Winter", correct: false }] },
            { question: "What is lightning?", answers: [{ text: "A cloud", correct: false }, { text: "A flash of electricity in the sky", correct: true }, { text: "A type of rain", correct: false }] }
        ],
        3: [
            { question: "What is photosynthesis?", answers: [{ text: "Process where plants breathe", correct: false }, { text: "Process where plants make food using sunlight", correct: true }, { text: "Process of plant growth", correct: false }] },
            { question: "What are the four basic needs of animals?", answers: [{ text: "Only food and water", correct: false }, { text: "Food, water, shelter, and air", correct: true }, { text: "Only shelter", correct: false }] },
            { question: "What is erosion?", answers: [{ text: "Earthquake activity", correct: false }, { text: "The wearing down of Earth's surface", correct: true }, { text: "Creating new land", correct: false }] },
            { question: "What types of rocks are there?", answers: [{ text: "Hard and soft", correct: false }, { text: "Big and small", correct: false }, { text: "Igneous, Sedimentary, Metamorphic", correct: true }] },
            { question: "What is an adaptation?", answers: [{ text: "A food source", correct: false }, { text: "A habitat", correct: false }, { text: "A trait that helps an animal survive", correct: true }] },

            { question: "What is a plant?", answers: [{ text: "A living thing that makes its own food", correct: true }, { text: "An animal", correct: false }, { text: "A rock", correct: false }] },
            { question: "What do plants need to grow?", answers: [{ text: "Only water", correct: false }, { text: "Sunlight, water, air, and nutrients", correct: true }, { text: "Only sunlight", correct: false }] },
            { question: "What is a root?", answers: [{ text: "Part of a plant that absorbs water", correct: true }, { text: "Part that makes seeds", correct: false }, { text: "Part that makes food", correct: false }] },
            { question: "What is a stem?", answers: [{ text: "Supports the plant and carries water", correct: true }, { text: "Makes food", correct: false }, { text: "Absorbs sunlight", correct: false }] },
            { question: "What is a leaf?", answers: [{ text: "Part of a plant that makes food", correct: true }, { text: "Holds seeds", correct: false }, { text: "Absorbs water", correct: false }] },

            { question: "What is a flower?", answers: [{ text: "Part that makes roots", correct: false }, { text: "Part of a plant that helps reproduction", correct: true }, { text: "Part that absorbs water", correct: false }] },
            { question: "What is soil?", answers: [{ text: "Only sand", correct: false }, { text: "Top layer of Earth where plants grow", correct: true }, { text: "Only rocks", correct: false }] },
            { question: "What is weathering?", answers: [{ text: "Breaking down of rocks", correct: true }, { text: "Moving water", correct: false }, { text: "Building mountains", correct: false }] },
            { question: "What is a fossil?", answers: [{ text: "Remains of ancient plants or animals", correct: true }, { text: "A new plant", correct: false }, { text: "A type of rock only", correct: false }] },
            { question: "What is magma?", answers: [{ text: "Solid rock", correct: false }, { text: "Water", correct: false }, { text: "Molten rock under Earth's surface", correct: true }] },

            { question: "What is lava?", answers: [{ text: "Solid rock", correct: false }, { text: "Air", correct: false }, { text: "Molten rock on Earth's surface", correct: true }] },
            { question: "What is a volcano?", answers: [{ text: "An opening where lava comes out", correct: true }, { text: "A mountain only", correct: false }, { text: "A river", correct: false }] },
            { question: "What is a mineral?", answers: [{ text: "A plant", correct: false }, { text: "A natural, non-living solid", correct: true }, { text: "An animal", correct: false }] },
            { question: "What is an earthquake?", answers: [{ text: "Heavy rain", correct: false }, { text: "Strong wind", correct: false }, { text: "Shaking of Earth's surface", correct: true }] },
            { question: "What is a habitat?", answers: [{ text: "The home of an organism", correct: true }, { text: "A food chain", correct: false }, { text: "A rock", correct: false }] },

            { question: "What is a life cycle?", answers: [{ text: "A type of rock", correct: false }, { text: "Stages of growth of a living thing", correct: true }, { text: "A type of weather", correct: false }] },
            { question: "What is reproduction?", answers: [{ text: "Making more of the same kind", correct: true }, { text: "Growing bigger", correct: false }, { text: "Eating food", correct: false }] },
            { question: "What is energy?", answers: [{ text: "The ability to do work", correct: true }, { text: "A type of plant", correct: false }, { text: "A type of rock", correct: false }] },
            { question: "What is heat?", answers: [{ text: "A liquid", correct: false }, { text: "A solid", correct: false }, { text: "A form of energy that warms things", correct: true }] },
            { question: "What is light?", answers: [{ text: "A form of energy we can see", correct: true }, { text: "A gas", correct: false }, { text: "A solid object", correct: false }] }
        ],
        4: [
            { question: "What is the difference between weather and climate?", answers: [{ text: "Weather is short-term, climate is long-term patterns", correct: true }, { text: "Climate changes daily", correct: false }, { text: "They are the same", correct: false }] },
            { question: "What is a fossil?", answers: [{ text: "A type of rock", correct: false }, { text: "Remains or trace of an ancient organism", correct: true }, { text: "A type of animal", correct: false }] },
            { question: "What is the speed of light?", answers: [{ text: "About 500 miles per second", correct: false }, { text: "About 100 miles per second", correct: false }, { text: "About 186,000 miles per second", correct: true }] },
            { question: "What causes seasons?", answers: [{ text: "Earth's tilt as it orbits the sun", correct: true }, { text: "Moon's position", correct: false }, { text: "Distance from the sun", correct: false }] },
            { question: "What is a predator?", answers: [{ text: "An animal that hunts other animals", correct: true }, { text: "An animal that eats dead matter", correct: false }, { text: "An animal that eats plants", correct: false }] },

            { question: "What is prey?", answers: [{ text: "An animal that hunts", correct: false }, { text: "An animal that is hunted", correct: true }, { text: "A plant", correct: false }] },
            { question: "What is a herbivore?", answers: [{ text: "An animal that eats both", correct: false }, { text: "An animal that eats plants", correct: true }, { text: "An animal that eats meat", correct: false }] },
            { question: "What is a carnivore?", answers: [{ text: "An animal that eats meat", correct: true }, { text: "An animal that eats both", correct: false }, { text: "An animal that eats plants", correct: false }] },
            { question: "What is an omnivore?", answers: [{ text: "Only meat", correct: false }, { text: "An animal that eats plants and animals", correct: true }, { text: "Only plants", correct: false }] },
            { question: "What is an ecosystem?", answers: [{ text: "Only plants", correct: false }, { text: "Living and nonliving things interacting", correct: true }, { text: "Only animals", correct: false }] },

            { question: "What is a food chain?", answers: [{ text: "A sequence of energy transfer", correct: true }, { text: "A group of animals", correct: false }, { text: "A plant system", correct: false }] },
            { question: "What is energy?", answers: [{ text: "A plant", correct: false }, { text: "The ability to do work", correct: true }, { text: "A type of rock", correct: false }] },
            { question: "What is kinetic energy?", answers: [{ text: "Heat only", correct: false }, { text: "Stored energy", correct: false }, { text: "Energy of motion", correct: true }] },
            { question: "What is potential energy?", answers: [{ text: "Stored energy", correct: true }, { text: "Energy of motion", correct: false }, { text: "Light energy", correct: false }] },
            { question: "What is gravity?", answers: [{ text: "Force that pulls objects toward Earth", correct: true }, { text: "Pushes objects away", correct: false }, { text: "A type of energy", correct: false }] },

            { question: "What is friction?", answers: [{ text: "Force that speeds up movement", correct: false }, { text: "A type of energy", correct: false }, { text: "Force that slows movement", correct: true }] },
            { question: "What is a force?", answers: [{ text: "A material", correct: false }, { text: "A push or pull", correct: true }, { text: "A type of energy", correct: false }] },
            { question: "What is matter?", answers: [{ text: "Anything that has mass and takes up space", correct: true }, { text: "Only solids", correct: false }, { text: "Only liquids", correct: false }] },
            { question: "What are the three states of matter?", answers: [{ text: "Solid, liquid, gas", correct: true }, { text: "Hot, cold, warm", correct: false }, { text: "Big, medium, small", correct: false }] },
            { question: "What is a solid?", answers: [{ text: "Flows easily", correct: false }, { text: "Takes shape of container", correct: false }, { text: "Matter with a fixed shape", correct: true }] },

            { question: "What is a liquid?", answers: [{ text: "Has a fixed shape", correct: false }, { text: "Matter that takes the shape of its container", correct: true }, { text: "Has no volume", correct: false }] },
            { question: "What is a gas?", answers: [{ text: "Has fixed shape", correct: false }, { text: "Matter that spreads out to fill space", correct: true }, { text: "Has fixed volume", correct: false }] },
            { question: "What is evaporation?", answers: [{ text: "Solid to liquid", correct: false }, { text: "Liquid changing to gas", correct: true }, { text: "Gas to liquid", correct: false }] },
            { question: "What is condensation?", answers: [{ text: "Gas changing to liquid", correct: true }, { text: "Liquid to gas", correct: false }, { text: "Solid to gas", correct: false }] },
        ],
        5: [
            { question: "What is the nitrogen cycle?", answers: [{ text: "A type of reaction", correct: false }, { text: "A gas explosion", correct: false }, { text: "The movement of nitrogen through the environment", correct: true }] },
            { question: "What is oxidation?", answers: [{ text: "Rusting only", correct: false }, { text: "Burning only", correct: false }, { text: "Chemical reaction involving oxygen", correct: true }] },
            { question: "What are the steps of cellular respiration?", answers: [{ text: "Photosynthesis steps", correct: false }, { text: "Digestion steps", correct: false }, { text: "Glycolysis, Citric Acid Cycle, Electron Transport", correct: true }] },
            { question: "What is genetic variation?", answers: [{ text: "Differences in traits among individuals", correct: true }, { text: "Mutations only", correct: false }, { text: "Same traits for all", correct: false }] },
            { question: "What is an ecosystem's carrying capacity?", answers: [{ text: "The maximum population an area can support", correct: true }, { text: "The amount of food available", correct: false }, { text: "The size of the area", correct: false }] },

            { question: "What is photosynthesis?", answers: [{ text: "Plants making food using sunlight", correct: true }, { text: "Water cycle step", correct: false }, { text: "Animals breathing", correct: false }] },
            { question: "What is a cell?", answers: [{ text: "An organ", correct: false }, { text: "The basic unit of life", correct: true }, { text: "A type of tissue", correct: false }] },
            { question: "What is a tissue?", answers: [{ text: "A whole organism", correct: false }, { text: "A group of similar cells working together", correct: true }, { text: "A single cell", correct: false }] },
            { question: "What is an organ?", answers: [{ text: "A type of molecule", correct: false }, { text: "A group of tissues working together", correct: true }, { text: "A single cell", correct: false }] },
            { question: "What is an organism?", answers: [{ text: "A nonliving thing", correct: false }, { text: "A living thing", correct: true }, { text: "A chemical", correct: false }] },

            { question: "What is a habitat?", answers: [{ text: "A climate pattern", correct: false }, { text: "A type of food", correct: false }, { text: "The place where an organism lives", correct: true }] },
            { question: "What is a niche?", answers: [{ text: "The role of an organism in its environment", correct: true }, { text: "Its color", correct: false }, { text: "Its size", correct: false }] },
            { question: "What is competition?", answers: [{ text: "Organisms fighting for resources", correct: true }, { text: "Helping each other", correct: false }, { text: "Sleeping", correct: false }] },
            { question: "What is symbiosis?", answers: [{ text: "A chemical reaction", correct: false }, { text: "A type of weather", correct: false }, { text: "A close relationship between organisms", correct: true }] },
            { question: "What is mutualism?", answers: [{ text: "Both organisms benefit", correct: true }, { text: "One benefits, one harmed", correct: false }, { text: "Both harmed", correct: false }] },

            { question: "What is commensalism?", answers: [{ text: "One benefits, the other is unaffected", correct: true }, { text: "Both benefit", correct: false }, { text: "Both harmed", correct: false }] },
            { question: "What is parasitism?", answers: [{ text: "Neither benefits", correct: false }, { text: "Both benefit", correct: false }, { text: "One benefits, the other is harmed", correct: true }] },
            { question: "What is a food pyramid?", answers: [{ text: "A diagram showing energy levels", correct: true }, { text: "A building", correct: false }, { text: "A plant structure", correct: false }] },
            { question: "What is energy transfer?", answers: [{ text: "Movement of energy through organisms", correct: true }, { text: "Stopping energy", correct: false }, { text: "Creation of energy", correct: false }] },
            { question: "What is a renewable resource?", answers: [{ text: "A resource that can be replaced", correct: true }, { text: "A resource that runs out", correct: false }, { text: "A type of rock", correct: false }] },

            { question: "What is a nonrenewable resource?", answers: [{ text: "A resource that cannot be replaced quickly", correct: true }, { text: "A plant resource", correct: false }, { text: "Always available", correct: false }] },
            { question: "What is pollution?", answers: [{ text: "Clean air", correct: false }, { text: "Healthy water", correct: false }, { text: "Harmful substances in the environment", correct: true }] },
            { question: "What is conservation?", answers: [{ text: "Protecting natural resources", correct: true }, { text: "Using all resources", correct: false }, { text: "Destroying habitats", correct: false }] },
            { question: "What is climate change?", answers: [{ text: "Seasonal change only", correct: false }, { text: "Daily weather changes", correct: false }, { text: "Long-term changes in Earth's climate", correct: true }] },

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