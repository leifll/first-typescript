"use strict";
// No need to specify implementation, typescript uses duck typing (aka structural typing).
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
// It is allowed to specify implementation explicitly.
class ImplementingStudent {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
const student = new Student("Jane", "M.", "User");
greeter(student); //Legal, Student is "duck-typed" to implement Person.
const implStudent = new ImplementingStudent("Jane", "M.", "User");
greeter(implStudent); //Legal, but see below.
// greeter({firstName: "Jane", middleInitial:"M.", lastName:"User"}); Illegal, excess property!
console.log(student.fullName);
const person = { firstName: "Jane", lastName: "User" };
console.log(greeter(person));
function handleSquare(square) {
    // handle the square.
}
handleSquare({ width: 10 });
handleSquare({ width: 10, color: "blue" });
let point = { x: 1, y: 2 };
// point.x = 3; IIlegal, can not assign to x
let arr = [1, 2, 3, 4];
let readOnlyArr = arr;
// readOnlyArr[0] = 12; IIlegal, can not assign to readOnlyArr
// readOnlyArr.length = 100; IIlegal, can not change length of readOnlyArr
// arr = readOnlyArr; IIlegal, can not trick the compiler by assigning to a modifiable array.
arr = readOnlyArr; //Allowed! By using 'as' we take over responsibility from the compiler.
class ClockImpl {
    constructor(date) {
        this.currentTime = date;
    }
    setTime(date) {
        this.currentTime = date;
    }
}
let mySearch;
mySearch = function (source, subString) {
    let result = source.search(subString);
    return result > -1;
};
let myArray;
myArray = ["Bob", "Fred"];
let myStr = myArray[0];
let square = { color: "blue", radius: 7 };
//Extending class
class Animal {
    constructor() {
        this.name = "";
    }
}
class Dog extends Animal {
    constructor() {
        super(...arguments);
        this.breed = "";
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmLWNsYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2ludGVyZi1jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0EsMEZBQTBGO0FBQzFGLE1BQU0sT0FBTztJQUVULFlBQW1CLFNBQWlCLEVBQVMsYUFBcUIsRUFBUyxRQUFnQjtRQUF4RSxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQVE7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ3ZGLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxHQUFHLEdBQUcsR0FBRyxhQUFhLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQztJQUNyRSxDQUFDO0NBQ0o7QUFFRCxzREFBc0Q7QUFDdEQsTUFBTSxtQkFBbUI7SUFFckIsWUFBbUIsU0FBaUIsRUFBUyxhQUFxQixFQUFTLFFBQWdCO1FBQXhFLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDdkYsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLEdBQUcsR0FBRyxHQUFHLGFBQWEsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDO0lBQ3JFLENBQUM7Q0FDSjtBQUVELFNBQVMsT0FBTyxDQUFDLE1BQWU7SUFDNUIsT0FBTyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUNoRSxDQUFDO0FBRUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNsRCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxxREFBcUQ7QUFDdkUsTUFBTSxXQUFXLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2xFLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLHVCQUF1QjtBQUM3QywrRkFBK0Y7QUFDL0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUIsTUFBTSxNQUFNLEdBQVcsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUMsQ0FBQTtBQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBVTdCLFNBQVMsWUFBWSxDQUFDLE1BQWM7SUFDaEMscUJBQXFCO0FBQ3pCLENBQUM7QUFFRCxZQUFZLENBQUMsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztBQUMxQixZQUFZLENBQUMsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO0FBWXpDLElBQUksS0FBSyxHQUFVLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUM7QUFDaEMsNENBQTRDO0FBRTVDLElBQUksR0FBRyxHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDakMsSUFBSSxXQUFXLEdBQTBCLEdBQUcsQ0FBQztBQUM3Qyw4REFBOEQ7QUFDOUQsMEVBQTBFO0FBQzFFLDZGQUE2RjtBQUM3RixHQUFHLEdBQUcsV0FBdUIsQ0FBQyxDQUFDLHVFQUF1RTtBQVV0RyxNQUFNLFNBQVM7SUFHWCxZQUFZLElBQVU7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFVO1FBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztDQUNKO0FBT0QsSUFBSSxRQUFvQixDQUFDO0FBQ3pCLFFBQVEsR0FBRyxVQUFTLE1BQWMsRUFBRSxTQUFpQjtJQUNqRCxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RDLE9BQU8sTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQTtBQVNELElBQUksT0FBb0IsQ0FBQztBQUN6QixPQUFPLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFMUIsSUFBSSxLQUFLLEdBQVcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBVy9CLElBQUksTUFBTSxHQUFXLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7QUFFaEQsaUJBQWlCO0FBQ2pCLE1BQU0sTUFBTTtJQUFaO1FBQ0ksU0FBSSxHQUFXLEVBQUUsQ0FBQztJQUN0QixDQUFDO0NBQUE7QUFDRCxNQUFNLEdBQUksU0FBUSxNQUFNO0lBQXhCOztRQUNJLFVBQUssR0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztDQUFBIn0=