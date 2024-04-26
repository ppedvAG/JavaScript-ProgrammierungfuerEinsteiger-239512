// Vordefinierte Objekte
// string
// arrays
// Math
// Date


// strings
// Ist an sich eine Sonderform des Arrays
// Ist eine aneinanderreihung(array) von Buchstaben/Zeichen

let testString = "Ich bin ein Teststring";

// Properties
testString.length; // => Die Anzahl er Zeichen die im String enthalten sind
console.log(testString.length);

let stringArr = testString.split(" ");
stringArr = testString.split("i");
console.log(stringArr);

let part1String = testString.slice(0,12);
console.log(part1String);
let part2String = testString.slice(12);
console.log(part2String);
let part3String = testString.slice();
console.log(part3String);

// Gibt uns den Unicode-wert des Buchstabens an Indexstelle index zurück
let unicodeC = testString.charCodeAt(1);
console.log(unicodeC);

// Übung:
// Wir wollen eine Funktion schreiben, die einen String als Parameter erhält und uns in der
// Konsole ausgibt wie viele klein und großbuchstaben in dem String enthalten sind
// Bsp: "Ich" => "Groß: 1 | Klein: 2"

function countCase(inputString) {
    let countLower = 0;
    let countUpper = 0;

    for(let i=0; i < inputString.length; i++) {
        let char = inputString[i];
        if(char.toUpperCase() === char.toLowerCase()) {
            continue;
        }else if(char.toUpperCase() === char) {
            countUpper++;
        }else {
            countLower++;
        }
    }
    console.log(`Groß: ${countUpper} | Klein: ${countLower}`);
}

countCase("Ich bin hier");

// Array
// Sammlung von mehreren Werten innerhalb einer Variable
// Können mit dem array literal oder mit dem Constructor arbeiten
// Können verschiedenen Datentypen halten

// Array literal
let literalArr = [1, 2, 3, "Werte", true, [1, 5, 10]];

// Constructor
let constructedArr = new Array(1, 2, 3, 4, 5, 6);

// Ansprechen einzelner Elemente über die Bracket-Notation
console.log(literalArr[5]); // => [1, 5, 10]
console.log(literalArr[5][2]); // => 10
console.log(constructedArr[5]); // => 6

// Auch das Array verfügt über ein prop
console.log(literalArr.length); // => 6
console.log(literalArr[5].length); // => 3

// Können Werte eines Arrays neuzuweisen
literalArr[0] = 40;
console.log(literalArr[0]); // => 40
literalArr[0] = "Hallo";
console.log(literalArr[0]); // => "Hallo"

console.log(literalArr.reverse());

let numberArray = [1, 900, 1000, 999];

numberArray.sort();
console.log(numberArray);

numberArray.sort(
    (a, b) => b - a // absteigend sortieren
)

console.log(numberArray);

// Übung:
// Erstelle eine Funktion, die ein beliebig langes Array aus Zahlen erhalten kann
// und sund dann nur die höchste Zahl aus dem Array zurückgibt

// 2. Übung:
// ERstelle eine Funktion, die ein zwei Dimensionales Array als parameter erhält
// die enthaltenen Arrays bestehen wieder nur aus Zahlen
// Die funktion soll am ende in der Konsole ausgeben das wie vielte Array
// das längste ist und welche zahl die höchste ist

function multiHighest(arr) {
    let longestArr = 0;
    let highestNumber = arr[0][0];
    let currentMax;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > arr[longestArr].length) {
            longestArr = i;
            currentMax = returnHighestWithSort(arr[i])
        } 
        if(highestNumber < currentMax) {
            highestNumber = currentMax
        }
    }
    console.log(`Das ${longestArr + 1}te Array ist das längste.
    Die höchste Zahl in den Arrays ist ${highestNumber}`);
}


// Date 
// Zählt intern mit ms, die seit dem 01.01.1970 vergangen sind

// Date Erstellung
let today = new Date();
// Gibt uns das heutige Datum insklusive Timezone zurück
console.log(today);

let trialDate = new Date(2022);
// Wenn nur ein Parameter übergeben wird, wird es als Millisekunden seit
// dem 01.01.1970 gerechnet
console.log(trialDate);

// Wenn wir mit zwei parametern definieren wir jahr und monat
let trialDate2 = new Date(2022, 6);
console.log(trialDate2);

// Mittels Datumstring:
let trialDate3 = new Date("07-05-2022"); // 05.07.2022
// yyyy-MM-dd klappt in jedem Browser
// MM-dd-yyyy klappt in chrome, aber nicht in firefox
 

// Methoden mit get und set
// Jahr
trialDate.getFullYear(); // => Jahr als vierstellige Zahl
trialDate.setFullYear(2021); // Ändert das Jahr auf 2021
console.log(trialDate);
// Monat
trialDate.getMonth(); // => Monat zwischen 0 und 11
// Tag
trialDate.getDay(); // => Tag zwischen 1 und 31
// Stunden
trialDate.getHours(); // => Stunden zwischen 0 und 23
// Minuten
trialDate.getMinutes(); // => Minuten zwischen 0 und 59
// Sekunden
trialDate.getSeconds(); // => Sekunden zwischen 0 und 59

console.log(Date.now()); // => Gibt das derzeitige Datum als ms seit dem 01.01.1970 zurück
let trialDate4 = new Date(1714037675539);
console.log(trialDate4);

// Übung:
// Erstelle eine Funktion, die das Alter einer Person in Tagen berechnet.
// Die Funktion sollte zwei Parameter akzeptieren: das Geburtsdatum der person
// und das aktuelle Datum.
// Beide Daten sollten im Format 'yyyy-mm-dd' übergeben werden
// Die Funktion sollte die Differenz zwischen den beiden Daten in Tagen zurückgeben

function calculateAgeInDays(birthDate, currentDate) {
    birthDate = new Date(birthDate);
    currentDate = new Date(currentDate);

    let differenceInMilliseconds = currentDate - birthDate;

    let diffrenInDays = differenceInMilliseconds / (24* 60* 60* 1000);

    return Math.floor(diffrenInDays)
}


console.log(calculateAgeInDays('2000-01-01', '2022-12-31')); // Sollte 8400 zurückgeben
console.log(calculateAgeInDays('2010-05-20', '2022-05-20')); // Sollte 4383 zurückgeben

// Aufgabe:
// Schreibe eine Funktion "nextFridayThe13th", die das nächste Datum ermittelt, an dem der 13.
// eines Monats auf einen Freitag fällt.
// Die Funktion soll das gefundene Datum im Format "YYYY-MM-DD" zurückgeben
// Tipp: Date.now()