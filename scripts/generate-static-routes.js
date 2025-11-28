const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'dist');
const indexPath = path.join(outDir, 'index.html');
const srcSnackFile = path.join(__dirname, '..', 'src', 'data', 'snackBars.ts');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyIndex(targetPath) {
  ensureDir(path.dirname(targetPath));
  fs.copyFileSync(indexPath, targetPath);
}

function extractSlugs() {
  const content = fs.readFileSync(srcSnackFile, 'utf8');
  const regex = /slug:\s*'([^']+)'/g;
  const slugs = new Set();
  let match;
  while ((match = regex.exec(content)) !== null) {
    slugs.add(match[1]);
  }
  return Array.from(slugs);
}

function run() {
  if (!fs.existsSync(indexPath)) {
    console.error('No se encontró dist/index.html. Ejecuta primero npm run build.');
    process.exit(1);
  }

  const slugs = extractSlugs();
  // Copia para /barra
  copyIndex(path.join(outDir, 'barra', 'index.html'));
  // Copia para cada slug
  slugs.forEach((slug) => {
    copyIndex(path.join(outDir, 'barra', slug, 'index.html'));
  });

  console.log(`Rutas estáticas generadas para: ${['(barra)', ...slugs].join(', ')}`);
}

run();
