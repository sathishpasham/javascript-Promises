let person1={
    name: "sathish kumar pasham",
    age:26,
    getName: function(){
        console.log(`I am ${this.name} and I am ${this.age} old!!`)
    }
}

let person2={
    name:"pasham",
    age:25
}
person1.getName.call(person2)