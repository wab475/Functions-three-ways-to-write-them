// Function declaration
function calcSquared(number1, number2) {
    const squared = (number1 * number1) + (number2 * number2);
    return squared;
}
const result = calcSquared(2, 4)
console.log(result * result)


//Function expression
const calcSquared1 = function (number3, number4) {
    const squared1 = (number3 * number3) + (number4 * number4);
    return squared1;
};
const result1 = calcSquared1(2, 4)
console.log(result1 * result1)

//Arrow function
const calcSquared2 = (number5, number6) => {
    const squared2 = (number5 * number5) + (number6 * number6);
    return squared2;
};
const result2 = calcSquared2(2, 4)
console.log(result2 * result2)


