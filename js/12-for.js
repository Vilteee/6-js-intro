

const marks = [ 10, 2, 8, 4, 6];

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);

let sum  = 0;
let i  = 0;

//kodas identiskas gaunasi:

sum += marks[0];
i += 1
sum += marks[1];
i += 1
sum += marks[2];
i += 1
sum += marks[3];
i += 1
sum += marks[4];
i += 1

console.log(sum);

const pazymiai = [ 10, 2, 8, 4, 6];
const kasKelintas = 2;

for (let i= 0; i< pazymiai.length;i++) {

    if(i % kasKelintas === 2) {
        
    console.log(i, '-', pazymiai[i]);
    }

}


for (let i= kasKelintas -1 ; i< pazymiai.length;i+= kasKelintas) {

    console.log(i, '-', pazymiai[i]);
}
