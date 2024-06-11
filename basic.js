let button = document.getElementById('submit-data')
button.addEventListener('click', ()=>{
    let table = document.getElementById('table-data')
    let tr = document.createElement('tr')
    let td = document.createElement('td')
    td.innerText = document.getElementById('input-username').value
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerText = document.getElementById('input-email').value
    tr.appendChild(td)
    td = document.createElement('td')
    // if checked add X else add -
    td.innerText = document.getElementById('input-admin').checked ? 'X' : '-'
    tr.appendChild(td)

    table.appendChild(tr)
})
