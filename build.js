const fs = require('fs-extra');

// Ścieżka do pliku index.html
const indexPath = './index.html';
// Ścieżka do folderu static
const staticPath = './static';
// Ścieżka do folderu docelowego (dist)
const distPath = './dist';

async function copyFiles() {
    try {
        // Sprawdzenie czy istnieje folder docelowy (dist), jeśli nie, to go tworzymy
        if (!fs.existsSync(distPath)) {
            await fs.mkdir(distPath);
        }
        
        // Kopiowanie pliku index.html do folderu docelowego (dist)
        await fs.copy(indexPath, `${distPath}/index.html`);
        console.log('index.html copied successfully!');
        
        // Kopiowanie folderu static do folderu docelowego (dist)
        await fs.copy(staticPath, `${distPath}/static`);
        console.log('Static folder copied successfully!');
        
        console.log('Files copied successfully!');
    } catch (err) {
        console.error('Error while copying files:', err);
    }
}

copyFiles();
