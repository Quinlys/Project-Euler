solution = () => {
    let interestingNumbers = [];
    for (let i = 1; true; i++){
        if (i === getSum(i)){
            interestingNumbers.push(i);
            console.log(i)
        }
    }
    return interestingNumbers;
};


interestingNumber = (number) => {
  return number === getSum(number);
};


getSum = (n) => {
    let arrayNumbers = n.toString();
    let sum = 0;
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] != 0) {
            sum += factorial(arrayNumbers[i]);
        }
    }
    return sum;
};

factorial = (n) => {
    return n ? n * factorial(n - 1) : 1;
};

console.log(solution());