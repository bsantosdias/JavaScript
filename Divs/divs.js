function paragrafo() {
    var texto = document.getElementById('texto').value;

    if (texto == "") {
        alert('Não é possível adicionar conteúdo vazio.')
    }
    else {
        var div = document.getElementById('segunda');
        var elemento = document.createElement("P");
        var conteudo = document.createTextNode(texto);
        elemento.appendChild(conteudo);
        div.appendChild(elemento);
        
    }
}

function cabecalho() {
    var texto = document.getElementById('texto').value;

    if (texto == "") {
        alert('Não é possível adicionar conteúdo vazio.')
    }
    else {
        var div = document.getElementById('segunda');
        var elemento = document.createElement("h1");
        var conteudo = document.createTextNode(texto);
        elemento.appendChild(conteudo);
        div.appendChild(elemento);
        
    }
}