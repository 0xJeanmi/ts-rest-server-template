const fs = require('fs-extra');

// Copiar archivos estáticos a la carpeta dist
fs.copySync('public', 'dist/public');