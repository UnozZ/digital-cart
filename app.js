let numRighe = 0;
let j = 0;

function aggiungi() {
    if (numRighe != 6) {
        numRighe++; 

        var table = document.getElementById('tabella');
        var tr = document.getElementById('tr'); 
        let modoDiPagamento = document.getElementById('pagamenti');
        let nomeProdotto = document.getElementById('prodotto');
        let data = document.getElementById('data');
        let prezzo = document.getElementById('prezzo');

        var row = table.insertRow(-1);
        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(-1);
        var cell3 = row.insertCell(-1);
        var cell4 = row.insertCell(-1);
        cell1.innerHTML = modoDiPagamento.options[modoDiPagamento.selectedIndex].value;
        cell2.innerHTML = nomeProdotto.value;
        cell3.innerHTML = data.value;
        cell4.innerHTML = prezzo.value + '€';
    } else {
        alert('Numero massimo di prodotti raggiunto. Libera il carrello per aggiungere altri prodotti.')
    }    
}

function elimina() {
    if (numRighe == 0) {
        alert("Il carrello e' vuoto");
    } else {
        document.getElementById('tabella').deleteRow(numRighe);   
        numRighe--;    
    }
}

function acquista() {
    if (numRighe == 0) {
        alert("Il carrello e' vuoto");
    } else {
        for (let i = 6; i=1; i--) {
            document.getElementById('tabella').deleteRow(i);   
            numRighe--;
        }
    }
}