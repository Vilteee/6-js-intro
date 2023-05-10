
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
const positiveFeelings = ['joy', 'love', 'satisfaction', 'interest'];

const feelingsHard = hardFeelings.length;
const feelingsPositive = positiveFeelings.length;

console.log(feelingsHard, feelingsPositive);

const feeling1 = hardFeelings[0].length;
const feeling2 = hardFeelings[1].length;
const feeling3 = hardFeelings[2].length;
const feeling4 = hardFeelings[3].length;
const feeling5 = hardFeelings[4].length;

console.log(feeling1, feeling2, feeling3, feeling4, feeling5);

if (feelingsHard > feelingsPositive) {
    console.log("pomidoras");
} else {
    console.log('Bandykite dar kartą');
}


//IR T.T..........

// Funkcijos

// Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus

// Funkcija pavadinimu “tusciaFunkcija”:
// nepriima jokių kintamųjų
// neatlieka jokios vidinės logikos
// gražina boolean tipo reikšmę “false”
// TESTAS:
// console.log( tusciaFunkcija() );
// rezultatas: false


function tusciaFunkcija () {

    return false;
}

console.log(tusciaFunkcija());
console.log(tusciaFunkcija(1));
console.log(tusciaFunkcija('asdas'));
console.log(tusciaFunkcija(true));


// Funkcija pavadinimu “daugyba”:
// priima du skaičiaus tipo kintamuosius
// atskirame kintamajame įsimena sandaugos reikšmę
// gražina saudaugos rezultatą
// TESTAI:
// console.log( daugyba( skaicius1, skaicius2 ) );
// console.log( daugyba( skaicius3, skaicius2 ) );
// console.log( daugyba( skaicius1, skaicius3 ) );
// rezultatas: teisingos reikšmės;


function multiplication (skaicius1, skaicius2) {

     let result1 = skaicius1 * skaicius2;
     return result1;

}

console.log(multiplication(3,7,5));


console.clear();

function multiply(a, b) {
    if (typeof a !== 'number') {
        return 'ERROR: pirmas parametras ne skaicius';
    }
    if (!isFinite(a)) {
        return 'ERROR: pirmas parametras turi buti tikras skaicius';
    }

    if (typeof b !== 'number') {
        return 'ERROR: antras parametras ne skaicius';
    }
    if (Math.abs(b) === Infinity) {
        return 'ERROR: antras parametras negali buti Infinity';
    }
    if ('' + b === 'NaN') {
        return 'ERROR: antras parametras negali buti NaN';
    }

    const result = a * b;
    return result;
}

// tipai
console.log(multiply('labas', 5));
console.log(multiply(5, 'labas'));
console.log(multiply('labas', 'rytas'));
console.log(multiply(7, false));
console.log(multiply(true, 5));

// ne skaicius
console.log(multiply(Infinity, 5));
console.log(multiply(5, Infinity));
console.log(multiply(Infinity, Infinity));
console.log(multiply(-Infinity, 5));
console.log(multiply(5, -Infinity));
console.log(multiply(-Infinity, -Infinity));

console.log(multiply(NaN, 5));
console.log(multiply(5, NaN));
console.log(multiply(NaN, NaN));

// ne tipai
console.log(multiply([], 1));
console.log(multiply([], []));
console.log(multiply(2, []));

console.log(multiply({}, 1));
console.log(multiply({}, {}));
console.log(multiply(2, {}));

console.log(multiply(multiply, 1));
console.log(multiply(multiply, multiply));
console.log(multiply(2, multiply));

// ok
console.log(multiply(7, 5));
console.log(multiply(-7, 5));
console.log(multiply(-7, -5));
console.log(multiply(7, -5));


// Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
// priima vieną kintamąjį
// jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// priešingu atveju, funkcija tęsia darbą
// į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
// gražina skaitmenų kiekį
// TESTAI:
// console.log( skaitmenuKiekisSkaiciuje( 5 ) );
// rezultatas: 1
// console.log( skaitmenuKiekisSkaiciuje( 781 ) );
// rezultatas: 3
// console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
// rezultatas: 11
// console.log( skaitmenuKiekisSkaiciuje( true ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( skaitmenuKiekisSkaiciuje( NaN ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”

//mano bandymas, nepilnas
function skaitmenuKiekisSkaiciuje(number) {
    let typeOfNumber = typeof number;
    // console.log(typeOfNumber);
    
    if (typeOfNumber !== 'number' ) {
        return "Pateikta netinkamo tipo reikšmė";
    } else {
        let skaitmenuKiekisSkaiciuje = String(number).length;
        return skaitmenuKiekisSkaiciuje;
        
    }
    
    
}
console.log("hfkwjs-----------");

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje(NaN));


console.log("asdknsk-----------------");
console.clear();

