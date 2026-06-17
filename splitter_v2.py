#!/usr/bin/env python3
"""Split questions files by subject"""

import os
import re

def split_file(grade_path, grade_name):
    questions_file = os.path.join(grade_path, 'questions.js')

    if not os.path.exists(questions_file):
        print(f"ERROR: {questions_file} not found")
        return False

    # Read entire file
    with open(questions_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract the main object
    pattern = r'const\s+(\w+)\s*=\s*(\{[\s\S]*?\});\s*\/\/'
    match = re.search(pattern, content)

    if not match:
        print(f"ERROR: Could not parse {questions_file}")
        return False

    obj_str = match.group(2)

    # Get prefix
    if grade_name == 'k':
        prefix = 'gradeK'
    else:
        prefix = grade_name

    subjects = ['math', 'science', 'social', 'english']

    for subject in subjects:
        # Find subject pattern
        subj_pattern = f'"{subject}"\\s*:\\s*\\{{'
        subj_match = re.search(subj_pattern, obj_str)

        if not subj_match:
            print(f"  WARNING: {subject} not found")
            continue

        # Find closing brace - start from the opening brace
        start_pos = subj_match.end() - 1  # Position of {
        brace_count = 1
        i = start_pos + 1

        while i < len(obj_str) and brace_count > 0:
            if obj_str[i] == '{':
                brace_count += 1
            elif obj_str[i] == '}':
                brace_count -= 1
            i += 1

        end_pos = i - 1
        # Extract only the object part (from { to })
        subj_data = obj_str[start_pos:end_pos+1]
        subj_data = re.sub(r',\s*$', '', subj_data)

        var_name_new = f"{prefix}{subject.capitalize()}Questions"

        output = f"""// {grade_name.upper()} - {subject.capitalize()} Questions
const {var_name_new} = {subj_data};

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {{
    module.exports = {{ {var_name_new} }};
}}

// Export for browser
if (typeof window !== 'undefined') {{
    window.{var_name_new} = {var_name_new};
}}
"""

        output_file = os.path.join(grade_path, f'questions-{subject}.js')

        try:
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(output)
            print(f"  ✓ Created questions-{subject}.js")
        except Exception as e:
            print(f"  ERROR: {e}")
            return False

    return True

if __name__ == '__main__':
    base_path = "/Users/mohanakrishnakavali/IdeaProjects/pssa-practice/grades"
    grades = ['k', 'grade1', 'grade2', 'grade3', 'grade4', 'grade5']

    print("=" * 60)
    print("PSSA Practice - Question File Splitter")
    print("=" * 60)

    for grade in grades:
        print(f"\nProcessing {grade}...")
        grade_path = os.path.join(base_path, grade)
        if not split_file(grade_path, grade):
            print(f"Failed to process {grade}")

    print("\n" + "=" * 60)
    print("✓ Complete!")
    print("=" * 60)

