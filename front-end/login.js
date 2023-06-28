const users = new Map();
users.set('Francisco', 'senha123');
users.set('usuario2', 'abc123');

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (users.has(username) && users.get(username) === password) {
    alert('Login bem-sucedido!');
  } else {
    alert('Usuário ou senha inválidos!');
  }
});