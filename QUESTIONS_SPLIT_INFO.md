# Question Files - Split Structure

## Overview
The large `.questions.js` files have been split by subject to improve performance and maintainability. Each grade now has separate files for each subject.

## File Structure

### Before (Monolithic Files)
```
grades/
├── k/
│   └── questions.js (269 KB)
├── grade1/
│   └── questions.js (1.3 MB)
├── grade2/
│   └── questions.js (1.3 MB)
├── grade3/
│   └── questions.js (1.3 MB)
├── grade4/
│   └── questions.js (1.3 MB)
└── grade5/
    └── questions.js (1.3 MB)
```

### After (Split by Subject)
```
grades/
├── k/
│   ├── questions.js (original, kept as backup)
│   ├── questions-math.js (64 KB)
│   ├── questions-science.js (68 KB)
│   ├── questions-social.js (68 KB)
│   └── questions-english.js (64 KB)
├── grade1/
│   ├── questions.js (original, kept as backup)
│   ├── questions-math.js (308 KB)
│   ├── questions-science.js (333 KB)
│   ├── questions-social.js (340 KB)
│   └── questions-english.js (329 KB)
├── grade2/
│   ├── questions.js (original, kept as backup)
│   ├── questions-math.js (~308 KB)
│   ├── questions-science.js (~333 KB)
│   ├── questions-social.js (~340 KB)
│   └── questions-english.js (~329 KB)
├── grade3/
│   ├── questions.js (original, kept as backup)
│   ├── questions-math.js (~308 KB)
│   ├── questions-science.js (~333 KB)
│   ├── questions-social.js (~340 KB)
│   └── questions-english.js (~329 KB)
├── grade4/
│   ├── questions.js (original, kept as backup)
│   ├── questions-math.js (~308 KB)
│   ├── questions-science.js (~333 KB)
│   ├── questions-social.js (~340 KB)
│   └── questions-english.js (~329 KB)
└── grade5/
    ├── questions.js (original, kept as backup)
    ├── questions-math.js (~308 KB)
    ├── questions-science.js (~333 KB)
    ├── questions-social.js (~340 KB)
    └── questions-english.js (~329 KB)
```

## Benefits
- **Smaller File Sizes**: Each split file is 25% of the original size
- **Faster Loading**: Quiz pages now only load what they need (one subject)
- **Better Performance**: Reduced memory footprint and faster parsing
- **Easier Maintenance**: Easier to find and update specific subjects
- **Reduced Bandwidth**: Only necessary files are downloaded to the browser

## Variable Naming Convention

Each split file creates a global variable with the pattern:
`grade[Grade][Subject]Questions`

Examples:
- `gradeK` (Kindergarten) Math: `gradeKMathQuestions`
- `grade1` Math: `grade1MathQuestions`
- `grade5` English: `grade5EnglishQuestions`

## Updated Quiz Files

The quiz HTML files have been updated to load only the relevant subject-specific files:

| Quiz File | Loads | Variables |
|-----------|-------|-----------|
| `math/quiz.html` | `questions-math.js` | `gradeKMathQuestions`, `grade1MathQuestions`, etc. |
| `science/quiz.html` | `questions-science.js` | `gradeKScienceQuestions`, `grade1ScienceQuestions`, etc. |
| `english/quiz.html` | `questions-english.js` | `gradeKEnglishQuestions`, `grade1EnglishQuestions`, etc. |
| `social/quiz.html` | `questions-social.js` | `gradeKSocialQuestions`, `grade1SocialQuestions`, etc. |

## Question Structure

Each split file contains a subject's questions organized by difficulty level:

```javascript
const gradeKMathQuestions = {
    "1": [  // Level 1 questions
        {
            "question": "Question text",
            "answers": [
                { "text": "Option A", "correct": true },
                { "text": "Option B", "correct": false },
                { "text": "Option C", "correct": false }
            ]
        },
        // More questions...
    ],
    "2": [  // Level 2 questions
        // ...
    ],
    // More levels...
}
```

## How QuestionBank Combines the Files

The updated `js/questionBank.js` now:
1. Checks for the original combined format (backward compatible)
2. If split files are loaded, combines them into the expected structure:
   ```javascript
   questionBank.K = {
       math: gradeKMathQuestions,
       science: gradeKScienceQuestions,
       english: gradeKEnglishQuestions,
       social: gradeKSocialQuestions
   }
   ```

## Backward Compatibility

The original `questions.js` files have been kept as backups. To revert:
1. Remove all `questions-*.js` files from grade folders
2. Update HTML quiz files to load `questions.js` instead of split files
3. Revert `questionBank.js` to the original version

## Adding New Questions

To add questions to a specific grade and subject:
1. Edit the corresponding `questions-[subject].js` file
2. Add questions to the appropriate level array
3. No need to regenerate other subjects or grades

Example: To add questions to Grade 3 Math Level 2:
- Edit: `grades/grade3/questions-math.js`
- Find the `"2": [...]` array
- Add your questions to that array

## Regenerating Split Files

If the original `questions.js` files are modified, you can regenerate the split files by running:

```bash
python3 splitter_v2.py
```

This will:
1. Read each `questions.js` file
2. Extract each subject's data
3. Create new `questions-[subject].js` files
4. Overwrite previous split files

## Migration Guide

### For Developers
- Old references to single large files will still work through the original `questions.js` files
- New implementations should use subject-specific files for better performance
- The questionBank automatically handles both formats

### For Hosting/Deployment
- Consider removing original `questions.js` files in production after verification
- Upload only `questions-*.js` files to reduce storage and bandwidth
- Original backups can be kept for reference

## File Sizes Summary

| Grade | Original | Math | Science | Social | English | Total (Split) |
|-------|----------|------|---------|--------|---------|---------------|
| K | 269 KB | 64 KB | 68 KB | 68 KB | 64 KB | 264 KB |
| 1 | 1.3 MB | 308 KB | 333 KB | 340 KB | 329 KB | 1.31 MB |
| 2 | 1.3 MB | ~308 KB | ~333 KB | ~340 KB | ~329 KB | 1.31 MB |
| 3 | 1.3 MB | ~308 KB | ~333 KB | ~340 KB | ~329 KB | 1.31 MB |
| 4 | 1.3 MB | ~308 KB | ~333 KB | ~340 KB | ~329 KB | 1.31 MB |
| 5 | 1.3 MB | ~308 KB | ~333 KB | ~340 KB | ~329 KB | 1.31 MB |

**Total Original**: ~7.5 MB
**Total Split (only split files)**: ~7.5 MB
**Total with Backups**: ~15 MB

## Technical Details

### Split Process
- Uses regex to find and extract each subject's object
- Matches brace pairs to ensure correct data extraction
- Preserves original data integrity and formatting

### Variable Naming
- Grade "K" becomes "gradeK"
- Subjects are capitalized: "math" → "Math", "science" → "Science"
- Results in: `gradeKMathQuestions`, `grade1ScienceQuestions`, etc.

### Export Support
Each split file includes exports for both Node.js and browser environments:
```javascript
// Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { gradeKMathQuestions };
}

// Browser
if (typeof window !== 'undefined') {
    window.gradeKMathQuestions = gradeKMathQuestions;
}
```

## Notes
- Original monolithic files are kept for backward compatibility
- Split files are generated from the original files using a Python script
- No data is lost in the split process
- All questions remain intact with identical content

