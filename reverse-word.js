// problem ache!

function reversedWords(str) {
    const words = str.split(' ');
    const result = [];
   
    for (let i = words.length - 1; i >= 0; i--){
        element = words[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;
    
}
myString = 'I am a good girl';
reversedWords(myString);
