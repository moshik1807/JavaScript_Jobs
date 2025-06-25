//1
function Phone(brand,model){
    this.brand = brand
    this.model = model
    this.details = function(){
        console.log(`phone:${this.brand},${this.model}`)
    }
}
const myPhone = new Phone("Samsung","S20 ultra")
myPhone.details()


//2
function Rectangle(width,height){
    this.width = width
    this.height = height
    this.area = function(){
        console.log(this.width * this.height)
    }
}
const rectangle = new Rectangle(5,4)
rectangle.area()

//3
function BankAccount(owner,balance){
    this.owner = owner
    this.balance = balance
    this.deposit = function(amount){
        this.balance += amount
    }
    this.withdraw = function(amout){
        if(this.balance >= amout){
            this.balance -= amout
        }
    }
    this.checkBalance = function(){
        console.log(`your balance:${this.balance}`)
    }
}
const myAccount = new BankAccount("moshe",1500)
myAccount.deposit(500)
myAccount.withdraw(1)
myAccount.checkBalance()

//4
function Animal(name){
    this.name = name
    this.speak = function(){
        console.log(`${this.name} makes a aound`)
    }
}
function Dog(name){
    this.name = name
    this.bark = function(){
        console.log(`${this.name} bark`)
    }
}
const animal = new Animal("animal")
const dog = new Dog("Rocky")
Object.setPrototypeOf(dog,animal)
dog.speak()
dog.bark()

//5
function Vehicle(type){
    this.type = type
    this.describe = function(){
        console.log(`This is a ${this.type}`)
    }
}

function Car(brand){
    this.brand = brand
    this.info = function(){
        console.log(`This is a ${this.brand} ${this.type}`)
    }
}
const vehicle = new Vehicle("car")
const car = new Car("BMW")
Object.setPrototypeOf(car,vehicle)
car.describe()
car.info()

//6
function Shape(){
    this.area = function(){
        return 0
    }
}
function Circle(radius){
    this.radius = radius
    this.area = function(){
        console.log(Math.PI * this.radius*this.radius)
    }
}
function Square(side){
    this.side = side
    this.area = function(){
        console.log(this.side*this.side)
    }
}
const shape = new Shape()
const c = new Circle(3)
const s = new Square(4)
Object.setPrototypeOf(c,shape)
Object.setPrototypeOf(s,shape)
c.area()
s.area()

//7
class Book{
    #title
    #author
    constructor(title, author){
        this.#title = title
        this.#author = author
        this.info = function(){
            console.log(`${this.title} by ${author}`)
        }
    }
}
const b = new Book("The Hobbit","Tolkien")
b.info()

//8
class Person{
    name
    constructor(name){
        this.name = name
        this.greet = function(){
            console.log(`Hello,i am ${this.name}`)
        }
    }
}
class Student extends Person{
    constructor(name,scool){
        super(name)
        this.scool = scool
        this.study = function(){
            console.log(`${this.name} is studying at ${this.scool}`)
        }
    }
}
const student = new Student("Alice","Oxford")
student.greet()
student.study()

//9
class Employee{
    #salary
    constructor(salary){
        this.#salary = salary
        this.getSalary = function(){
            console.log(this.#salary)
        }
        this.work = function(){
            console.log("Employee is working")
        }
    }
}
class Manager extends Employee{
     constructor(salary){
         super(salary)
         this.work = function(){
            console.log("EManager is managing")            
         }
     }
}

const employee = new Employee(4000)
const manager = new Manager(5000)
employee.getSalary()
employee.work()
manager.getSalary()
manager.work()
