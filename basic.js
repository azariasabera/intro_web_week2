let submitButton = document.getElementById('submit-data')
let table = document.getElementById('table-data')
submitButton.addEventListener('click', ()=>{
    let tr = document.createElement('tr')
    let td = document.createElement('td')
    td.innerText = document.getElementById('input-username').value
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerText = document.getElementById('input-email').value
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerText = document.getElementById('input-admin').checked ? 'X' : '-'
 
    /* Alternative way to write the above line:
    if(document.getElementById('input-admin').checked){
        td.innerText = 'X'
    }
    else{
        td.innerText = '-'
    }
    */
    checkData();
    tr.appendChild(td)
    table.appendChild(tr)
})
let emptyButton = document.getElementById('empty-table')
emptyButton.addEventListener('click', function(event) {
    while(table.rows.length > 1){
        table.deleteRow(1)
    }
});

let tableList = [];

function tableData(table){
    let rows = table.rows;
    for(let i = 1; i < rows.length; i++){
        let cells = rows[i].cells;
        let username = cells[0].innerText;
        let email = cells[1].innerText;
        let admin = cells[2].innerText;
        tableList.push({username, email, admin});
    }
    return tableList;
}

function checkData(){
    let data = tableData(table);
    console.log(data);
}
