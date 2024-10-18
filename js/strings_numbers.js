// ====================================================================================================
//      NUMBERS
// ====================================================================================================

let myDivision = 10 / 5; // Number / Number = Number
let myMulti = 10 * 5; // Number * Number = Number
let myAddition = 10 + 5; // Number + Number = Number
let mySubstraction = 10 - 5; // Number - Number = Number

// alles Numbers keine Strings. Weil nur Numbers bei der Declaration verwendet wurden
console.log("myDivision: " + myDivision + " Type: " + typeof (myDivision)); // myDivision: 2 Type: number
console.log("myMulti: " + myMulti + " Type: " + typeof (myMulti)); // myMulti: 50 Type: number
console.log("myAddition: " + myAddition + " Type: " + typeof (myAddition)); // myAddition: 15 Type: number
console.log("mySubstraction: " + mySubstraction + " Type: " + typeof (mySubstraction)); // mySubstraction: 5 Type: number

// Angabe von Potenzen wie z.B. 2^3
myPow = 2 ** 3 // 2^3 = 6 (2*2*2)
myPow2 = 2 ** 6 // 2^6 = 64 (2*2*2*2*2*2)


// ====================================================================================================
//      STRINGS
// ====================================================================================================

let myConcat1 = "hello" + " " + "World"; //(concat kommt von concatenate = verketten)
let myConcat2 = "hello" - " " + "World"; //(concat kommt von concatenate = verketten)

console.log(myConcat1); // "hello World"
console.log(myConcat2); // "NaNWorld" (NaN steht für not a number ==> Quasi eine Fehlermeldung die aussagt das hier etwas gemacht wird wofür Numbers benötigt werden (In dem Fall Substraction), aber an dieser Stelle keine Numbers übergeben wurden). + ist hier eine Ausnahme, das geht auch mit Strings



// ====================================================================================================
//      COMBINATION STRINGS and NUMBERS
// ====================================================================================================

let myCombination1 = "10" + 5; // String + Number (+ macht aus Number ein String, sobald einer der Sumanden ein String ist)
let myCombination2 = "10" - 5; // String - Number (alles außer + versucht aus beiden Operanten eine Zahl zu machen)
let myCombination3 = "10" * 5; // String * Number (alles außer + versucht aus beiden Operanten eine Zahl zu machen)
let myCombination4 = "10" / 5; // String / Number (alles außer + versucht aus beiden Operanten eine Zahl zu machen)
let myCombination5 = 5 + "10"; // String + Number (+ macht aus Number ein String, sobald einer der Sumanden ein String ist)
let myCombination10 = "10" / "5"; // String / Number (alles außer + versucht aus beiden Operanten eine Zahl zu machen)


// WICHTIGER HINWEIS ==> das funktioniert von links nach recht immer mit dem Operanten links und dem rechts vom Operator
let myCombination6 = 10 - "5" + 5;  // Number - String + Number entspricht A: Number-String=Number B:Number+Number=Number (die erste Number von B ist das Ergebnis von A)
let myCombination7 = 10 - "5" + "5";  // Number - String + Number entspricht A: Number-String=Number B:Number+String=String (die erste Number von B ist das Ergebnis von A)

// , != .
let myCombination8 = "10,5" - 5; // String - Number (alles außer + versucht aus einem der Operanten eine Zahl zu machen, wenn der andere auch eine Zahl ist - bei Komma geht das nicht ==> NaN)
let myCombination9 = "10.5" - 5; // String - Number (alles außer + versucht aus einem der Operanten eine Zahl zu machen, wenn der andere auch eine Zahl ist - bei Punkt geht das ==> Number)


console.log(myCombination1 + " => Type: " + typeof (myCombination1));   //105 => Type: string
console.log(myCombination2 + " => Type: " + typeof (myCombination2));   //5 => Type: number
console.log(myCombination3 + " => Type: " + typeof (myCombination3));   //5 => Type: number
console.log(myCombination4 + " => Type: " + typeof (myCombination4));   //5 => Type: number
console.log(myCombination5 + " => Type: " + typeof (myCombination5));   //510 => Type: string
console.log(myCombination6 + " => Type: " + typeof (myCombination6));   //10 => Type: number
console.log(myCombination7 + " => Type: " + typeof (myCombination7));   //55 => Type: string
console.log(myCombination8 + " => Type: " + typeof (myCombination8));   //NaN => Type: number (lustigerweise hat NaN trotzdem den Datentypen number)
console.log(myCombination9 + " => Type: " + typeof (myCombination9));   //5.5 => Type: number
console.log(myCombination10 + " => Type: " + typeof (myCombinationX));  //2 => Type: number


// ====================================================================================================
//      STRING METHODEN
// ====================================================================================================

// ================================================
//      STRING Property - length
// ================================================
let myTestString = "hallo     ";
console.log("String-Property ==> stringName.length: " + myTestString.length); // 10

// ================================================
//      STRING METHODE - trim()
// ================================================
let myTestString1 = "hallo     ";
myTestString1 = myTestString1.trim(); // Entfernt am Anfang und am Ende des Strings alle Leerzeichen, und gibt dies in einem neuen String zurück / alter String bleibt unverändert
console.log("String-Methode ==> stringName.trim() und stringName.length: " + myTestString1.length); // 5