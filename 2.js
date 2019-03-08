let array = [1,2];
let sum = 0;

fibonacci = (array) => {
    while (true) {
        let number = array[array.length - 1] + array[array.length - 2];
        if (number < 4000000) {
            array.push(array[array.length - 1] + array[array.length - 2]);
        } else {
            break;
        }
    }
    return array;
};

fibonacci(array);

for (let i = 0; i < array.length; i++){
    if (array[i] % 2 == 0) {
        sum += array[i];
    }
}
console.log(sum);
