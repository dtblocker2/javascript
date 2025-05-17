//In JavaScript, the static keyword is used inside classes to define methods or properties that belong to the class itself, not to instances/objects of the class.

/*
Key Points:
static methods cannot access this referring to an instance.

You call them like: ClassName.methodName()

Useful for utility functions, constants, or factory methods.

✅ Use Cases:
Utility libraries (like Math.random() or Object.keys())

Factory methods: MyClass.createFromJson(data)

Shared configuration or constants: MyClass.VERSION
*/

class MathHelper {
    static add(x, y) {
        return x + y;
    };

    static description = "Performs basic math operations without need to create new objects";
    static PI = 3.14;
}

console.log(MathHelper.add(5, 3));          // 8
console.log(MathHelper.description);        // Performs basic math operations
console.log(MathHelper.PI)

const helper = new MathHelper();
//helper.add(5, 3);  //❌ Error: not a function on instance

//when you dont need to new create object to use a property just use class itself to access property like value of pi in above

//or when you dont want object to inherit instance/function

/*
We use static when we don’t want a method or property to be tied to instances of the class — it belongs to the class itself, not to objects created from the class.

So yes, instances do not inherit static methods or properties. But it's not about preventing inheritance — it's about defining class-level functionality instead of object-level
*/