// Adiciona interações básicas, como alerta ao clicar em um post

document.querySelectorAll('.fb-post').forEach(post => {
  post.addEventListener('click', () => {
    alert('Você clicou em um post!');
  });
});
