function sum(a, b) {
    let n1 = a;
    let n2 = b;
    return n1 + n2;
}

console.log(sum(11, 22));

function createObject(name, age, score) {
    let obj = {
        name: name,
        age: age,
    }; // new Object();
    obj.score = score;
    obj.pass = (score >= 60) ? 'pass' : 'fail';

    return obj;
}

let newObj = createObject("김길동", 23, 85);

console.log('이름: ' + newObj.name + ' 나이: ' + newObj.age + ' 점수: ' + newObj.score +
    ' 합격여부: ' + newObj.pass);

    

createTable(); 

// TR 태그 생성 연습.
function createTr(person){
    let tag = '<tr>';
    for(let field in person){
        tag += '<td>' + person[field] + '</td>';
    }
    if(person.score >= 60){
        tag += '<td class="pass">pass</td>';   
    }
    else{
        tag += '<td class="fail">fail</td>';
    }

    tag += '</tr>'
    return tag;
}


