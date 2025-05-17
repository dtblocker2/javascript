//remove element that does not satisfy equation

let ages = [18,18,19,17,20];

ages = ages.filter(isAdult)

function isAdult(element){
    if (element>=18){
        return true;
    }
    else{
        return false;
    };
};

console.log(ages)