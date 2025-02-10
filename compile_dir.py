"""
This script collects the repository's .jsx, .js (and optionally .css) files along with a directory tree structure
and outputs them to an "output.md" file. You can use the generated Markdown file to send the repository contents
to an AI for analysis, questions, or to propose code modifications.

Configuration:
    include_css_files = False  # Set to True to also include .css files in the output.
"""

# Configuration flag: set to True to include .css files, or False to ignore them.
include_css_files = False

import os


def should_skip_directory(dir_name):
    """Check if a directory should be skipped (e.g., node_modules or .git)."""
    skip_dirs = {"node_modules", ".git"}
    return dir_name in skip_dirs


def is_target_file(filename):
    """
    Determine if the file is a target file for inclusion.
    Always include .jsx and .js files; include .css files only if include_css_files is True.
    """
    return (
        filename.endswith(".jsx")
        or filename.endswith(".js")
        or (include_css_files and filename.endswith(".css"))
    )


def print_directory_structure(directory, output_file, prefix=""):
    """
    Prints the directory structure in a tree-like format to the output file,
    showing only directories containing target files (.jsx, .js, and, optionally, .css)
    and the target files themselves.
    """
    output_file.write(f"# Directory Structure\n\n```\n")

    def has_target_files(dir_path):
        """Check if a directory or its subdirectories contain target files."""
        for root, dirs, files in os.walk(dir_path):
            # Skip unwanted directories
            dirs[:] = [d for d in dirs if not should_skip_directory(d)]
            if any(is_target_file(f) for f in files):
                return True
        return False

    def write_tree(dir_path, prefix=""):
        items = os.listdir(dir_path)
        # Filter items: keep directories that contain target files and target files themselves
        filtered_items = []
        for item in items:
            full_path = os.path.join(dir_path, item)
            if os.path.isdir(full_path):
                if not should_skip_directory(item) and has_target_files(full_path):
                    filtered_items.append(item)
            elif is_target_file(item):
                filtered_items.append(item)

        filtered_items.sort()  # Sort items alphabetically

        for i, item in enumerate(filtered_items):
            is_last = i == len(filtered_items) - 1
            current_prefix = "└── " if is_last else "├── "
            full_path = os.path.join(dir_path, item)

            output_file.write(f"{prefix}{current_prefix}{item}\n")

            if os.path.isdir(full_path):
                next_prefix = "    " if is_last else "│   "
                write_tree(full_path, prefix + next_prefix)

    write_tree(directory)
    output_file.write("```\n\n")


def append_jsx_files_to_md(directory, output_filename="output.md"):
    """
    Generates an output Markdown file containing:
      1. The directory structure (showing only directories with target files and the target files).
      2. The source code from all target files (i.e., .jsx, .js and, if enabled, .css files).

    This is useful if you want to send the entire repository content to an AI for analysis,
    to ask questions, or to propose code changes.

    Args:
        directory: The base directory to search for target files.
        output_filename: The name of the output Markdown file.
    """
    with open(output_filename, "w", encoding="utf-8") as outfile:
        # First, print the directory structure
        print_directory_structure(directory, outfile)

        # Then, append all target files with their content
        outfile.write("# Source Code\n\n")
        for root, dirs, files in os.walk(directory):
            # Skip unwanted directories
            dirs[:] = [d for d in dirs if not should_skip_directory(d)]

            for file in sorted(files):
                if is_target_file(file):
                    filepath = os.path.join(root, file)
                    relative_path = os.path.relpath(filepath, directory)
                    outfile.write(f"## {relative_path}\n\n")

                    # Determine the appropriate language for syntax highlighting
                    if file.endswith(".css"):
                        lang = "css"
                    elif file.endswith(".jsx"):
                        lang = "jsx"
                    elif file.endswith(".js"):
                        lang = "javascript"
                    else:
                        lang = ""

                    outfile.write(f"```{lang}\n")
                    with open(filepath, "r", encoding="utf-8") as infile:
                        outfile.write(infile.read())
                    outfile.write("\n```\n\n")


if __name__ == "__main__":
    target_directory = "."  # Current directory
    append_jsx_files_to_md(target_directory)
