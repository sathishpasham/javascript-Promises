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

//other way of writing the call method

let person3 = {
    name:"sathish kumar",
    age:26
}
let getName=function(){
    console.log(`I am ${this.name} and I am ${this.age} old!!`)
}
getName.call(person3);