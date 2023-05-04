
// Kintamųjų inicijavimas

// Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
// Sukurti 3 kintamuosius su teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
// Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
// Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console


let number1 = 1;
console.log(number1);

let number2 = 222;
console.log(number2);

let number3 = -45;
console.log(number3);

let name = "petras";
console.log(name);

let surname = 'petrauskas';
console.log(surname);

let pet = 'dog';
console.log(pet);

const playersNumbers = [3, 5, 44, 16, 38];
console.log(playersNumbers);

const fruits = ['grapes', 'apples', 'bananas', 'mango', 'kiwi'];
console.log(fruits);

// Veiksmai su kintamaisiais

// Susumuoti visus skaičiaus tipo kintamuosius
// Rezultatą išvesti į console
// Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
// Rezultatą išvesti į console
// Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
// 1-2+3-4+5
// Rezultatą išvesti į console
// Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

function sumOfNumber(number) {

    let sum = 0;
    sum += number[0];
    sum += number[1];
    sum += number[2];
    sum += number[3];
    sum += number[4];

    return sum;
}

console.log(sumOfNumber(playersNumbers));
 

function joinOfWords (word) {

    return `${word[0]} ${word[1]} ${word[2]} ${word[3]} ${word[4]}`;

}

console.log(joinOfWords(fruits));


function plusMinusLogic (number) {
    let value = 0;

    value += number[0];
    value -= number[1];
    value += number[2];
    value -= number[3];
    value += number[4];

    return value;

}

console.log(plusMinusLogic(playersNumbers));  

// Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas


function joinFromEndToBeginning (text) {

    return `${text[4]}, ${text[3]}, ${text[2]}, ${text[1]}, ${text[0]}`;

}

console.log(joinFromEndToBeginning(fruits));


