function comprar(){
    let tipo =  document.getElementById('tipo-ingresso');
    let qtd = document.getElementById('qtd').value;
    console.log(`${tipo},${qtd}`);

    if (tipo.value=='inferior'){
        qntInferior(qtd);
    }else if(tipo.value=='superior'){
        qntSuperior(qtd);
    }else{
        qntPista(qtd);
    }
    limparQtd();
}


function qntPista(qtd){
    let pista=parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd>pista){
        alert('Quantidade indisponível');
    }else {
        pista=pista-qtd;
        document.getElementById('qtd-pista').textContent=pista;
        alert('Compra realizada com sucesso!');
    }
}
function qntInferior(qtd){
    let inferior=parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd>inferior){
        alert('Quantidade indisponível');
    }else {
        inferior=inferior-qtd;
        document.getElementById('qtd-inferior').textContent=inferior;
        alert('Compra realizada com sucesso!');
    }
}
function qntSuperior(qtd){
    let superior=parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd>superior){
        alert('Quantidade indisponível');
    }else{
        superior=superior-qtd;
        document.getElementById('qtd-superior').textContent=superior;
        alert('Compra realizada com sucesso!');
    }
    
}
function limparQtd(){
    document.getElementById('qtd').value='';

}