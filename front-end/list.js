let listaDeProdutos = [
    {id: 1, nome: 'Francisco', preco: 192.50},
    {id: 2, nome: 'Francisco', preco: 123456.50}
]

    function adicionarProdutoLista(produto) {
        listaDeProdutos.push(produto);
    }

    function removerProdutoLista(produto) {
        listaDeProdutos = listaDeProdutos.filter(prod => prod.id !== produto.id)
    }