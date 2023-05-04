
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


// Kintamųjų palyginimas
// Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

// Tarpusavyje palyginti skaičiaus tipo kintamuosius:
// kuris didesnis
// kuris mažesnis
// ar jie lygūs
// ar jie nelygūs
// kuris didesnis arba lygus
// kuris mažesnis arba lygus

// Išvesti teksto tipo kintamųjų ilgius

// Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
// kuris didesnis
// kuris mažesnis
// ar jie lygūs
// ar jie nelygūs
// kuris didesnis arba lygus
// kuris mažesnis arba lygus

// Išvesti sąrašo tipo kintamųjų ilgius

// Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
// kuris didesnis
// kuris mažesnis
// ar jie lygūs
// ar jie nelygūs
// kuris didesnis arba lygus
// kuris mažesnis arba lygus


let number11 = 11;
let number12 = 12;

if (number11 > number12) {
    console.log('Pomidoras');

} else  {
    console.log('Bandykite dar kartą')
}

if (number11 < number12) {
    console.log('Pomidoras');

} else  {
    console.log('Bandykite dar kartą')
}

if (number11 === number12) {
    console.log('Pomidoras');

} else  {
    console.log('Bandykite dar kartą')
}

if (number11 !== number12) {
    console.log('Pomidoras');

} else  {
    console.log('Bandykite dar kartą')
}

let someText1 = "kazkoksTekstas";

let someText2 = "kazkoksTekstasDu";

console.log(someText1.length);
console.log(someText2.length);

 let text1Length = someText1.length;
 let text2Length = someText2.length;

if (text1Length > text2Length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (text1Length < text2Length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}


if (text1Length === text2Length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}


if (text1Length !== text2Length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}


if (text1Length >= text2Length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (text1Length <= text2Length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

const hardFeelings = ['guilty', 'anxious', 'confused', 'sad', 'disappointed' ];

const feeling1 = hardFeelings[0].length;
const feeling2 = hardFeelings[1].length;
const feeling3 = hardFeelings[2].length;
const feeling4 = hardFeelings[3].length;
const feeling5 = hardFeelings[4].length;

console.log(feeling1, feeling2, feeling3, feeling4, feeling5);

