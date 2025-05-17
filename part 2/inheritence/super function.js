//just like super() function in python

//same as python

class Animal{
    constructor(name,age){
        this.name= name;
        this.age = age;
    };

    move(speed,motiontype){
        console.log(`${this.name} ${motiontype} at ${speed}`);
    };
};

class Rabbit extends Animal{
    constructor(name,age,runspeed){
        super(name,age);
        this.runspeed = runspeed;
    };
    
    motion(){
        super.move(this.runspeed,"run");
    };
};

class Fish extends Animal{
    constructor(name,age,swimspeed){
        super(name,age);
        this.swimspeed = swimspeed;
    };
    motion(){
        super.move(this.swimspeed,"swim");
    };
};


rabbit = new Rabbit("kaku",20,30);
console.log(rabbit.name);

fish = new Fish("gunnu",20,30);
console.log(fish.name);

rabbit.motion();
fish.motion();