"use strict";
// Exactly the specified parameters must be passed, not more nor less.
function myFunc(a, b) {
    //some code.
}
myFunc("abc", "def");
// myFunc("def"); IIlegal, missing parameter
// myFunc("abc", "def", "ghi"); Illegal, too many params
//------------------ optional params ------------------
function funcWithOptParam(a, b) {
    //some code.
}
funcWithOptParam("abc", "def");
funcWithOptParam("def");
// funcWithOptParam("abc", "def", "ghi"); Illegal, too many params
//-----------------  default-initialized parameters ----------------
function funcWithDefParam(a, b = "123") {
    //some code.
}
funcWithDefParam("abc", "def");
funcWithDefParam("def");
// funcWithOptParam("abc", "def", "ghi"); Illegal, too many params
// ------------- Overloading --------------------
// Note that both param types and return type is included in signature.
let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Z1bmN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0VBQXNFO0FBQ3RFLFNBQVMsTUFBTSxDQUFDLENBQVMsRUFBRSxDQUFTO0lBQ2hDLFlBQVk7QUFDaEIsQ0FBQztBQUNELE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDckIsNENBQTRDO0FBQzVDLHdEQUF3RDtBQUV4RCx1REFBdUQ7QUFFdkQsU0FBUyxnQkFBZ0IsQ0FBQyxDQUFTLEVBQUUsQ0FBVTtJQUMzQyxZQUFZO0FBQ2hCLENBQUM7QUFDRCxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDL0IsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEIsa0VBQWtFO0FBRWxFLG9FQUFvRTtBQUVwRSxTQUFTLGdCQUFnQixDQUFDLENBQVMsRUFBRSxDQUFDLEdBQUcsS0FBSztJQUMxQyxZQUFZO0FBQ2hCLENBQUM7QUFDRCxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDL0IsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEIsa0VBQWtFO0FBRWxFLGlEQUFpRDtBQUNqRCx1RUFBdUU7QUFDdkUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUl0RCxTQUFTLFFBQVEsQ0FBQyxDQUFNO0lBQ3BCLHFEQUFxRDtJQUNyRCx1REFBdUQ7SUFDdkQsSUFBSSxPQUFPLENBQUMsSUFBSSxRQUFRLEVBQUU7UUFDdEIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELE9BQU8sVUFBVSxDQUFDO0tBQ3JCO0lBQ0Qsd0NBQXdDO1NBQ25DLElBQUksT0FBTyxDQUFDLElBQUksUUFBUSxFQUFFO1FBQzNCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7S0FDcEQ7QUFDTCxDQUFDO0FBRUQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3hHLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsSUFBSSxHQUFHLE1BQU0sR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFckUsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyJ9