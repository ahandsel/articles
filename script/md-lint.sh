#!/bin/bash

# Markdown Lint Script
# Ver 1.0 - Initial version

# Setup - Ensure markdownlint-cli is installed
function check_markdownlint_installed {
    if ! command -v markdownlint &>/dev/null; then
        echo "markdownlint not found. Please install it using 'npm install -g markdownlint-cli' or 'brew install markdownlint-cli'."
        exit 1
    fi
}

remove_pwd_from_file() {
    local current_dir=$(pwd)"/"
    local file_path="./markdown-lint-output.txt"
    # Define a temporary file path
    local temp_file_path="${file_path}.tmp"

    # Check if the file exists
    if [[ -f "$file_path" ]]; then
        # Read the file line by line
        while IFS= read -r line; do
            # Remove the current directory from the line and write to temporary file
            echo "${line//${current_dir}/}" >>"$temp_file_path"
        done <"$file_path"

        # Move the temporary file to replace the original file
        mv "$temp_file_path" "$file_path"
        # echo "Occurrences of the current directory have been removed from $file_path."
    else
        echo "Error: File does not exist."
    fi
}

# Ensure markdownlint is installed
check_markdownlint_installed

# Define the directory containing Markdown files
MARKDOWN_DIR=$(pwd)

# Define the output file for markdownlint results
MARKDOWN_LINT_OUTPUT_FILE="${MARKDOWN_DIR}/markdown-lint-output.txt"

# First pass: Attempt to automatically fix any lint issues in all Markdown files found
find "${MARKDOWN_DIR}" -name "*.md" -exec markdownlint --quiet --fix {} \;

# Clean up previous output file to avoid appending to old results
rm -f "${MARKDOWN_LINT_OUTPUT_FILE}"

# Second pass: Log remaining issues to a file
find "${MARKDOWN_DIR}" -name "*.md" -exec markdownlint {} --output ${MARKDOWN_LINT_OUTPUT_FILE} \;

# Check if the markdown-lint-output.txt is empty and provide feedback
if [ ! -s "${MARKDOWN_LINT_OUTPUT_FILE}" ]; then
    echo "All good! No Markdown lint issues found."
    rm "${MARKDOWN_LINT_OUTPUT_FILE}" # Cleanup if no issues
else
    remove_pwd_from_file
    echo -e "Markdown lint issues that could not be fixed were found!\nIssues are logged in\n${MARKDOWN_LINT_OUTPUT_FILE}."
fi
