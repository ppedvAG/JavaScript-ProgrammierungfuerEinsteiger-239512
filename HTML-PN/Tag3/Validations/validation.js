// Contraint Validation API

const passwordInp = document.querySelector("#password");

passwordInp.addEventListener("focus", function (ev) {
    if(passwordInp.validity.valueMissing) {
        // Erlaubt es uns eine eigene Fehlermeldung zu schreiben
        // Solange diese kein leerer String ist, gilt die form als invalid
        passwordInp.setCustomValidity("Das Passwort ist leer.");
        // Zeigt uns die Fehlermeldung an wenn das Input-Element ungültig ist
        passwordInp.reportValidity();
    }
    else {
        // Entfernen die Error-Message sobald das Input-Feld gültig ist
        passwordInp.setCustomValidity("");
    }
})

// Mögliche Validity Props
/*
    patternMismatch - Inhalt stimmt nicht mit pattern überein
    tooLong - Inhalt ist zu lang
    tooShort - Inhalt ist zu kurz
    rangeOverflow - Wert höher als im max-Attribut bestimmt
    rangeUnderfow - Wert niederiger als im min-Attribut bestimmt
    typeMismatch - Wert ist nicht der richtige Typ, z.B. email ohne @
    valid - Gibt true zurück, wenn alles gültig ist
    valueMissing - Wenn das Input-Element das Attribut required hat und das Feld leer ist
*/

passwordInp.addEventListener("keyup", function (ev) {
    if(passwordInp.validity.tooShort) {
        // Erlaubt es uns eine eigene Fehlermeldung zu schreiben
        // Solange diese kein leerer String ist, gilt die form als invalid
        passwordInp.setCustomValidity(`Das Passwort ist zu kurz. Momentan: ${passwordInp.value.length} Zeichen`);
        // Zeigt uns die Fehlermeldung an wenn das Input-Element ungültig ist
        passwordInp.reportValidity();
    }
    else {
        // Entfernen die Error-Message sobald das Input-Feld gültig ist
        passwordInp.setCustomValidity("");
    }
})

const zipCode = document.querySelector("#zipCode");
const country = document.querySelector("#country");

function checkPLZ() {
    let constraints = {
        ch: ['^(CH-)?\\d{4}$', "Schweizerische PLZ müssen aus genau 4 Zeichen bestehen: e.g. CH-1950 oor 1950"],
        fr: ['^(F-)?\\d{5}$', "Französische PLZ müssen aus genau 5 Zeichen bestehen: e.g. F-75012 oor 75012"],
        de: ['^(D-)?\\d{5}$', "Deutsche PLZ müssen aus genau 5 Zeichen bestehen: e.g. D-12345 oor 12345"]
    }

    const countryValue = country.value;
    const zipCodeValue = zipCode.value;

    let constraint = new RegExp(constraints[countryValue][0], "");

    if(constraint.test(zipCodeValue)) {
        zipCode.setCustomValidity("");
    }
    else {
        zipCode.setCustomValidity(constraints[countryValue][1]);
        zipCode.reportValidity();
    }
}

zipCode.addEventListener("input", checkPLZ);
country.addEventListener("input", checkPLZ);

// Aufgabe:
// Entwickle ein Registrierungsformular für eine Website
// - Vorname (pflicht)
// - Nachname (pflicht)
// - Email-Adresse (pflicht, muss ein gültiges EMail-Format haben)
// - Passwort (pflicht, muss mindest 8 Zeichen lang sein, Großbuchstaben, Kleinbuchstaben
//   und Zahlen enthalten)
// - Passwort bestätigung (Pflichtfeld, muss mit dem Passwort übereinstimmen)
// - Submit Button