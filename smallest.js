function minInArray(numbers) {
    let smallest = numbers[0];
    for (let i = 0; i <= numbers.length; i++) {
        element = numbers[i];
        // console.log(element);
        if (element < smallest){
            smallest = element;
        }

    }
    return smallest;
}

const heights = [120, 134, 250, 190, 115, 103];
const smallest = minInArray(heights);
console.log('Smallest cutie height is:', smallest,'cm');