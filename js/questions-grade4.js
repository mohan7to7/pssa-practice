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
        ],
        3: [
            { question: "What is 567 + 234 + 189?", answers: [{ text: "990", correct: true }, { text: "991", correct: false }, { text: "989", correct: false }] },
            { question: "What is 1000 - 456 - 234?", answers: [{ text: "310", correct: true }, { text: "311", correct: false }, { text: "309", correct: false }] },
            { question: "What is 15 × 24?", answers: [{ text: "360", correct: true }, { text: "359", correct: false }, { text: "361", correct: false }] },
            { question: "What is 5/6 - 1/3?", answers: [{ text: "1/2", correct: true }, { text: "1/3", correct: false }, { text: "2/3", correct: false }] },
            { question: "What is 0.5 + 0.25 + 0.1?", answers: [{ text: "0.85", correct: true }, { text: "0.86", correct: false }, { text: "0.84", correct: false }] }
        ],
        4: [
            { question: "If a book costs $12.50 and you buy 3, how much do you spend?", answers: [{ text: "$37.50", correct: true }, { text: "$36.50", correct: false }, { text: "$38.50", correct: false }] },
            { question: "What is the area of a rectangle with length 8 and width 6?", answers: [{ text: "48", correct: true }, { text: "28", correct: false }, { text: "56", correct: false }] },
            { question: "What is 7/8 × 4/5?", answers: [{ text: "7/10", correct: true }, { text: "3/4", correct: false }, { text: "4/5", correct: false }] },
            { question: "What is 144 ÷ 12?", answers: [{ text: "12", correct: true }, { text: "11", correct: false }, { text: "13", correct: false }] },
            { question: "If you have 2.5 liters of water and add 1.75 liters, how much total?", answers: [{ text: "4.25", correct: true }, { text: "4.24", correct: false }, { text: "4.26", correct: false }] }
        ],
        5: [
            { question: "What is 35% of 240?", answers: [{ text: "84", correct: true }, { text: "83", correct: false }, { text: "85", correct: false }] },
            { question: "What is the perimeter of a square with side 7?", answers: [{ text: "28", correct: true }, { text: "27", correct: false }, { text: "29", correct: false }] },
            { question: "If 3/4 of a number is 36, what is the number?", answers: [{ text: "48", correct: true }, { text: "47", correct: false }, { text: "49", correct: false }] },
            { question: "What is 2.5 × 4.2?", answers: [{ text: "10.5", correct: true }, { text: "10.4", correct: false }, { text: "10.6", correct: false }] },
            { question: "If a ruler is 12 inches and you need 5 rulers, how many inches total?", answers: [{ text: "60", correct: true }, { text: "59", correct: false }, { text: "61", correct: false }] }
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
        ],
        3: [
            { question: "What does 'metaphor' mean?", answers: [{ text: "A comparison between two things without using 'like' or 'as'", correct: true }, { text: "A comparison using 'like' or 'as'", correct: false }, { text: "A repeated sound in words", correct: false }] },
            { question: "What is a simile?", answers: [{ text: "A comparison using 'like' or 'as'", correct: true }, { text: "A type of poem", correct: false }, { text: "An action word", correct: false }] },
            { question: "What is personification?", answers: [{ text: "Giving human qualities to non-human things", correct: true }, { text: "A type of comparison", correct: false }, { text: "Repeating words", correct: false }] },
            { question: "What is alliteration?", answers: [{ text: "Repetition of beginning sounds in nearby words", correct: true }, { text: "Rhyming words", correct: false }, { text: "A type of poem", correct: false }] },
            { question: "What is an idiom?", answers: [{ text: "A phrase that means something different from each word", correct: true }, { text: "A type of sentence", correct: false }, { text: "A rhyming pattern", correct: false }] }
        ],
        4: [
            { question: "What is the purpose of a thesis statement?", answers: [{ text: "To state the main argument or idea of a paper", correct: true }, { text: "To introduce the topic", correct: false }, { text: "To conclude the paper", correct: false }] },
            { question: "What are transitional words?", answers: [{ text: "Words that connect ideas between sentences", correct: true }, { text: "Words that start sentences", correct: false }, { text: "Words that end paragraphs", correct: false }] },
            { question: "What is a dependent clause?", answers: [{ text: "A clause that cannot stand alone as a sentence", correct: true }, { text: "A main clause", correct: false }, { text: "A long clause", correct: false }] },
            { question: "What does 'inference' mean in reading?", answers: [{ text: "Making a conclusion based on clues in the text", correct: true }, { text: "Reading every word slowly", correct: false }, { text: "Quoting the text", correct: false }] },
            { question: "What is an antonym?", answers: [{ text: "A word with the opposite meaning", correct: true }, { text: "A word with the same meaning", correct: false }, { text: "A word that rhymes", correct: false }] }
        ],
        5: [
            { question: "What is the difference between 'to', 'too', and 'two'?", answers: [{ text: "'To' = direction, 'too' = also/excessive, 'two' = number 2", correct: true }, { text: "They all mean the same thing", correct: false }, { text: "They are interchangeable", correct: false }] },
            { question: "What does 'cite' mean in writing?", answers: [{ text: "To quote or reference a source", correct: true }, { text: "To write about", correct: false }, { text: "To summarize", correct: false }] },
            { question: "What is a primary source?", answers: [{ text: "Original material created during an event", correct: true }, { text: "A book about an event", correct: false }, { text: "A summary of an event", correct: false }] },
            { question: "What is paraphrasing?", answers: [{ text: "Restating information in your own words", correct: true }, { text: "Copying word for word", correct: false }, { text: "Quoting a source", correct: false }] },
            { question: "What is a counterargument?", answers: [{ text: "An opposing point of view to your argument", correct: true }, { text: "Supporting your main idea", correct: false }, { text: "Introducing a new topic", correct: false }] }
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
        ],
        3: [
            { question: "What is an amendment?", answers: [{ text: "A change or addition to the Constitution", correct: true }, { text: "A type of law", correct: false }, { text: "A court decision", correct: false }] },
            { question: "What is the Bill of Rights?", answers: [{ text: "The first ten amendments to the Constitution", correct: true }, { text: "A list of laws", correct: false }, { text: "The preamble", correct: false }] },
            { question: "What is a citizen?", answers: [{ text: "A member of a state or nation", correct: true }, { text: "A visitor", correct: false }, { text: "A tourist", correct: false }] },
            { question: "What are natural resources?", answers: [{ text: "Materials from Earth that humans use", correct: true }, { text: "Man-made products", correct: false }, { text: "Sports equipment", correct: false }] },
            { question: "What is an economy?", answers: [{ text: "A system of production and trade", correct: true }, { text: "A type of government", correct: false }, { text: "A country", correct: false }] }
        ],
        4: [
            { question: "What is the Supreme Court?", answers: [{ text: "The highest court in the U.S. judicial system", correct: true }, { text: "A lower court", correct: false }, { text: "A police department", correct: false }] },
            { question: "What is a cultural tradition?", answers: [{ text: "A custom or belief passed down through generations", correct: true }, { text: "A new invention", correct: false }, { text: "A type of music", correct: false }] },
            { question: "What is an export?", answers: [{ text: "Goods sent to another country for sale", correct: true }, { text: "Goods received from another country", correct: false }, { text: "A tax", correct: false }] },
            { question: "What is history?", answers: [{ text: "The study of past events", correct: true }, { text: "The study of geography", correct: false }, { text: "The study of culture", correct: false }] },
            { question: "What is a treaty?", answers: [{ text: "An agreement between countries", correct: true }, { text: "A type of document", correct: false }, { text: "A law", correct: false }] }
        ],
        5: [
            { question: "What is a federal system of government?", answers: [{ text: "Power is shared between central and state governments", correct: true }, { text: "All power is with the central government", correct: false }, { text: "All power is with state governments", correct: false }] },
            { question: "What is the role of the Senate?", answers: [{ text: "To represent states and make federal laws", correct: true }, { text: "To enforce laws", correct: false }, { text: "To interpret laws", correct: false }] },
            { question: "What is an immigration policy?", answers: [{ text: "Rules about who can enter and stay in a country", correct: true }, { text: "Rules about travel", correct: false }, { text: "Rules about trade", correct: false }] },
            { question: "What is colonization?", answers: [{ text: "The establishment of new settlements or territories", correct: true }, { text: "A type of government", correct: false }, { text: "A military strategy", correct: false }] },
            { question: "What is the difference between a nation and a state?", answers: [{ text: "Nation = people with same culture, State = political organization", correct: true }, { text: "They are the same", correct: false }, { text: "Nation is larger", correct: false }] }
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
        ],
        3: [
            { question: "What is photosynthesis?", answers: [{ text: "Process where plants make food using sunlight", correct: true }, { text: "Process where plants breathe", correct: false }, { text: "Process of plant growth", correct: false }] },
            { question: "What are the four basic needs of animals?", answers: [{ text: "Food, water, shelter, and air", correct: true }, { text: "Only food and water", correct: false }, { text: "Only shelter", correct: false }] },
            { question: "What is erosion?", answers: [{ text: "The wearing down of Earth's surface", correct: true }, { text: "Creating new land", correct: false }, { text: "Earthquake activity", correct: false }] },
            { question: "What types of rocks are there?", answers: [{ text: "Igneous, Sedimentary, Metamorphic", correct: true }, { text: "Hard and soft", correct: false }, { text: "Big and small", correct: false }] },
            { question: "What is an adaptation?", answers: [{ text: "A trait that helps an animal survive", correct: true }, { text: "A habitat", correct: false }, { text: "A food source", correct: false }] }
        ],
        4: [
            { question: "What is the difference between weather and climate?", answers: [{ text: "Weather is short-term, climate is long-term patterns", correct: true }, { text: "They are the same", correct: false }, { text: "Climate changes daily", correct: false }] },
            { question: "What is a fossil?", answers: [{ text: "Remains or trace of an ancient organism", correct: true }, { text: "A type of rock", correct: false }, { text: "A type of animal", correct: false }] },
            { question: "What is the speed of light?", answers: [{ text: "About 186,000 miles per second", correct: true }, { text: "About 100 miles per second", correct: false }, { text: "About 500 miles per second", correct: false }] },
            { question: "What causes seasons?", answers: [{ text: "Earth's tilt as it orbits the sun", correct: true }, { text: "Distance from the sun", correct: false }, { text: "Moon's position", correct: false }] },
            { question: "What is a predator?", answers: [{ text: "An animal that hunts other animals", correct: true }, { text: "An animal that eats plants", correct: false }, { text: "An animal that eats dead matter", correct: false }] }
        ],
        5: [
            { question: "What is the nitrogen cycle?", answers: [{ text: "The movement of nitrogen through the environment", correct: true }, { text: "A type of reaction", correct: false }, { text: "A gas explosion", correct: false }] },
            { question: "What is oxidation?", answers: [{ text: "Chemical reaction involving oxygen", correct: true }, { text: "Burning only", correct: false }, { text: "Rusting only", correct: false }] },
            { question: "What are the steps of cellular respiration?", answers: [{ text: "Glycolysis, Citric Acid Cycle, Electron Transport", correct: true }, { text: "Photosynthesis steps", correct: false }, { text: "Digestion steps", correct: false }] },
            { question: "What is genetic variation?", answers: [{ text: "Differences in traits among individuals", correct: true }, { text: "Same traits for all", correct: false }, { text: "Mutations only", correct: false }] },
            { question: "What is an ecosystem's carrying capacity?", answers: [{ text: "The maximum population an area can support", correct: true }, { text: "The amount of food available", correct: false }, { text: "The size of the area", correct: false }] }
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