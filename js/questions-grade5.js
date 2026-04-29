// Grade 5 Question Bank
const grade5Questions = {
    math: {
        1: [
            { question: "What is 1234 + 5678?", answers: [{ text: "6911", correct: false }, { text: "6912", correct: true }, { text: "6913", correct: false }] },
            { question: "What is 9876 - 4321?", answers: [{ text: "5554", correct: false }, { text: "5555", correct: true }, { text: "5556", correct: false }] },
            { question: "What is 25 × 25?", answers: [{ text: "624", correct: false }, { text: "625", correct: true }, { text: "626", correct: false }] },
            { question: "What is 144 ÷ 12?", answers: [{ text: "11", correct: false }, { text: "12", correct: true }, { text: "13", correct: false }] },
            { question: "What is 3/4 + 1/2?", answers: [{ text: "1", correct: false }, { text: "1 1/4", correct: true }, { text: "1 1/2", correct: false }] }
        ],
        2: [
            { question: "What is the area of a rectangle 6 × 4?", answers: [{ text: "24", correct: true }, { text: "20", correct: false }, { text: "10", correct: false }] },
            { question: "What is the perimeter of a rectangle 6 × 4?", answers: [{ text: "20", correct: true }, { text: "24", correct: false }, { text: "10", correct: false }] },
            { question: "What is the area of a triangle with base 6 and height 4?", answers: [{ text: "12", correct: true }, { text: "24", correct: false }, { text: "10", correct: false }] },
            { question: "What is the volume of a cube 3 × 3 × 3?", answers: [{ text: "27", correct: true }, { text: "9", correct: false }, { text: "18", correct: false }] },
            { question: "What is the volume of a rectangular prism 2 × 3 × 4?", answers: [{ text: "24", correct: true }, { text: "9", correct: false }, { text: "14", correct: false }] }
        ]
    },
    english: {
        1: [
            { question: "What is a preposition?", answers: [{ text: "Shows relationship between words", correct: true }, { text: "An action word", correct: false }, { text: "A describing word", correct: false }] },
            { question: "What is a conjunction?", answers: [{ text: "Connects words or clauses", correct: true }, { text: "A describing word", correct: false }, { text: "An action word", correct: false }] },
            { question: "What is a complex sentence?", answers: [{ text: "Independent clause + dependent clause", correct: true }, { text: "Two simple sentences", correct: false }, { text: "A short sentence", correct: false }] },
            { question: "What is a compound-complex sentence?", answers: [{ text: "Multiple independent + dependent clauses", correct: true }, { text: "One independent clause", correct: false }, { text: "Only dependent clauses", correct: false }] },
            { question: "What is a metaphor?", answers: [{ text: "Direct comparison without like/as", correct: true }, { text: "Comparison with like/as", correct: false }, { text: "A sound", correct: false }] }
        ],
        2: [
            { question: "What is a thesis statement?", answers: [{ text: "Main idea of an essay", correct: true }, { text: "The conclusion", correct: false }, { text: "The introduction", correct: false }] },
            { question: "What is an introduction?", answers: [{ text: "Opening paragraph that presents the topic", correct: true }, { text: "The middle", correct: false }, { text: "The ending", correct: false }] },
            { question: "What is a body paragraph?", answers: [{ text: "Paragraph that develops the main idea", correct: true }, { text: "The first paragraph", correct: false }, { text: "The last paragraph", correct: false }] },
            { question: "What is a conclusion?", answers: [{ text: "Final paragraph that summarizes", correct: true }, { text: "The first paragraph", correct: false }, { text: "The middle", correct: false }] },
            { question: "What is evidence?", answers: [{ text: "Facts that support an idea", correct: true }, { text: "The main idea", correct: false }, { text: "The title", correct: false }] }
        ]
    },
    social: {
        1: [
            { question: "What is a democracy?", answers: [{ text: "Government by the people", correct: true }, { text: "Government by a king", correct: false }, { text: "Government by the military", correct: false }] },
            { question: "What is a republic?", answers: [{ text: "Government with elected representatives", correct: true }, { text: "Government by one person", correct: false }, { text: "Government by a king", correct: false }] },
            { question: "What is the Bill of Rights?", answers: [{ text: "First 10 amendments to the Constitution", correct: true }, { text: "The original Constitution", correct: false }, { text: "The Declaration of Independence", correct: false }] },
            { question: "What is federalism?", answers: [{ text: "Sharing power between national and state governments", correct: true }, { text: "One person rule", correct: false }, { text: "State rule only", correct: false }] },
            { question: "What are civil liberties?", answers: [{ text: "Personal freedoms protected by law", correct: true }, { text: "Government powers", correct: false }, { text: "Business rights", correct: false }] }
        ],
        2: [
            { question: "What is latitude?", answers: [{ text: "Distance north or south of equator", correct: true }, { text: "Distance east or west of prime meridian", correct: false }, { text: "Height above sea level", correct: false }] },
            { question: "What is longitude?", answers: [{ text: "Distance east or west of prime meridian", correct: true }, { text: "Distance north or south of equator", correct: false }, { text: "Height above sea level", correct: false }] },
            { question: "What is the Prime Meridian?", answers: [{ text: "0 degrees longitude", correct: true }, { text: "0 degrees latitude", correct: false }, { text: "The equator", correct: false }] },
            { question: "What is the equator?", answers: [{ text: "0 degrees latitude", correct: true }, { text: "0 degrees longitude", correct: false }, { text: "The Prime Meridian", correct: false }] },
            { question: "What is a time zone?", answers: [{ text: "Region with the same standard time", correct: true }, { text: "A country", correct: false }, { text: "A continent", correct: false }] }
        ]
    },
    science: {
        1: [
            { question: "What is the scientific method?", answers: [{ text: "Steps scientists use to investigate", correct: true }, { text: "A type of science", correct: false }, { text: "A laboratory", correct: false }] },
            { question: "What is a hypothesis?", answers: [{ text: "A testable prediction", correct: true }, { text: "A proven fact", correct: false }, { text: "A conclusion", correct: false }] },
            { question: "What is a variable?", answers: [{ text: "Something that can change in an experiment", correct: true }, { text: "A constant", correct: false }, { text: "A fact", correct: false }] },
            { question: "What is a controlled experiment?", answers: [{ text: "An experiment with only one changing factor", correct: true }, { text: "An experiment with no changes", correct: false }, { text: "A random experiment", correct: false }] },
            { question: "What is matter?", answers: [{ text: "Anything that has mass and takes up space", correct: true }, { text: "Only solids", correct: false }, { text: "Only liquids", correct: false }] }
        ],
        2: [
            { question: "What is the solar system?", answers: [{ text: "The sun and everything orbiting it", correct: true }, { text: "The galaxy", correct: false }, { text: "The universe", correct: false }] },
            { question: "What is a planet?", answers: [{ text: "Body that orbits a star", correct: true }, { text: "A star", correct: false }, { text: "A moon", correct: false }] },
            { question: "What is a star?", answers: [{ text: "A glowing ball of gas", correct: true }, { text: "A planet", correct: false }, { text: "A moon", correct: false }] },
            { question: "What is a moon?", answers: [{ text: "Body that orbits a planet", correct: true }, { text: "A star", correct: false }, { text: "A planet", correct: false }] },
            { question: "What is an orbit?", answers: [{ text: "The path an object takes around another", correct: true }, { text: "A straight line", correct: false }, { text: "A type of star", correct: false }] }
        ]
    }
};

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { grade5Questions };
}

// Export for browser
if (typeof window !== 'undefined') {
    window.grade5Questions = grade5Questions;
}