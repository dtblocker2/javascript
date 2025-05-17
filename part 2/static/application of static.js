//when i want to keep track of number of users objects created

class Users{
    static user_count = 0;

    constructor(user_name){
        this.user_name = user_name;
        Users.user_count += 1;
    };
};

user1 = new Users("goku");
user2 = new Users("vegeta");

console.log(Users.user_count);