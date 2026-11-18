const { execSync } = require('child_process');
const ffmpegPath = require('ffmpeg-static');
console.log('FFmpeg Path:', ffmpegPath);
const out = execSync(`"${ffmpegPath}" -version`).toString();
console.log('FFmpeg Version:', out.split('\n')[0]);
