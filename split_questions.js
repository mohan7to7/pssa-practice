#!/usr/bin/env node

/**
 * Script to split large questions.js files by subject
 * Creates separate files for math, science, social, and english questions
 */

const fs = require('fs');
const path = require('path');

function getGradePrefix(grade) {
    if (grade === 'k') return 'gradeK';
    return grade.charAt(0).toUpperCase() + grade.slice(1);
}

function splitQuestionsFile(gradeName, inputFile) {
    console.log(`\nProcessing ${gradeName}...`);

    if (!fs.existsSync(inputFile)) {
        console.log(`  ERROR: ${inputFile} not found`);
        return;
    }

    // Read the file as text
    let content = fs.readFileSync(inputFile, 'utf-8');

    // Extract the variable name
    const constMatch = content.match(/const\s+(\w+)\s*=\s*({[\s\S]*?});\s*\/\/ Export/);
    if (!constMatch) {
        console.log(`  ERROR: Could not find question object in ${inputFile}`);
        return;
    }

    const originalVarName = constMatch[1];
    const objectStr = constMatch[2];

    // Parse the object to extract subjects
    // This is a simple approach: look for subject patterns
    const subjects = ['math', 'science', 'social', 'english'];
    const gradePrefix = getGradePrefix(gradeName);
    const outputDir = path.dirname(inputFile);

    // Find where each subject starts and ends
    const subjectRanges = {};

    for (const subject of subjects) {
        const pattern = `"${subject}": {`;
        const startIdx = objectStr.indexOf(pattern);

        if (startIdx === -1) {
            console.log(`  WARNING: Subject '${subject}' not found`);
            continue;
        }

        // Find the matching closing brace for this subject
        let braceCount = 0;
        let foundStart = false;
        let endIdx = startIdx;

        for (let i = startIdx; i < objectStr.length; i++) {
            const char = objectStr[i];

            if (char === '{') {
                braceCount++;
                foundStart = true;
            } else if (char === '}') {
                braceCount--;
                if (foundStart && braceCount === 0) {
                    endIdx = i + 1;
                    break;
                }
            }
        }

        subjectRanges[subject] = { start: startIdx, end: endIdx };
    }

    // Extract and create files for each subject
    for (const subject of subjects) {
        if (!subjectRanges[subject]) {
            console.log(`  Skipping ${subject} (not found)`);
            continue;
        }

        const range = subjectRanges[subject];
        const subjectContent = objectStr.substring(range.start, range.end);

        // Remove trailing comma if present
        const cleanContent = subjectContent.replace(/,\s*$/, '');

        const newVarName = `${gradePrefix}${subject.charAt(0).toUpperCase() + subject.slice(1)}Questions`;

        // Create the new file content
        const fileContent = `// ${gradeName.toUpperCase()} - ${subject.charAt(0).toUpperCase() + subject.slice(1)} Questions
const ${newVarName} = ${cleanContent};

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ${newVarName} };
}

// Export for browser
if (typeof window !== 'undefined') {
    window.${newVarName} = ${newVarName};
}
`;

        const outputFile = path.join(outputDir, `questions-${subject}.js`);
        fs.writeFileSync(outputFile, fileContent, 'utf-8');
        console.log(`  ✓ Created questions-${subject}.js`);
    }

    // Create an index file
    const indexContent = `// ${gradeName.toUpperCase()} Questions - Index File
// Import the subject-specific files as needed:

/*
Node.js usage:
const { ${gradePrefix}MathQuestions } = require('./questions-math.js');
const { ${gradePrefix}ScienceQuestions } = require('./questions-science.js');
const { ${gradePrefix}SocialQuestions } = require('./questions-social.js');
const { ${gradePrefix}EnglishQuestions } = require('./questions-english.js');

// Combine if needed:
const ${gradePrefix}Questions = {
    math: ${gradePrefix}MathQuestions,
    science: ${gradePrefix}ScienceQuestions,
    social: ${gradePrefix}SocialQuestions,
    english: ${gradePrefix}EnglishQuestions
};
*/

// Browser usage:
// <script src="questions-math.js"></script>
// <script src="questions-science.js"></script>
// <script src="questions-social.js"></script>
// <script src="questions-english.js"></script>
//
// Then access via:
// window.${gradePrefix}MathQuestions
// window.${gradePrefix}ScienceQuestions
// etc.
`;

    const indexFile = path.join(outputDir, 'questions-index.js');
    fs.writeFileSync(indexFile, indexContent, 'utf-8');
    console.log(`  ✓ Created questions-index.js`);

    console.log(`  ✓ Successfully split ${gradeName} questions!`);
}

function main() {
    const basePath = '/Users/mohanakrishnakavali/IdeaProjects/pssa-practice/grades';
    const grades = ['k', 'grade1', 'grade2', 'grade3', 'grade4', 'grade5'];

    console.log('='.repeat(60));
    console.log('PSSA Practice - Question File Splitter');
    console.log('='.repeat(60));

    for (const grade of grades) {
        const gradePath = path.join(basePath, grade);
        const questionsFile = path.join(gradePath, 'questions.js');

        try {
            splitQuestionsFile(grade, questionsFile);
        } catch (error) {
            console.log(`  ERROR processing ${grade}: ${error.message}`);
        }
    }

    console.log('\n' + '='.repeat(60));
    console.log('✓ All files split successfully!');
    console.log('='.repeat(60));
}

main();

