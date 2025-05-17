//now oop main part has started same classes in python

class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    };

    displayProduct(){
        console.log(`Product: ${this.name} \nPrice: ${this.price}$`)
    }
}

const product1 = new Product("toy car",200);
const product2 = new Product("toy gun",20);
const product3 = new Product("underwear",367);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct()