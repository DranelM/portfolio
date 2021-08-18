import { writeFile } from 'fs/promises';
import { readdirSync } from 'fs';

var styleFiles = [];

readdirSync('src/styles').forEach((file) => {
  if (file.includes('.css')) {
    styleFiles.push(`import "./${file}"\n`);
  }
});

await writeFile('src/styles/allStyles.js', styleFiles);
