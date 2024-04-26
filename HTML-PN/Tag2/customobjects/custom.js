// Custom Objects

// an sich eine Sammlung von Schlüssel:Wert Paare
// Diese Schlüssel nennen wir Properties
// Außer wenn es sich bei den Werten dieser properties um Funktionen handelt
// Dann sprechen wir von Methoden

// Wie initialisere ich Objekte?
// 3. verschiedene Möglichkeiten:

// 1. object literal
const objectLiteral = {
    "name" : "Max Mustermann",
    "age" : 15,
    "employed" : true,
    "cityOfOrigin" : "Munich"
};
// Property-Name können auch ohne "" oder '' definiert werden
// Anführungszeichen sind erst absolut notwendig wenn es sich beim prop-Namen nicht um einen
// gültigen JS Identifier handelt
// Kann mit oder ohne trailing Komma definiert werden

// 2. constructor
const constructedObject = new Object();
// Erstellt ein bis dato leeres Objekt

// 3. shorthand
// Gibt es ES6

let person2Name = "Erika Musterfrau";
let person2Age = 22;
let person2Employed = true;
let person2CityofOrigin = "Vienna";

const shorthandObject = {
    person2Name,
    person2Age,
    person2Employed,
    person2CityofOrigin
}
// Beim shorthand wird nun der Identifier der Variable zum Namen des Props und der Wert
// der Variable wird der Wert des Props

// Wie greife ich auf Props eines Objektes zu?

// 1. Bracket-Notation
// Objekte verfügen nicht über indizes
console.log(objectLiteral["name"]); // => Max Mustermann
console.log(shorthandObject["person2Name"]); // => Erika Musterfrau
// Die Bracket-Notation funktioniert immer, auch wenn es sich beim Namen des Props um keinen
// gültigen Identifier handelt, z.B. wenn dieser leerzeichen enthält

// 2. dot.Notation
console.log(objectLiteral.cityOfOrigin); // => Munich
console.log(shorthandObject.person2Age); // => 22
// Die Dot-Notation funktioniert nur mit Prop-Namen, die gültige JS-Identifier sind

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for(let key in person) {
    if(person.hasOwnProperty(key)){
        console.log(`Property: ${key}, Wert: ${person[key]}`);
    }
}

// Aufgabe:
// Erstelle eine Funktion, die die Anzahl der Eigenschaften(Properties) in einem übergebenen
// Objekt zählt und zurücktgibt.
// Verwende dafür eine der Methoden, um auf die Eigenschaften des Objekts zuzugreifen
// (entweder Bracket-Notation oder dot-Notation)


const objA =  {
    name: 'Alex',
    age: 30,
    address: {
        city: 'Berlin',
        zip: 10002
    }
}
// Aufgabe 2:
// Schreibe eine Funktion, die zwei Objekte obj1 und obj2 rekursiv vergleicht und überprüft
// ob sie exakt die gleichen Properties mit den gleichen Werten enthalten, unabhängig von
// der Objektstruktur (Verschachtelungstiefe)
