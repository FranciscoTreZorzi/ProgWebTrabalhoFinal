document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instance = M.Collapsible.init(elems);
    console.log(instance);
  });
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
    console.log(instances)
  });

  function buscarItens() {

    var termoBusca = document.getElementById('nameInput').value.toLowerCase();
    var itens = document.getElementsByClassName('item');

 
    for (var i = 0; i < itens.length; i++) {
      var item = itens[i];
      var nomeItem = item.textContent.toLowerCase();

      if (nomeItem.includes(termoBusca)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    }
  }