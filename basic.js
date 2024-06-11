let tableList = [];
let table = document.getElementById('table-data')
function initializeTable(){
    let rows = table.rows;
    for(let i = 1; i < rows.length; i++){
        let cells = rows[i].cells;
        let username = cells[0].innerText;
        let email = cells[1].innerText;
        let admin = cells[2].innerText;
        tableList.push({username, email, admin});
    }
}
initializeTable();

let submitButton = document.getElementById('submit-data')
submitButton.addEventListener('click', ()=>{
    let tr = document.createElement('tr')
    let td = document.createElement('td')
    let username_ = document.getElementById('input-username').value
    td.innerText = username_
    tr.appendChild(td)
    td = document.createElement('td')
    let email_ = document.getElementById('input-email').value
    td.innerText = email_
    tr.appendChild(td)
    td = document.createElement('td')
    let admin_ = document.getElementById('input-admin').checked ? 'X' : '-'
    td.innerText = admin_
    tr.appendChild(td)
    /* Alternative way to write the above line:
    if(document.getElementById('input-admin').checked){
        td.innerText = 'X'
    }
    else{
        td.innerText = '-'
    }
    */

    if (!check_editTable(username_, email_, admin_)){    
    table.appendChild(tr)}
})

let emptyButton = document.getElementById('empty-table')
emptyButton.addEventListener('click', function(event) {
    table.innerHTML = '<tr><th>Username</th><th>Email</th><th>Admin</th></tr>';
    tableList = [];
});

function check_editTable(username_, email_, admin_){
    let rows = table.rows;
    for(let i = 1; i < rows.length; i++){
        let cells = rows[i].cells;
        let username = cells[0].innerText;
        if(username_ == username){
            cells[1].innerText = email_;
            cells[2].innerText = admin_;
            return true;
        }
    }
    return false;
}
let uploadButton = document.getElementById('input-image');
uploadButton.addEventListener('change', function(event) {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let img = document.createElement('img');
            img.src = e.target.result;
            img.width = 64;
            img.height = 64;
            
            let tr = document.createElement('tr');
            let td = document.createElement('td');
            td.innerText = document.getElementById('input-username').value;
            tr.appendChild(td);
            td = document.createElement('td');
            td.innerText = document.getElementById('input-email').value;
            tr.appendChild(td);
            td = document.createElement('td');
            td.innerText = document.getElementById('input-admin').checked ? 'X' : '-';
            tr.appendChild(td);
            td = document.createElement('td');
            td.appendChild(img);
            tr.appendChild(td);
            table.appendChild(tr);

        };
    reader.readAsDataURL(file); // Start reading the file
    }
});


