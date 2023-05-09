

// const marks = [ 10, 2, 8, 4, 6];

// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks[3]);
// console.log(marks[4]);

// let sum  = 0;
// let i  = 0;

// //kodas identiskas gaunasi:

// sum += marks[0];
// i += 1
// sum += marks[1];
// i += 1
// sum += marks[2];
// i += 1
// sum += marks[3];
// i += 1
// sum += marks[4];
// i += 1

// console.log(sum);

// const pazymiai = [ 10, 2, 8, 4, 6];
// const kasKelintas = 2;

// for (let i= 0; i< pazymiai.length;i++) {

//     if(i % kasKelintas === 2) {
        
//     console.log(i, '-', pazymiai[i]);
//     }

// }


// for (let i= kasKelintas -1 ; i< pazymiai.length;i+= kasKelintas) {

//     console.log(i, '-', pazymiai[i]);
// }

for ( let i = 0; i < 2; i += 0.1) {
const suapvalintas = +i.toFixed(3); //constanta galioja tik viena iteracija
console.log(suapvalintas, i);
console.log(suapvalintas , parseInt(suapvalintas))
console.log(suapvalintas, i);
}

console.log('Infinity', parseFloat('Infinity'));
console.log('NaN', parseFloat('NaN'));
console.log("5", + "5");


console.clear();

const text = "labas!";

for( let i =0; i<text.length; i+=2){
console.log(i, '-', text[i]);
}

for (let i = text.length -1; i +1 >0; --i) {

    console.log(i, '-', text[i]);
}

for (let i = text.length -1; i >=0; --i) {

    console.log(i, '-', text[i]);
}

let atbulas = '';
for (let i=0; i< text.length; i++) {
const index = text.length - i- 1;
const symbol = text[index];
atbulas += symbol;
    
    console.log(i, '-', text[index]);
}

