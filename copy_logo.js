const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\dell\\.gemini\\antigravity\\brain\\3c2b6194-8d82-4437-9048-81f2bf46d11b\\tebverse_wordmark_logo_fix_1774557503949.png';
const dest = 'c:\\Users\\dell\\Desktop\\New folder (5)\\src\\assets\\logo.png';

try {
    fs.copyFileSync(src, dest);
    console.log(`Successfully copied ${src} to ${dest}`);
} catch (err) {
    console.error(`Error copying file: ${err.message}`);
}
