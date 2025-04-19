const user = {
    name: "Ramz",
    age: 19,
    hobbies: ["reading", "coding"],
    address: {
        street: "Kharoubeh",
        city: "Jenin",
        country: "Palestine"
    },

    addHobby(newHobby){
        this.hobbies.push(newHobby)

        if(!this.hobbyCount){
            this.hobbyCount = 1;
        }else {
            this.hobbyCount++
        }
    },

    printInfo() {
        console.log(
            `Name: ${this.name}, Age: ${this.age}, Hobbies: [${this.hobbies.join(', ')}], Address: ${this.address.street}, ${this.address.city}, ${this.address.country}`
        )
    }

}

user.addHobby("swimming")
user.addHobby("coding")
user.addHobby("lina")
user.printInfo();
console.log(`Number of hobbies added : ${user.hobbyCount}`)