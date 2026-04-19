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