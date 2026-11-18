const { execSync } = require('child_process');
const ffmpegPath = require('ffmpeg-static');
const fs = require('fs');
const path = require('path');

const scenes = [
  { img: 'scripts/scene_1.png', dur: 6, out: 'scripts/clip_1.mp4' },
  { img: 'scripts/scene_2.png', dur: 6, out: 'scripts/clip_2.mp4' },
  { img: 'scripts/scene_3.png', dur: 7, out: 'scripts/clip_3.mp4' },
  { img: 'scripts/scene_4.png', dur: 9, out: 'scripts/clip_4.mp4' },
  { img: 'scripts/scene_5.png', dur: 7, out: 'scripts/clip_5.mp4' },
  { img: 'scripts/scene_6.png', dur: 6, out: 'scripts/clip_6.mp4' },
  { img: 'scripts/scene_7.png', dur: 4, out: 'scripts/clip_7.mp4' },
];

console.log('Rendering individual 1080p clips with smooth cinematic motion...');

for (const sc of scenes) {
  console.log(`Processing ${sc.out} (${sc.dur}s)...`);
  const frames = sc.dur * 30; // 30 fps
  // Zoompan filter: smooth slow zoom from 1.0 to 1.06
  const cmd = `"${ffmpegPath}" -y -loop 1 -i "${sc.img}" -f lavfi -i anullsrc=channel_layout=stereo:sample_rate=44100 -filter_complex "[0:v]scale=1920:1080,zoompan=z='min(zoom+0.0003,1.05)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=${frames}:s=1920x1080:fps=30,format=yuv420p[v]" -map "[v]" -map 1:a -c:v libx264 -preset fast -crf 20 -c:a aac -b:a 128k -t ${sc.dur} "${sc.out}"`;
  execSync(cmd, { stdio: 'inherit' });
}

// Concat all 7 clips
console.log('Concatenating clips into final 45s MP4...');
const concatList = scenes.map((s) => `file '${path.resolve(s.out).replace(/\\/g, '/')}'`).join('\n');
fs.writeFileSync('scripts/concat_list.txt', concatList);

const finalMp4 = 'public/video/1click-product-walkthrough.mp4';
const concatCmd = `"${ffmpegPath}" -y -f concat -safe 0 -i scripts/concat_list.txt -c copy "${finalMp4}"`;
execSync(concatCmd, { stdio: 'inherit' });

console.log(`Successfully generated ${finalMp4}!`);
const stats = fs.statSync(finalMp4);
console.log(`File size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
