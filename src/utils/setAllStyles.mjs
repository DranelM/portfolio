import { writeFile } from 'fs/promises';
import { readdirSync } from 'fs';

var styleFiles = [];

readdirSync('src/styles').forEach((file) => {
  if (file.includes('.css')) {
    styleFiles.push(`import "../styles/${file}"\n`);
  }
});

await writeFile('src/utils/allStyles.js', styleFiles);
