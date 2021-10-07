let xhtp = new XMLHttpRequest();
xhtp.onload = function () {
    let data = JSON.parse(xhtp.responseText);
    showEmpList(data);
}
xhtp.open('get', '../empjsonServlet.json');
xhtp.send();

function showEmpList(data) {

    let table = document.createElement('table');
    table.setAttribute('border', '1');

    // 타이틀 생성.
    table.appendChild(getTitle());

    // 데이터 생성.
    for (let row of data) {
        table.appendChild(getRow(row));
    }

    // div 에 보여주기.
    document.getElementById('show').appendChild(table);
}

function getRow(row) { // 데이터 한건 처리.
    let tr, td;
    tr = document.createElement('tr');
    tr.onclick = function (e) {
        console.log(this, e);
        document.getElementById('empId').value = //
            this.childNodes[0].innerHTML; //id
        document.getElementById('name').value = //
            this.childNodes[1].innerHTML; //name
        document.getElementById('email').value = //
            this.childNodes[2].innerHTML; //email
        document.getElementById('hire').value = //
            this.childNodes[3].innerHTML; //hire
        document.getElementById('job').value = //
            this.childNodes[4].innerHTML; //job
    }
    for (let field in row) {
        td = document.createElement('td');
        td.appendChild(document.createTextNode(row[field]));
        tr.appendChild(td);
    }
    // 삭제버튼추가
    let btn = document.createElement('button');
    btn.onclick = function (e) {
        e.stopPropagation(); // button < td < tr < table < body
        let id = this.parentNode.parentNode.firstChild.innerHTML;
        let tr = this.parentNode.parentNode;
        // 삭제 서블릿. call
        let xhtp = new XMLHttpRequest();
        xhtp.onload = function () {
            console.log(xhtp.responseText);
            let result = JSON.parse(xhtp.responseText); // json -> obj
            if (result.retCode == 'success') {
                tr.remove();
            } else {
                window.alert('처리중 에러발생');
            }
        }
        xhtp.open('get', '../DelEmpServlet.json' + id);
        xhtp.send();
    }
    btn.innerHTML = '삭제';
    td = document.createElement('td');
    td.appendChild(btn);
    tr.appendChild(td);

    return tr;
}

function getTitle() { // 헤더의 타이틀 생성.
    let titles = ['사원번호', '이름', '이메일', '입사일자', '직무', '기능'];
    let tr, td;
    tr = document.createElement('tr');
    for (let i = 0; i < titles.length; i++) {
        td = document.createElement('th');
        td.appendChild(document.createTextNode(titles[i]));
        tr.appendChild(td);
    }
    return tr;
}









































/*let xhtp = new XMLHttpRequest();
xhtp.onload = function () {
    let data = JSON.parse(xhtp.responseText);
    console.log(data);
    showEmpList(data);
}
xhtp.open("get", "../empjsonServlet.json");
xhtp.send();

function showEmpList(data) {


    let table, tr, td, th, text, dtd, dtr, dth, textd;
    //delbtn = document.createElement('button');



    table = document.createElement('table');
    table.setAttribute('border', '1');

    tr = document.createElement('tr');
    table.appendChild(tr);

    //dBtn = document.getElementById('delBtn');
    //dBtn.createTextNode('삭제');

    for (let field in data[0]) {
        th = document.createElement('th');
        text = document.createTextNode(field);
        th.appendChild(text);
        tr.appendChild(th);

    }

    thd = document.createElement('th');
    textd = document.createTextNode('삭제');
    thd.appendChild(textd);
    tr.appendChild(thd);

    //dth=document.createElement('th');
    //console.log(dth);

    // dth.appendChild(delbtn);
    // dtr.appendChild(dth);
    // document.querySelector("table").appendChild('dtr');


    for (let obj of data) { // 배열순환 . 찍어보면 ( obj = id : 1 , first_name : Sanderson ... ) 이렇게 나옴
        tr = document.createElement("tr");
        table.appendChild(tr);

        for (let field in data[0]) {
            td = document.createElement("td");
            txt = document.createTextNode(obj[field]); // ( obj = id : 1 , first_name : Sanderson ... )에서 필드명에 해당하는 obj의 필드값을 불러서 txt에 저장
            td.appendChild(txt);
            tr.appendChild(td);


        }

        btnd = document.createElement('button');
        btnd.setAttribute("onclick", "delBtn(event)");

        //btnd.setAttribute("id", "delBtn");
        // btnd.id = 'delBtn';
        txt = document.createTextNode('삭제');
        btnd.appendChild(txt);
        tr.appendChild(btnd);

    }
    document.getElementById("show").appendChild(table);
}




function delBtn(e) {



    let id = e.target.parentNode.firstChild.innerHTML;
	let tr = e.target.parentNode;
	//tr = e.target.ParentNode;
    console.log(id);
    console.log(tr);
    let xthp = new XMLHttpRequest();
    xhtp.onload = function () {
        console.log(xhtp.responseText);
        let result = JSON.parse(xhtp.responseText);
        if (retult.retCode == 'success') {
            tr.remove();
        } else {
            window.alert('처리중 에러발생');
        }
    }
    xhtp.open('get', '../DelEmpServlet?delId=' + id);
    xhtp.send();
}*/