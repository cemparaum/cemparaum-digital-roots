
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'src', 'assets');

fs.readdir(assetsDir, (err, files) => {
  if (err) {
    console.error('Error reading assets directory:', err);
    return;
  }

  files.forEach(file => {
    const filePath = path.join(assetsDir, file);
    const fileExt = path.extname(file);
    const fileName = path.basename(file, fileExt);

    if (['.png', '.jpg', '.jpeg'].includes(fileExt.toLowerCase())) {
      const outputFilePath = path.join(assetsDir, `${fileName}.webp`);
      sharp(filePath)
        .webp()
        .toFile(outputFilePath, (err, info) => {
          if (err) {
            console.error(`Error converting ${file} to webp:`, err);
          } else {
            console.log(`Successfully converted ${file} to webp:`, info);
          }
        });
    }
  });
});
