const lyrics ='Tumi bondhu kala pakhi ami jano ki.boshonto kale tomay bolte pari ni.kala kala shada shada.';
const searchString = 'tumi'
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes('Pakhi');
// const doesExist = lyrics.includes(searchString);
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();

const doesExist = lyricsLowerCase.includes(searchStringLower);

// console.log(doesExist);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExistOneLine);

// ----------------------------
// indexOf

// console.log(lyrics.indexOf('shada'));
// console.log(lyrics.indexOf('shuda'));
const string ='shadada'
if(lyrics.indexOf(string) !==-1){
    console.log('Exist inside the string');
}
else {
    console.log('cannot find it');
}

// startWith
// console.log(lyrics.startsWith('2mi'));

// endsWith
const fillName ='mybiodata.pdf';
const otherFile = 'mypic.png';

console.log(fillName.endsWith('.pdf'));

