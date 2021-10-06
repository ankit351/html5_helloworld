let xhtp = new XMLHttpRequest();
xhtp.onload = function () {
    let data = JSON.parse(xhtp.responseText);
    console.log(data);
    showEmpList(data);
}
xhtp.open("get", "../empjsonServlet.json");
xhtp.send();

function showEmpList(data) {


    let table, tr, td, th, text, dtr, dth;
	delbtn = document.createElement('button');
	delbtn.createTextNode('삭제');


    table = document.createElement('table');
    table.setAttribute('border', '1');

    tr = document.createElement('tr');
    table.appendChild(tr);
    
    dBtn = document.getElementById('delBtn');
    
    for (let field in data[0]) {
        th = document.createElement('th');
        text = document.createTextNode(field)
        th.appendChild(text);
        tr.appendChild(th);

    }
	
	dth=document.createElement('th');
    console.log(dth);





	// dth.appendChild(delbtn);
	// dtr.appendChild(dth);
	// document.querySelector("table").appendChild('dtr');

     
    for (let obj of data) { // 배열순환 . 찍어보면 ( obj = id : 1 , first_name : Sanderson ... ) 이렇게 나옴
        tr = document.createElement("tr") ;
        table.appendChild(tr) ;
        
        for (let field in data[0]) { 
            td = document.createElement("td") ;
            txt = document.createTextNode(obj[field]) ; // ( obj = id : 1 , first_name : Sanderson ... )에서 필드명에 해당하는 obj의 필드값을 불러서 txt에 저장
            td.appendChild(txt) ; 
            tr.appendChild(td) ;
        }
    }   



    document.getElementById("show").appendChild(table);
}