let v1 = 10;
console.log(v1);

let v2 = 20;
console.log(v2);

const choi = {
    name: '최선영',
    age: 20,
    score: 90   
}

const han = {
    name: '한동일',
    age: 21,
    score: 89
}

// for(let field in han){
//     console.log(field + '-'+han[field])
// }

const yun = {
    name: '윤희성',
    age: 22,
    score: 88
}

console.log(choi.name);
console.log(choi['age']);
console.log(choi.score);
let field = 'score';
console.log(choi[field]);

const persons = [choi, han, yun];
console.log(persons[0].name);
console.log(persons[0]['age']);
field = 'score';
console.log(persons[0][field]);

// for(let i=0; i<persons.length; i++){
//     console.log(persons[i].name);
//     console.log(persons[i]['age']);
//     field = 'score';
//     console.log(persons[i][field]);     
//     console.log('=========');
// }

for( let person of persons ){ 
    document.write('<ul>');
    for ( let field in person ) {
          console.log(person[field]);
          document.write('<li class="'+field+'">'+person+'</li>');
    }
    document.write('</ul>') 
}

