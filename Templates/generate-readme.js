// Templates/generate-readme.js

const fs = require('fs');
const path = require('path');

// Get the target folder from the command line
const targetFolder = process.argv[2];

if (!targetFolder) {
  console.error('Please provide a folder name, like:\n  node Templates/generate-readme.js 04-Variables');
  process.exit(1);
}

// Absolute path to the folder, based on current working directory
const fullPath = path.resolve(process.cwd(), targetFolder);

// Ensure the folder exists
if (!fs.existsSync(fullPath)) {
  console.error(`Folder "${targetFolder}" does not exist.`);
  process.exit(1);
}

// Content for the README
const readmeContent = `# ${targetFolder}

This folder contains my practice code for the "${targetFolder}" section of [javascript.info](https://javascript.info/).

## Files

- \`main.js\` or similar: main script for this lesson
- \`index.html\` or similar: file for running the script in the browser

## Notes

(Add a short summary of what you learned or experimented with here.)
`;

// Path to the new README
const readmePath = path.join(fullPath, 'README.md');

// Write the file
fs.writeFileSync(readmePath, readmeContent, 'utf8');
console.log(`README created at: ${readmePath}`);