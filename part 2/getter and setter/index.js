/**
 * getter = special method that make a property readable
 * setter = special method that make a property writeable
 * 
 * used to validate and modify a value when readin/writing a property
 */

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    };
    
    set width(newWidth){
        if (newWidth>0){
            this._width = newWidth; //creating private variable
        }
        else{
            console.error("Width must be positive number")
        }
    }

    set height(newHeight){
        if (newHeight>0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be positive number")
        }
    } 

    //height and width properties are writable using setter but they are not readable so to read them use getters

    get height(){
        return `${this._height.toFixed(2)} cm` //adding 2 decimal digits
    }
};

const rectangle = new Rectangle(3,4)

console.log(rectangle.height)
//console.log(rectangle.width) //won't show

rectangle.height = "jj"; //will pose error on assigning not positive numbers