let amigos = []

function adicionar(){
    let nome = document.getElementById('nome-amigo').value;
    let amigosIncluidos = document.getElementById('lista-amigos');
    
    amigos.push(nome);
    amigosIncluidos.innerHTML=amigos;
    limpar();
}


function sortear(){
    //embaralhar
    embaralhar(amigos);
    let sorteio= document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}

function reiniciar (){
    document.getElementById('lista-sorteio').innerHTML=''
    limpar();
    document.getElementById('lista-amigos').textContent='';
    amigos=[];

}

function limpar(){
    document.getElementById('nome-amigo').value=''

}
function embaralhar(amigosIncluidos){
    for (let indice =amigosIncluidos.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [amigosIncluidos[indice - 1],amigosIncluidos[indiceAleatorio]] = [amigosIncluidos[indiceAleatorio],amigosIncluidos[indice - 1]];
    }

}