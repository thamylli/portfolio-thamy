document.getElementById('lista-produtos').innerHTML='';
document.getElementById('valor-total').innerHTML='';
let totalGeral = 0;


function adicionar(){
    let produto = document.getElementById('produto').value;
    let carrinho =  document.getElementById('lista-produtos');
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let preco= quantidade*valorUnitario;


    carrinho.innerHTML =  carrinho.innerHTML+ `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco},00</span>
        </section>`
    let campoValorTotal =  document.getElementById('valor-total');
    totalGeral=totalGeral+preco;
    campoValorTotal.innerHTML= `R$${totalGeral},00`;
     
    
if (quantidade==''){
    limpar();
    carrinho.innerHTML='Selecione a quantidade requerida.';
    return;
}    
}

function limpar(){
    document.getElementById('lista-produtos').innerHTML='';
    document.getElementById('quantidade').value='';
    document.getElementById('valor-total').innerHTML='';

}