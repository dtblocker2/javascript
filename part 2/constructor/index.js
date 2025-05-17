//constructor function of class in javascript

function Car(model,year,color){
    this.model = model;
    this.year = year;
    this.color = color;

    this.drive = function(){
        console.log(`Here goes ${this.model}`)
    };
}

const car1 = new Car("Ford Mustang",1990,"Red"); //put new to make new object using same function

console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

car1.drive()