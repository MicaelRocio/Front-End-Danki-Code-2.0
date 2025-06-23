var itens = [];

document.querySelector('input[type=submit]').addEventListener('click', ()=>{
    var nomeProduto = document.querySelector('input[name=item-input]').value;
    var precoProduto = document.querySelector('input[name=valor-input]').value;

    itens.push({
        nome: nomeProduto,
        preco: precoProduto
    });

    /*
        <div class="lista-produtos-single">
            <h3>RedBull</h3>
            <h3 class="price-produto"><span>R$20,00</span></h3>
        </div>    
    */

    let listaProdutos = document.querySelector('.lista-itens');
    let soma = 0;  
    listaProdutos.innerHTML = '<h3>Lista de Itens</h3>'; // Limpa a lista antes de adicionar novos itens
    itens.map(function(val){
        soma+=parseFloat(val.preco.replace(',', '.'));

        listaProdutos.innerHTML+= `
            <div class="lista-produtos-single">
            <h3>${val.nome}</h3>
            <h3 class="price-produto"><span>R$${parseFloat(val.preco).toFixed(2)}</span></h3>
            </div>
        `;
    })
    soma = soma.toFixed(2);
    document.querySelector('input[name=item-input]').value = "";
    document.querySelector('input[name=valor-input]').value = "";

    let elementoSoma = document.querySelector('.soma-produto h1');
    elementoSoma.innerHTML = 'Total: R$' + soma;
});

document.querySelector('button[name=limpar]').addEventListener('click', ()=>{
    itens = [];
    document.querySelector('.lista-itens').innerHTML = '<h3>Lista de Itens</h3>';
    document.querySelector('.soma-produto h1').innerHTML = 'Total: R$0.00';
    document.querySelector('input[name=item-input]').value = "";
    document.querySelector('input[name=valor-input]').value = "";
});