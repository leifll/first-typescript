//variables
const str: string = "abc";
let num = 123; // Type is inferred to 'number'.
// num = "abc"; Illegal, assigned value is not of type 'number'.

//array
let list: number[] = [1, 2, 3];
let otherList: Array<number> = [1, 2, 3];


//tuple
let myTuple: [string, number, boolean];
myTuple = ["abc", 123, true];
// myTuple = [1, 2, 3]; Illegal, wrong types.

//enum
enum Color {Red, Green, Blue};
let color: Color = Color.Green;
console.log(color);
console.log(Color[color]);
console.log();

//Use 'any' only when calling non-ts code and type is unclear.
let dontKnowTheType: any = "abc";
dontKnowTheType = 123;

//'void' can only have the values 'null' and 'undefined'. Only useful for functions.
function noReturn(): void {
    // something.
}

// Function of type 'never' must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

//object
let obj: object;
obj = {myProp: 123};
// obj = 2; Illegal, wrong type.

//Type assertions is only an instruction to the compiler, it has no runtime effect like casts in
// other languages.
const untypedString: any = "abc";
const strLength: number = (untypedString as string).length;
