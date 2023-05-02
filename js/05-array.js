
console.clear();

const empty = [];
console.log(empty);
const marks = [10, 2, 8, 4, 6];

console.log(marks);

const random = [1, 'antras', 3, '4', 3.14, 'afwfefger' ];

console.log(random);

const names = ['maryte', 'jonas', 'jonas', 'monika'];

console.log(names);


const name1 = names[0];
console.log(name1);

console.log(names[2]);


console.log('----------------------');

const marks10 = [10, 5, 3, 8, 5];

console.log(marks);

console.log(marks[2]);

console.clear();

const marks1 = [10, 9, 8];
const marks2 = [6, 7, 8];
const marks3 = [5,5,5];

function average (marks) {

    console.log(marks);

   let sum = 0;
    sum += marks[0];
    sum += marks[1];
    sum += marks[2];

    return sum /3;
  
}
console.log('Vidurkis 1:', marks1, '=',  average(marks1));


const dict1 = ['pirmas', 'zodis', 'labas'];
const dict2 = ['Labas', 'rytas', 'Lietuva'];


function dictionary (wordList) {
    console.log(wordList);
    // let result = 'Zodynas: ';

    // result+= wordList[0] + ', ';
    // result+= wordList[1] + ', ';
    // result+= wordList[2] + '. ';

    // return result;

    return ` Zodynas: ${wordList[0]}, ${wordList[1]}, ${wordList[2]}.   `
}

console.log(dictionary(dict1));
console.log(dictionary(dict2));


 console.log(dict1.length);

 


