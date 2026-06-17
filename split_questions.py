#!/usr/bin/env python3
"""
Script to split large questions.js files by subject.
Creates separate files for math, science, social, and english questions.
"""

import os
import json
import re
from pathlib import Path

def extract_js_object(content):
    """Extract the JavaScript object from the file."""
    # Find the const variable declaration
    match = re.search(r'const\s+(\w+)\s*=\s*({[\s\S]*?});', content)
    if match:
        var_name = match.group(1)
        obj_str = match.group(2)
        return var_name, obj_str
    return None, None

def split_questions_file(grade, input_file):
    """Split a questions file into separate subject files."""

    print(f"\nProcessing {grade}...")

    # Read the original file
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract the variable name and object
    var_name, obj_str = extract_js_object(content)
    if not var_name:
        print(f"  ERROR: Could not extract object from {input_file}")
        return

    # Use regex to find subjects
    subject_pattern = r'"(math|science|social|english)"\s*:\s*({[^}]+(?:{[^}]*}[^}]*)*})'

    # More robust approach: manually parse
    # Find the subjects by their starting positions
    subjects = {}
    for subject in ['math', 'science', 'social', 'english']:
        pattern = f'"{subject}"\\s*:\\s*'
        match = re.search(pattern, obj_str)
        if match:
            subjects[subject] = match.start()

    # Sort subjects by position to find their end positions
    sorted_subjects = sorted(subjects.items(), key=lambda x: x[1])

    for i, (subject, start_pos) in enumerate(sorted_subjects):
        # Find the end of this subject's data
        if i < len(sorted_subjects) - 1:
            # Not the last subject, end at next subject
            end_pos = sorted_subjects[i + 1][1]
            # Go back to find the closing brace
            end_pos = obj_str.rfind('}', 0, end_pos) + 1
        else:
            # Last subject, go to the end of the object (before the final })
            end_pos = obj_str.rfind('}')

        # Extract the subject content
        subject_content = obj_str[start_pos:end_pos]
        # Clean up: remove trailing comma if present
        subject_content = re.sub(r',\s*$', '', subject_content.rstrip())

        # Extract just the object part (from { to })
        match = re.search(f'"{subject}"\\s*:\\s*({{.*}})', subject_content, re.DOTALL)
        if not match:
            print(f"  Warning: Could not extract {subject} data properly")
            continue

        subject_data = match.group(1)

        # Create the new variable name for this subject
        grade_prefix = grade.replace('grade', 'grade') if 'grade' in grade else grade
        new_var_name = f"{grade_prefix.lower()}{subject.capitalize()}Questions"

        # Create the new file content
        new_content = f"""// {grade.title()} - {subject.capitalize()} Questions
const {new_var_name} = {subject_data};

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {{
    module.exports = {{ {new_var_name} }};
}}

// Export for browser
if (typeof window !== 'undefined') {{
    window.{new_var_name} = {new_var_name};
}}
"""

        # Write the subject file
        output_dir = os.path.dirname(input_file)
        subject_file = os.path.join(output_dir, f"questions-{subject}.js")

        with open(subject_file, 'w', encoding='utf-8') as f:
            f.write(new_content)

        print(f"  ✓ Created {subject_file}")

    # Create an index file that imports all subjects
    grade_prefix = grade.lower().replace('grade', 'grade') if 'grade' in grade else grade
    index_content = f"""// {grade.title()} Questions - Index
// This file imports all subject-specific questions

"""

    for subject in ['math', 'science', 'social', 'english']:
        new_var_name = f"{grade_prefix}{subject.capitalize()}Questions"
        index_content += f"// Import from questions-{subject}.js\n"
        index_content += f"// const {{ {new_var_name} }} = require('./questions-{subject}.js');\n"
        index_content += f"// OR in HTML: <script src='questions-{subject}.js'></script>\n\n"

    index_content += f"""// Combined object for backward compatibility (optional)
// Uncomment and use if needed:
/*
const {grade_prefix}Questions = {{
    math: {grade_prefix}MathQuestions,
    science: {grade_prefix}ScienceQuestions,
    social: {grade_prefix}SocialQuestions,
    english: {grade_prefix}EnglishQuestions
}};
*/
"""

    index_file = os.path.join(output_dir, "questions-index.js")
    with open(index_file, 'w', encoding='utf-8') as f:
        f.write(index_content)

    print(f"  ✓ Created {index_file}")
    print(f"  ✓ Successfully split {grade} questions into subject files!")

def main():
    """Main function to split all grade question files."""

    base_path = "/Users/mohanakrishnakavali/IdeaProjects/pssa-practice/grades"

    grades = ['k', 'grade1', 'grade2', 'grade3', 'grade4', 'grade5']

    print("=" * 60)
    print("PSSA Practice - Question File Splitter")
    print("=" * 60)

    for grade in grades:
        grade_path = os.path.join(base_path, grade)
        questions_file = os.path.join(grade_path, "questions.js")

        if not os.path.exists(questions_file):
            print(f"  ERROR: {questions_file} not found")
            continue

        try:
            split_questions_file(grade, questions_file)
        except Exception as e:
            print(f"  ERROR processing {grade}: {str(e)}")

    print("\n" + "=" * 60)
    print("✓ All files split successfully!")
    print("=" * 60)

if __name__ == "__main__":
    main()

