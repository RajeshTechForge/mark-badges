const fs = require('fs');

const iconsDir = fs.readdirSync('./icons').filter(f => /\.svg$/i.test(f));
const icons = {};
for (const icon of iconsDir) {
  const name = icon.replace(/\.svg$/i, '').toLowerCase();
  icons[name] = fs.readFileSync(`./icons/${icon}`, 'utf8');
}

if (!fs.existsSync('./dist')) fs.mkdirSync('./dist');
fs.writeFileSync('./dist/icons.json', JSON.stringify(icons));
