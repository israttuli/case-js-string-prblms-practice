function maxInArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        // console.log(element);
        if (element > largest){
            largest = element;
        }
    }
    return largest;
}
const heights = [165, 180, 193, 200, 137];
const tallest = maxInArray(heights);
console.log('Tallest person is :', tallest);