function numberLength(number) {
    if (typeof number !== 'number' || !isFinite(number)) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }

    const numberAsString = '' + number;
    let count = numberAsString.length;

    if (number % 1 !== 0) {
        count--;
    }

    if (number < 0) {
        count--;
    }

    return count;
}

console.log(numberLength(true));
console.log(numberLength('asd'));
console.log(numberLength(NaN));
console.log(numberLength([]));
console.log(numberLength({}));
console.log(numberLength(undefined));
console.log(numberLength(null));
console.log(numberLength(numberLength));
console.log(numberLength(Infinity));
console.log(numberLength(-Infinity));

console.log(numberLength(5), '->', 1);
console.log(numberLength(781), '->', 3);
console.log(numberLength(37060123456), '->', 11);
console.log(numberLength(3.14), '->', 3);

console.log(numberLength(-5), '->', 1);
console.log(numberLength(-781), '->', 3);
console.log(numberLength(-37060123456), '->', 11);
console.log(numberLength(-3.14), '->', 3);


// Funkcija pavadinimu “didziausiasSkaiciusSarase”:
// priima vieną kintamąjį
// jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
// priešingu atveju, funkcija tęsia darbą
// pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
// gražina didžiausią surastą skaičių
// TESTAI:
// console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
// rezultatas: 1
// console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
// rezultatas: 3
// console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
// rezultatas: 78
// console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
// rezultatas: 69
// console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
// rezultatas: -1
// console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( didziausiasSkaiciusSarase( [] ) );
// rezultatas: “Pateiktas sąrašas negali būti tuščias.”

console.clear();


function didziausiasSkaiciusSarase (number) {

let typeOfVariable = typeof number;
console.log(typeOfVariable);


if (typeOfVariable !== 'object') {
    return 'Pateikta netinkamo tipo reikšmė.';

}  else if (number.length === 0) {
    return "Pateiktas sąrašas negali būti tuščias.";

} else {
    console.clear();
    // let objectLength = number.length;
    // for (let i = 0; i < objectLength; i++) {
        let max = Math.max(...number);
        return max;
        }

    }


console.log(didziausiasSkaiciusSarase([1]));
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
console.log( didziausiasSkaiciusSarase( `pomidoras` ) );
console.log( didziausiasSkaiciusSarase( [] ) );


console.clear();

// function biggest(list) {
//     if (list nera array) {
//         return 'ERROR';
//     }

//     let result = list[0];

//     for (let i = 1; i < list.length; i++) {
//         if (list[i] > result) {
//             result = list[i];
//         }
//     }

//     return result;
// }

// function biggest(list) {
//     // tikriname tipa - turi buti array
//     if (!Array.isArray(list)) {
//         // jeigu ne array - return error
//         return 'ERROR: duok array';
//     }

//     // turiu array
//     // jeigu tuscias - return error
//     if (!list.length) {
//         return 'ERROR: duok ne tuscia array';
//     }

//     // turiu ne tuscia array
//     // sakom, jog didziausias skaicius yra -Infinity
//     let biggest = -Infinity;

//     // su ciklu einame per array:
//     for (let i = 0; i < list.length; i++) {
//         // - tikriname ar array narys yra realus skaicius
//         if (typeof list[i] !== 'number' || !isFinite(list[i])) {
//             // - jei ne:
//             //      - tesiam, einam prie sekancio
//             continue;
//         }

//         // - jei taip (yra skaiciaus tipas):
//         //      - lyginame su pries zinoma didziausia reiksme
//         //      - jeigu nauja reiksme didesne - overwrite
//         if (list[i] > biggest) {
//             biggest = list[i];
//         }
//     }

//     // jeigu didziausias skaicius vis dar liko -Infinity:
//     if (biggest === -Infinity) {
//         // - return error - sarase nera nei vieno normalaus skaiciaus
//         return 'ERROR: sarase nera nei vieno normalaus skaiciaus';
//     }

//     // graziname didziausia skaiciu
//     return biggest;
// }

function biggest(list) {
    if (!Array.isArray(list)) {
        return 'ERROR: duok array';
    }

    if (!list.length) {
        return 'ERROR: duok ne tuscia array';
    }

    let biggest = -Infinity;

    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] !== 'number' || !isFinite(list[i])) {
            continue;
        }

        if (list[i] > biggest) {
            biggest = list[i];
        }
    }

    if (biggest === -Infinity) {
        return 'ERROR: sarase nera nei vieno normalaus skaiciaus';
    }

    return biggest;
}

console.log(biggest(true));
console.log(biggest('labas'));
console.log(biggest(['labas']));
console.log(biggest(['labas', true, [], NaN, -Infinity]));
console.log(biggest([]));

console.log(biggest([1]), '->', 1);
console.log(biggest([1, 2, 3]), '->', 3);
console.log(biggest([-5, 78, 14, 0, 18]), '->', 78);
console.log(biggest([69, 69, 69, 69, 66]), '->', 69);
console.log(biggest([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(biggest(['labas', 5, '7']), '->', 5);