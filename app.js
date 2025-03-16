// Array para receber os nomes adicionados
let amigos = [];

// Adiciona o valor do input ao array caso não seja um valor "vazio"
function adicionarAmigo(){
    let nomeDoAmigoInserido = document.getElementById('amigo').value;
    
    if (nomeDoAmigoInserido.trim() == ""){
        alert('Por favor, insira um nome.')
    }
    else{
        amigos.push(nomeDoAmigoInserido);        
    }

    limparNomeDoAmigoInserido();
    
    mostrarNomesDosAmigos();
}

// Limpa o campo de input
function limparNomeDoAmigoInserido(){
    let nomeInserido = document.querySelector('input');
    nomeInserido.value = '';
}

// Adiciona os nomes do array na lista de nomes
function mostrarNomesDosAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = "";

    let conteudo = '';

    for (let i = 0; i < amigos.length; i++){
        conteudo += "<li><strong>" + amigos[i] + "</strong></li>";
    }

    listaAmigos.innerHTML = conteudo;
}

// Sorteia aleatóriamente um nome no array de nomes
function sortearAmigo(){

    let indiceAleatorio;    
    
    amigos.length == 0 ? alert('A lista de amigos está vazia') : indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    let amigoSorteado = amigos[indiceAleatorio];

    if (!amigoSorteado){
        return;
    }

    limparListaDeAmigos();

    mostrarAmigoSorteado(amigoSorteado);
}

// Limpa a lista de amigos
function limparListaDeAmigos(){
    let listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = "";
}

// Mostra o nome sorteado
function mostrarAmigoSorteado(nome){
    let nomeSorteado = document.getElementById('resultado');
    nomeSorteado.innerHTML = `<li>O amigo secreto sorteado é: ${nome}</li>`;
}
