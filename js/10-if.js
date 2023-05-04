
console.clear();

if ( 7 < 10 ) {
    console.log('7 < 10');
} else {
    console.log('7 ne < 10');
}

const userAge = 10;
const agelimit = 18;

if (userAge >= agelimit) {
    console.log('uzeik...');
} else {

    console.log(`dar palauk ${agelimit - userAge} metų...`);
}

const diena = 1;

if (diena === 10) {
    console.log('pirmadienis');

} else if ( diena === 2){
    console.log('antradienis');
} else if ( diena === 3){
    console.log('treciadienis');
} else if ( diena === 4){
    console.log('ketvirtadienis');
} else if ( diena === 5){
    console.log('penktadienis');
} else if ( diena === 6){
    console.log('sestadienis');
} else if ( diena === 7){
    console.log('sekmadienis');
} else {
    console.log('tokios dienos nera');
}

const arSvieciaSaule = false;
const arLyja = false;

let kaDaryti = 'nezinau';

if (arSvieciaSaule) {
kaDaryti = 'eisim i kiema';
if (arLyja) {
    kaDaryti = 'ziurim i vaivorykste ;o';
} else {
    kaDaryti = 'deginames pleziuke B-)'
}
} else {
    kaDaryti = 'kodinsim...;-(';
    if(arLyja) {
        kaDaryti = 'koks skirtumas... vis vien busiu namie';
    } else {
        kaDaryti = 'stebim zvaigzdes';
    }
}

console.log(kaDaryti);


const day = 2;

if(day === 1) {
    console.log('pirm');
} else {
    if( day === 2) {
        console.log('ant');
    } else {
        console.log('nieko nesakau');
    }
}

const dd = 1;
let kokiaDiena = 'nezinau';

if (dd === 1) {
kokiaDiena = 'pirmadienis';
}
if (dd === 2) {
    kokiaDiena = 'antradienis';
}
if (dd === 3) {
    kokiaDiena = 'treciadienis';
} 

const siandien = 1;


const dienuPavadinimai = [
    'pirmad', 
    'antrad', 
    'treciad',
    'ketvirtad'
]

const savaitesDiena = dienuPavadinimai[siandien - 1];

if(savaitesDiena === undefined) {
    console.log('tokiod dienos nera');
} else {
    console.log(savaitesDiena);
}

if (777 === 777) {
    console.log('nelygu');
} else {
    console.log('lygu');
}

if (777 !== 777) {
    console.log('nelygu');
} else {
    console.log('lygu');
}


if ('labas' == 888) {
    console.log('nelygu');
} else {
    console.log('lygu');
}


if ( 4 > 2 && 8 < 20) {
    console.log('>>> and');
};


if ( 1 === 1 && 2 === 3 || 4 === 4) {
    console.log('mix');
}


const a = true; 

if ( !a) {
    console.log('taip')
} else {
    console.log('ir ne');
}

if (2) {
    console.log('kazkas...');
} else {
    console.log('ne kazka...');
}


