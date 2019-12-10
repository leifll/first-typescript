interface Person {
    firstName: string;
    lastName: string;
}

// No need to specify implementation, typescript uses duck typing (aka structural typing).
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

// It is allowed to specify implementation explicitly.
class ImplementingStudent implements Person{
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

function greeter(person : Person): string {
    return "Hello, " + person.firstName + " " + person.lastName;
}

const student = new Student("Jane", "M.", "User");
greeter(student); //Legal, Student is "duck-typed" to implement Person.
const implStudent = new ImplementingStudent("Jane", "M.", "User");
greeter(implStudent); //Legal, but see below.
// greeter({firstName: "Jane", middleInitial:"M.", lastName:"User"}); Illegal, excess property!
console.log(student.fullName);
const person: Person = {firstName: "Jane", lastName: "User"}
console.log(greeter(person));

//-----------------------------------------------------------------------

// optional property
interface Square {
    width: number;
    color?: string;
}

function handleSquare(square: Square): void {
    // handle the square.
}

handleSquare({width: 10});
handleSquare({width: 10, color: "blue"});
// handleSquare({width: 10, color: 123}); Illegal, wrong type
// handleSquare({width: 10, colorr: "blue"}); Illegal, wrong property name
// handleSquare({width: 10, color: "blue", otherProp: 123}); Illegal, excess property

//-----------------------------------------------------------------------

// readonly properties and arrays
interface Point {
    readonly x: number;
    readonly y: number;
}
let point: Point = {x: 1, y: 2};
// point.x = 3; IIlegal, can not assign to x

let arr: number[] = [1, 2, 3, 4];
let readOnlyArr: ReadonlyArray<number> = arr;
// readOnlyArr[0] = 12; IIlegal, can not assign to readOnlyArr
// readOnlyArr.length = 100; IIlegal, can not change length of readOnlyArr
// arr = readOnlyArr; IIlegal, can not trick the compiler by assigning to a modifiable array.
arr = readOnlyArr as number[]; //Allowed! By using 'as' we take over responsibility from the compiler.

//-----------------------------------------------------------------------

//Interface with function and implentation.
interface Clock {
    currentTime: Date;
    setTime(d: Date): void;
}

class ClockImpl implements Clock {
    currentTime: Date;

    constructor(date: Date) {
        this.currentTime = date;
    }

    setTime(date: Date) {
        this.currentTime = date;
    }
}

//Functional interface
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

//-----------------------------------------------------------------------

//Indexable types
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

//-----------------------------------------------------------------------

//Extending interface 
interface Shape {
    color: string;
}
interface Circle extends Shape {
    radius: number;
}
let square: Circle = {color: "blue", radius: 7};

//Extending class
class Animal {
    name: string = "";
}
class Dog extends Animal {
    breed: string = "";
}
