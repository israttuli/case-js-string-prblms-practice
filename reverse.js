function reversedString(text) {
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        element = text[i];
        reversed = reversed + element;
        // console.log(element, reversed);
    }
    return reversed;
}

myString = 'I am a good girl.'
reversed = reversedString(myString);
console.log(reversed);