// Einzeiliger Kommentar

/*
    Mehrzeiliger
    Kommentar
*/

// So wenig Kommentare wie möglich, so viele wie nötig
// Wollen eigentlich, dass unser Code für uns spricht

console.log("Hallo Welt"); // einfache Ausgabe
console.error("Da lief was schief"); // Wird als Fehler ausgegeben
console.info("Ich bin eine Information!"); // Wird im Firefox mit Info Zeichen dargestellt

// Variablen definieren:

let firstName = "Max";
let bool = true;
let age = 18;

const lastName = "Mustermann";
// Funktioniert wie let, kann aber nicht neuzugewiesen werden

// Wie gebe ich diese Variablen in der Konsole aus?
console.log(firstName);

// Mit weiterem String kombinieren
console.log("Hallo " + firstName + "!");

// Interpoliert String:
console.log(`Hallo ${firstName}!`);

// Wenn wir Anführungszeichen im String benutzen wollen:
console.log('Er sagt: "Hallo Welt"');
console.log("Er sagt: 'Hallo Welt'");

// number   
let zahl = 12;
let auchZahl = -12.5;


// Arithmetische Operatoren:
// + Plus
// - Minus
// * Mal
// / Geteilt
// Können mit Zuweisungsoperator kombiniert werden
// zahl = zahl * 4;
zahl *= 4;

// % Modulo Teilung mit Rest
console.log(254.6 * 13 % 4);

// ++ Inkrement
// -- Dekrement
auchZahl++; // => -11.5

// boolean
// true / false
let kurs = true;
let kursende = false;
// Wird meistens für Vergleiche und if Blöcke benutzt


// null
// ist die absichtliche Zuweisung keines Wertes
// Beudetet die Abwesenheit von Daten
let nichts = null;

// undefined
let test;
// Bedeutet, dass die Variable definiert, aber nie initialisiert wird

// NaN
// Not a Number
// Für ungültige Mathematische Operationen
console.log(test + 50);

// Funktionen
function alter(alter, alter2) {
    return alter + alter2;
}

console.log(alter(20, 23));

// Aufgabe: Erstelle eine Funktion die drei parameter akzeptiert firstname, lastname, age
// Die Funktion sollte einen String zurückgeben, der eine Begrüßungsnachricht enthält, die 
// diese 3 parameter verwendet. Interpolierterten String

// Typeof
console.log(typeof(firstName));
// erlaubt das prüfen von Datentypen

// Scope
// Unteschied zwischen let, const und var
let x;
var y;
const z = 5;
// 1. Unterschied: const muss sofort mit einem Wert initialisiert werden
// var und let können später init werden
x = 15;
y = 12;

// 2. Unterschied: var legt ein globales Objekt an
// let hingegen nicht
// 3. Unterschied: hoisting
// hoisting geht nur mit var
// Geht: 
w = 15;
console.log(w);
var w;

// 4. Unterschied:
// var kennt den Blockscope nicht
// let schon

{
    let block1 = "Hallo!";
    var block2 = "Bye!";
    console.log(block1);
}

//console.log(block1); // => Fehlermeldung
console.log(block2); // => Funktioniert

// Scopes in JavaScript: 
// Globaler Scope => Variable ist im gesamten Script aufrufbar
// Function Scope => Variable ist innerhalb der gesamten Funktion aufrufbar

// Aufgabe
// Führe eine beliebige Arithmetische Operation mit den beiden Variablen aus und weise das
// Ergebnis einer Konstanten zu.
// Lass die Konstante in der Konsole ausgeben


// Kontrollstrukturen
// if
let numberOne = 20;
let numberTwo= 30;

if(numberOne < numberTwo) {
    console.log(`${numberOne} ist kleiner als ${numberTwo}`);
}
else if(numberOne > numberTwo) {
    console.log(`${numberOne} ist größer als ${numberTwo}`);
}
else {
    console.log(`${numberOne} ist gleich groß als ${numberTwo}`);
}

// Vergleichs-Operatoren in JS:
/*
    == selber Wert
    === selber Wert und selber Typ
    != ungleicher Wert
    !== ungleichen Wert und Typ
    Empfehlung zu === und !==
    < Kleiner als
    > größer als
    <= kleiner gleich
    >= größer gleich
*/

// Logische Operatoren
// && Logisches UND => 1 < 2 && 1 < 3
// || Logisches ODER

// Übung:
// Schreibe eine Funktion, die prüft ob eine Zahl gerade oder ungerade ist
// Rückgabe soll true oder false sein


// Loops
// for
// while
// do..while

function countTo(limit) {
    console.log("Schleife startet:");
    for(let i = 0; i <= limit; i++){
        console.log(i);
    }
    console.log("Schleife beendet");
}

countTo(10);

// Schreibe eine Funktion die per for Schleife
// wie eine Uhr funktioniert
// wenn der sekunden zeiger 60 erreicht soll der minuten zeiger auf 1 erhöht werden
// Minuten => 60
// Stunden => 2

// switch Case
// Vergleicht den Wert einer Variable oder direkt einen Wert mit mehreren Möglichkeiten

switch (numberOne) {
    case 10: 
        console.log("Zahl ist 10");
        break;
    case 20:
        console.log("Zahl ist 20");
        break;
    case 30:
        console.log("Zahl ist 30");
        break;
    default:
        console.log("Zahl hat einen unerwarteten Wert");
        // Beim default benötigen wir kein break, da danach nichts mehr kommt
}

// FizzBuzz
// Jede Zahl die nur durch 3 teilbar ist wird mit Fizz betitelt
// Jede Zahl die nur durch 5 teilbar ist wird mit Buzz betitelt
// Zahlen die sowohl durch 3 als auch 5 teilbar sind werden mit FizzBuzz betitelt
// Alle anderen Zahlen werden normal ausgegeben
// Wir wollen nun eine Funktion schreiben, die eine Obergrenze übergeben bekommt
// bis zu der gezählt werden soll
// und jede dieser Zahlen soll dann auf ihre Teilbarkeit durch 3 und 5 geprüft werden
// und nach den obigen Regeln in der Konsole ausgegeben werden

// Lambdas
// Sind die kompakte Alternative zu den anonymen Funktionen
// Auch Pfeilfunktionen genannt

function vervierfachen(a) {
    return a*4;
}

let quadruple = (a) => a*4;

// Lambdas werden meistens als Parameter für andere Funktionen benutzt

// wenn eine Lambda Funktion mehrzeilig wird, verliert sie einige ihrer Vorteile
let mehrzeilig = (a,b) => {
    a *=2;
    b *=2;
    return a*b;
}