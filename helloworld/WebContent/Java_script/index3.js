// index3.js

let messages = ['Good Morning', 'Good Afternoon', 'Good Evening'];

let ulTag = document.createElement('ul');
// ulTag.innerHTML = '<li>Hello</li>';

for (let i = 0; i < messages.length; i++) {
    let liTag = document.createElement('li');
    liTag.innerHTML = messages[i];
    ulTag.appendChild(liTag);
}

// div 에 자손으로 ulTag를 넣어줌
let divShow = document.getElementById('show');
divShow.appendChild(ulTag);

let fruits = [{
    name: '체리',
    price: 1000
}, {
    name: '바나나특가',
    price: 2000
}, {
    name: '망고스틴',
    price: 3000
}];


// div 찾기

let fulTag = document.createElement('ul');

for (let i = 0; i < fruits.length; i++) {
    let fliTag = document.createElement('li');
    fliTag.innerHTML = fruits[i].name + ', ' + fruits[i].price;
    ulTag.appendChild(fliTag);
}

let fruitsShow = document.getElementById('fruits');
fruitsShow.appendChild(fulTag);


// div찾기.
let num = 2;

let multi = document.getElementById('multi');
let t = document.createElement('table');
t.setAttribute('border', '1');
//tr.innerHTML = num + ' 단'

for (let i = 1; i <= 9; i++) {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerHTML = num + '*' + i + '=' + (num * i);
    t.appendChild(tr);
    tr.appendChild(td);
}


// for (let j = 1; j <= 8; j++) {
//     let tr = document.createElement('tr');
//     tr.innerHTML = num +' 단'
//     t.appendChild(tr);
//     for (let i = 1; i <= 9; i++) {
//         let td = document.createElement('td');
//         td.innerHTML = num + '*' + i + '=' + (num * i);
//         tr.appendChild(td);
//     }
//     num++;
// }
multi.appendChild(t);