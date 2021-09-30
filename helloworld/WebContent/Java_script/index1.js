const choi = {
    name: '최선영',
    age: 20,
    score: 90   
}

const han = {
    name: '한동일',
    age: 21,
    score: 55
}

const yun = {
    name: '윤희성',
    age: 22,
    score: 88
}

const persons = [choi, han, yun];

function createTable(){

let tag = '<table border="1"><thead><tr><th>이름</th><th>나이</th><th>점수</th><th>Pass</th></thead>';
tag += '<tbody>';
for(let person of persons){
    if(person.score>=60){
        tag += '<tr class="pass">';
    } 
    else{
        tag += '<tr class="fail">';
    }
    tag += '<tr>';
    for(let field in person){
        tag += '<td>'+person[field]+'</td>';
    }

    if(person.score>=60){
        tag += '<td>pass</td>'
    }
    else {
        tag += '<td>Fail</td>'
    }
    tag += '</tr>'
}

tag = tag + '</tbody></table>';

document.write(tag);
}

createTable();



document.write("<table border='1'>");
document.write('<thead><tr><td>이름</td><td>나이</td><td>점수</td></thead>');

for( let person of persons){
    document.write('<tr>');
    for( let field in person ){
        console.log(person[field]);
        document.write('<td>'+person[field]+'</td>');
    }
    document.write('</tr>');
}
document.write('</table>');



