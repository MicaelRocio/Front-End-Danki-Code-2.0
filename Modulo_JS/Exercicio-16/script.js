document.getElementById('carregar').addEventListener('click', () => {
  // Fazendo uma requisição GET para uma API falsa
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=5') // pega só 5 posts
    .then(resposta => resposta.json())
    .then(posts => {
      const lista = document.getElementById('lista-posts');
      lista.innerHTML = ''; // limpa a lista antes de mostrar os novos

      posts.forEach(post => {
        const item = document.createElement('li');
        item.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
        lista.appendChild(item);
      });
    })
    .catch(erro => {
      console.error('Erro ao buscar os posts:', erro);
    });
});
