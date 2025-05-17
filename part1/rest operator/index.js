//rest parameters = (...rest) same work as args in python

function sum_numbers (...rest){
    let sum = 0;
    for (i of rest){
        sum += i
    };
    console.log(sum);
    return sum;
}

sum_numbers(1,2,3,4,52,2)