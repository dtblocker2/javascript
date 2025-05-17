//creates array by applying functions
const numbers = [1,2,3,4,5];

function square(element){
    return Math.pow(element,2)
}

const squares = numbers.map(square);

console.log(squares)