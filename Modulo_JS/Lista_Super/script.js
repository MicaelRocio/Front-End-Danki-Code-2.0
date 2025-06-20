var itens = [];

document.querySelector('input[type=submit]').addEventListener('click', ()=>{
    var nomeProduto = document.querySelector('input[name=item-input]').value;
    var precoProduto = document.querySelector('input[name=valor-input]').value;

    itens.push({
        nome: nomeProduto,
        preco: precoProduto
    });

    alert(`Produto ${nomeProduto}, no valor de R$${precoProduto} adicionado com sucesso!`);
});