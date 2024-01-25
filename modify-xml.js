const fs = require('fs');

// Read the XML file
let xmlContent = fs.readFileSync('welhof_ternair_exported_data (2).xml', 'utf-8');

// Modify the XML content as needed
// Example: Add a timestamp to the XML
const timestamp = new Date().toISOString();
const modifiedContent = xmlContent.replace('</root>', `<timestamp>${timestamp}</timestamp></root>`);

// Write the modified content back to the XML file
fs.writeFileSync('path/to/xml/file.xml', modifiedContent, 'utf-8');

// Commit and push the changes to GitHub
const { execSync } = require('child_process');
execSync('git add path/to/xml/file.xml');
execSync('git commit -m "Update XML file"');
execSync('git push origin main');
