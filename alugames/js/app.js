function alterarStatus(id){
    let jogoSelecionado=document.getElementById(`game-${id}`);
    let botao= jogoSelecionado.querySelector('.dashboard__item__button');
    let imagem=jogoSelecionado.querySelector('.dashboard__item__img');

    if (botao.classList.contains('dashboard__item__button--return')){
        botao.classList.remove('dashboard__item__button--return');
        imagem.classList.remove('dashboard__item__img--rented');
        botao.innerHTML='Alugar';
    }else{
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
        botao.innerHTML='Devolver';
    }
}