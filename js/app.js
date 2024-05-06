let amigos = [];

function adicionar(){

    let nomeAmigo = document.getElementById("nome-amigo");
    let listaAmigos = document.getElementById("lista-amigos");

    let nomeLimpo = nomeAmigo.value.trim();

    if(nomeLimpo === ""){

        alert("O campo de nomes está vazio ou contém apenas espaços em branco!");
        return;

    }

    let nomeUpperCase = nomeLimpo.toUpperCase();

    if(amigos.includes(nomeUpperCase)){

        alert("Nome já adicionado!!");
        return;

    }

    amigos.push(nomeUpperCase);

    if(listaAmigos.textContent == ""){

        listaAmigos.textContent = nomeUpperCase;

    } else {

        listaAmigos.textContent = listaAmigos.textContent + ", " + nomeUpperCase;

    }

    nomeAmigo.value = "";

    atualizarLista();
    atualizarSorteio();

}

function sortear(){

    if(amigos.length < 4){

        alert("Insira no mínimo 4 nomes!!");
        return;

    }
    
    let sorteio = document.getElementById("lista-sorteio");

    embaralharNomes(amigos);

    for(let i = 0; i < amigos.length; i++){

        if(i == amigos.length - 1){

            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + " ---> " + amigos[0] + "<br>";

        } else {

             sorteio.innerHTML = sorteio.innerHTML + amigos[i] + " ---> " + amigos[i + 1] + "<br>";

        }
        
    }

}

function excluirAmigo(index) {

    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();

}

function embaralharNomes(lista){

    for(let indice = lista.length; indice; indice--){

        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];

    }
}

function atualizarSorteio() {

    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

}

function atualizarLista() {

    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
        
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
       
        paragrafo.addEventListener('click', function() {

            excluirAmigo(i);

        });

        lista.appendChild(paragrafo);
    }
}

function reiniciar(){

    amigos = [];
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    document.getElementById("nome-amigo").value = "";

}