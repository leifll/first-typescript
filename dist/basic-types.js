"use strict";
//variables
const str = "abc";
let num = 123; // Type is inferred to 'number'.
// num = "abc"; Illegal, assigned value is not of type 'number'.
//array
let list = [1, 2, 3];
let otherList = [1, 2, 3];
//tuple
let myTuple;
myTuple = ["abc", 123, true];
// myTuple = [1, 2, 3]; Illegal, wrong types.
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let color = Color.Green;
console.log(color);
console.log(Color[color]);
console.log();
//Use 'any' only when calling non-ts code and type is unclear.
let dontKnowTheType = "abc";
dontKnowTheType = 123;
//'void' can only have the values 'null' and 'undefined'. Only useful for functions.
function noReturn() {
    // something.
}
// Function of type 'never' must have unreachable end point
function error(message) {
    throw new Error(message);
}
//object
let obj;
obj = { myProp: 123 };
// obj = 2; Illegal, wrong type.
//Type assertions is only an instruction to the compiler, it has no runtime effect like casts in
// other languages.
const untypedString = "abc";
const strLength = untypedString.length;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWMtdHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYmFzaWMtdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFdBQVc7QUFDWCxNQUFNLEdBQUcsR0FBVyxLQUFLLENBQUM7QUFDMUIsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsZ0NBQWdDO0FBQy9DLGdFQUFnRTtBQUVoRSxPQUFPO0FBQ1AsSUFBSSxJQUFJLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9CLElBQUksU0FBUyxHQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFHekMsT0FBTztBQUNQLElBQUksT0FBa0MsQ0FBQztBQUN2QyxPQUFPLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdCLDZDQUE2QztBQUU3QyxNQUFNO0FBQ04sSUFBSyxLQUF3QjtBQUE3QixXQUFLLEtBQUs7SUFBRSwrQkFBRyxDQUFBO0lBQUUsbUNBQUssQ0FBQTtJQUFFLGlDQUFJLENBQUE7QUFBQSxDQUFDLEVBQXhCLEtBQUssS0FBTCxLQUFLLFFBQW1CO0FBQUEsQ0FBQztBQUM5QixJQUFJLEtBQUssR0FBVSxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUMxQixPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFZCw4REFBOEQ7QUFDOUQsSUFBSSxlQUFlLEdBQVEsS0FBSyxDQUFDO0FBQ2pDLGVBQWUsR0FBRyxHQUFHLENBQUM7QUFFdEIsb0ZBQW9GO0FBQ3BGLFNBQVMsUUFBUTtJQUNiLGFBQWE7QUFDakIsQ0FBQztBQUVELDJEQUEyRDtBQUMzRCxTQUFTLEtBQUssQ0FBQyxPQUFlO0lBQzFCLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsQ0FBQztBQUVELFFBQVE7QUFDUixJQUFJLEdBQVcsQ0FBQztBQUNoQixHQUFHLEdBQUcsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUM7QUFDcEIsZ0NBQWdDO0FBRWhDLGdHQUFnRztBQUNoRyxtQkFBbUI7QUFDbkIsTUFBTSxhQUFhLEdBQVEsS0FBSyxDQUFDO0FBQ2pDLE1BQU0sU0FBUyxHQUFZLGFBQXdCLENBQUMsTUFBTSxDQUFDIn0=