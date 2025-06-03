// generate-readme.js
const fs = require('fs');
const path = require('path');

// Accept folder name from command line argument
const folderName = process.argv[2];

if (!folderName) {
  console.error('Please provide a folder name. Example: node generate-readme.js hello-world');
  process.exit(1);
}

const folderPath = path.join(__dirname, folderName);
const readmePath = path.join(folderPath, 'README.md');

if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
  console.log(`Created folder: ${folderPath}`);
}

const readmeTemplate = `# ${folderName}

This is a learning exercise from the [javascript.info](https://javascript.info) tutorial series.

## 🔍 Purpose

Briefly describe the concept covered here.

## Notes

- Key takeaways:
  - ...
  - ...
  
## Files

- \`main.js\`
- \`index.html\` (if needed)

`;

fs.writeFileSync(readmePath, readmeTemplate);
console.log(`Created README.md in ${folderPath}`);