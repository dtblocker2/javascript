//same as python

class Animal{
    alive = true;

    eat(){
        console.log(`${this.name} is eating`)
    };

    sleep(){
        console.log(`${this.name} is sleeping`)
    };
};

class Rabbit extends Animal{
    name = "rabbit"
}

class Human extends Animal{
    name = "human"
}
class Sheep extends Animal{
    name = "sheep"
}

sheep = new Sheep();
rabbit = new Rabbit();
human = new Human();

sheep.eat();
human.sleep();
consol(rabbit.alive);