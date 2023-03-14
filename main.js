const form = document.getElementById('form-agendas');
const imgSalvo ='<img src ="./imagem/salvo.gif" alt="gif de positivo"/>';
const nome =[];
const tel = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha(); 
    atualizaTabela();
})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelContato = document.getElementById('tel-contato');

    if(tel.includes(inputTelContato.value)){
        alert(`Esse numero ${inputTelContato.value} já esta salvo`);
    }
    else{
        nome.push(inputNomeContato.value);
        tel.push(inputTelContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelContato.value}</td>`;
        linha += `<td> ${imgSalvo}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    inputNomeContato.value ='';
    inputTelContato.value ='';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML  = linhas;
}