const { execSync } = require('child_process');
const ffmpegPath = require('ffmpeg-static');
const fs = require('fs');

const webpFiles = [
  { in: 'src/assets/screens/g-attendance.webp', out: 'src/assets/screens/g-attendance.jpg' },
  { in: 'src/assets/screens/g-reports.webp', out: 'src/assets/screens/g-reports.jpg' },
  { in: 'src/assets/screens/g-dashboard.webp', out: 'src/assets/screens/g-dashboard.jpg' },
];

for (const f of webpFiles) {
  if (fs.existsSync(f.in) && !fs.existsSync(f.out)) {
    console.log(`Converting ${f.in} -> ${f.out}`);
    execSync(`"${ffmpegPath}" -y -i "${f.in}" "${f.out}"`);
  }
}
console.log('Conversion done.');
