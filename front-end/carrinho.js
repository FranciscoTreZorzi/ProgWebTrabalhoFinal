document.addEventListener('DOMContentLoaded', function() {
  var cepInput = document.getElementById('cep');
  cepInput.addEventListener('blur', function() {
    var cep = cepInput.value.replace(/\D/g, '');

    if (cep !== '') {
      var url = 'https://viacep.com.br/ws/' + cep + '/json/';

      var request = new XMLHttpRequest();
      request.open('GET', url, true);

      request.onload = function() {
        if (request.status === 200) {
          var data = JSON.parse(request.responseText);
          if (!data.hasOwnProperty('erro')) {
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('estado').value = data.uf;
            document.getElementById('rua').value = data.logradouro;
            cepInput.classList.remove('invalid');
          } else {
            resetFields();
            cepInput.classList.add('invalid');
            alert('CEP não encontrado.');
          }
        } else {
          resetFields();
          cepInput.classList.add('invalid');
          alert('Erro ao buscar CEP. Por favor, tente novamente mais tarde.');
        }
      };

      request.onerror = function() {
        resetFields();
        cepInput.classList.add('invalid');
        alert('Erro ao buscar CEP. Por favor, tente novamente mais tarde.');
      };

      request.send();
    } else {
      resetFields();
    }
  });

  function resetFields() {
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('rua').value = '';
    cepInput.classList.remove('invalid');
  }
});

function abrirProximaAba(index) {
  var collapsibles = document.querySelectorAll('.collapsible');
  var headers = collapsibles[0].querySelectorAll('.collapsible-header');
  var bodies = collapsibles[0].querySelectorAll('.collapsible-body');

  if (index < headers.length - 1) {
    headers[index].classList.remove('active');
    bodies[index].style.display = 'none';

    headers[index + 1].classList.add('active');
    bodies[index + 1].style.display = 'block';
  }
}

function validarCartao() {
  var cardNumberInput = document.getElementById('cardNumber');
  var cvvInput = document.getElementById('cvv');
  var expirationInput = document.getElementById('expiration');
  var cardHolderInput = document.getElementById('cardHolder');
  var cpfInput = document.getElementById('cpf');

  var cardNumber = cardNumberInput.value;
  var cvv = cvvInput.value;
  var expiration = expirationInput.value;
  var cardHolder = cardHolderInput.value;
  var cpf = cpfInput.value;

  // Expressões regulares para validar os campos
  var cardNumberPattern = /^[0-9]{16}$/;
  var cvvPattern = /^[0-9]{3}$/;
  var expirationPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
  var cardHolderPattern = /^[a-zA-Z\s]+$/;
  var cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

  var isValid = true;
  var validationMessage = '';

  if (!cardNumberPattern.test(cardNumber)) {
    isValid = false;
    validationMessage += 'Número do cartão inválido.\n';
  }

  if (!cvvPattern.test(cvv)) {
    isValid = false;
    validationMessage += 'CVV inválido.\n';
  }

  if (!expirationPattern.test(expiration)) {
    isValid = false;
    validationMessage += 'Validade inválida.\n';
  }

  if (!cardHolderPattern.test(cardHolder)) {
    isValid = false;
    validationMessage += 'Nome do titular inválido.\n';
  }

  if (!cpfPattern.test(cpf)) {
    isValid = false;
    validationMessage += 'CPF inválido.\n';
  }

  if (isValid) {
    validationMessage = 'Cartão de crédito válido.';
    M.toast({html: validationMessage, classes: 'green'});
  } else {
    M.toast({html: validationMessage, classes: 'red'});
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var collapsibleElems = document.querySelectorAll('.collapsible');
  var collapsibleInstances = M.Collapsible.init(collapsibleElems);
});;