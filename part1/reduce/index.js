// .reduce() = reduce element of array to single value

const prices = [12,22,33,43,12];

function sum(previous,next){
    return previous+next
};

const total = prices.reduce(sum);

console.log(total)