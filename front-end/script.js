function testeConsole() {
    console.log('TESTE ')
}

function makeRequisition() {
    console.log('CHAMOU A FUNÇÃO');
    let budget = document.getElementById('budgetInput').value;
    axios.get('http://localhost:8080/api/default', JSON.stringify({budget}))
    .then(response => {
        console.log(response.data);
        let itensListUL = document.getElementById('ul-items');
        
        response.data.forEach(prod => {
            
            let li = createLi(prod.get('name'));

            itensListUL.appendChild(li);
            
            
        });
    })
    .catch(error => {
        console.error(error);
    })
}

function createLi(name) {
    let li = document.createElement('li');

    let principalDiv = createPrincipalDiv(name);

    let secundaryDiv = createSecondaryDiv();

    li.appendChild(principalDiv);
    li.appendChild(secundaryDiv);
}


function createPrincipalDiv(name) {
    let div = document.createElement('div');
    div.setAttribute('class','collapsible-header');
    
    let tagI =  document.createElement('i');
    tagI.setAttribute('class','material-icons');
    //tagI.innerHTML = 'keyboard_arrow_right '
    tagI.insertAdjacentHTML('afterbegin', 'keyboard_arrow_right');

    div.insertAdjacentHTML('afterbegin', tagI);
    div.insertAdjacentHTML('beforeend', name);
}

function createSecondaryDiv() {
    let div = document.createElement('div');
    div.setAttribute('class','collapsible-body');

    let span = document.createElement('span');
    span.insertAdjacentHTML('afterbegin', 'Lorem ipsum dolor sit amet.');
}