const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directory = './public/images';

function getFiles(dir, files_) {
    files_ = files_ || [];
    const files = fs.readdirSync(dir);
    for (const i in files) {
        const name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
}

async function convert() {
    const allFiles = getFiles(directory);
    const pngFiles = allFiles.filter(f => f.endsWith('.png'));

    console.log(`Encontrados ${pngFiles.length} archivos PNG para convertir.`);

    for (const file of pngFiles) {
        const webpPath = file.replace(/\.png$/, '.webp');
        try {
            await sharp(file)
                .webp({ quality: 80 })
                .toFile(webpPath);
            console.log(`Convertido: ${file} -> ${webpPath}`);
        } catch (err) {
            console.error(`Error convirtiendo ${file}:`, err);
        }
    }
}

convert();
