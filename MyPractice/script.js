class Person {
    constructor(firstName, middName, lastName, age){
    this.name=firstName +  " " +middName +" " +lastName 
    this.age=age
    } 

    sayHello(){
    var $body = document.querySelector("body");
    var $h1 =document.createElement("h1");
    $h1.innerHTML=`Hello there -  ${this.name} ${this.role}`
    $body.appendChild($h1)
    }
}
let person = new Person("John", "Joe", "lastName", 12)
let person2 = new Person("David", "Test", "last", 14)
person.sayHello()


class Teacher extends Person{
    constructor(firstName, lastName, role){
        this.role = role
        super(firstName, lastName)
    }
}


let teacher1 = new Teacher("Java", "script", "teacher")

teacher1.sayHello()
//let teacher1 = new Person("Mr","Java", "script", 100)
//class IronHackEmployees extends Person {

//}