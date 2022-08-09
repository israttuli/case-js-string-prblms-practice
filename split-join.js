const lyrics = 'Tumi bondhu kala pakhi ami jano ki.boshonto kale tomay bolte pari ni.kala kala shada shada.';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
// console.log(parts);

const partial = lyrics.slice(5, 12);
const partial2 = lyrics.substring(5, 12);
// console.log(partial2);

const lines = [
    'Tumi bondhu kala pakhi ami jano ki',
    'Boshonto kale tomay bolte pari ni',
    'Kala kala shada shada'
];
const newSong = lines.join('. ');
console.log(newSong);

