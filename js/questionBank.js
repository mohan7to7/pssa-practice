// Question bank organized by grade, subject, and level
const questionBank = {
    K: {
        math: {
            1: [
                { question: "How many dots do you see? ●●●", answers: [{ text: "2", correct: false }, { text: "3", correct: true }, { text: "4", correct: false }, { text: "5", correct: false }] },
                { question: "Which is bigger? 🐘 or 🐁", answers: [{ text: "🐁", correct: false }, { text: "🐘", correct: true }] },
                { question: "Count the apples: 🍎🍎🍎🍎", answers: [{ text: "3", correct: false }, { text: "4", correct: true }, { text: "5", correct: false }, { text: "2", correct: false }] },
                { question: "What number comes after 7? 1, 2, 3, 4, 5, 6, 7, ?", answers: [{ text: "6", correct: false }, { text: "8", correct: true }, { text: "9", correct: false }, { text: "7", correct: false }] },
                { question: "How many fingers on one hand? ✋", answers: [{ text: "4", correct: false }, { text: "5", correct: true }, { text: "6", correct: false }, { text: "3", correct: false }] },
                { question: "Which number is bigger: 2 or 5?", answers: [{ text: "2", correct: false }, { text: "5", correct: true }] },
                { question: "Count the stars: ⭐⭐⭐", answers: [{ text: "2", correct: false }, { text: "3", correct: true }, { text: "4", correct: false }, { text: "1", correct: false }] },
                { question: "What comes before 3? 1, 2, ?", answers: [{ text: "1", correct: false }, { text: "2", correct: true }, { text: "4", correct: false }, { text: "3", correct: false }] },
                { question: "How many wheels on a bicycle? 🚲", answers: [{ text: "2", correct: true }, { text: "3", correct: false }, { text: "4", correct: false }, { text: "1", correct: false }] },
                { question: "Which is smaller? 🐘 or 🐁", answers: [{ text: "🐘", correct: false }, { text: "🐁", correct: true }] },
                { question: "Count the balloons: 🎈🎈🎈🎈🎈", answers: [{ text: "4", correct: false }, { text: "5", correct: true }, { text: "6", correct: false }, { text: "3", correct: false }] },
                { question: "What number is zero? 0", answers: [{ text: "One", correct: false }, { text: "Zero", correct: true }, { text: "Two", correct: false }, { text: "Three", correct: false }] },
                { question: "How many eyes do you have? 👀", answers: [{ text: "1", correct: false }, { text: "2", correct: true }, { text: "3", correct: false }, { text: "4", correct: false }] },
                { question: "Which number comes first: 1 or 2?", answers: [{ text: "1", correct: true }, { text: "2", correct: false }] },
                { question: "Count the hearts: ❤️❤️❤️❤️", answers: [{ text: "3", correct: false }, { text: "4", correct: true }, { text: "5", correct: false }, { text: "2", correct: false }] }
            ],
            2: [
                { question: "What comes after 5? 1, 2, 3, 4, 5, ?", answers: [{ text: "4", correct: false }, { text: "6", correct: true }, { text: "7", correct: false }] },
                {
                    "question": "What comes after 10? 6, 7, 8, 9, 10, ?",
                    "answers": [
                        { "text": "11", "correct": true },
                        { "text": "9", "correct": false },
                        { "text": "12", "correct": false }
                    ]
                },
                {
                    "question": "What comes after 3? 0, 1, 2, 3, ?",
                    "answers": [
                        { "text": "4", "correct": true },
                        { "text": "2", "correct": false },
                        { "text": "5", "correct": false }
                    ]
                },
                {
                    "question": "What comes after 15? 11, 12, 13, 14, 15, ?",
                    "answers": [
                        { "text": "16", "correct": true },
                        { "text": "14", "correct": false },
                        { "text": "17", "correct": false }
                    ]
                },
                {
                    "question": "What comes after 20? 16, 17, 18, 19, 20, ?",
                    "answers": [
                        { "text": "21", "correct": true },
                        { "text": "19", "correct": false },
                        { "text": "22", "correct": false }
                    ]
                },
                {
                    "question": "What comes after 7? 3, 4, 5, 6, 7, ?",
                    "answers": [
                        { "text": "8", "correct": true },
                        { "text": "6", "correct": false },
                        { "text": "9", "correct": false }
                    ]
                },
                {
                    "question": "What comes after 12? 8, 9, 10, 11, 12, ?",
                    "answers": [
                        { "text": "13", "correct": true },
                        { "text": "11", "correct": false },
                        { "text": "14", "correct": false }
                    ]
                },
                {
                    "question": "What comes after 9? 5, 6, 7, 8, 9, ?",
                    "answers": [
                        { "text": "10", "correct": true },
                        { "text": "8", "correct": false },
                        { "text": "11", "correct": false }
                    ]
                },
                {
                    "question": "What comes after 25? 21, 22, 23, 24, 25, ?",
                    "answers": [
                        { "text": "26", "correct": true },
                        { "text": "24", "correct": false },
                        { "text": "27", "correct": false }
                    ]
                },
                {
                    "question": "What comes after 30? 26, 27, 28, 29, 30, ?",
                    "answers": [
                        { "text": "31", "correct": true },
                        { "text": "29", "correct": false },
                        { "text": "32", "correct": false }
                    ]
                },
                {
                    "question": "What comes after 2? 0, 1, 2, ?",
                    "answers": [
                        { "text": "3", "correct": true },
                        { "text": "1", "correct": false },
                        { "text": "4", "correct": false }
                    ]
                },
                {
                    "question": "What comes after 18? 14, 15, 16, 17, 18, ?",
                    "answers": [
                        { "text": "19", "correct": true },
                        { "text": "17", "correct": false },
                        { "text": "20", "correct": false }
                    ]
                },
                {
                    "question": "What comes after 22? 18, 19, 20, 21, 22, ?",
                    "answers": [
                        { "text": "23", "correct": true },
                        { "text": "21", "correct": false },
                        { "text": "24", "correct": false }
                    ]
                },
                {
                    "question": "What comes after 14? 10, 11, 12, 13, 14, ?",
                    "answers": [
                        { "text": "15", "correct": true },
                        { "text": "13", "correct": false },
                        { "text": "16", "correct": false }
                    ]
                },
                {
                    "question": "What comes after 40? 36, 37, 38, 39, 40, ?",
                    "answers": [
                        { "text": "41", "correct": true },
                        { "text": "39", "correct": false },
                        { "text": "42", "correct": false }
                    ]
                }
            ]
        },
        english: {
            1: [
                { question: "Which letter comes first? A or B?", answers: [{ text: "A", correct: true }, { text: "B", correct: false }] },
                {
                    "question": "Which letter comes first? A or B?",
                    "answers": [
                        { "text": "A", "correct": true },
                        { "text": "B", "correct": false }
                    ]
                },
                {
                    "question": "Which letter comes first? C or D?",
                    "answers": [
                        { "text": "C", "correct": true },
                        { "text": "D", "correct": false }
                    ]
                },
                {
                    "question": "Which letter comes first? E or F?",
                    "answers": [
                        { "text": "E", "correct": true },
                        { "text": "F", "correct": false }
                    ]
                },
                {
                    "question": "Which letter comes first? G or H?",
                    "answers": [
                        { "text": "G", "correct": true },
                        { "text": "H", "correct": false }
                    ]
                },
                {
                    "question": "Which letter comes first? I or J?",
                    "answers": [
                        { "text": "I", "correct": true },
                        { "text": "J", "correct": false }
                    ]
                },
                {
                    "question": "Which letter comes first? K or L?",
                    "answers": [
                        { "text": "K", "correct": true },
                        { "text": "L", "correct": false }
                    ]
                },
                {
                    "question": "Which letter comes first? M or N?",
                    "answers": [
                        { "text": "M", "correct": true },
                        { "text": "N", "correct": false }
                    ]
                },
                {
                    "question": "Which letter comes first? O or P?",
                    "answers": [
                        { "text": "O", "correct": true },
                        { "text": "P", "correct": false }
                    ]
                },
                {
                    "question": "Which letter comes first? Q or R?",
                    "answers": [
                        { "text": "Q", "correct": true },
                        { "text": "R", "correct": false }
                    ]
                },
                {
                    "question": "Which letter comes first? S or T?",
                    "answers": [
                        { "text": "S", "correct": true },
                        { "text": "T", "correct": false }
                    ]
                },
                {
                    "question": "Which letter comes first? U or V?",
                    "answers": [
                        { "text": "U", "correct": true },
                        { "text": "V", "correct": false }
                    ]
                },
                {
                    "question": "Which letter comes first? W or X?",
                    "answers": [
                        { "text": "W", "correct": true },
                        { "text": "X", "correct": false }
                    ]
                },
                {
                    "question": "Which letter comes first? Y or Z?",
                    "answers": [
                        { "text": "Y", "correct": true },
                        { "text": "Z", "correct": false }
                    ]
                },
                {
                    "question": "Which letter comes first? B or C?",
                    "answers": [
                        { "text": "B", "correct": true },
                        { "text": "C", "correct": false }
                    ]
                }
            ],
            2: [
                { question: "Which word rhymes with 'cat'?", answers: [{ text: "dog", correct: false }, { text: "hat", correct: true }, { text: "tree", correct: false }] },
                {
                    "question": "Which word rhymes with 'dog'?",
                    "answers": [
                        { "text": "log", "correct": true },
                        { "text": "cat", "correct": false },
                        { "text": "pen", "correct": false }
                    ]
                },
                {
                    "question": "Which word rhymes with 'sun'?",
                    "answers": [
                        { "text": "run", "correct": true },
                        { "text": "bed", "correct": false },
                        { "text": "cup", "correct": false }
                    ]
                },
                {
                    "question": "Which word rhymes with 'ball'?",
                    "answers": [
                        { "text": "wall", "correct": true },
                        { "text": "tree", "correct": false },
                        { "text": "dog", "correct": false }
                    ]
                },
                {
                    "question": "Which word rhymes with 'pen'?",
                    "answers": [
                        { "text": "hen", "correct": true },
                        { "text": "cup", "correct": false },
                        { "text": "ball", "correct": false }
                    ]
                },
                {
                    "question": "Which word rhymes with 'book'?",
                    "answers": [
                        { "text": "look", "correct": true },
                        { "text": "chair", "correct": false },
                        { "text": "pen", "correct": false }
                    ]
                },
                {
                    "question": "Which word rhymes with 'tree'?",
                    "answers": [
                        { "text": "bee", "correct": true },
                        { "text": "car", "correct": false },
                        { "text": "sun", "correct": false }
                    ]
                },
                {
                    "question": "Which word rhymes with 'car'?",
                    "answers": [
                        { "text": "far", "correct": true },
                        { "text": "bed", "correct": false },
                        { "text": "cup", "correct": false }
                    ]
                },
                {
                    "question": "Which word rhymes with 'bed'?",
                    "answers": [
                        { "text": "red", "correct": true },
                        { "text": "dog", "correct": false },
                        { "text": "tree", "correct": false }
                    ]
                },
                {
                    "question": "Which word rhymes with 'light'?",
                    "answers": [
                        { "text": "night", "correct": true },
                        { "text": "day", "correct": false },
                        { "text": "sun", "correct": false }
                    ]
                },
                {
                    "question": "Which word rhymes with 'play'?",
                    "answers": [
                        { "text": "day", "correct": true },
                        { "text": "dog", "correct": false },
                        { "text": "pen", "correct": false }
                    ]
                },
                {
                    "question": "Which word rhymes with 'cake'?",
                    "answers": [
                        { "text": "lake", "correct": true },
                        { "text": "tree", "correct": false },
                        { "text": "sun", "correct": false }
                    ]
                },
                {
                    "question": "Which word rhymes with 'fish'?",
                    "answers": [
                        { "text": "dish", "correct": true },
                        { "text": "car", "correct": false },
                        { "text": "pen", "correct": false }
                    ]
                },
                {
                    "question": "Which word rhymes with 'star'?",
                    "answers": [
                        { "text": "far", "correct": true },
                        { "text": "bed", "correct": false },
                        { "text": "cup", "correct": false }
                    ]
                },
                {
                    "question": "Which word rhymes with 'blue'?",
                    "answers": [
                        { "text": "shoe", "correct": true },
                        { "text": "dog", "correct": false },
                        { "text": "tree", "correct": false }
                    ]
                }
            ]
        },
        social: {
            1: [
                { question: "What color is the sky?", answers: [{ text: "Green", correct: false }, { text: "Blue", correct: true }, { text: "Red", correct: false }] },
                {
                    "question": "What color is grass?",
                    "answers": [
                        { "text": "Green", "correct": true },
                        { "text": "Blue", "correct": false },
                        { "text": "Red", "correct": false }
                    ]
                },
                {
                    "question": "What color is a banana?",
                    "answers": [
                        { "text": "Yellow", "correct": true },
                        { "text": "Purple", "correct": false },
                        { "text": "Blue", "correct": false }
                    ]
                },
                {
                    "question": "What color is an apple (common)?",
                    "answers": [
                        { "text": "Red", "correct": true },
                        { "text": "Blue", "correct": false },
                        { "text": "Black", "correct": false }
                    ]
                },
                {
                    "question": "What color is coal?",
                    "answers": [
                        { "text": "Black", "correct": true },
                        { "text": "White", "correct": false },
                        { "text": "Pink", "correct": false }
                    ]
                },
                {
                    "question": "What color is milk?",
                    "answers": [
                        { "text": "White", "correct": true },
                        { "text": "Green", "correct": false },
                        { "text": "Brown", "correct": false }
                    ]
                },
                {
                    "question": "What color is an orange?",
                    "answers": [
                        { "text": "Orange", "correct": true },
                        { "text": "Blue", "correct": false },
                        { "text": "Purple", "correct": false }
                    ]
                },
                {
                    "question": "What color is the sun often drawn as?",
                    "answers": [
                        { "text": "Yellow", "correct": true },
                        { "text": "Green", "correct": false },
                        { "text": "Black", "correct": false }
                    ]
                },
                {
                    "question": "What color are strawberries?",
                    "answers": [
                        { "text": "Red", "correct": true },
                        { "text": "Blue", "correct": false },
                        { "text": "Yellow", "correct": false }
                    ]
                },
                {
                    "question": "What color is chocolate?",
                    "answers": [
                        { "text": "Brown", "correct": true },
                        { "text": "Blue", "correct": false },
                        { "text": "Green", "correct": false }
                    ]
                },
                {
                    "question": "What color is a stop sign?",
                    "answers": [
                        { "text": "Red", "correct": true },
                        { "text": "Blue", "correct": false },
                        { "text": "Green", "correct": false }
                    ]
                },
                {
                    "question": "What color is the ocean?",
                    "answers": [
                        { "text": "Blue", "correct": true },
                        { "text": "Red", "correct": false },
                        { "text": "Pink", "correct": false }
                    ]
                },
                {
                    "question": "What color is a pumpkin?",
                    "answers": [
                        { "text": "Orange", "correct": true },
                        { "text": "Purple", "correct": false },
                        { "text": "White", "correct": false }
                    ]
                },
                {
                    "question": "What color are clouds usually?",
                    "answers": [
                        { "text": "White", "correct": true },
                        { "text": "Black", "correct": false },
                        { "text": "Green", "correct": false }
                    ]
                },
                {
                    "question": "What color is a lemon?",
                    "answers": [
                        { "text": "Yellow", "correct": true },
                        { "text": "Blue", "correct": false },
                        { "text": "Red", "correct": false }
                    ]
                }


            ],
            2: [
                { question: "How many seasons are there?", answers: [{ text: "2", correct: false }, { text: "3", correct: false }, { text: "4", correct: true }] },
                {
                    "question": "How many days are there in a week?",
                    "answers": [
                        { "text": "5", "correct": false },
                        { "text": "6", "correct": false },
                        { "text": "7", "correct": true }
                    ]
                },
                {
                    "question": "How many months are there in a year?",
                    "answers": [
                        { "text": "10", "correct": false },
                        { "text": "11", "correct": false },
                        { "text": "12", "correct": true }
                    ]
                },
                {
                    "question": "How many legs does a spider have?",
                    "answers": [
                        { "text": "6", "correct": false },
                        { "text": "7", "correct": false },
                        { "text": "8", "correct": true }
                    ]
                },
                {
                    "question": "How many hours are there in a day?",
                    "answers": [
                        { "text": "12", "correct": false },
                        { "text": "18", "correct": false },
                        { "text": "24", "correct": true }
                    ]
                },
                {
                    "question": "How many continents are there?",
                    "answers": [
                        { "text": "5", "correct": false },
                        { "text": "6", "correct": false },
                        { "text": "7", "correct": true }
                    ]
                },
                {
                    "question": "How many sides does a triangle have?",
                    "answers": [
                        { "text": "2", "correct": false },
                        { "text": "4", "correct": false },
                        { "text": "3", "correct": true }
                    ]
                },
                {
                    "question": "How many wheels does a bicycle have?",
                    "answers": [
                        { "text": "1", "correct": false },
                        { "text": "3", "correct": false },
                        { "text": "2", "correct": true }
                    ]
                },
                {
                    "question": "How many fingers are on one hand?",
                    "answers": [
                        { "text": "4", "correct": false },
                        { "text": "6", "correct": false },
                        { "text": "5", "correct": true }
                    ]
                },
                {
                    "question": "How many letters are there in the English alphabet?",
                    "answers": [
                        { "text": "24", "correct": false },
                        { "text": "25", "correct": false },
                        { "text": "26", "correct": true }
                    ]
                },
                {
                    "question": "How many colors are there in a rainbow?",
                    "answers": [
                        { "text": "5", "correct": false },
                        { "text": "6", "correct": false },
                        { "text": "7", "correct": true }
                    ]
                },
                {
                    "question": "How many legs does a dog have?",
                    "answers": [
                        { "text": "2", "correct": false },
                        { "text": "3", "correct": false },
                        { "text": "4", "correct": true }
                    ]
                },
                {
                    "question": "How many days are there in a weekend?",
                    "answers": [
                        { "text": "1", "correct": false },
                        { "text": "3", "correct": false },
                        { "text": "2", "correct": true }
                    ]
                },
                {
                    "question": "How many eyes does a human have?",
                    "answers": [
                        { "text": "1", "correct": false },
                        { "text": "3", "correct": false },
                        { "text": "2", "correct": true }
                    ]
                },
                {
                    "question": "How many sides does a square have?",
                    "answers": [
                        { "text": "3", "correct": false },
                        { "text": "5", "correct": false },
                        { "text": "4", "correct": true }
                    ]
                }
            ]
        },
        science: {
            1: [
                { question: "Do birds have wings?", answers: [{ text: "Yes", correct: true }, { text: "No", correct: false }] },
                {
                    "question": "Do cats have fur?",
                    "answers": [
                        { "text": "Yes", "correct": true },
                        { "text": "No", "correct": false }
                    ]
                },
                {
                    "question": "Do fish live on land?",
                    "answers": [
                        { "text": "Yes", "correct": false },
                        { "text": "No", "correct": true }
                    ]
                },
                {
                    "question": "Do humans need water to survive?",
                    "answers": [
                        { "text": "Yes", "correct": true },
                        { "text": "No", "correct": false }
                    ]
                },
                {
                    "question": "Do birds fly?",
                    "answers": [
                        { "text": "Yes", "correct": true },
                        { "text": "No", "correct": false }
                    ]
                },
                {
                    "question": "Do snakes have legs?",
                    "answers": [
                        { "text": "Yes", "correct": false },
                        { "text": "No", "correct": true }
                    ]
                },
                {
                    "question": "Do plants need sunlight to grow?",
                    "answers": [
                        { "text": "Yes", "correct": true },
                        { "text": "No", "correct": false }
                    ]
                },
                {
                    "question": "Do elephants have trunks?",
                    "answers": [
                        { "text": "Yes", "correct": true },
                        { "text": "No", "correct": false }
                    ]
                },
                {
                    "question": "Do cars fly in the sky?",
                    "answers": [
                        { "text": "Yes", "correct": false },
                        { "text": "No", "correct": true }
                    ]
                },
                {
                    "question": "Do bees make honey?",
                    "answers": [
                        { "text": "Yes", "correct": true },
                        { "text": "No", "correct": false }
                    ]
                },
                {
                    "question": "Do fish breathe underwater?",
                    "answers": [
                        { "text": "Yes", "correct": true },
                        { "text": "No", "correct": false }
                    ]
                },
                {
                    "question": "Do dogs lay eggs?",
                    "answers": [
                        { "text": "Yes", "correct": false },
                        { "text": "No", "correct": true }
                    ]
                },
                {
                    "question": "Do humans have hearts?",
                    "answers": [
                        { "text": "Yes", "correct": true },
                        { "text": "No", "correct": false }
                    ]
                },
                {
                    "question": "Do trees grow from seeds?",
                    "answers": [
                        { "text": "Yes", "correct": true },
                        { "text": "No", "correct": false }
                    ]
                },
                {
                    "question": "Do whales live in the ocean?",
                    "answers": [
                        { "text": "Yes", "correct": true },
                        { "text": "No", "correct": false }
                    ]
                }


            ],
            2: [
                { question: "Can fish live in water?", answers: [{ text: "Yes", correct: true }, { text: "No", correct: false }] },

                {
                    "question": "Can birds fly in the sky?",
                    "answers": [
                        { "text": "Yes", "correct": true },
                        { "text": "No", "correct": false }
                    ]
                },
                {
                    "question": "Can humans breathe underwater without equipment?",
                    "answers": [
                        { "text": "Yes", "correct": false },
                        { "text": "No", "correct": true }
                    ]
                },
                {
                    "question": "Can cats climb trees?",
                    "answers": [
                        { "text": "Yes", "correct": true },
                        { "text": "No", "correct": false }
                    ]
                },
                {
                    "question": "Can plants grow without sunlight?",
                    "answers": [
                        { "text": "Yes", "correct": false },
                        { "text": "No", "correct": true }
                    ]
                },
                {
                    "question": "Can dogs hear better than humans?",
                    "answers": [
                        { "text": "Yes", "correct": true },
                        { "text": "No", "correct": false }
                    ]
                },
                {
                    "question": "Can fish walk on land?",
                    "answers": [
                        { "text": "Yes", "correct": false },
                        { "text": "No", "correct": true }
                    ]
                },
                {
                    "question": "Can trees produce oxygen?",
                    "answers": [
                        { "text": "Yes", "correct": true },
                        { "text": "No", "correct": false }
                    ]
                },
                {
                    "question": "Can humans live without water for a long time?",
                    "answers": [
                        { "text": "Yes", "correct": false },
                        { "text": "No", "correct": true }
                    ]
                },
                {
                    "question": "Can bees make honey?",
                    "answers": [
                        { "text": "Yes", "correct": true },
                        { "text": "No", "correct": false }
                    ]
                },
                {
                    "question": "Can snakes run on legs?",
                    "answers": [
                        { "text": "Yes", "correct": false },
                        { "text": "No", "correct": true }
                    ]
                },
                {
                    "question": "Can the sun be seen at night?",
                    "answers": [
                        { "text": "Yes", "correct": false },
                        { "text": "No", "correct": true }
                    ]
                },
                {
                    "question": "Can elephants swim?",
                    "answers": [
                        { "text": "Yes", "correct": true },
                        { "text": "No", "correct": false }
                    ]
                },
                {
                    "question": "Can computers think like humans?",
                    "answers": [
                        { "text": "Yes", "correct": false },
                        { "text": "No", "correct": true }
                    ]
                },
                {
                    "question": "Can ice melt in heat?",
                    "answers": [
                        { "text": "Yes", "correct": true },
                        { "text": "No", "correct": false }
                    ]
                }


            ]
        }
    },
    1: {
        math: {
            1: [
                { question: "What is 2 + 1?", answers: [{ text: "2", correct: false }, { text: "3", correct: true }, { text: "4", correct: false }] },
                { question: "What is 5 - 2?", answers: [{ text: "2", correct: false }, { text: "3", correct: true }, { text: "4", correct: false }] },
                { question: "What is 3 + 4?", answers: [{ text: "6", correct: false }, { text: "7", correct: true }, { text: "8", correct: false }] },
                { question: "What is 8 - 3?", answers: [{ text: "4", correct: false }, { text: "5", correct: true }, { text: "6", correct: false }] },
                { question: "What is 6 + 2?", answers: [{ text: "7", correct: false }, { text: "8", correct: true }, { text: "9", correct: false }] },
                { question: "What is 9 - 4?", answers: [{ text: "4", correct: false }, { text: "5", correct: true }, { text: "6", correct: false }] },
                { question: "What is 4 + 5?", answers: [{ text: "8", correct: false }, { text: "9", correct: true }, { text: "10", correct: false }] },
                { question: "What is 10 - 5?", answers: [{ text: "4", correct: false }, { text: "5", correct: true }, { text: "6", correct: false }] },
                { question: "What is 7 + 2?", answers: [{ text: "8", correct: false }, { text: "9", correct: true }, { text: "10", correct: false }] },
                { question: "What is 7 - 3?", answers: [{ text: "3", correct: false }, { text: "4", correct: true }, { text: "5", correct: false }] },
                { question: "What is 5 + 3?", answers: [{ text: "7", correct: false }, { text: "8", correct: true }, { text: "9", correct: false }] },
                { question: "What is 6 - 2?", answers: [{ text: "3", correct: false }, { text: "4", correct: true }, { text: "5", correct: false }] },
                { question: "What is 8 + 1?", answers: [{ text: "8", correct: false }, { text: "9", correct: true }, { text: "10", correct: false }] },
                { question: "What is 4 - 1?", answers: [{ text: "2", correct: false }, { text: "3", correct: true }, { text: "4", correct: false }] },
                { question: "What is 2 + 2?", answers: [{ text: "3", correct: false }, { text: "4", correct: true }, { text: "5", correct: false }] }
            ],
            2: [
                { question: "What is 3 + 3?", answers: [{ text: "5", correct: false }, { text: "6", correct: true }, { text: "7", correct: false }] },
                { question: "What is 10 - 3?", answers: [{ text: "6", correct: false }, { text: "7", correct: true }, { text: "8", correct: false }] },
                { question: "What is 5 + 5?", answers: [{ text: "9", correct: false }, { text: "10", correct: true }, { text: "11", correct: false }] },
                { question: "What is 12 - 5?", answers: [{ text: "6", correct: false }, { text: "7", correct: true }, { text: "8", correct: false }] },
                { question: "What is 8 + 4?", answers: [{ text: "11", correct: false }, { text: "12", correct: true }, { text: "13", correct: false }] },
                { question: "What is 15 - 6?", answers: [{ text: "8", correct: false }, { text: "9", correct: true }, { text: "10", correct: false }] },
                { question: "What is 7 + 6?", answers: [{ text: "12", correct: false }, { text: "13", correct: true }, { text: "14", correct: false }] },
                { question: "What is 14 - 7?", answers: [{ text: "6", correct: false }, { text: "7", correct: true }, { text: "8", correct: false }] },
                { question: "What is 9 + 3?", answers: [{ text: "11", correct: false }, { text: "12", correct: true }, { text: "13", correct: false }] },
                { question: "What is 11 - 4?", answers: [{ text: "6", correct: false }, { text: "7", correct: true }, { text: "8", correct: false }] },
                { question: "What is 6 + 6?", answers: [{ text: "11", correct: false }, { text: "12", correct: true }, { text: "13", correct: false }] },
                { question: "What is 13 - 6?", answers: [{ text: "6", correct: false }, { text: "7", correct: true }, { text: "8", correct: false }] },
                { question: "What is 4 + 8?", answers: [{ text: "11", correct: false }, { text: "12", correct: true }, { text: "13", correct: false }] },
                { question: "What is 16 - 8?", answers: [{ text: "7", correct: false }, { text: "8", correct: true }, { text: "9", correct: false }] },
                { question: "What is 9 + 8?", answers: [{ text: "16", correct: false }, { text: "17", correct: true }, { text: "18", correct: false }] }
            ]
        },
        english: {
            1: [
                { question: "Which word starts with 'S'?", answers: [{ text: "Apple", correct: false }, { text: "Sun", correct: true }, { text: "Dog", correct: false }] },
                { question: "Which word starts with 'C'?", answers: [{ text: "Ball", correct: false }, { text: "Cat", correct: true }, { text: "Dog", correct: false }] },
                { question: "Which word starts with 'D'?", answers: [{ text: "Cat", correct: false }, { text: "Ball", correct: false }, { text: "Dog", correct: true }] },
                { question: "Which word starts with 'B'?", answers: [{ text: "Apple", correct: false }, { text: "Ball", correct: true }, { text: "Cat", correct: false }] },
                { question: "Which word starts with 'A'?", answers: [{ text: "Apple", correct: true }, { text: "Ball", correct: false }, { text: "Cat", correct: false }] },
                { question: "Which word ends with 't'?", answers: [{ text: "Dog", correct: false }, { text: "Cat", correct: true }, { text: "Ball", correct: false }] },
                { question: "Which word ends with 'g'?", answers: [{ text: "Cat", correct: false }, { text: "Ball", correct: false }, { text: "Dog", correct: true }] },
                { question: "Which word is a color?", answers: [{ text: "Happy", correct: false }, { text: "Blue", correct: true }, { text: "Run", correct: false }] },
                { question: "Which word is an animal?", answers: [{ text: "Tree", correct: false }, { text: "Cat", correct: true }, { text: "Happy", correct: false }] },
                { question: "Is 'run' a noun or verb?", answers: [{ text: "Noun", correct: false }, { text: "Verb", correct: true }, { text: "Both", correct: false }] },
                { question: "What is the past tense of 'run'?", answers: [{ text: "Running", correct: false }, { text: "Ran", correct: true }, { text: "Will run", correct: false }] },
                { question: "Which sentence is correct?", answers: [{ text: "I goes", correct: false }, { text: "I go", correct: true }, { text: "I going", correct: false }] },
                { question: "How many letters in 'cat'?", answers: [{ text: "2", correct: false }, { text: "3", correct: true }, { text: "4", correct: false }] },
                { question: "Which word rhymes with 'cat'?", answers: [{ text: "Dog", correct: false }, { text: "Bat", correct: true }, { text: "Run", correct: false }] },
                { question: "Which letter comes first in 'sun'?", answers: [{ text: "u", correct: false }, { text: "s", correct: true }, { text: "n", correct: false }] }
            ],
            2: [
                { question: "What is the past tense of 'run'?", answers: [{ text: "Running", correct: false }, { text: "Ran", correct: true }, { text: "Will run", correct: false }] },
                { question: "What is the past tense of 'play'?", answers: [{ text: "Playing", correct: false }, { text: "Played", correct: true }, { text: "Will play", correct: false }] },
                { question: "What is the plural of 'cat'?", answers: [{ text: "Cate", correct: false }, { text: "Cats", correct: true }, { text: "Catz", correct: false }] },
                { question: "What is the plural of 'dog'?", answers: [{ text: "Doges", correct: false }, { text: "Dogs", correct: true }, { text: "Dogz", correct: false }] },
                { question: "Which sentence is correct?", answers: [{ text: "She go to school", correct: false }, { text: "She goes to school", correct: true }, { text: "She going to school", correct: false }] },
                { question: "Which sentence is correct?", answers: [{ text: "He don't like apples", correct: false }, { text: "He doesn't like apples", correct: true }, { text: "He does not likes apples", correct: false }] },
                { question: "What is a noun?", answers: [{ text: "An action", correct: false }, { text: "A naming word", correct: true }, { text: "A describing word", correct: false }] },
                { question: "What is a verb?", answers: [{ text: "A naming word", correct: false }, { text: "An action word", correct: true }, { text: "A describing word", correct: false }] },
                { question: "What is an adjective?", answers: [{ text: "A naming word", correct: false }, { text: "An action word", correct: false }, { text: "A describing word", correct: true }] },
                { question: "How many syllables in 'mother'?", answers: [{ text: "1", correct: false }, { text: "2", correct: true }, { text: "3", correct: false }] },
                { question: "How many syllables in 'happy'?", answers: [{ text: "1", correct: false }, { text: "2", correct: true }, { text: "3", correct: false }] },
                { question: "What punctuation ends a sentence?", answers: [{ text: "Comma", correct: false }, { text: "Period", correct: true }, { text: "Colon", correct: false }] },
                { question: "What punctuation is used in a question?", answers: [{ text: "Period", correct: false }, { text: "Question mark", correct: true }, { text: "Comma", correct: false }] },
                { question: "Which word rhymes with 'dog'?", answers: [{ text: "Cat", correct: false }, { text: "Log", correct: true }, { text: "Hat", correct: false }] },
                { question: "Which word rhymes with 'hat'?", answers: [{ text: "Dog", correct: false }, { text: "Cat", correct: true }, { text: "Run", correct: false }] }
            ]
        },
        social: {
            1: [
                { question: "What is the capital of the United States?", answers: [{ text: "New York", correct: false }, { text: "Washington, D.C.", correct: true }, { text: "Los Angeles", correct: false }] },
                { question: "How many months are in a year?", answers: [{ text: "10", correct: false }, { text: "12", correct: true }, { text: "14", correct: false }] },
                { question: "What is a family?", answers: [{ text: "A group of people related", correct: true }, { text: "A school", correct: false }, { text: "A town", correct: false }] },
                { question: "What is a holiday?", answers: [{ text: "A special day", correct: true }, { text: "A vacation", correct: false }, { text: "A game", correct: false }] },
                { question: "What is Thanksgiving?", answers: [{ text: "A holiday to give thanks", correct: true }, { text: "A type of food", correct: false }, { text: "A month", correct: false }] },
                { question: "What is Christmas?", answers: [{ text: "A winter holiday", correct: true }, { text: "A summer holiday", correct: false }, { text: "A spring holiday", correct: false }] },
                { question: "What do we celebrate on July 4th?", answers: [{ text: "Independence Day", correct: true }, { text: "Thanksgiving", correct: false }, { text: "Christmas", correct: false }] },
                { question: "What are the four seasons?", answers: [{ text: "Spring, Summer, Fall, Winter", correct: true }, { text: "Hot, Cold, Warm, Cool", correct: false }, { text: "North, South, East, West", correct: false }] },
                { question: "What is a neighbor?", answers: [{ text: "Someone who lives near you", correct: true }, { text: "A family member", correct: false }, { text: "A teacher", correct: false }] },
                { question: "What is a community?", answers: [{ text: "A group of people living together", correct: true }, { text: "Only one family", correct: false }, { text: "A school only", correct: false }] },
                { question: "What is a street?", answers: [{ text: "A road in a town", correct: true }, { text: "A building", correct: false }, { text: "A park", correct: false }] },
                { question: "What is an address?", answers: [{ text: "Where someone lives", correct: true }, { text: "A name", correct: false }, { text: "A phone number", correct: false }] },
                { question: "What is a job?", answers: [{ text: "Work someone does", correct: true }, { text: "A hobby", correct: false }, { text: "A game", correct: false }] },
                { question: "Who is a teacher?", answers: [{ text: "Someone who teaches", correct: true }, { text: "Someone who works at a store", correct: false }, { text: "Someone who farms", correct: false }] },
                { question: "What is school?", answers: [{ text: "A place where children learn", correct: true }, { text: "A playground", correct: false }, { text: "A park", correct: false }] }
            ],
            2: [
                { question: "How many days are there in a week?", answers: [{ text: "5", correct: false }, { text: "7", correct: true }, { text: "10", correct: false }] },
                { question: "What are the days of the week?", answers: [{ text: "Monday through Sunday", correct: true }, { text: "Seasons", correct: false }, { text: "Months", correct: false }] },
                { question: "What are the months?", answers: [{ text: "12 divisions of the year", correct: true }, { text: "4 seasons", correct: false }, { text: "7 days", correct: false }] },
                { question: "What is a map?", answers: [{ text: "A drawing of an area", correct: true }, { text: "A book", correct: false }, { text: "A tool", correct: false }] },
                { question: "What direction is north?", answers: [{ text: "Up", correct: true }, { text: "Down", correct: false }, { text: "Left", correct: false }] },
                { question: "What direction is south?", answers: [{ text: "Down", correct: true }, { text: "Up", correct: false }, { text: "Right", correct: false }] },
                { question: "What is east?", answers: [{ text: "Right", correct: true }, { text: "Left", correct: false }, { text: "Up", correct: false }] },
                { question: "What is west?", answers: [{ text: "Left", correct: true }, { text: "Right", correct: false }, { text: "Down", correct: false }] },
                { question: "What is a compass?", answers: [{ text: "A tool that shows directions", correct: true }, { text: "A drawing tool", correct: false }, { text: "A measuring tool", correct: false }] },
                { question: "What is a city?", answers: [{ text: "A large town", correct: true }, { text: "A small house", correct: false }, { text: "A park", correct: false }] },
                { question: "What is a town?", answers: [{ text: "A small city", correct: true }, { text: "A farm", correct: false }, { text: "A country", correct: false }] },
                { question: "What is a country?", answers: [{ text: "A large area with its own government", correct: true }, { text: "A city", correct: false }, { text: "A small area", correct: false }] },
                { question: "What is a rule?", answers: [{ text: "Something we must follow", correct: true }, { text: "A game", correct: false }, { text: "A toy", correct: false }] },
                { question: "Who is a police officer?", answers: [{ text: "Someone who helps keep us safe", correct: true }, { text: "A teacher", correct: false }, { text: "A doctor", correct: false }] },
                { question: "What is safety?", answers: [{ text: "Being free from danger", correct: true }, { text: "Having fun", correct: false }, { text: "Playing games", correct: false }] }
            ]
        },
        science: {
            1: [
                { question: "What do plants need to grow?", answers: [{ text: "Water, sunlight, and soil", correct: true }, { text: "Only water", correct: false }, { text: "Only sunlight", correct: false }] },
                { question: "Is a penguin a bird?", answers: [{ text: "Yes", correct: true }, { text: "No", correct: false }, { text: "Maybe", correct: false }] },
                { question: "What does a tree have?", answers: [{ text: "Roots, trunk, branches, leaves", correct: true }, { text: "Only leaves", correct: false }, { text: "Only roots", correct: false }] },
                { question: "What is a leaf?", answers: [{ text: "Part of a plant", correct: true }, { text: "An animal", correct: false }, { text: "A rock", correct: false }] },
                { question: "What is a flower?", answers: [{ text: "Part of a plant", correct: true }, { text: "An animal", correct: false }, { text: "A type of tree", correct: false }] },
                { question: "What is the sun?", answers: [{ text: "A star that gives us heat and light", correct: true }, { text: "A planet", correct: false }, { text: "A moon", correct: false }] },
                { question: "What is the moon?", answers: [{ text: "A body that orbits Earth", correct: true }, { text: "A star", correct: false }, { text: "A planet", correct: false }] },
                { question: "What are stars?", answers: [{ text: "Bright objects in the night sky", correct: true }, { text: "Only during day", correct: false }, { text: "Weather", correct: false }] },
                { question: "How many legs does an insect have?", answers: [{ text: "4", correct: false }, { text: "6", correct: true }, { text: "8", correct: false }] },
                { question: "What is a butterfly?", answers: [{ text: "An insect", correct: true }, { text: "A bird", correct: false }, { text: "A plant", correct: false }] },
                { question: "What do animals need?", answers: [{ text: "Food, water, shelter, air", correct: true }, { text: "Only food", correct: false }, { text: "Only water", correct: false }] },
                { question: "What is water?", answers: [{ text: "A liquid we need to survive", correct: true }, { text: "A gas", correct: false }, { text: "A rock", correct: false }] },
                { question: "What is air?", answers: [{ text: "What we breathe", correct: true }, { text: "A liquid", correct: false }, { text: "A solid", correct: false }] },
                { question: "What is a habitat?", answers: [{ text: "Where an organism lives", correct: true }, { text: "A tool", correct: false }, { text: "A food", correct: false }] },
                { question: "What is weather?", answers: [{ text: "What happens in the atmosphere", correct: true }, { text: "Only sunny days", correct: false }, { text: "Only rainy days", correct: false }] }
            ],
            2: [
                { question: "Is a penguin a bird?", answers: [{ text: "Yes", correct: true }, { text: "No", correct: false }] },
                { question: "How many legs does a spider have?", answers: [{ text: "6", correct: false }, { text: "8", correct: true }, { text: "4", correct: false }] },
                { question: "How many legs does an insect have?", answers: [{ text: "4", correct: false }, { text: "6", correct: true }, { text: "8", correct: false }] },
                { question: "How many legs does a dog have?", answers: [{ text: "2", correct: false }, { text: "3", correct: false }, { text: "4", correct: true }] },
                { question: "What do birds have?", answers: [{ text: "Feathers and wings", correct: true }, { text: "Scales", correct: false }, { text: "Fur", correct: false }] },
                { question: "Do fish live in water?", answers: [{ text: "Yes", correct: true }, { text: "No", correct: false }, { text: "Sometimes", correct: false }] },
                { question: "Do birds fly?", answers: [{ text: "Yes", correct: true }, { text: "No", correct: false }, { text: "Some do", correct: false }] },
                { question: "What do fish have?", answers: [{ text: "Scales and fins", correct: true }, { text: "Fur", correct: false }, { text: "Feathers", correct: false }] },
                { question: "What do mammals have?", answers: [{ text: "Fur and produce milk", correct: true }, { text: "Scales", correct: false }, { text: "Feathers", correct: false }] },
                { question: "What is a reptile?", answers: [{ text: "An animal with scales", correct: true }, { text: "An animal with fur", correct: false }, { text: "An animal with feathers", correct: false }] },
                { question: "What is the water cycle?", answers: [{ text: "Evaporation, Condensation, Precipitation", correct: true }, { text: "Freezing only", correct: false }, { text: "Melting only", correct: false }] },
                { question: "Do plants need sunlight?", answers: [{ text: "Yes", correct: true }, { text: "No", correct: false }, { text: "Maybe", correct: false }] },
                { question: "What is photosynthesis?", answers: [{ text: "How plants make food", correct: true }, { text: "How animals eat", correct: false }, { text: "How we sleep", correct: false }] },
                { question: "What do plants produce?", answers: [{ text: "Oxygen", correct: true }, { text: "Carbon dioxide", correct: false }, { text: "Nitrogen", correct: false }] },
                { question: "What is a food chain?", answers: [{ text: "How energy transfers through organisms", correct: true }, { text: "A restaurant", correct: false }, { text: "Types of food", correct: false }] }
            ]
        }
    },
    2: {
        math: {
            1: [
                { question: "What is 10 + 5?", answers: [{ text: "14", correct: false }, { text: "15", correct: true }, { text: "16", correct: false }] },
                { question: "What is 20 - 8?", answers: [{ text: "10", correct: false }, { text: "12", correct: true }, { text: "14", correct: false }] },
                { question: "What is 7 + 4?", answers: [{ text: "10", correct: false }, { text: "11", correct: true }, { text: "12", correct: false }] },
                { question: "What is 15 - 6?", answers: [{ text: "8", correct: false }, { text: "9", correct: true }, { text: "10", correct: false }] },
                { question: "What is 8 + 8?", answers: [{ text: "15", correct: false }, { text: "16", correct: true }, { text: "17", correct: false }] },
                { question: "What is 18 - 9?", answers: [{ text: "8", correct: false }, { text: "9", correct: true }, { text: "10", correct: false }] },
                { question: "What is 12 + 5?", answers: [{ text: "16", correct: false }, { text: "17", correct: true }, { text: "18", correct: false }] },
                { question: "What is 25 - 10?", answers: [{ text: "14", correct: false }, { text: "15", correct: true }, { text: "16", correct: false }] },
                { question: "What is 9 + 6?", answers: [{ text: "14", correct: false }, { text: "15", correct: true }, { text: "16", correct: false }] },
                { question: "What is 20 - 5?", answers: [{ text: "14", correct: false }, { text: "15", correct: true }, { text: "16", correct: false }] },
                { question: "What is 11 + 7?", answers: [{ text: "17", correct: false }, { text: "18", correct: true }, { text: "19", correct: false }] },
                { question: "What is 30 - 15?", answers: [{ text: "14", correct: false }, { text: "15", correct: true }, { text: "16", correct: false }] },
                { question: "What is 13 + 4?", answers: [{ text: "16", correct: false }, { text: "17", correct: true }, { text: "18", correct: false }] },
                { question: "What is 22 - 7?", answers: [{ text: "14", correct: false }, { text: "15", correct: true }, { text: "16", correct: false }] },
                { question: "What is 6 + 9?", answers: [{ text: "14", correct: false }, { text: "15", correct: true }, { text: "16", correct: false }] }
            ],
            2: [
                { question: "What is 25 + 10?", answers: [{ text: "34", correct: false }, { text: "35", correct: true }, { text: "36", correct: false }] },
                { question: "What is 40 - 15?", answers: [{ text: "24", correct: false }, { text: "25", correct: true }, { text: "26", correct: false }] },
                { question: "What is 18 + 12?", answers: [{ text: "29", correct: false }, { text: "30", correct: true }, { text: "31", correct: false }] },
                { question: "What is 35 - 8?", answers: [{ text: "26", correct: false }, { text: "27", correct: true }, { text: "28", correct: false }] },
                { question: "What is 16 + 14?", answers: [{ text: "29", correct: false }, { text: "30", correct: true }, { text: "31", correct: false }] },
                { question: "What is 50 - 20?", answers: [{ text: "29", correct: false }, { text: "30", correct: true }, { text: "31", correct: false }] },
                { question: "What is 24 + 6?", answers: [{ text: "29", correct: false }, { text: "30", correct: true }, { text: "31", correct: false }] },
                { question: "What is 45 - 12?", answers: [{ text: "32", correct: false }, { text: "33", correct: true }, { text: "34", correct: false }] },
                { question: "What is 17 + 13?", answers: [{ text: "29", correct: false }, { text: "30", correct: true }, { text: "31", correct: false }] },
                { question: "What is 38 - 8?", answers: [{ text: "29", correct: false }, { text: "30", correct: true }, { text: "31", correct: false }] },
                { question: "What is 22 + 8?", answers: [{ text: "29", correct: false }, { text: "30", correct: true }, { text: "31", correct: false }] },
                { question: "What is 42 - 7?", answers: [{ text: "34", correct: false }, { text: "35", correct: true }, { text: "36", correct: false }] },
                { question: "What is 19 + 11?", answers: [{ text: "29", correct: false }, { text: "30", correct: true }, { text: "31", correct: false }] },
                { question: "What is 48 - 13?", answers: [{ text: "34", correct: false }, { text: "35", correct: true }, { text: "36", correct: false }] },
                { question: "What is 26 + 4?", answers: [{ text: "29", correct: false }, { text: "30", correct: true }, { text: "31", correct: false }] }
            ],
            3: [
                { question: "What is 3 × 2?", answers: [{ text: "5", correct: false }, { text: "6", correct: true }, { text: "8", correct: false }] },
                { question: "What is 5 × 2?", answers: [{ text: "8", correct: false }, { text: "10", correct: true }, { text: "12", correct: false }] },
                { question: "What is 4 × 5?", answers: [{ text: "18", correct: false }, { text: "20", correct: true }, { text: "24", correct: false }] },
                { question: "What is 6 × 5?", answers: [{ text: "28", correct: false }, { text: "30", correct: true }, { text: "36", correct: false }] },
                { question: "What is 7 × 2?", answers: [{ text: "12", correct: false }, { text: "14", correct: true }, { text: "16", correct: false }] },
                { question: "What is 8 × 2?", answers: [{ text: "14", correct: false }, { text: "16", correct: true }, { text: "18", correct: false }] },
                { question: "What is 9 × 2?", answers: [{ text: "16", correct: false }, { text: "18", correct: true }, { text: "20", correct: false }] },
                { question: "What is 10 × 2?", answers: [{ text: "18", correct: false }, { text: "20", correct: true }, { text: "22", correct: false }] },
                { question: "What is 2 × 2?", answers: [{ text: "2", correct: false }, { text: "4", correct: true }, { text: "6", correct: false }] },
                { question: "What is 5 × 5?", answers: [{ text: "20", correct: false }, { text: "25", correct: true }, { text: "30", correct: false }] },
                { question: "What is 3 × 5?", answers: [{ text: "12", correct: false }, { text: "15", correct: true }, { text: "18", correct: false }] },
                { question: "What is 4 × 2?", answers: [{ text: "6", correct: false }, { text: "8", correct: true }, { text: "10", correct: false }] },
                { question: "What is 6 × 2?", answers: [{ text: "10", correct: false }, { text: "12", correct: true }, { text: "14", correct: false }] },
                { question: "What is 10 × 5?", answers: [{ text: "45", correct: false }, { text: "50", correct: true }, { text: "55", correct: false }] },
                { question: "What is 7 × 5?", answers: [{ text: "30", correct: false }, { text: "35", correct: true }, { text: "40", correct: false }] }
            ],
            4: [
                { question: "What is 100 + 50?", answers: [{ text: "140", correct: false }, { text: "150", correct: true }, { text: "160", correct: false }] },
                { question: "What is 200 - 80?", answers: [{ text: "110", correct: false }, { text: "120", correct: true }, { text: "130", correct: false }] },
                { question: "What is 150 + 150?", answers: [{ text: "290", correct: false }, { text: "300", correct: true }, { text: "310", correct: false }] },
                { question: "What is 350 - 100?", answers: [{ text: "240", correct: false }, { text: "250", correct: true }, { text: "260", correct: false }] },
                { question: "What is 175 + 25?", answers: [{ text: "190", correct: false }, { text: "200", correct: true }, { text: "210", correct: false }] },
                { question: "What is 400 - 150?", answers: [{ text: "240", correct: false }, { text: "250", correct: true }, { text: "260", correct: false }] },
                { question: "What is 225 + 75?", answers: [{ text: "290", correct: false }, { text: "300", correct: true }, { text: "310", correct: false }] },
                { question: "What is 500 - 250?", answers: [{ text: "240", correct: false }, { text: "250", correct: true }, { text: "260", correct: false }] },
                { question: "What is 125 + 125?", answers: [{ text: "240", correct: false }, { text: "250", correct: true }, { text: "260", correct: false }] },
                { question: "What is 450 - 200?", answers: [{ text: "240", correct: false }, { text: "250", correct: true }, { text: "260", correct: false }] },
                { question: "What is 300 + 100?", answers: [{ text: "390", correct: false }, { text: "400", correct: true }, { text: "410", correct: false }] },
                { question: "What is 380 - 80?", answers: [{ text: "290", correct: false }, { text: "300", correct: true }, { text: "310", correct: false }] },
                { question: "What is 275 + 25?", answers: [{ text: "290", correct: false }, { text: "300", correct: true }, { text: "310", correct: false }] },
                { question: "What is 420 - 120?", answers: [{ text: "290", correct: false }, { text: "300", correct: true }, { text: "310", correct: false }] },
                { question: "What is 325 + 75?", answers: [{ text: "390", correct: false }, { text: "400", correct: true }, { text: "410", correct: false }] }
            ],
            5: [
                { question: "What fraction is shaded? ██░░ (4 out of 6)", answers: [{ text: "1/3", correct: false }, { text: "2/3", correct: true }, { text: "1/2", correct: false }] },
                { question: "What is 1/2 of 8?", answers: [{ text: "2", correct: false }, { text: "4", correct: true }, { text: "6", correct: false }] },
                { question: "Which is bigger: 1/2 or 1/3?", answers: [{ text: "1/2", correct: true }, { text: "1/3", correct: false }, { text: "Same", correct: false }] },
                { question: "What is 1/4 of 12?", answers: [{ text: "2", correct: false }, { text: "3", correct: true }, { text: "4", correct: false }] },
                { question: "What fraction shows half a pizza?", answers: [{ text: "1/2", correct: true }, { text: "1/4", correct: false }, { text: "2/3", correct: false }] },
                { question: "What is 3/4 of 8?", answers: [{ text: "4", correct: false }, { text: "6", correct: true }, { text: "7", correct: false }] },
                { question: "Which is smaller: 1/4 or 1/2?", answers: [{ text: "1/4", correct: true }, { text: "1/2", correct: false }, { text: "Same", correct: false }] },
                { question: "What is 1/3 of 9?", answers: [{ text: "2", correct: false }, { text: "3", correct: true }, { text: "4", correct: false }] },
                { question: "What fraction equals one whole?", answers: [{ text: "2/2", correct: true }, { text: "1/2", correct: false }, { text: "1/3", correct: false }] },
                { question: "What is 2/3 of 9?", answers: [{ text: "4", correct: false }, { text: "6", correct: true }, { text: "8", correct: false }] },
                { question: "How many quarters make a whole?", answers: [{ text: "2", correct: false }, { text: "4", correct: true }, { text: "3", correct: false }] },
                { question: "What is 1/2 of 10?", answers: [{ text: "4", correct: false }, { text: "5", correct: true }, { text: "6", correct: false }] },
                { question: "What fraction is blue? 🔵🔵🔵⚪⚪", answers: [{ text: "3/5", correct: true }, { text: "2/5", correct: false }, { text: "3/3", correct: false }] },
                { question: "What is 1/4 of 16?", answers: [{ text: "2", correct: false }, { text: "4", correct: true }, { text: "6", correct: false }] },
                { question: "Which shows 3 equal parts?", answers: [{ text: "1/3", correct: true }, { text: "1/2", correct: false }, { text: "1/4", correct: false }] }
            ],
            6: [
                { question: "What time is 3:00?", answers: [{ text: "3 o'clock", correct: true }, { text: "2 o'clock", correct: false }, { text: "4 o'clock", correct: false }] },
                { question: "How many minutes in one hour?", answers: [{ text: "30", correct: false }, { text: "60", correct: true }, { text: "90", correct: false }] },
                { question: "What is 15 minutes past 5?", answers: [{ text: "5:15", correct: true }, { text: "5:45", correct: false }, { text: "5:30", correct: false }] },
                { question: "How many days in a week?", answers: [{ text: "5", correct: false }, { text: "7", correct: true }, { text: "10", correct: false }] },
                { question: "What day comes after Monday?", answers: [{ text: "Sunday", correct: false }, { text: "Tuesday", correct: true }, { text: "Wednesday", correct: false }] },
                { question: "How many months in a year?", answers: [{ text: "10", correct: false }, { text: "12", correct: true }, { text: "14", correct: false }] },
                { question: "What is half past 2?", answers: [{ text: "2:30", correct: true }, { text: "2:15", correct: false }, { text: "2:45", correct: false }] },
                { question: "Which month comes before April?", answers: [{ text: "May", correct: false }, { text: "March", correct: true }, { text: "June", correct: false }] },
                { question: "What is 45 minutes past 6?", answers: [{ text: "6:45", correct: true }, { text: "6:15", correct: false }, { text: "6:30", correct: false }] },
                { question: "How many hours in a day?", answers: [{ text: "12", correct: false }, { text: "24", correct: true }, { text: "36", correct: false }] },
                { question: "What day is today if yesterday was Wednesday?", answers: [{ text: "Monday", correct: false }, { text: "Thursday", correct: true }, { text: "Friday", correct: false }] },
                { question: "What month has 31 days?", answers: [{ text: "June", correct: false }, { text: "July", correct: true }, { text: "February", correct: false }] },
                { question: "What time is quarter past 4?", answers: [{ text: "4:15", correct: true }, { text: "4:45", correct: false }, { text: "4:00", correct: false }] },
                { question: "How many days in February (not leap year)?", answers: [{ text: "28", correct: true }, { text: "30", correct: false }, { text: "29", correct: false }] },
                { question: "What is 30 minutes before 9?", answers: [{ text: "9:30", correct: false }, { text: "8:30", correct: true }, { text: "9:00", correct: false }] }
            ],
            7: [
                { question: "How many cents in 1 dollar?", answers: [{ text: "50", correct: false }, { text: "100", correct: true }, { text: "200", correct: false }] },
                { question: "What is 25¢ + 25¢?", answers: [{ text: "50¢", correct: true }, { text: "75¢", correct: false }, { text: "100¢", correct: false }] },
                { question: "How many nickels in 10 cents?", answers: [{ text: "1", correct: false }, { text: "2", correct: true }, { text: "3", correct: false }] },
                { question: "What is 3 dimes?", answers: [{ text: "30¢", correct: true }, { text: "13¢", correct: false }, { text: "03¢", correct: false }] },
                { question: "How many pennies in 1 quarter?", answers: [{ text: "25", correct: true }, { text: "10", correct: false }, { text: "50", correct: false }] },
                { question: "What is 50¢ + 25¢?", answers: [{ text: "65¢", correct: false }, { text: "75¢", correct: true }, { text: "100¢", correct: false }] },
                { question: "How many quarters make 75 cents?", answers: [{ text: "2", correct: false }, { text: "3", correct: true }, { text: "4", correct: false }] },
                { question: "What is 2 nickels + 3 pennies?", answers: [{ text: "10¢", correct: false }, { text: "13¢", correct: true }, { text: "23¢", correct: false }] },
                { question: "How much is 1 dime + 1 nickel?", answers: [{ text: "10¢", correct: false }, { text: "15¢", correct: true }, { text: "20¢", correct: false }] },
                { question: "What is 4 quarters?", answers: [{ text: "75¢", correct: false }, { text: "$1.00", correct: true }, { text: "50¢", correct: false }] },
                { question: "How many pennies equal 10 cents?", answers: [{ text: "10", correct: true }, { text: "5", correct: false }, { text: "20", correct: false }] },
                { question: "What is 1 dollar - 25 cents?", answers: [{ text: "75¢", correct: true }, { text: "50¢", correct: false }, { text: "25¢", correct: false }] },
                { question: "How many dimes in 50 cents?", answers: [{ text: "3", correct: false }, { text: "5", correct: true }, { text: "4", correct: false }] },
                { question: "What is 3 nickels?", answers: [{ text: "15¢", correct: true }, { text: "30¢", correct: false }, { text: "5¢", correct: false }] },
                { question: "How much is half a dollar?", answers: [{ text: "25¢", correct: false }, { text: "50¢", correct: true }, { text: "75¢", correct: false }] }
            ],
            8: [
                { question: "What comes next: 20, 25, 30, ?", answers: [{ text: "35", correct: true }, { text: "32", correct: false }, { text: "40", correct: false }] },
                { question: "What is the missing number: 45, 50, ?, 60", answers: [{ text: "52", correct: false }, { text: "55", correct: true }, { text: "58", correct: false }] },
                { question: "Count by 5s: 15, 20, 25, ?, 35", answers: [{ text: "28", correct: false }, { text: "30", correct: true }, { text: "32", correct: false }] },
                { question: "What comes next: 100, 90, 80, ?", answers: [{ text: "70", correct: true }, { text: "75", correct: false }, { text: "60", correct: false }] },
                { question: "What is the pattern: 2, 4, 6, ?", answers: [{ text: "7", correct: false }, { text: "8", correct: true }, { text: "9", correct: false }] },
                { question: "Count by 10s: 30, 40, 50, ?, 70", answers: [{ text: "55", correct: false }, { text: "60", correct: true }, { text: "65", correct: false }] },
                { question: "What comes next: 5, 10, 15, ?", answers: [{ text: "18", correct: false }, { text: "20", correct: true }, { text: "25", correct: false }] },
                { question: "What is the missing number: 12, 14, 16, ?", answers: [{ text: "17", correct: false }, { text: "18", correct: true }, { text: "20", correct: false }] },
                { question: "Count by 3s: 3, 6, 9, ?, 15", answers: [{ text: "10", correct: false }, { text: "12", correct: true }, { text: "14", correct: false }] },
                { question: "What comes next: 50, 55, 60, ?", answers: [{ text: "62", correct: false }, { text: "65", correct: true }, { text: "70", correct: false }] },
                { question: "What is the pattern: 11, 13, 15, ?", answers: [{ text: "16", correct: false }, { text: "17", correct: true }, { text: "18", correct: false }] },
                { question: "Count by 25s: 25, 50, 75, ?, 125", answers: [{ text: "90", correct: false }, { text: "100", correct: true }, { text: "110", correct: false }] },
                { question: "What comes next: 22, 24, 26, ?", answers: [{ text: "27", correct: false }, { text: "28", correct: true }, { text: "30", correct: false }] },
                { question: "What is the missing number: 8, 12, 16, ?", answers: [{ text: "18", correct: false }, { text: "20", correct: true }, { text: "24", correct: false }] },
                { question: "Count by 4s: 4, 8, 12, ?, 20", answers: [{ text: "14", correct: false }, { text: "16", correct: true }, { text: "18", correct: false }] }
            ],
            9: [
                { question: "What is the value of 5 in 52?", answers: [{ text: "5", correct: false }, { text: "50", correct: true }, { text: "500", correct: false }] },
                { question: "What digit is in the tens place in 78?", answers: [{ text: "7", correct: true }, { text: "8", correct: false }, { text: "70", correct: false }] },
                { question: "What is the value of 3 in 37?", answers: [{ text: "3", correct: true }, { text: "30", correct: false }, { text: "300", correct: false }] },
                { question: "Which is the ones digit in 45?", answers: [{ text: "4", correct: false }, { text: "5", correct: true }, { text: "40", correct: false }] },
                { question: "What is the value of 8 in 82?", answers: [{ text: "8", correct: false }, { text: "80", correct: true }, { text: "800", correct: false }] },
                { question: "In 93, what is the tens digit?", answers: [{ text: "9", correct: true }, { text: "3", correct: false }, { text: "90", correct: false }] },
                { question: "What is the value of 2 in 26?", answers: [{ text: "2", correct: true }, { text: "20", correct: false }, { text: "200", correct: false }] },
                { question: "Which digit is in the hundreds place in 321?", answers: [{ text: "2", correct: false }, { text: "3", correct: true }, { text: "1", correct: false }] },
                { question: "What is the value of 6 in 68?", answers: [{ text: "6", correct: false }, { text: "60", correct: true }, { text: "600", correct: false }] },
                { question: "In 100, what digit is in the ones place?", answers: [{ text: "0", correct: true }, { text: "1", correct: false }, { text: "10", correct: false }] },
                { question: "What is the value of 4 in 49?", answers: [{ text: "4", correct: false }, { text: "40", correct: true }, { text: "400", correct: false }] },
                { question: "Which is the tens digit in 57?", answers: [{ text: "5", correct: true }, { text: "7", correct: false }, { text: "50", correct: false }] },
                { question: "What is the value of 1 in 71?", answers: [{ text: "1", correct: false }, { text: "10", correct: true }, { text: "100", correct: false }] },
                { question: "In 235, what is the value of 2?", answers: [{ text: "2", correct: false }, { text: "20", correct: false }, { text: "200", correct: true }] },
                { question: "What digit is in the ones place in 89?", answers: [{ text: "8", correct: false }, { text: "9", correct: true }, { text: "80", correct: false }] }
            ],
            10: [
                { question: "Tom has 12 apples. He gives 5 to Mary. How many does he have left?", answers: [{ text: "5", correct: false }, { text: "7", correct: true }, { text: "9", correct: false }] },
                { question: "Lisa has 8 pencils. She buys 6 more. How many pencils does she have now?", answers: [{ text: "12", correct: false }, { text: "14", correct: true }, { text: "16", correct: false }] },
                { question: "There are 15 birds on a tree. 7 fly away. How many are left?", answers: [{ text: "6", correct: false }, { text: "8", correct: true }, { text: "10", correct: false }] },
                { question: "Jack has 20 marbles. He wins 5 more. How many marbles does he have?", answers: [{ text: "23", correct: false }, { text: "25", correct: true }, { text: "30", correct: false }] },
                { question: "Sarah has 18 stickers. She gives 9 to her friend. How many does she have?", answers: [{ text: "7", correct: false }, { text: "9", correct: true }, { text: "11", correct: false }] },
                { question: "There are 10 books on a shelf. Mom puts 5 more. How many books now?", answers: [{ text: "13", correct: false }, { text: "15", correct: true }, { text: "18", correct: false }] },
                { question: "Mike has 25 crayons. He loses 8. How many crayons are left?", answers: [{ text: "15", correct: false }, { text: "17", correct: true }, { text: "20", correct: false }] },
                { question: "Emma has 14 flowers. She picks 6 more. How many flowers does she have?", answers: [{ text: "18", correct: false }, { text: "20", correct: true }, { text: "24", correct: false }] },
                { question: "There are 22 students in a class. 10 are girls. How many are boys?", answers: [{ text: "10", correct: false }, { text: "12", correct: true }, { text: "14", correct: false }] },
                { question: "Tom had 30 coins. He spent 12 on a toy. How many coins left?", answers: [{ text: "16", correct: false }, { text: "18", correct: true }, { text: "20", correct: false }] },
                { question: "There are 16 cookies. 4 children share them equally. How many each?", answers: [{ text: "3", correct: false }, { text: "4", correct: true }, { text: "5", correct: false }] },
                { question: "A farmer has 24 eggs. He sells 8. How many eggs are left?", answers: [{ text: "14", correct: false }, { text: "16", correct: true }, { text: "20", correct: false }] },
                { question: "Lisa collected 35 seashells. She gave 15 to her sister. How many left?", answers: [{ text: "18", correct: false }, { text: "20", correct: true }, { text: "25", correct: false }] },
                { question: "There are 28 apples in a basket. 9 are red, the rest are green. How many green?", answers: [{ text: "17", correct: false }, { text: "19", correct: true }, { text: "21", correct: false }] },
                { question: "Jack has 40 stamps. He uses 25 for his collection. How many unused?", answers: [{ text: "13", correct: false }, { text: "15", correct: true }, { text: "20", correct: false }] }
            ]
        },
        english: {
            1: [
                { question: "Which is a noun?", answers: [{ text: "Run", correct: false }, { text: "Dog", correct: true }, { text: "Fast", correct: false }] },
                { question: "Which word starts with 'C'?", answers: [{ text: "Apple", correct: false }, { text: "Cat", correct: true }, { text: "Dog", correct: false }] },
                { question: "Which word is spelled correctly?", answers: [{ text: "Kat", correct: false }, { text: "Cat", correct: true }, { text: "Catt", correct: false }] },
                { question: "Which word means the opposite of big?", answers: [{ text: "Small", correct: true }, { text: "Tall", correct: false }, { text: "Short", correct: false }] },
                { question: "Which is a verb?", answers: [{ text: "Happy", correct: false }, { text: "Run", correct: true }, { text: "Tree", correct: false }] },
                { question: "Which word rhymes with 'cat'?", answers: [{ text: "Bat", correct: true }, { text: "Dog", correct: false }, { text: "Tree", correct: false }] },
                { question: "Which word starts with 'B'?", answers: [{ text: "Apple", correct: false }, { text: "Ball", correct: true }, { text: "Cat", correct: false }] },
                { question: "Which word is a color?", answers: [{ text: "Happy", correct: false }, { text: "Run", correct: false }, { text: "Blue", correct: true }] },
                { question: "Which word means to move fast?", answers: [{ text: "Sleep", correct: false }, { text: "Run", correct: true }, { text: "Sit", correct: false }] },
                { question: "Which word rhymes with 'dog'?", answers: [{ text: "Log", correct: true }, { text: "Cat", correct: false }, { text: "Hat", correct: false }] },
                { question: "Which is an adjective?", answers: [{ text: "Happy", correct: true }, { text: "Run", correct: false }, { text: "Jump", correct: false }] },
                { question: "Which word starts with 'S'?", answers: [{ text: "Apple", correct: false }, { text: "Ball", correct: false }, { text: "Sun", correct: true }] },
                { question: "How many vowels does 'apple' have?", answers: [{ text: "1", correct: false }, { text: "2", correct: true }, { text: "3", correct: false }] },
                { question: "Which word is a number?", answers: [{ text: "Three", correct: true }, { text: "Dog", correct: false }, { text: "Blue", correct: false }] },
                { question: "Which word means the opposite of sad?", answers: [{ text: "Happy", correct: true }, { text: "Tired", correct: false }, { text: "Angry", correct: false }] }
            ],
            2: [
                { question: "What is the plural of 'cat'?", answers: [{ text: "Cates", correct: false }, { text: "Cats", correct: true }, { text: "Catz", correct: false }] },
                { question: "What is the plural of 'dog'?", answers: [{ text: "Dogs", correct: true }, { text: "Doges", correct: false }, { text: "Dogz", correct: false }] },
                { question: "Which sentence is correct?", answers: [{ text: "She go to school", correct: false }, { text: "She goes to school", correct: true }, { text: "She going to school", correct: false }] },
                { question: "What is the past tense of 'play'?", answers: [{ text: "Playing", correct: false }, { text: "Played", correct: true }, { text: "Will play", correct: false }] },
                { question: "Which word is spelled correctly?", answers: [{ text: "Recieve", correct: false }, { text: "Receive", correct: true }, { text: "Recive", correct: false }] },
                { question: "What comes at the end of a sentence?", answers: [{ text: "Period", correct: true }, { text: "Comma", correct: false }, { text: "Colon", correct: false }] },
                { question: "How many letters in the word 'school'?", answers: [{ text: "5", correct: false }, { text: "6", correct: true }, { text: "7", correct: false }] },
                { question: "Which is a proper noun?", answers: [{ text: "John", correct: true }, { text: "Boy", correct: false }, { text: "Girl", correct: false }] },
                { question: "What is the opposite of 'big'?", answers: [{ text: "Small", correct: true }, { text: "Tall", correct: false }, { text: "Long", correct: false }] },
                { question: "Which word has 2 syllables?", answers: [{ text: "Elephant", correct: false }, { text: "Dog", correct: false }, { text: "Butter", correct: true }] },
                { question: "What is the plural of 'box'?", answers: [{ text: "Boxs", correct: false }, { text: "Boxes", correct: true }, { text: "Boxez", correct: false }] },
                { question: "Which sentence makes sense?", answers: [{ text: "The cat is blue", correct: true }, { text: "The cat is running slow", correct: false }, { text: "The cat are sleeping", correct: false }] },
                { question: "What is the past tense of 'run'?", answers: [{ text: "Running", correct: false }, { text: "Ran", correct: true }, { text: "Will run", correct: false }] },
                { question: "Which word rhymes with 'book'?", answers: [{ text: "Look", correct: true }, { text: "Cat", correct: false }, { text: "Dog", correct: false }] },
                { question: "How many syllables in 'banana'?", answers: [{ text: "2", correct: false }, { text: "3", correct: true }, { text: "4", correct: false }] }
            ]
        },
        social: {
            1: [
                { question: "Which country are we in?", answers: [{ text: "Canada", correct: false }, { text: "United States", correct: true }, { text: "Mexico", correct: false }] },
                { question: "What is the capital of the United States?", answers: [{ text: "New York", correct: false }, { text: "Washington, D.C.", correct: true }, { text: "Los Angeles", correct: false }] },
                { question: "How many continents are there?", answers: [{ text: "5", correct: false }, { text: "6", correct: false }, { text: "7", correct: true }] },
                { question: "What color is our flag?", answers: [{ text: "Red, white, and blue", correct: true }, { text: "Red and white", correct: false }, { text: "Blue and white", correct: false }] },
                { question: "Which ocean is on the west coast?", answers: [{ text: "Atlantic", correct: false }, { text: "Pacific", correct: true }, { text: "Arctic", correct: false }] },
                { question: "How many states are in the USA?", answers: [{ text: "48", correct: false }, { text: "50", correct: true }, { text: "52", correct: false }] },
                { question: "What do we celebrate on July 4th?", answers: [{ text: "Thanksgiving", correct: false }, { text: "Independence Day", correct: true }, { text: "Christmas", correct: false }] },
                { question: "Which country is north of us?", answers: [{ text: "Mexico", correct: false }, { text: "Canada", correct: true }, { text: "Cuba", correct: false }] },
                { question: "What is the largest state?", answers: [{ text: "Texas", correct: false }, { text: "Alaska", correct: true }, { text: "California", correct: false }] },
                { question: "How many people in our community?", answers: [{ text: "Depends on location", correct: true }, { text: "1 million", correct: false }, { text: "500 people", correct: false }] },
                { question: "What are people who live together called?", answers: [{ text: "Community", correct: true }, { text: "City", correct: false }, { text: "Country", correct: false }] },
                { question: "Which ocean is on the east coast?", answers: [{ text: "Atlantic", correct: true }, { text: "Pacific", correct: false }, { text: "Arctic", correct: false }] },
                { question: "What is a map?", answers: [{ text: "A drawing of an area", correct: true }, { text: "A type of food", correct: false }, { text: "A book", correct: false }] },
                { question: "What month is Thanksgiving?", answers: [{ text: "October", correct: false }, { text: "November", correct: true }, { text: "December", correct: false }] },
                { question: "What do we use to know directions?", answers: [{ text: "Compass", correct: true }, { text: "Clock", correct: false }, { text: "Ruler", correct: false }] }
            ],
            2: [
                { question: "What is a community?", answers: [{ text: "A group of people living together", correct: true }, { text: "Only one person", correct: false }, { text: "A building", correct: false }] },
                { question: "What are natural resources?", answers: [{ text: "Things found in nature that people use", correct: true }, { text: "Man-made objects", correct: false }, { text: "Tools", correct: false }] },
                { question: "What does a mayor do?", answers: [{ text: "Leads a city or town", correct: true }, { text: "Teaches school", correct: false }, { text: "Runs a store", correct: false }] },
                { question: "What is a farm?", answers: [{ text: "A place where crops are grown", correct: true }, { text: "A shop", correct: false }, { text: "An office", correct: false }] },
                { question: "What do we call people who make laws?", answers: [{ text: "Lawmakers or politicians", correct: true }, { text: "Teachers", correct: false }, { text: "Doctors", correct: false }] },
                { question: "What is a colony?", answers: [{ text: "A settlement formed by a country overseas", correct: true }, { text: "A city", correct: false }, { text: "A farm", correct: false }] },
                { question: "Who was the first President?", answers: [{ text: "George Washington", correct: true }, { text: "Thomas Jefferson", correct: false }, { text: "Benjamin Franklin", correct: false }] },
                { question: "What is a celebration?", answers: [{ text: "A special event or party", correct: true }, { text: "A meal", correct: false }, { text: "A game", correct: false }] },
                { question: "What are rules in a community for?", answers: [{ text: "To keep people safe and organized", correct: true }, { text: "To make fun", correct: false }, { text: "To confuse people", correct: false }] },
                { question: "What is an economy?", answers: [{ text: "A system of money and jobs", correct: true }, { text: "A sport", correct: false }, { text: "A type of food", correct: false }] },
                { question: "What do we call people who work?", answers: [{ text: "Employees", correct: true }, { text: "Players", correct: false }, { text: "Dancers", correct: false }] },
                { question: "What are goods?", answers: [{ text: "Items that are made and sold", correct: true }, { text: "Services only", correct: false }, { text: "Money", correct: false }] },
                { question: "What are services?", answers: [{ text: "Work done for others", correct: true }, { text: "Objects only", correct: false }, { text: "Games", correct: false }] },
                { question: "Who are community helpers?", answers: [{ text: "Police, firefighters, teachers, doctors", correct: true }, { text: "Only teachers", correct: false }, { text: "Only police", correct: false }] },
                { question: "What is an invention?", answers: [{ text: "Something new that is created", correct: true }, { text: "A story", correct: false }, { text: "A type of food", correct: false }] }
            ]
        },
        science: {
            1: [
                { question: "What is the largest planet?", answers: [{ text: "Earth", correct: false }, { text: "Jupiter", correct: true }, { text: "Mars", correct: false }] },
                { question: "Do all animals have backbones?", answers: [{ text: "Yes", correct: false }, { text: "No", correct: true }, { text: "Maybe", correct: false }] },
                { question: "What do plants need to grow?", answers: [{ text: "Water, sunlight, and soil", correct: true }, { text: "Only water", correct: false }, { text: "Only sunlight", correct: false }] },
                { question: "How many legs do insects have?", answers: [{ text: "4", correct: false }, { text: "6", correct: true }, { text: "8", correct: false }] },
                { question: "What is the closest star to Earth?", answers: [{ text: "Moon", correct: false }, { text: "Sun", correct: true }, { text: "Venus", correct: false }] },
                { question: "Do fish have lungs?", answers: [{ text: "Yes", correct: false }, { text: "No", correct: true }, { text: "Sometimes", correct: false }] },
                { question: "What do bees help with?", answers: [{ text: "Pollination", correct: true }, { text: "Swimming", correct: false }, { text: "Flying higher", correct: false }] },
                { question: "How many legs does a spider have?", answers: [{ text: "6", correct: false }, { text: "8", correct: true }, { text: "10", correct: false }] },
                { question: "What is the main gas we breathe?", answers: [{ text: "Carbon dioxide", correct: false }, { text: "Oxygen", correct: true }, { text: "Nitrogen", correct: false }] },
                { question: "Do all birds fly?", answers: [{ text: "Yes", correct: false }, { text: "No", correct: true }, { text: "Only some", correct: false }] },
                { question: "What is the food chain?", answers: [{ text: "Plants and animals connected by eating", correct: true }, { text: "Only plants", correct: false }, { text: "Only animals", correct: false }] },
                { question: "How many bones are in the human body?", answers: [{ text: "186", correct: false }, { text: "206", correct: true }, { text: "250", correct: false }] },
                { question: "What is photosynthesis?", answers: [{ text: "How plants make food using sunlight", correct: true }, { text: "How animals eat", correct: false }, { text: "How we sleep", correct: false }] },
                { question: "What do animals use for protection?", answers: [{ text: "Skin, fur, scales, shells", correct: true }, { text: "Only hair", correct: false }, { text: "Only skin", correct: false }] },
                { question: "How do we hear sound?", answers: [{ text: "Through our ears", correct: true }, { text: "Through our eyes", correct: false }, { text: "Through our nose", correct: false }] }
            ],
            2: [
                { question: "Do all animals have backbones?", answers: [{ text: "Yes", correct: false }, { text: "No", correct: true }] },
                { question: "What are the three states of matter?", answers: [{ text: "Solid, Liquid, Gas", correct: true }, { text: "Hot, Cold, Warm", correct: false }, { text: "Big, Small, Tiny", correct: false }] },
                { question: "What is the water cycle?", answers: [{ text: "Evaporation, Condensation, Precipitation", correct: true }, { text: "Freezing only", correct: false }, { text: "Melting only", correct: false }] },
                { question: "What is an ecosystem?", answers: [{ text: "A community of organisms and their environment", correct: true }, { text: "Only animals", correct: false }, { text: "Only plants", correct: false }] },
                { question: "What do plants produce?", answers: [{ text: "Oxygen", correct: true }, { text: "Carbon dioxide", correct: false }, { text: "Water", correct: false }] },
                { question: "How long is one year?", answers: [{ text: "365 days", correct: true }, { text: "360 days", correct: false }, { text: "370 days", correct: false }] },
                { question: "What causes day and night?", answers: [{ text: "Earth's rotation", correct: true }, { text: "Sun moving", correct: false }, { text: "Moon's position", correct: false }] },
                { question: "What is weather?", answers: [{ text: "Day-to-day atmospheric conditions", correct: true }, { text: "Long-term conditions", correct: false }, { text: "Moon phases", correct: false }] },
                { question: "What do organisms need to survive?", answers: [{ text: "Food, water, shelter, air", correct: true }, { text: "Only food", correct: false }, { text: "Only water", correct: false }] },
                { question: "How do mammals keep warm?", answers: [{ text: "Fur or body heat", correct: true }, { text: "Scales", correct: false }, { text: "Feathers", correct: false }] },
                { question: "What is a habitat?", answers: [{ text: "A place where an organism lives", correct: true }, { text: "A tool", correct: false }, { text: "A food", correct: false }] },
                { question: "What are rocks made of?", answers: [{ text: "Minerals", correct: true }, { text: "Soil", correct: false }, { text: "Clay", correct: false }] },
                { question: "What is soil made of?", answers: [{ text: "Rocks, minerals, and dead organisms", correct: true }, { text: "Only rocks", correct: false }, { text: "Only dirt", correct: false }] },
                { question: "How do plants reproduce?", answers: [{ text: "Seeds", correct: true }, { text: "Eggs", correct: false }, { text: "Babies", correct: false }] },
                { question: "What is the main source of energy on Earth?", answers: [{ text: "Sun", correct: true }, { text: "Moon", correct: false }, { text: "Stars", correct: false }] }
            ]
        }
    },
    3: {
        math: {
            1: [
                { question: "What is 15 + 25?", answers: [{ text: "35", correct: false }, { text: "40", correct: true }, { text: "45", correct: false }] },
                { question: "What is 50 - 30?", answers: [{ text: "15", correct: false }, { text: "20", correct: true }, { text: "25", correct: false }] },
                { question: "What is 12 × 3?", answers: [{ text: "35", correct: false }, { text: "36", correct: true }, { text: "37", correct: false }] },
                { question: "What is 72 ÷ 8?", answers: [{ text: "8", correct: false }, { text: "9", correct: true }, { text: "10", correct: false }] },
                { question: "What is 28 + 32?", answers: [{ text: "59", correct: false }, { text: "60", correct: true }, { text: "61", correct: false }] },
                { question: "What is 100 - 45?", answers: [{ text: "54", correct: false }, { text: "55", correct: true }, { text: "56", correct: false }] },
                { question: "What is 11 × 6?", answers: [{ text: "65", correct: false }, { text: "66", correct: true }, { text: "67", correct: false }] },
                { question: "What is 56 ÷ 7?", answers: [{ text: "7", correct: false }, { text: "8", correct: true }, { text: "9", correct: false }] },
                { question: "What is 35 + 65?", answers: [{ text: "99", correct: false }, { text: "100", correct: true }, { text: "101", correct: false }] },
                { question: "What is 80 - 25?", answers: [{ text: "54", correct: false }, { text: "55", correct: true }, { text: "56", correct: false }] },
                { question: "What is 9 × 7?", answers: [{ text: "62", correct: false }, { text: "63", correct: true }, { text: "64", correct: false }] },
                { question: "What is 48 ÷ 6?", answers: [{ text: "7", correct: false }, { text: "8", correct: true }, { text: "9", correct: false }] },
                { question: "What is 45 + 55?", answers: [{ text: "99", correct: false }, { text: "100", correct: true }, { text: "101", correct: false }] },
                { question: "What is 90 - 35?", answers: [{ text: "54", correct: false }, { text: "55", correct: true }, { text: "56", correct: false }] },
                { question: "What is 8 × 8?", answers: [{ text: "63", correct: false }, { text: "64", correct: true }, { text: "65", correct: false }] }
            ],
            2: [
                { question: "What is 125 + 175?", answers: [{ text: "299", correct: false }, { text: "300", correct: true }, { text: "301", correct: false }] },
                { question: "What is 200 - 75?", answers: [{ text: "124", correct: false }, { text: "125", correct: true }, { text: "126", correct: false }] },
                { question: "What is 24 × 5?", answers: [{ text: "119", correct: false }, { text: "120", correct: true }, { text: "121", correct: false }] },
                { question: "What is 144 ÷ 12?", answers: [{ text: "11", correct: false }, { text: "12", correct: true }, { text: "13", correct: false }] },
                { question: "What is 87 + 113?", answers: [{ text: "199", correct: false }, { text: "200", correct: true }, { text: "201", correct: false }] },
                { question: "What is 250 - 100?", answers: [{ text: "149", correct: false }, { text: "150", correct: true }, { text: "151", correct: false }] },
                { question: "What is 15 × 8?", answers: [{ text: "119", correct: false }, { text: "120", correct: true }, { text: "121", correct: false }] },
                { question: "What is 108 ÷ 9?", answers: [{ text: "11", correct: false }, { text: "12", correct: true }, { text: "13", correct: false }] },
                { question: "What is 156 + 144?", answers: [{ text: "299", correct: false }, { text: "300", correct: true }, { text: "301", correct: false }] },
                { question: "What is 300 - 125?", answers: [{ text: "174", correct: false }, { text: "175", correct: true }, { text: "176", correct: false }] },
                { question: "What is 18 × 6?", answers: [{ text: "107", correct: false }, { text: "108", correct: true }, { text: "109", correct: false }] },
                { question: "What is 120 ÷ 10?", answers: [{ text: "11", correct: false }, { text: "12", correct: true }, { text: "13", correct: false }] },
                { question: "What is 99 + 101?", answers: [{ text: "199", correct: false }, { text: "200", correct: true }, { text: "201", correct: false }] },
                { question: "What is 350 - 150?", answers: [{ text: "199", correct: false }, { text: "200", correct: true }, { text: "201", correct: false }] },
                { question: "What is 25 × 4?", answers: [{ text: "99", correct: false }, { text: "100", correct: true }, { text: "101", correct: false }] }
            ]
        },
        english: {
            1: [
                { question: "What is a verb?", answers: [{ text: "An action word", correct: true }, { text: "A naming word", correct: false }, { text: "A color", correct: false }] },
                { question: "Which is a sentence fragment?", answers: [{ text: "The dog barks.", correct: false }, { text: "Running fast.", correct: true }, { text: "She runs.", correct: false }] },
                { question: "What is a noun?", answers: [{ text: "A naming word", correct: true }, { text: "An action word", correct: false }, { text: "A describing word", correct: false }] },
                { question: "What is an adjective?", answers: [{ text: "A word that describes", correct: true }, { text: "An action word", correct: false }, { text: "A naming word", correct: false }] },
                { question: "What is a subject?", answers: [{ text: "Who or what the sentence is about", correct: true }, { text: "A topic in school", correct: false }, { text: "A theme", correct: false }] },
                { question: "What is a predicate?", answers: [{ text: "What the subject does or is", correct: true }, { text: "A prefix", correct: false }, { text: "A suffix", correct: false }] },
                { question: "Which sentence is correct?", answers: [{ text: "She go to school", correct: false }, { text: "She goes to school", correct: true }, { text: "She going to school", correct: false }] },
                { question: "What does 'compound word' mean?", answers: [{ text: "Two words joined together", correct: true }, { text: "A long word", correct: false }, { text: "A difficult word", correct: false }] },
                { question: "What is a contraction?", answers: [{ text: "Two words combined with apostrophe", correct: true }, { text: "A shortened sentence", correct: false }, { text: "A type of punctuation", correct: false }] },
                { question: "What is a prefix?", answers: [{ text: "Letters added to the beginning", correct: true }, { text: "Letters at the end", correct: false }, { text: "The middle of a word", correct: false }] },
                { question: "What is a suffix?", answers: [{ text: "Letters added to the end", correct: true }, { text: "Letters at the beginning", correct: false }, { text: "The middle of a word", correct: false }] },
                { question: "How many syllables in 'butterfly'?", answers: [{ text: "2", correct: false }, { text: "3", correct: true }, { text: "4", correct: false }] },
                { question: "Which word rhymes with 'lake'?", answers: [{ text: "Make", correct: true }, { text: "Look", correct: false }, { text: "Book", correct: false }] },
                { question: "What does 'synonym' mean?", answers: [{ text: "Words with similar meanings", correct: true }, { text: "Words that rhyme", correct: false }, { text: "Words with opposite meanings", correct: false }] },
                { question: "What does 'antonym' mean?", answers: [{ text: "Words with opposite meanings", correct: true }, { text: "Words that rhyme", correct: false }, { text: "Words with similar meanings", correct: false }] }
            ],
            2: [
                { question: "What is the main idea?", answers: [{ text: "The most important point", correct: true }, { text: "A detail", correct: false }, { text: "A supporting sentence", correct: false }] },
                { question: "What are supporting details?", answers: [{ text: "Information that supports the main idea", correct: true }, { text: "The title", correct: false }, { text: "The conclusion", correct: false }] },
                { question: "What is a topic sentence?", answers: [{ text: "The sentence that states the main idea", correct: true }, { text: "The last sentence", correct: false }, { text: "Any sentence in the paragraph", correct: false }] },
                { question: "What is a paragraph?", answers: [{ text: "A group of sentences about one topic", correct: true }, { text: "A single sentence", correct: false }, { text: "A page", correct: false }] },
                { question: "What is a conclusion?", answers: [{ text: "The final thought or summary", correct: true }, { text: "The beginning", correct: false }, { text: "A supporting detail", correct: false }] },
                { question: "What is the past tense of 'walk'?", answers: [{ text: "Walking", correct: false }, { text: "Walked", correct: true }, { text: "Will walk", correct: false }] },
                { question: "What is the future tense?", answers: [{ text: "An action that will happen", correct: true }, { text: "An action that happened", correct: false }, { text: "An action happening now", correct: false }] },
                { question: "What is present tense?", answers: [{ text: "An action happening now", correct: true }, { text: "An action that happened", correct: false }, { text: "An action that will happen", correct: false }] },
                { question: "What is a complex sentence?", answers: [{ text: "A sentence with independent and dependent clauses", correct: true }, { text: "A short sentence", correct: false }, { text: "A sentence with many words", correct: false }] },
                { question: "What is dialogue?", answers: [{ text: "Conversation between characters", correct: true }, { text: "A story", correct: false }, { text: "Narration only", correct: false }] },
                { question: "What punctuation shows dialogue?", answers: [{ text: "Quotation marks", correct: true }, { text: "Parentheses", correct: false }, { text: "Dashes", correct: false }] },
                { question: "What is an exclamation?", answers: [{ text: "A strong statement", correct: true }, { text: "A question", correct: false }, { text: "A description", correct: false }] },
                { question: "What punctuation ends an exclamation?", answers: [{ text: "Exclamation mark", correct: true }, { text: "Period", correct: false }, { text: "Question mark", correct: false }] },
                { question: "What is a character?", answers: [{ text: "A person in a story", correct: true }, { text: "A letter", correct: false }, { text: "A symbol", correct: false }] },
                { question: "What is the plot?", answers: [{ text: "The sequence of events", correct: true }, { text: "The setting", correct: false }, { text: "The characters", correct: false }] }
            ]
        },
        social: {
            1: [
                { question: "What are the 50 states divided into?", answers: [{ text: "Counties", correct: true }, { text: "Cities", correct: false }, { text: "Towns", correct: false }] },
                { question: "What is a map?", answers: [{ text: "A drawing of an area", correct: true }, { text: "A type of food", correct: false }, { text: "A tool", correct: false }] },
                { question: "What is a compass rose?", answers: [{ text: "Shows directions on a map", correct: true }, { text: "A flower", correct: false }, { text: "A decoration", correct: false }] },
                { question: "What direction is between north and east?", answers: [{ text: "Northeast", correct: true }, { text: "Southwest", correct: false }, { text: "Northwest", correct: false }] },
                { question: "What is a legend on a map?", answers: [{ text: "Explains map symbols", correct: true }, { text: "A story", correct: false }, { text: "A historical figure", correct: false }] },
                { question: "What is a scale on a map?", answers: [{ text: "Shows distances", correct: true }, { text: "Measures weight", correct: false }, { text: "Shows temperature", correct: false }] },
                { question: "What are natural resources?", answers: [{ text: "Things found in nature", correct: true }, { text: "Man-made objects", correct: false }, { text: "Tools", correct: false }] },
                { question: "What is a community?", answers: [{ text: "A group of people living together", correct: true }, { text: "A single family", correct: false }, { text: "A building", correct: false }] },
                { question: "Who are community helpers?", answers: [{ text: "Police, firefighters, teachers, doctors", correct: true }, { text: "Only teachers", correct: false }, { text: "Only doctors", correct: false }] },
                { question: "What is government?", answers: [{ text: "A system of leaders and laws", correct: true }, { text: "A group of police", correct: false }, { text: "A type of business", correct: false }] },
                { question: "What does 'rule' mean?", answers: [{ text: "A law to follow", correct: true }, { text: "To measure", correct: false }, { text: "A type of tool", correct: false }] },
                { question: "What is a responsibility?", answers: [{ text: "A duty we must do", correct: true }, { text: "A freedom", correct: false }, { text: "A right", correct: false }] },
                { question: "What is a right?", answers: [{ text: "A freedom we have", correct: true }, { text: "A duty", correct: false }, { text: "A law", correct: false }] },
                { question: "What is a tradition?", answers: [{ text: "A custom passed down", correct: true }, { text: "A new invention", correct: false }, { text: "A recent trend", correct: false }] },
                { question: "What is culture?", answers: [{ text: "Beliefs and customs of a group", correct: true }, { text: "Only art", correct: false }, { text: "Only music", correct: false }] }
            ],
            2: [
                { question: "What is a need?", answers: [{ text: "Something we must have to survive", correct: true }, { text: "Something we want", correct: false }, { text: "A luxury", correct: false }] },
                { question: "What is a want?", answers: [{ text: "Something we desire but don't need", correct: true }, { text: "Something we need", correct: false }, { text: "A requirement", correct: false }] },
                { question: "What is an economy?", answers: [{ text: "System of money and jobs", correct: true }, { text: "A type of government", correct: false }, { text: "A business only", correct: false }] },
                { question: "What is supply and demand?", answers: [{ text: "How much is available vs. wanted", correct: true }, { text: "Types of stores", correct: false }, { text: "Government control", correct: false }] },
                { question: "What is a producer?", answers: [{ text: "Someone who makes goods", correct: true }, { text: "Someone who sells", correct: false }, { text: "A consumer", correct: false }] },
                { question: "What is a consumer?", answers: [{ text: "Someone who buys goods", correct: true }, { text: "Someone who makes things", correct: false }, { text: "A producer", correct: false }] },
                { question: "What is money used for?", answers: [{ text: "To buy and sell goods", correct: true }, { text: "Only for savings", correct: false }, { text: "As decoration", correct: false }] },
                { question: "What is saving money?", answers: [{ text: "Keeping money for later", correct: true }, { text: "Spending quickly", correct: false }, { text: "Losing money", correct: false }] },
                { question: "What is a job?", answers: [{ text: "Work someone does for money", correct: true }, { text: "A hobby", correct: false }, { text: "A game", correct: false }] },
                { question: "What is a skill?", answers: [{ text: "An ability to do something", correct: true }, { text: "A tool", correct: false }, { text: "A game", correct: false }] },
                { question: "What is history?", answers: [{ text: "Events from the past", correct: true }, { text: "Events happening now", correct: false }, { text: "Future events", correct: false }] },
                { question: "What is a historical figure?", answers: [{ text: "An important person from history", correct: true }, { text: "A statue", correct: false }, { text: "A painting", correct: false }] },
                { question: "What is a holiday?", answers: [{ text: "A special day to celebrate", correct: true }, { text: "A vacation", correct: false }, { text: "A time off", correct: false }] },
                { question: "What is a celebration?", answers: [{ text: "A special event or party", correct: true }, { text: "A meal", correct: false }, { text: "A game", correct: false }] },
                { question: "What is diversity?", answers: [{ text: "Variety in people and cultures", correct: true }, { text: "Same beliefs", correct: false }, { text: "One type of person", correct: false }] }
            ]
        },
        science: {
            1: [
                { question: "What are the three states of matter?", answers: [{ text: "Solid, Liquid, Gas", correct: true }, { text: "Hot, Cold, Warm", correct: false }, { text: "Big, Small, Tiny", correct: false }] },
                { question: "What is density?", answers: [{ text: "How much mass in a certain volume", correct: true }, { text: "Weight only", correct: false }, { text: "Size only", correct: false }] },
                { question: "What is gravity?", answers: [{ text: "Force that pulls objects down", correct: true }, { text: "Wind", correct: false }, { text: "Heat", correct: false }] },
                { question: "What is friction?", answers: [{ text: "Force that resists motion", correct: true }, { text: "A type of energy", correct: false }, { text: "Movement", correct: false }] },
                { question: "What are simple machines?", answers: [{ text: "Tools that make work easier", correct: true }, { text: "Computers", correct: false }, { text: "Motors only", correct: false }] },
                { question: "What is a lever?", answers: [{ text: "A simple machine with a pivot", correct: true }, { text: "A type of rope", correct: false }, { text: "A tool only", correct: false }] },
                { question: "What is a pulley?", answers: [{ text: "A simple machine with a wheel and rope", correct: true }, { text: "A type of screw", correct: false }, { text: "A lever", correct: false }] },
                { question: "What is an inclined plane?", answers: [{ text: "A sloped surface", correct: true }, { text: "A horizontal plane", correct: false }, { text: "A flat surface", correct: false }] },
                { question: "What is energy?", answers: [{ text: "The ability to do work", correct: true }, { text: "Movement only", correct: false }, { text: "Heat only", correct: false }] },
                { question: "What is kinetic energy?", answers: [{ text: "Energy of motion", correct: true }, { text: "Energy at rest", correct: false }, { text: "Heat energy", correct: false }] },
                { question: "What is potential energy?", answers: [{ text: "Energy stored in an object", correct: true }, { text: "Moving energy", correct: false }, { text: "Light energy", correct: false }] },
                { question: "What is force?", answers: [{ text: "A push or pull", correct: true }, { text: "Energy only", correct: false }, { text: "Weight", correct: false }] },
                { question: "What is motion?", answers: [{ text: "Change in position", correct: true }, { text: "Staying still", correct: false }, { text: "Speed only", correct: false }] },
                { question: "What is speed?", answers: [{ text: "How fast something moves", correct: true }, { text: "Direction only", correct: false }, { text: "Distance only", correct: false }] },
                { question: "What is acceleration?", answers: [{ text: "Change in speed or direction", correct: true }, { text: "Going faster", correct: false }, { text: "Going slower", correct: false }] }
            ],
            2: [
                { question: "What is the water cycle?", answers: [{ text: "Evaporation, Condensation, Precipitation", correct: true }, { text: "Freezing only", correct: false }, { text: "Melting only", correct: false }] },
                { question: "What is evaporation?", answers: [{ text: "Water turning into vapor", correct: true }, { text: "Freezing water", correct: false }, { text: "Boiling water", correct: false }] },
                { question: "What is condensation?", answers: [{ text: "Vapor turning into liquid", correct: true }, { text: "Liquid becoming solid", correct: false }, { text: "Freezing", correct: false }] },
                { question: "What is precipitation?", answers: [{ text: "Water falling from clouds", correct: true }, { text: "Water evaporating", correct: false }, { text: "Cloud formation", correct: false }] },
                { question: "What is an ecosystem?", answers: [{ text: "Community of organisms and their environment", correct: true }, { text: "Only animals", correct: false }, { text: "Only plants", correct: false }] },
                { question: "What is a food chain?", answers: [{ text: "How energy transfers through organisms", correct: true }, { text: "A restaurant chain", correct: false }, { text: "Types of food", correct: false }] },
                { question: "What are producers?", answers: [{ text: "Organisms that make food (plants)", correct: true }, { text: "Animals only", correct: false }, { text: "Consumers", correct: false }] },
                { question: "What are consumers?", answers: [{ text: "Organisms that eat other organisms", correct: true }, { text: "Plants only", correct: false }, { text: "Producers", correct: false }] },
                { question: "What is decomposition?", answers: [{ text: "Breaking down of dead organisms", correct: true }, { text: "Eating", correct: false }, { text: "Growing", correct: false }] },
                { question: "What is photosynthesis?", answers: [{ text: "How plants make food using sunlight", correct: true }, { text: "How animals eat", correct: false }, { text: "How we breathe", correct: false }] },
                { question: "What is respiration?", answers: [{ text: "Process of releasing energy from food", correct: true }, { text: "Breathing only", correct: false }, { text: "Making food", correct: false }] },
                { question: "What is weather?", answers: [{ text: "Day-to-day atmospheric conditions", correct: true }, { text: "Long-term conditions", correct: false }, { text: "Moon phases", correct: false }] },
                { question: "What is climate?", answers: [{ text: "Long-term weather patterns", correct: true }, { text: "One day's weather", correct: false }, { text: "Wind only", correct: false }] },
                { question: "What is adaptation?", answers: [{ text: "How organisms fit their environment", correct: true }, { text: "Moving to a new place", correct: false }, { text: "Changing food", correct: false }] },
                { question: "What is habitat?", answers: [{ text: "Place where an organism lives", correct: true }, { text: "A tool", correct: false }, { text: "A food", correct: false }] }
            ]
        }
    },
    4: {
        math: {
            1: [
                { question: "What is 25 × 4?", answers: [{ text: "75", correct: false }, { text: "100", correct: true }, { text: "125", correct: false }] },
                { question: "What is 144 ÷ 12?", answers: [{ text: "10", correct: false }, { text: "12", correct: true }, { text: "14", correct: false }] },
                { question: "What is 35 + 47?", answers: [{ text: "80", correct: false }, { text: "82", correct: true }, { text: "84", correct: false }] },
                { question: "What is 100 - 35?", answers: [{ text: "64", correct: false }, { text: "65", correct: true }, { text: "66", correct: false }] },
                { question: "What is 23 × 3?", answers: [{ text: "68", correct: false }, { text: "69", correct: true }, { text: "70", correct: false }] },
                { question: "What is 156 ÷ 12?", answers: [{ text: "12", correct: false }, { text: "13", correct: true }, { text: "14", correct: false }] },
                { question: "What is 45 + 56?", answers: [{ text: "100", correct: false }, { text: "101", correct: true }, { text: "102", correct: false }] },
                { question: "What is 200 - 75?", answers: [{ text: "124", correct: false }, { text: "125", correct: true }, { text: "126", correct: false }] },
                { question: "What is 18 × 5?", answers: [{ text: "89", correct: false }, { text: "90", correct: true }, { text: "91", correct: false }] },
                { question: "What is 96 ÷ 8?", answers: [{ text: "11", correct: false }, { text: "12", correct: true }, { text: "13", correct: false }] },
                { question: "What is 62 + 38?", answers: [{ text: "99", correct: false }, { text: "100", correct: true }, { text: "101", correct: false }] },
                { question: "What is 150 - 60?", answers: [{ text: "89", correct: false }, { text: "90", correct: true }, { text: "91", correct: false }] },
                { question: "What is 12 × 7?", answers: [{ text: "83", correct: false }, { text: "84", correct: true }, { text: "85", correct: false }] },
                { question: "What is 132 ÷ 11?", answers: [{ text: "11", correct: false }, { text: "12", correct: true }, { text: "13", correct: false }] },
                { question: "What is 89 + 11?", answers: [{ text: "99", correct: false }, { text: "100", correct: true }, { text: "101", correct: false }] }
            ],
            2: [
                { question: "What is 250 ÷ 10?", answers: [{ text: "24", correct: false }, { text: "25", correct: true }, { text: "26", correct: false }] },
                { question: "What is 42 × 6?", answers: [{ text: "251", correct: false }, { text: "252", correct: true }, { text: "253", correct: false }] },
                { question: "What is 500 - 125?", answers: [{ text: "374", correct: false }, { text: "375", correct: true }, { text: "376", correct: false }] },
                { question: "What is 88 + 112?", answers: [{ text: "199", correct: false }, { text: "200", correct: true }, { text: "201", correct: false }] },
                { question: "What is 324 ÷ 18?", answers: [{ text: "17", correct: false }, { text: "18", correct: true }, { text: "19", correct: false }] },
                { question: "What is 75 × 4?", answers: [{ text: "299", correct: false }, { text: "300", correct: true }, { text: "301", correct: false }] },
                { question: "What is 450 - 200?", answers: [{ text: "249", correct: false }, { text: "250", correct: true }, { text: "251", correct: false }] },
                { question: "What is 123 + 177?", answers: [{ text: "299", correct: false }, { text: "300", correct: true }, { text: "301", correct: false }] },
                { question: "What is 256 ÷ 16?", answers: [{ text: "15", correct: false }, { text: "16", correct: true }, { text: "17", correct: false }] },
                { question: "What is 55 × 5?", answers: [{ text: "274", correct: false }, { text: "275", correct: true }, { text: "276", correct: false }] },
                { question: "What is 600 - 350?", answers: [{ text: "249", correct: false }, { text: "250", correct: true }, { text: "251", correct: false }] },
                { question: "What is 198 + 102?", answers: [{ text: "299", correct: false }, { text: "300", correct: true }, { text: "301", correct: false }] },
                { question: "What is 400 ÷ 16?", answers: [{ text: "24", correct: false }, { text: "25", correct: true }, { text: "26", correct: false }] },
                { question: "What is 32 × 8?", answers: [{ text: "255", correct: false }, { text: "256", correct: true }, { text: "257", correct: false }] },
                { question: "What is 1000 - 500?", answers: [{ text: "499", correct: false }, { text: "500", correct: true }, { text: "501", correct: false }] }
            ],
            3: [
                // Level 3: Multi-digit multiplication (2-digit × 1-digit)
                { question: "What is 23 × 4?", answers: [{ text: "82", correct: false }, { text: "92", correct: true }, { text: "102", correct: false }] },
                { question: "What is 15 × 6?", answers: [{ text: "80", correct: false }, { text: "90", correct: true }, { text: "100", correct: false }] },
                { question: "What is 34 × 2?", answers: [{ text: "68", correct: true }, { text: "58", correct: false }, { text: "78", correct: false }] },
                { question: "What is 18 × 7?", answers: [{ text: "116", correct: false }, { text: "126", correct: true }, { text: "136", correct: false }] },
                { question: "What is 27 × 3?", answers: [{ text: "71", correct: false }, { text: "81", correct: true }, { text: "91", correct: false }] },
                { question: "What is 45 × 2?", answers: [{ text: "80", correct: false }, { text: "90", correct: true }, { text: "100", correct: false }] },
                { question: "What is 19 × 5?", answers: [{ text: "85", correct: false }, { text: "95", correct: true }, { text: "105", correct: false }] },
                { question: "What is 36 × 3?", answers: [{ text: "98", correct: false }, { text: "108", correct: true }, { text: "118", correct: false }] },
                { question: "What is 22 × 8?", answers: [{ text: "166", correct: false }, { text: "176", correct: true }, { text: "186", correct: false }] },
                { question: "What is 17 × 4?", answers: [{ text: "58", correct: false }, { text: "68", correct: true }, { text: "78", correct: false }] },
                { question: "What is 29 × 3?", answers: [{ text: "77", correct: false }, { text: "87", correct: true }, { text: "97", correct: false }] },
                { question: "What is 14 × 7?", answers: [{ text: "88", correct: true }, { text: "98", correct: false }, { text: "108", correct: false }] },
                { question: "What is 25 × 5?", answers: [{ text: "115", correct: false }, { text: "125", correct: true }, { text: "135", correct: false }] },
                { question: "What is 16 × 6?", answers: [{ text: "86", correct: false }, { text: "96", correct: true }, { text: "106", correct: false }] },
                { question: "What is 21 × 4?", answers: [{ text: "74", correct: false }, { text: "84", correct: true }, { text: "94", correct: false }] }
            ],
            4: [
                // Level 4: Division with remainders
                { question: "What is 47 ÷ 5?", answers: [{ text: "9 R2", correct: true }, { text: "9", correct: false }, { text: "10 R2", correct: false }] },
                { question: "What is 38 ÷ 4?", answers: [{ text: "9 R2", correct: true }, { text: "9", correct: false }, { text: "10 R2", correct: false }] },
                { question: "What is 65 ÷ 8?", answers: [{ text: "8 R1", correct: true }, { text: "8", correct: false }, { text: "9 R1", correct: false }] },
                { question: "What is 52 ÷ 7?", answers: [{ text: "7 R3", correct: true }, { text: "7", correct: false }, { text: "8 R3", correct: false }] },
                { question: "What is 79 ÷ 9?", answers: [{ text: "8 R7", correct: true }, { text: "8", correct: false }, { text: "9 R7", correct: false }] },
                { question: "What is 43 ÷ 6?", answers: [{ text: "7 R1", correct: true }, { text: "7", correct: false }, { text: "8 R1", correct: false }] },
                { question: "What is 91 ÷ 10?", answers: [{ text: "9 R1", correct: true }, { text: "9", correct: false }, { text: "10 R1", correct: false }] },
                { question: "What is 57 ÷ 8?", answers: [{ text: "7 R1", correct: true }, { text: "7", correct: false }, { text: "8 R1", correct: false }] },
                { question: "What is 74 ÷ 9?", answers: [{ text: "8 R2", correct: true }, { text: "8", correct: false }, { text: "9 R2", correct: false }] },
                { question: "What is 29 ÷ 4?", answers: [{ text: "7 R1", correct: true }, { text: "7", correct: false }, { text: "8 R1", correct: false }] },
                { question: "What is 85 ÷ 12?", answers: [{ text: "7 R1", correct: true }, { text: "7", correct: false }, { text: "8 R1", correct: false }] },
                { question: "What is 63 ÷ 8?", answers: [{ text: "7 R7", correct: true }, { text: "7", correct: false }, { text: "8 R7", correct: false }] },
                { question: "What is 50 ÷ 7?", answers: [{ text: "7 R1", correct: true }, { text: "7", correct: false }, { text: "8 R1", correct: false }] },
                { question: "What is 96 ÷ 11?", answers: [{ text: "8 R8", correct: true }, { text: "8", correct: false }, { text: "9 R8", correct: false }] },
                { question: "What is 34 ÷ 5?", answers: [{ text: "6 R4", correct: true }, { text: "6", correct: false }, { text: "7 R4", correct: false }] }
            ],
            5: [
                // Level 5: Multi-step word problems
                { question: "Lisa buys 3 books for $8 each. How much does she spend?", answers: [{ text: "$24", correct: true }, { text: "$21", correct: false }, { text: "$27", correct: false }] },
                { question: "Tom has 48 marbles. He shares them equally among 6 friends. How many each?", answers: [{ text: "8", correct: true }, { text: "6", correct: false }, { text: "7", correct: false }] },
                { question: "A bakery makes 120 cookies. They pack them in boxes of 10. How many boxes?", answers: [{ text: "10", correct: false }, { text: "12", correct: true }, { text: "14", correct: false }] },
                { question: "Sarah walks 5 miles each day for 4 days. How far does she walk in total?", answers: [{ text: "20 miles", correct: true }, { text: "15 miles", correct: false }, { text: "25 miles", correct: false }] },
                { question: "A teacher has 45 pencils to give to 9 students. How many pencils each?", answers: [{ text: "4", correct: false }, { text: "5", correct: true }, { text: "6", correct: false }] },
                { question: "Jack buys 4 video games at $15 each. How much is the total?", answers: [{ text: "$50", correct: false }, { text: "$60", correct: true }, { text: "$70", correct: false }] },
                { question: "There are 72 students on 8 buses. How many students per bus?", answers: [{ text: "8", correct: false }, { text: "9", correct: true }, { text: "10", correct: false }] },
                { question: "Emma reads 25 pages a day for 3 days. How many pages total?", answers: [{ text: "65", correct: false }, { text: "75", correct: true }, { text: "85", correct: false }] },
                { question: "A farm has 56 chickens. They are put into 7 coops. How many per coop?", answers: [{ text: "7", correct: false }, { text: "8", correct: true }, { text: "9", correct: false }] },
                { question: "Mike earns $8 per hour. He works 9 hours. How much does he earn?", answers: [{ text: "$62", correct: false }, { text: "$72", correct: true }, { text: "$82", correct: false }] },
                { question: "There are 84 apples in 6 baskets. How many apples per basket?", answers: [{ text: "12", correct: true }, { text: "14", correct: false }, { text: "16", correct: false }] },
                { question: "A fruit stand sells 7 boxes of oranges. Each box has 12 oranges. Total?", answers: [{ text: "74", correct: false }, { text: "84", correct: true }, { text: "94", correct: false }] },
                { question: "Jane walks 3 miles on Monday and 4 miles on Tuesday. Total?", answers: [{ text: "6 miles", correct: false }, { text: "7 miles", correct: true }, { text: "8 miles", correct: false }] },
                { question: "A store sells 9 shirts at $11 each. How much money?", answers: [{ text: "$89", correct: false }, { text: "$99", correct: true }, { text: "$109", correct: false }] },
                { question: "There are 96 pages in a book. Emma reads 8 pages a day. Days to finish?", answers: [{ text: "10 days", correct: false }, { text: "12 days", correct: true }, { text: "14 days", correct: false }] }
            ],
            6: [
                // Level 6: Factors and multiples
                { question: "What is a factor of 24?", answers: [{ text: "8", correct: true }, { text: "7", correct: false }, { text: "9", correct: false }] },
                { question: "What are the factors of 12?", answers: [{ text: "1, 2, 3, 4, 6, 12", correct: true }, { text: "1, 2, 3, 4, 6", correct: false }, { text: "1, 2, 3, 6, 12", correct: false }] },
                { question: "Is 7 a factor of 42?", answers: [{ text: "Yes", correct: true }, { text: "No", correct: false }, { text: "Maybe", correct: false }] },
                { question: "What is the greatest common factor of 12 and 18?", answers: [{ text: "6", correct: true }, { text: "4", correct: false }, { text: "3", correct: false }] },
                { question: "What is a multiple of 5?", answers: [{ text: "20", correct: true }, { text: "12", correct: false }, { text: "14", correct: false }] },
                { question: "Is 36 a multiple of 6?", answers: [{ text: "Yes", correct: true }, { text: "No", correct: false }, { text: "Maybe", correct: false }] },
                { question: "What is the least common multiple of 3 and 4?", answers: [{ text: "12", correct: true }, { text: "8", correct: false }, { text: "6", correct: false }] },
                { question: "Which is prime: 15, 17, 21?", answers: [{ text: "17", correct: true }, { text: "15", correct: false }, { text: "21", correct: false }] },
                { question: "What are prime factors of 12?", answers: [{ text: "2 × 2 × 3", correct: true }, { text: "3 × 4", correct: false }, { text: "2 × 6", correct: false }] },
                { question: "Is 1 prime?", answers: [{ text: "No", correct: true }, { text: "Yes", correct: false }, { text: "Maybe", correct: false }] },
                { question: "What is the GCF of 20 and 30?", answers: [{ text: "10", correct: true }, { text: "5", correct: false }, { text: "15", correct: false }] },
                { question: "What is the LCM of 4 and 6?", answers: [{ text: "12", correct: true }, { text: "8", correct: false }, { text: "10", correct: false }] },
                { question: "Which is composite: 23, 25, 29?", answers: [{ text: "25", correct: true }, { text: "23", correct: false }, { text: "29", correct: false }] },
                { question: "What factor do 16 and 24 share that is greatest?", answers: [{ text: "8", correct: true }, { text: "4", correct: false }, { text: "2", correct: false }] },
                { question: "Find the first three multiples of 7:", answers: [{ text: "7, 14, 21", correct: true }, { text: "7, 8, 9", correct: false }, { text: "1, 7, 14", correct: false }] }
            ],
            7: [
                // Level 7: Decimals (addition, subtraction)
                { question: "What is 3.5 + 2.1?", answers: [{ text: "5.6", correct: true }, { text: "5.1", correct: false }, { text: "6.5", correct: false }] },
                { question: "What is 7.8 - 3.4?", answers: [{ text: "4.4", correct: true }, { text: "4.8", correct: false }, { text: "5.4", correct: false }] },
                { question: "What is 5.25 + 2.75?", answers: [{ text: "8.00", correct: true }, { text: "7.00", correct: false }, { text: "9.00", correct: false }] },
                { question: "What is 9.5 - 4.3?", answers: [{ text: "5.2", correct: true }, { text: "5.8", correct: false }, { text: "6.2", correct: false }] },
                { question: "What is 2.8 + 1.9?", answers: [{ text: "4.7", correct: true }, { text: "4.1", correct: false }, { text: "5.7", correct: false }] },
                { question: "What is 6.7 - 2.8?", answers: [{ text: "3.9", correct: true }, { text: "4.9", correct: false }, { text: "3.1", correct: false }] },
                { question: "What is 4.50 + 3.25?", answers: [{ text: "7.75", correct: true }, { text: "6.75", correct: false }, { text: "8.75", correct: false }] },
                { question: "What is 8.3 - 5.1?", answers: [{ text: "3.2", correct: true }, { text: "3.8", correct: false }, { text: "4.2", correct: false }] },
                { question: "What is 1.75 + 2.25?", answers: [{ text: "4.00", correct: true }, { text: "3.00", correct: false }, { text: "5.00", correct: false }] },
                { question: "What is 7.9 - 4.6?", answers: [{ text: "3.3", correct: true }, { text: "3.9", correct: false }, { text: "4.3", correct: false }] },
                { question: "What is 5.4 + 2.8?", answers: [{ text: "8.2", correct: true }, { text: "7.2", correct: false }, { text: "9.2", correct: false }] },
                { question: "What is 9.7 - 5.4?", answers: [{ text: "4.3", correct: true }, { text: "4.9", correct: false }, { text: "5.3", correct: false }] },
                { question: "What is 3.33 + 1.22?", answers: [{ text: "4.55", correct: true }, { text: "3.55", correct: false }, { text: "5.55", correct: false }] },
                { question: "What is 8.45 - 3.20?", answers: [{ text: "5.25", correct: true }, { text: "5.75", correct: false }, { text: "6.25", correct: false }] },
                { question: "What is 2.65 + 4.35?", answers: [{ text: "7.00", correct: true }, { text: "6.00", correct: false }, { text: "8.00", correct: false }] }
            ],
            8: [
                // Level 8: Decimal multiplication
                { question: "What is 2.5 × 3?", answers: [{ text: "7.5", correct: true }, { text: "6.5", correct: false }, { text: "8.5", correct: false }] },
                { question: "What is 1.4 × 5?", answers: [{ text: "7.0", correct: true }, { text: "6.0", correct: false }, { text: "8.0", correct: false }] },
                { question: "What is 3.2 × 4?", answers: [{ text: "12.8", correct: true }, { text: "11.8", correct: false }, { text: "13.8", correct: false }] },
                { question: "What is 2.5 × 6?", answers: [{ text: "15.0", correct: true }, { text: "14.0", correct: false }, { text: "16.0", correct: false }] },
                { question: "What is 4.5 × 2?", answers: [{ text: "9.0", correct: true }, { text: "8.0", correct: false }, { text: "10.0", correct: false }] },
                { question: "What is 1.8 × 3?", answers: [{ text: "5.4", correct: true }, { text: "4.4", correct: false }, { text: "6.4", correct: false }] },
                { question: "What is 5.5 × 4?", answers: [{ text: "22.0", correct: true }, { text: "21.0", correct: false }, { text: "23.0", correct: false }] },
                { question: "What is 2.2 × 7?", answers: [{ text: "15.4", correct: true }, { text: "14.4", correct: false }, { text: "16.4", correct: false }] },
                { question: "What is 3.5 × 5?", answers: [{ text: "17.5", correct: true }, { text: "16.5", correct: false }, { text: "18.5", correct: false }] },
                { question: "What is 1.6 × 8?", answers: [{ text: "12.8", correct: true }, { text: "11.8", correct: false }, { text: "13.8", correct: false }] },
                { question: "What is 4.2 × 3?", answers: [{ text: "12.6", correct: true }, { text: "11.6", correct: false }, { text: "13.6", correct: false }] },
                { question: "What is 2.8 × 5?", answers: [{ text: "14.0", correct: true }, { text: "13.0", correct: false }, { text: "15.0", correct: false }] },
                { question: "What is 6.5 × 2?", answers: [{ text: "13.0", correct: true }, { text: "12.0", correct: false }, { text: "14.0", correct: false }] },
                { question: "What is 3.4 × 4?", answers: [{ text: "13.6", correct: true }, { text: "12.6", correct: false }, { text: "14.6", correct: false }] },
                { question: "What is 2.1 × 6?", answers: [{ text: "12.6", correct: true }, { text: "11.6", correct: false }, { text: "13.6", correct: false }] }
            ],
            9: [
                // Level 9: Fractions (addition, subtraction)
                { question: "What is 1/2 + 1/4?", answers: [{ text: "3/4", correct: true }, { text: "2/4", correct: false }, { text: "1", correct: false }] },
                { question: "What is 2/3 - 1/3?", answers: [{ text: "1/3", correct: true }, { text: "1", correct: false }, { text: "3/3", correct: false }] },
                { question: "What is 3/4 + 1/4?", answers: [{ text: "1", correct: true }, { text: "4/4", correct: false }, { text: "2/4", correct: false }] },
                { question: "What is 5/8 - 1/8?", answers: [{ text: "4/8 = 1/2", correct: true }, { text: "6/8", correct: false }, { text: "3/8", correct: false }] },
                { question: "What is 1/3 + 1/3?", answers: [{ text: "2/3", correct: true }, { text: "1", correct: false }, { text: "2/6", correct: false }] },
                { question: "What is 7/10 - 3/10?", answers: [{ text: "4/10 = 2/5", correct: true }, { text: "10/10", correct: false }, { text: "5/10", correct: false }] },
                { question: "What is 2/5 + 2/5?", answers: [{ text: "4/5", correct: true }, { text: "5/5", correct: false }, { text: "3/5", correct: false }] },
                { question: "What is 3/4 - 1/4?", answers: [{ text: "2/4 = 1/2", correct: true }, { text: "4/4", correct: false }, { text: "1/4", correct: false }] },
                { question: "What is 1/6 + 2/6?", answers: [{ text: "3/6 = 1/2", correct: true }, { text: "6/6", correct: false }, { text: "2/6", correct: false }] },
                { question: "What is 5/6 - 2/6?", answers: [{ text: "3/6 = 1/2", correct: true }, { text: "6/6", correct: false }, { text: "4/6", correct: false }] },
                { question: "What is 1/8 + 3/8?", answers: [{ text: "4/8 = 1/2", correct: true }, { text: "8/8", correct: false }, { text: "2/8", correct: false }] },
                { question: "What is 4/5 - 1/5?", answers: [{ text: "3/5", correct: true }, { text: "5/5", correct: false }, { text: "2/5", correct: false }] },
                { question: "What is 2/7 + 3/7?", answers: [{ text: "5/7", correct: true }, { text: "7/7", correct: false }, { text: "4/7", correct: false }] },
                { question: "What is 6/8 - 2/8?", answers: [{ text: "4/8 = 1/2", correct: true }, { text: "8/8", correct: false }, { text: "3/8", correct: false }] },
                { question: "What is 1/9 + 4/9?", answers: [{ text: "5/9", correct: true }, { text: "9/9", correct: false }, { text: "3/9", correct: false }] }
            ],
            10: [
                // Level 10: Mixed operations challenge
                { question: "What is 144 ÷ (8 + 4)?", answers: [{ text: "12", correct: true }, { text: "10", correct: false }, { text: "14", correct: false }] },
                { question: "What is 25 × 4 - 50?", answers: [{ text: "50", correct: true }, { text: "40", correct: false }, { text: "60", correct: false }] },
                { question: "What is 100 - 25 × 2?", answers: [{ text: "50", correct: true }, { text: "75", correct: false }, { text: "25", correct: false }] },
                { question: "What is (15 + 20) ÷ 5?", answers: [{ text: "7", correct: true }, { text: "5", correct: false }, { text: "9", correct: false }] },
                { question: "What is 8 × 7 + 6?", answers: [{ text: "62", correct: true }, { text: "56", correct: false }, { text: "66", correct: false }] },
                { question: "What is 200 ÷ (15 - 5)?", answers: [{ text: "20", correct: true }, { text: "10", correct: false }, { text: "25", correct: false }] },
                { question: "What is 12 × 12 - 44?", answers: [{ text: "100", correct: true }, { text: "90", correct: false }, { text: "110", correct: false }] },
                { question: "What is (50 + 30) ÷ 8?", answers: [{ text: "10", correct: true }, { text: "8", correct: false }, { text: "12", correct: false }] },
                { question: "What is 15 × 6 - 40?", answers: [{ text: "50", correct: true }, { text: "40", correct: false }, { text: "60", correct: false }] },
                { question: "What is 180 ÷ 12 + 5?", answers: [{ text: "20", correct: true }, { text: "15", correct: false }, { text: "25", correct: false }] },
                { question: "What is 9 × 9 - 21?", answers: [{ text: "60", correct: true }, { text: "50", correct: false }, { text: "70", correct: false }] },
                { question: "What is (100 - 36) ÷ 8?", answers: [{ text: "8", correct: true }, { text: "6", correct: false }, { text: "10", correct: false }] },
                { question: "What is 7 × 12 + 16?", answers: [{ text: "100", correct: true }, { text: "90", correct: false }, { text: "110", correct: false }] },
                { question: "What is 250 ÷ (50 ÷ 10)?", answers: [{ text: "50", correct: true }, { text: "25", correct: false }, { text: "75", correct: false }] },
                { question: "What is 11 × 11 - 21?", answers: [{ text: "100", correct: true }, { text: "90", correct: false }, { text: "110", correct: false }] }
            ]
        },
        english: {
            1: [
                { question: "What is an adjective?", answers: [{ text: "A word that describes", correct: true }, { text: "An action word", correct: false }, { text: "A naming word", correct: false }] },
                { question: "Which word is spelled correctly?", answers: [{ text: "Recieve", correct: false }, { text: "Receive", correct: true }, { text: "Recive", correct: false }] },
                { question: "What is a compound word?", answers: [{ text: "Two words joined together", correct: true }, { text: "A long word", correct: false }, { text: "A word with a prefix", correct: false }] },
                { question: "Which sentence is correct?", answers: [{ text: "She don't like apples", correct: false }, { text: "She doesn't like apples", correct: true }, { text: "She does not likes apples", correct: false }] },
                { question: "What is a prefix?", answers: [{ text: "Letters added to the beginning", correct: true }, { text: "Letters at the end", correct: false }, { text: "A type of word", correct: false }] },
                { question: "What is the suffix in 'running'?", answers: [{ text: "run", correct: false }, { text: "ing", correct: true }, { text: "nn", correct: false }] },
                { question: "How many syllables in 'elephant'?", answers: [{ text: "2", correct: false }, { text: "3", correct: true }, { text: "4", correct: false }] },
                { question: "Which word rhymes with 'bright'?", answers: [{ text: "Slight", correct: true }, { text: "Brought", correct: false }, { text: "Brown", correct: false }] },
                { question: "What does 'synonym' mean?", answers: [{ text: "Words with opposite meanings", correct: false }, { text: "Words with similar meanings", correct: true }, { text: "Words that rhyme", correct: false }] },
                { question: "What is an antonym?", answers: [{ text: "A word with opposite meaning", correct: true }, { text: "A word with similar meaning", correct: false }, { text: "A type of sentence", correct: false }] },
                { question: "Which is a proper noun?", answers: [{ text: "John Smith", correct: true }, { text: "Boy", correct: false }, { text: "Book", correct: false }] },
                { question: "What punctuation ends a question?", answers: [{ text: "Period", correct: false }, { text: "Question mark", correct: true }, { text: "Comma", correct: false }] },
                { question: "What is a conjunction?", answers: [{ text: "A word that connects", correct: true }, { text: "A describing word", correct: false }, { text: "An action word", correct: false }] },
                { question: "Which conjunction is correct: 'and', 'but', 'or'?", answers: [{ text: "All of the above", correct: true }, { text: "Only 'and'", correct: false }, { text: "Only 'but'", correct: false }] },
                { question: "What does 'verb tense' mean?", answers: [{ text: "When an action happens", correct: true }, { text: "How many verbs", correct: false }, { text: "Types of verbs", correct: false }] }
            ],
            2: [
                { question: "What is the past tense of 'write'?", answers: [{ text: "Writing", correct: false }, { text: "Wrote", correct: true }, { text: "Will write", correct: false }] },
                { question: "What is the future tense of 'go'?", answers: [{ text: "Went", correct: false }, { text: "Going", correct: false }, { text: "Will go", correct: true }] },
                { question: "What is a complex sentence?", answers: [{ text: "A sentence with independent and dependent clauses", correct: true }, { text: "A short sentence", correct: false }, { text: "A sentence with many words", correct: false }] },
                { question: "Which is a dependent clause?", answers: [{ text: "Because it was raining", correct: true }, { text: "The cat sat", correct: false }, { text: "She ran fast", correct: false }] },
                { question: "What does 'metaphor' mean?", answers: [{ text: "A comparison without 'like' or 'as'", correct: true }, { text: "A comparison with 'like'", correct: false }, { text: "A type of word", correct: false }] },
                { question: "What is a simile?", answers: [{ text: "A comparison using 'like' or 'as'", correct: true }, { text: "A type of word", correct: false }, { text: "A sentence structure", correct: false }] },
                { question: "What does 'alliteration' mean?", answers: [{ text: "Repetition of beginning sounds", correct: true }, { text: "Rhyming words", correct: false }, { text: "Long sentences", correct: false }] },
                { question: "What is the main idea?", answers: [{ text: "The most important point", correct: true }, { text: "A detail", correct: false }, { text: "A supporting sentence", correct: false }] },
                { question: "What are supporting details?", answers: [{ text: "Information that supports the main idea", correct: true }, { text: "The topic", correct: false }, { text: "The conclusion", correct: false }] },
                { question: "What is the purpose of a paragraph?", answers: [{ text: "To organize related ideas", correct: true }, { text: "To make text longer", correct: false }, { text: "To add decoration", correct: false }] },
                { question: "What is the topic sentence?", answers: [{ text: "The sentence that states the main idea", correct: true }, { text: "The last sentence", correct: false }, { text: "Any sentence in the paragraph", correct: false }] },
                { question: "What does 'conclusion' mean?", answers: [{ text: "The final thought or summary", correct: true }, { text: "The beginning", correct: false }, { text: "A detail", correct: false }] },
                { question: "What is a character?", answers: [{ text: "A person in a story", correct: true }, { text: "A letter", correct: false }, { text: "A symbol", correct: false }] },
                { question: "What is the setting?", answers: [{ text: "Where and when a story takes place", correct: true }, { text: "The characters", correct: false }, { text: "The problem", correct: false }] },
                { question: "What is the plot?", answers: [{ text: "The sequence of events", correct: true }, { text: "The setting", correct: false }, { text: "The characters", correct: false }] }
            ]
        },
        social: {
            1: [
                { question: "What is a continent?", answers: [{ text: "A large area of land", correct: true }, { text: "A type of weather", correct: false }, { text: "A body of water", correct: false }] },
                { question: "How many continents are there?", answers: [{ text: "5", correct: false }, { text: "7", correct: true }, { text: "10", correct: false }] },
                { question: "What are natural resources?", answers: [{ text: "Things found in nature that people use", correct: true }, { text: "Man-made objects", correct: false }, { text: "Tools only", correct: false }] },
                { question: "What is renewable energy?", answers: [{ text: "Energy that can be replenished", correct: true }, { text: "Coal and oil", correct: false }, { text: "Electricity", correct: false }] },
                { question: "What are non-renewable resources?", answers: [{ text: "Resources that cannot be replaced", correct: true }, { text: "Things we can make", correct: false }, { text: "Solar power", correct: false }] },
                { question: "What is conservation?", answers: [{ text: "Protecting and preserving resources", correct: true }, { text: "Using more resources", correct: false }, { text: "Building dams", correct: false }] },
                { question: "What does a governor do?", answers: [{ text: "Leads a state", correct: true }, { text: "Leads a country", correct: false }, { text: "Runs a school", correct: false }] },
                { question: "What is the U.S. Constitution?", answers: [{ text: "The document of laws for our country", correct: true }, { text: "A building", correct: false }, { text: "A historical event", correct: false }] },
                { question: "What are the three branches of government?", answers: [{ text: "Legislative, Executive, Judicial", correct: true }, { text: "Army, Navy, Air Force", correct: false }, { text: "State, Federal, Local", correct: false }] },
                { question: "What do inventors do?", answers: [{ text: "Create something new", correct: true }, { text: "Only discover things", correct: false }, { text: "Build buildings", correct: false }] },
                { question: "Who was Benjamin Franklin?", answers: [{ text: "An inventor and Founding Father", correct: true }, { text: "A general", correct: false }, { text: "A teacher", correct: false }] },
                { question: "What is an amendment?", answers: [{ text: "A change to the Constitution", correct: true }, { text: "A law", correct: false }, { text: "A vote", correct: false }] },
                { question: "What does 'democracy' mean?", answers: [{ text: "Government by the people", correct: true }, { text: "Rule by one person", correct: false }, { text: "Rule by the military", correct: false }] },
                { question: "What are rights?", answers: [{ text: "Freedoms everyone has", correct: true }, { text: "Rules we follow", correct: false }, { text: "Responsibilities", correct: false }] },
                { question: "What are responsibilities?", answers: [{ text: "Duties we must do as citizens", correct: true }, { text: "Freedoms", correct: false }, { text: "Laws only", correct: false }] }
            ],
            2: [
                { question: "What is a map's scale?", answers: [{ text: "Shows distances on a map", correct: true }, { text: "Measures temperature", correct: false }, { text: "Shows elevation", correct: false }] },
                { question: "What do map symbols represent?", answers: [{ text: "Features on the map", correct: true }, { text: "Distances", correct: false }, { text: "Directions", correct: false }] },
                { question: "What is the equator?", answers: [{ text: "An imaginary line dividing Earth", correct: true }, { text: "A continent", correct: false }, { text: "A mountain range", correct: false }] },
                { question: "What is latitude?", answers: [{ text: "Lines running east and west", correct: true }, { text: "Lines running north and south", correct: false }, { text: "Map symbols", correct: false }] },
                { question: "What is longitude?", answers: [{ text: "Lines running north and south", correct: true }, { text: "Lines running east and west", correct: false }, { text: "Elevation lines", correct: false }] },
                { question: "What is climate?", answers: [{ text: "Long-term weather patterns", correct: true }, { text: "Daily weather", correct: false }, { text: "Storms", correct: false }] },
                { question: "What is economy?", answers: [{ text: "System of money and jobs", correct: true }, { text: "A government type", correct: false }, { text: "A type of business", correct: false }] },
                { question: "What is supply and demand?", answers: [{ text: "How much is available vs. wanted", correct: true }, { text: "Types of stores", correct: false }, { text: "Government control", correct: false }] },
                { question: "What is a producer?", answers: [{ text: "Someone who makes goods", correct: true }, { text: "Someone who sells", correct: false }, { text: "A consumer", correct: false }] },
                { question: "What is a consumer?", answers: [{ text: "Someone who buys goods", correct: true }, { text: "Someone who makes things", correct: false }, { text: "A producer", correct: false }] },
                { question: "What is trade?", answers: [{ text: "Exchange of goods between people/countries", correct: true }, { text: "Only buying", correct: false }, { text: "Only selling", correct: false }] },
                { question: "What does 'import' mean?", answers: [{ text: "Bringing in goods from another country", correct: true }, { text: "Sending goods out", correct: false }, { text: "Making goods", correct: false }] },
                { question: "What does 'export' mean?", answers: [{ text: "Sending goods to another country", correct: true }, { text: "Bringing goods in", correct: false }, { text: "Storing goods", correct: false }] },
                { question: "What is a cultural tradition?", answers: [{ text: "Customs passed down through generations", correct: true }, { text: "A recent invention", correct: false }, { text: "A government law", correct: false }] },
                { question: "What is diversity?", answers: [{ text: "Variety in people and cultures", correct: true }, { text: "Same beliefs", correct: false }, { text: "One type of person", correct: false }] }
            ]
        },
        science: {
            1: [
                { question: "What are the planets in our solar system?", answers: [{ text: "8 planets", correct: true }, { text: "9 planets", correct: false }, { text: "10 planets", correct: false }] },
                { question: "What is the largest planet?", answers: [{ text: "Jupiter", correct: true }, { text: "Saturn", correct: false }, { text: "Neptune", correct: false }] },
                { question: "What is the closest planet to the sun?", answers: [{ text: "Mercury", correct: true }, { text: "Venus", correct: false }, { text: "Earth", correct: false }] },
                { question: "What are the three states of matter?", answers: [{ text: "Solid, Liquid, Gas", correct: true }, { text: "Hot, Cold, Warm", correct: false }, { text: "Big, Small, Tiny", correct: false }] },
                { question: "What is density?", answers: [{ text: "How much mass in a certain volume", correct: true }, { text: "Weight only", correct: false }, { text: "Size only", correct: false }] },
                { question: "What is gravity?", answers: [{ text: "Force that pulls objects down", correct: true }, { text: "Wind", correct: false }, { text: "Heat", correct: false }] },
                { question: "What is friction?", answers: [{ text: "Force that resists motion", correct: true }, { text: "A type of energy", correct: false }, { text: "Movement", correct: false }] },
                { question: "What are simple machines?", answers: [{ text: "Tools that make work easier", correct: true }, { text: "Computers", correct: false }, { text: "Motors only", correct: false }] },
                { question: "What is a lever?", answers: [{ text: "A simple machine with a pivot", correct: true }, { text: "A type of rope", correct: false }, { text: "A tool only", correct: false }] },
                { question: "What is a pulley?", answers: [{ text: "A simple machine with a wheel and rope", correct: true }, { text: "A type of screw", correct: false }, { text: "A lever", correct: false }] },
                { question: "What is an inclined plane?", answers: [{ text: "A sloped surface", correct: true }, { text: "A horizontal plane", correct: false }, { text: "A flat surface", correct: false }] },
                { question: "What is energy?", answers: [{ text: "The ability to do work", correct: true }, { text: "Movement only", correct: false }, { text: "Heat only", correct: false }] },
                { question: "What is kinetic energy?", answers: [{ text: "Energy of motion", correct: true }, { text: "Energy at rest", correct: false }, { text: "Heat energy", correct: false }] },
                { question: "What is potential energy?", answers: [{ text: "Energy stored in an object", correct: true }, { text: "Moving energy", correct: false }, { text: "Light energy", correct: false }] },
                { question: "What is force?", answers: [{ text: "A push or pull", correct: true }, { text: "Energy only", correct: false }, { text: "Weight", correct: false }] }
            ],
            2: [
                { question: "What is the water cycle?", answers: [{ text: "Evaporation, Condensation, Precipitation", correct: true }, { text: "Freezing only", correct: false }, { text: "Melting only", correct: false }] },
                { question: "What is evaporation?", answers: [{ text: "Water turning into vapor", correct: true }, { text: "Freezing water", correct: false }, { text: "Boiling water", correct: false }] },
                { question: "What is condensation?", answers: [{ text: "Vapor turning into liquid", correct: true }, { text: "Liquid becoming solid", correct: false }, { text: "Freezing", correct: false }] },
                { question: "What is precipitation?", answers: [{ text: "Water falling from clouds", correct: true }, { text: "Water evaporating", correct: false }, { text: "Cloud formation", correct: false }] },
                { question: "What is an ecosystem?", answers: [{ text: "Community of organisms and their environment", correct: true }, { text: "Only animals", correct: false }, { text: "Only plants", correct: false }] },
                { question: "What is a food chain?", answers: [{ text: "How energy transfers through organisms", correct: true }, { text: "A restaurant chain", correct: false }, { text: "Types of food", correct: false }] },
                { question: "What are producers?", answers: [{ text: "Organisms that make food (plants)", correct: true }, { text: "Animals only", correct: false }, { text: "Consumers", correct: false }] },
                { question: "What are consumers?", answers: [{ text: "Organisms that eat other organisms", correct: true }, { text: "Plants only", correct: false }, { text: "Producers", correct: false }] },
                { question: "What is decomposition?", answers: [{ text: "Breaking down of dead organisms", correct: true }, { text: "Eating", correct: false }, { text: "Growing", correct: false }] },
                { question: "What is photosynthesis?", answers: [{ text: "How plants make food using sunlight", correct: true }, { text: "How animals eat", correct: false }, { text: "How we breathe", correct: false }] },
                { question: "What is respiration?", answers: [{ text: "Process of releasing energy from food", correct: true }, { text: "Breathing only", correct: false }, { text: "Making food", correct: false }] },
                { question: "What is weather?", answers: [{ text: "Day-to-day atmospheric conditions", correct: true }, { text: "Long-term conditions", correct: false }, { text: "Moon phases", correct: false }] },
                { question: "What is climate?", answers: [{ text: "Long-term weather patterns", correct: true }, { text: "One day's weather", correct: false }, { text: "Wind only", correct: false }] },
                { question: "What are weather patterns?", answers: [{ text: "Recurring atmospheric conditions", correct: true }, { text: "Random events only", correct: false }, { text: "Seasons only", correct: false }] },
                { question: "What is adaptation?", answers: [{ text: "How organisms fit their environment", correct: true }, { text: "Moving to a new place", correct: false }, { text: "Changing food", correct: false }] }
            ]
        }
    },
    5: {
        math: {
            1: [
                { question: "What is 123 + 456?", answers: [{ text: "569", correct: false }, { text: "579", correct: true }, { text: "589", correct: false }] },
                { question: "What is 500 - 234?", answers: [{ text: "265", correct: false }, { text: "266", correct: true }, { text: "267", correct: false }] },
                { question: "What is 45 × 12?", answers: [{ text: "539", correct: false }, { text: "540", correct: true }, { text: "541", correct: false }] },
                { question: "What is 288 ÷ 12?", answers: [{ text: "23", correct: false }, { text: "24", correct: true }, { text: "25", correct: false }] },
                { question: "What is 789 + 211?", answers: [{ text: "999", correct: false }, { text: "1000", correct: true }, { text: "1001", correct: false }] },
                { question: "What is 1000 - 345?", answers: [{ text: "654", correct: false }, { text: "655", correct: true }, { text: "656", correct: false }] },
                { question: "What is 67 × 8?", answers: [{ text: "535", correct: false }, { text: "536", correct: true }, { text: "537", correct: false }] },
                { question: "What is 360 ÷ 15?", answers: [{ text: "23", correct: false }, { text: "24", correct: true }, { text: "25", correct: false }] },
                { question: "What is 234 + 567?", answers: [{ text: "800", correct: false }, { text: "801", correct: true }, { text: "802", correct: false }] },
                { question: "What is 800 - 456?", answers: [{ text: "343", correct: false }, { text: "344", correct: true }, { text: "345", correct: false }] },
                { question: "What is 56 × 7?", answers: [{ text: "391", correct: false }, { text: "392", correct: true }, { text: "393", correct: false }] },
                { question: "What is 450 ÷ 18?", answers: [{ text: "24", correct: false }, { text: "25", correct: true }, { text: "26", correct: false }] },
                { question: "What is 345 + 655?", answers: [{ text: "999", correct: false }, { text: "1000", correct: true }, { text: "1001", correct: false }] },
                { question: "What is 900 - 567?", answers: [{ text: "332", correct: false }, { text: "333", correct: true }, { text: "334", correct: false }] },
                { question: "What is 78 × 9?", answers: [{ text: "701", correct: false }, { text: "702", correct: true }, { text: "703", correct: false }] }
            ],
            2: [
                { question: "What is 50% of 200?", answers: [{ text: "100", correct: true }, { text: "150", correct: false }, { text: "200", correct: false }] },
                { question: "What is 25% of 400?", answers: [{ text: "100", correct: true }, { text: "150", correct: false }, { text: "200", correct: false }] },
                { question: "What is 75% of 800?", answers: [{ text: "500", correct: false }, { text: "600", correct: true }, { text: "700", correct: false }] },
                { question: "What is 1/2 of 20?", answers: [{ text: "8", correct: false }, { text: "10", correct: true }, { text: "12", correct: false }] },
                { question: "What is 1/4 of 40?", answers: [{ text: "8", correct: false }, { text: "10", correct: true }, { text: "12", correct: false }] },
                { question: "What is 3/4 of 12?", answers: [{ text: "8", correct: false }, { text: "9", correct: true }, { text: "10", correct: false }] },
                { question: "What is 2/3 of 18?", answers: [{ text: "10", correct: false }, { text: "12", correct: true }, { text: "14", correct: false }] },
                { question: "What is 1/5 of 50?", answers: [{ text: "8", correct: false }, { text: "10", correct: true }, { text: "12", correct: false }] },
                { question: "What is 2/5 of 100?", answers: [{ text: "35", correct: false }, { text: "40", correct: true }, { text: "45", correct: false }] },
                { question: "What is 3/5 of 50?", answers: [{ text: "25", correct: false }, { text: "30", correct: true }, { text: "35", correct: false }] },
                { question: "What is the decimal for 1/2?", answers: [{ text: "0.25", correct: false }, { text: "0.5", correct: true }, { text: "0.75", correct: false }] },
                { question: "What is the decimal for 1/4?", answers: [{ text: "0.25", correct: true }, { text: "0.5", correct: false }, { text: "0.75", correct: false }] },
                { question: "What is 2.5 + 3.5?", answers: [{ text: "5.5", correct: false }, { text: "6", correct: true }, { text: "6.5", correct: false }] },
                { question: "What is 10.5 - 4.5?", answers: [{ text: "5", correct: false }, { text: "6", correct: true }, { text: "7", correct: false }] },
                { question: "What is 5 × 0.5?", answers: [{ text: "1.5", correct: false }, { text: "2.5", correct: true }, { text: "3.5", correct: false }] }
            ]
        },
        english: {
            1: [
                { question: "What is a preposition?", answers: [{ text: "A word showing location or time", correct: true }, { text: "An action word", correct: false }, { text: "A describing word", correct: false }] },
                { question: "What is a conjunction?", answers: [{ text: "A word that connects", correct: true }, { text: "A describing word", correct: false }, { text: "An action word", correct: false }] },
                { question: "What are common conjunctions?", answers: [{ text: "and, but, or", correct: true }, { text: "the, a, an", correct: false }, { text: "in, on, at", correct: false }] },
                { question: "What is a pronoun?", answers: [{ text: "A word that replaces a noun", correct: true }, { text: "A naming word", correct: false }, { text: "An action word", correct: false }] },
                { question: "What are common pronouns?", answers: [{ text: "he, she, it, they", correct: true }, { text: "run, walk, jump", correct: false }, { text: "happy, sad, big", correct: false }] },
                { question: "What is an article?", answers: [{ text: "a, an, the", correct: true }, { text: "and, but, or", correct: false }, { text: "he, she, it", correct: false }] },
                { question: "What is a clause?", answers: [{ text: "A group of words with subject and verb", correct: true }, { text: "A single word", correct: false }, { text: "A punctuation mark", correct: false }] },
                { question: "What is an independent clause?", answers: [{ text: "A clause that can stand alone", correct: true }, { text: "A clause that needs another", correct: false }, { text: "A short phrase", correct: false }] },
                { question: "What is a dependent clause?", answers: [{ text: "A clause that needs an independent clause", correct: true }, { text: "A clause that stands alone", correct: false }, { text: "A simple sentence", correct: false }] },
                { question: "What is a compound sentence?", answers: [{ text: "Two independent clauses joined", correct: true }, { text: "A sentence with one clause", correct: false }, { text: "A long sentence", correct: false }] },
                { question: "What is a complex sentence?", answers: [{ text: "Independent and dependent clauses", correct: true }, { text: "A short sentence", correct: false }, { text: "Only one clause", correct: false }] },
                { question: "What is alliteration?", answers: [{ text: "Repetition of beginning sounds", correct: true }, { text: "Rhyming words", correct: false }, { text: "Comparing two things", correct: false }] },
                { question: "What is a metaphor?", answers: [{ text: "A comparison without 'like' or 'as'", correct: true }, { text: "A comparison with 'like'", correct: false }, { text: "A type of word", correct: false }] },
                { question: "What is a simile?", answers: [{ text: "A comparison using 'like' or 'as'", correct: true }, { text: "A type of word", correct: false }, { text: "A sentence structure", correct: false }] },
                { question: "What is personification?", answers: [{ text: "Giving human qualities to non-human things", correct: true }, { text: "A type of comparison", correct: false }, { text: "A rhyming pattern", correct: false }] }
            ],
            2: [
                { question: "What is a complex sentence?", answers: [{ text: "A sentence with independent and dependent clauses", correct: true }, { text: "A short sentence", correct: false }, { text: "A sentence with many words", correct: false }] },
                { question: "What is a topic sentence?", answers: [{ text: "The sentence that states the main idea", correct: true }, { text: "The last sentence", correct: false }, { text: "Any sentence", correct: false }] },
                { question: "What are supporting details?", answers: [{ text: "Information that supports the main idea", correct: true }, { text: "The conclusion", correct: false }, { text: "The title", correct: false }] },
                { question: "What is a conclusion?", answers: [{ text: "The final thought or summary", correct: true }, { text: "The beginning", correct: false }, { text: "The middle", correct: false }] },
                { question: "What is an outline?", answers: [{ text: "A plan for writing", correct: true }, { text: "A final draft", correct: false }, { text: "A rough sketch", correct: false }] },
                { question: "What is summarizing?", answers: [{ text: "Briefly restating the main points", correct: true }, { text: "Copying text", correct: false }, { text: "Rewriting everything", correct: false }] },
                { question: "What is paraphrasing?", answers: [{ text: "Restating in your own words", correct: true }, { text: "Copying exactly", correct: false }, { text: "Summarizing", correct: false }] },
                { question: "What is a plot?", answers: [{ text: "The sequence of events", correct: true }, { text: "The setting", correct: false }, { text: "The characters", correct: false }] },
                { question: "What is the setting?", answers: [{ text: "Where and when a story takes place", correct: true }, { text: "The characters", correct: false }, { text: "The problem", correct: false }] },
                { question: "What is characterization?", answers: [{ text: "How an author describes characters", correct: true }, { text: "A character's name", correct: false }, { text: "A character's age", correct: false }] },
                { question: "What is conflict?", answers: [{ text: "The problem in a story", correct: true }, { text: "The solution", correct: false }, { text: "The ending", correct: false }] },
                { question: "What is the resolution?", answers: [{ text: "How the conflict is solved", correct: true }, { text: "The beginning", correct: false }, { text: "The middle", correct: false }] },
                { question: "What is the climax?", answers: [{ text: "The most exciting part", correct: true }, { text: "The beginning", correct: false }, { text: "The ending", correct: false }] },
                { question: "What is theme?", answers: [{ text: "The main message of a story", correct: true }, { text: "The plot", correct: false }, { text: "The title", correct: false }] },
                { question: "What is point of view?", answers: [{ text: "Whose perspective the story is told from", correct: true }, { text: "The author's opinion", correct: false }, { text: "The setting", correct: false }] }
            ]
        },
        social: {
            1: [
                { question: "What is a democracy?", answers: [{ text: "A government of the people", correct: true }, { text: "A type of weather", correct: false }, { text: "A type of business", correct: false }] },
                { question: "What are checks and balances?", answers: [{ text: "A system that keeps one branch from having too much power", correct: true }, { text: "Banking concepts", correct: false }, { text: "A military system", correct: false }] },
                { question: "What are the three branches of government?", answers: [{ text: "Legislative, Executive, Judicial", correct: true }, { text: "Army, Navy, Air Force", correct: false }, { text: "State, Federal, Local", correct: false }] },
                { question: "What does the legislative branch do?", answers: [{ text: "Makes laws", correct: true }, { text: "Enforces laws", correct: false }, { text: "Interprets laws", correct: false }] },
                { question: "What does the executive branch do?", answers: [{ text: "Enforces laws", correct: true }, { text: "Makes laws", correct: false }, { text: "Interprets laws", correct: false }] },
                { question: "What does the judicial branch do?", answers: [{ text: "Interprets laws", correct: true }, { text: "Makes laws", correct: false }, { text: "Enforces laws", correct: false }] },
                { question: "Who is the President?", answers: [{ text: "Leader of the executive branch", correct: true }, { text: "Leader of Congress", correct: false }, { text: "A judge", correct: false }] },
                { question: "What is Congress?", answers: [{ text: "The legislative branch", correct: true }, { text: "The executive branch", correct: false }, { text: "The judicial branch", correct: false }] },
                { question: "What is the Constitution?", answers: [{ text: "The document of laws for our country", correct: true }, { text: "A building", correct: false }, { text: "A historical event", correct: false }] },
                { question: "What is an amendment?", answers: [{ text: "A change to the Constitution", correct: true }, { text: "A law", correct: false }, { text: "A vote", correct: false }] },
                { question: "What is a right?", answers: [{ text: "A freedom guaranteed to citizens", correct: true }, { text: "A duty", correct: false }, { text: "A law", correct: false }] },
                { question: "What is a responsibility?", answers: [{ text: "A duty citizens must perform", correct: true }, { text: "A freedom", correct: false }, { text: "A right", correct: false }] },
                { question: "What does voting mean?", answers: [{ text: "Choosing in an election", correct: true }, { text: "Making a law", correct: false }, { text: "Serving on a jury", correct: false }] },
                { question: "What is a citizen?", answers: [{ text: "A member of a country", correct: true }, { text: "A visitor", correct: false }, { text: "A soldier", correct: false }] },
                { question: "What does civic mean?", answers: [{ text: "Related to citizenship and government", correct: true }, { text: "Related to science", correct: false }, { text: "Related to sports", correct: false }] }
            ],
            2: [
                { question: "What are continents?", answers: [{ text: "The seven large areas of land", correct: true }, { text: "Countries", correct: false }, { text: "States", correct: false }] },
                { question: "What is a prime meridian?", answers: [{ text: "The line at 0 degrees longitude", correct: true }, { text: "The equator", correct: false }, { text: "A mountain range", correct: false }] },
                { question: "What is the equator?", answers: [{ text: "An imaginary line dividing Earth into North and South", correct: true }, { text: "A continent", correct: false }, { text: "A country", correct: false }] },
                { question: "What are latitude lines?", answers: [{ text: "Lines running east and west", correct: true }, { text: "Lines running north and south", correct: false }, { text: "Mountain ranges", correct: false }] },
                { question: "What are longitude lines?", answers: [{ text: "Lines running north and south", correct: true }, { text: "Lines running east and west", correct: false }, { text: "Equator lines", correct: false }] },
                { question: "What is climate?", answers: [{ text: "Long-term weather patterns", correct: true }, { text: "Daily weather", correct: false }, { text: "Storms", correct: false }] },
                { question: "What is weather?", answers: [{ text: "Day-to-day atmospheric conditions", correct: true }, { text: "Long-term patterns", correct: false }, { text: "Climate", correct: false }] },
                { question: "What is culture?", answers: [{ text: "Beliefs, customs, and way of life", correct: true }, { text: "Only food", correct: false }, { text: "Only language", correct: false }] },
                { question: "What is trade?", answers: [{ text: "Exchange of goods between people/countries", correct: true }, { text: "Only buying", correct: false }, { text: "Only selling", correct: false }] },
                { question: "What does import mean?", answers: [{ text: "Bringing goods from another country", correct: true }, { text: "Sending goods out", correct: false }, { text: "Making goods", correct: false }] },
                { question: "What does export mean?", answers: [{ text: "Sending goods to another country", correct: true }, { text: "Bringing goods in", correct: false }, { text: "Storing goods", correct: false }] },
                { question: "What is natural resources?", answers: [{ text: "Materials from nature used by people", correct: true }, { text: "Man-made objects", correct: false }, { text: "Tools only", correct: false }] },
                { question: "What are renewable resources?", answers: [{ text: "Resources that can be replenished", correct: true }, { text: "Resources that cannot be replaced", correct: false }, { text: "Only minerals", correct: false }] },
                { question: "What are non-renewable resources?", answers: [{ text: "Resources that cannot be replaced", correct: true }, { text: "Resources that can be replenished", correct: false }, { text: "Only plants", correct: false }] },
                { question: "What is conservation?", answers: [{ text: "Protecting and preserving resources", correct: true }, { text: "Using more resources", correct: false }, { text: "Wasting resources", correct: false }] }
            ]
        },
        science: {
            1: [
                { question: "What is the scientific method?", answers: [{ text: "Steps for testing ideas", correct: true }, { text: "A type of science", correct: false }, { text: "A laboratory tool", correct: false }] },
                { question: "What is an ecosystem?", answers: [{ text: "Community of organisms and their environment", correct: true }, { text: "Only animals", correct: false }, { text: "Only plants", correct: false }] },
                { question: "What is a food web?", answers: [{ text: "Multiple food chains connected", correct: true }, { text: "A single food chain", correct: false }, { text: "Animals eating plants", correct: false }] },
                { question: "What are decomposers?", answers: [{ text: "Organisms that break down dead material", correct: true }, { text: "Producers", correct: false }, { text: "Consumers", correct: false }] },
                { question: "What is biodiversity?", answers: [{ text: "Variety of life in an ecosystem", correct: true }, { text: "Same species", correct: false }, { text: "One type of organism", correct: false }] },
                { question: "What is adaptation?", answers: [{ text: "How organisms fit their environment", correct: true }, { text: "Moving to a new place", correct: false }, { text: "Changing appearance", correct: false }] },
                { question: "What is evolution?", answers: [{ text: "Change in organisms over time", correct: true }, { text: "Sudden changes", correct: false }, { text: "Individual growth", correct: false }] },
                { question: "What is natural selection?", answers: [{ text: "Survival of the best adapted", correct: true }, { text: "Random change", correct: false }, { text: "Human choice", correct: false }] },
                { question: "What are fossils?", answers: [{ text: "Remains of organisms from the past", correct: true }, { text: "Living organisms", correct: false }, { text: "Rocks only", correct: false }] },
                { question: "What is extinction?", answers: [{ text: "When a species no longer exists", correct: true }, { text: "When animals sleep", correct: false }, { text: "Hibernation", correct: false }] },
                { question: "What are cells?", answers: [{ text: "Basic unit of life", correct: true }, { text: "Molecules only", correct: false }, { text: "Atoms only", correct: false }] },
                { question: "What is photosynthesis?", answers: [{ text: "How plants make food using sunlight", correct: true }, { text: "How animals eat", correct: false }, { text: "How we breathe", correct: false }] },
                { question: "What is respiration?", answers: [{ text: "Process of releasing energy", correct: true }, { text: "Breathing only", correct: false }, { text: "Sleeping", correct: false }] },
                { question: "What is a habitat?", answers: [{ text: "Where an organism lives", correct: true }, { text: "A tool", correct: false }, { text: "Food", correct: false }] },
                { question: "What is a niche?", answers: [{ text: "Role of organism in its habitat", correct: true }, { text: "A place", correct: false }, { text: "A type of food", correct: false }] }
            ],
            2: [
                { question: "What are the planets?", answers: [{ text: "8 bodies orbiting the sun", correct: true }, { text: "9 bodies", correct: false }, { text: "7 bodies", correct: false }] },
                { question: "What is the largest planet?", answers: [{ text: "Jupiter", correct: true }, { text: "Saturn", correct: false }, { text: "Neptune", correct: false }] },
                { question: "What is the closest planet to the sun?", answers: [{ text: "Mercury", correct: true }, { text: "Venus", correct: false }, { text: "Earth", correct: false }] },
                { question: "What is the water cycle?", answers: [{ text: "Evaporation, Condensation, Precipitation", correct: true }, { text: "Freezing only", correct: false }, { text: "Melting only", correct: false }] },
                { question: "What is weather?", answers: [{ text: "Day-to-day atmospheric conditions", correct: true }, { text: "Long-term patterns", correct: false }, { text: "Climate", correct: false }] },
                { question: "What is climate?", answers: [{ text: "Long-term weather patterns", correct: true }, { text: "Today's weather", correct: false }, { text: "Seasons", correct: false }] },
                { question: "What causes seasons?", answers: [{ text: "Earth's tilt and orbit", correct: true }, { text: "Distance from sun", correct: false }, { text: "Moon's position", correct: false }] },
                { question: "What are the states of matter?", answers: [{ text: "Solid, Liquid, Gas", correct: true }, { text: "Hard, Soft, Liquid", correct: false }, { text: "Hot, Cold, Warm", correct: false }] },
                { question: "What is density?", answers: [{ text: "Mass per unit volume", correct: true }, { text: "Weight only", correct: false }, { text: "Size only", correct: false }] },
                { question: "What is force?", answers: [{ text: "A push or pull", correct: true }, { text: "Energy only", correct: false }, { text: "Movement", correct: false }] },
                { question: "What is gravity?", answers: [{ text: "Force pulling objects toward Earth", correct: true }, { text: "Wind", correct: false }, { text: "Magnetism", correct: false }] },
                { question: "What is energy?", answers: [{ text: "Ability to do work", correct: true }, { text: "Movement only", correct: false }, { text: "Heat only", correct: false }] },
                { question: "What is kinetic energy?", answers: [{ text: "Energy in motion", correct: true }, { text: "Stored energy", correct: false }, { text: "Heat energy", correct: false }] },
                { question: "What is potential energy?", answers: [{ text: "Stored energy", correct: true }, { text: "Energy in motion", correct: false }, { text: "Light energy", correct: false }] },
                { question: "What is the speed of light?", answers: [{ text: "Fastest thing in universe", correct: true }, { text: "Slower than sound", correct: false }, { text: "Variable", correct: false }] }
            ]
        }
    }
};

// Get questions for a specific grade, subject, and levelNum
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