function verificar() {
    let nome = document.getElementById("nome").value;
    let fixo = document.getElementById("fixo").value;
    let movel = document.getElementById("movel").value;
    let url = document.getElementById("url").value;
    let data = document.getElementById("data").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let cidade = document.getElementById("cidade").value;
    let instagram = document.getElementById("instagram").value;
    let github = document.getElementById("github").value;

    if (nome == "" || fixo == "" || movel == "" || url == "" || data == "" || email == "" || cep == "" || cidade == "" || instagram == "" || github == "") {
        envieMsg('Preencha todos os campos', 'erro');
    } else {
        const contato = new ListaDeContatos(nome, fixo, movel, url, data, email, cep, cidade, instagram, github);
        bibliotecaDeContatos.listaDeContatosArray.push(contato);
        renderizarConteudo();
        envieMsg('Cadastrado com sucesso', 'sucesso');
    }
}

function envieMsg(msg, tipoMsg) {
    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = '';

    let msgParaTela = `
        <p class='${tipoMsg}'>${msg}</p>
    `;
    msgDiv.innerHTML = msgParaTela;
    setTimeout(function () {
        msgDiv.innerHTML = '';
    }, 3000);
}

function renderizarConteudo() {
    const listaHTML = document.getElementById('containerLista');
    listaHTML.innerHTML = '';
    let array = bibliotecaDeContatos.listaDeContatosArray;
    array.forEach((contato, index) => {
        const listaDiv = `
            <div class='lista-detalhes'>
                <h2>Nome: ${contato.nome}</h2>
                <p>Telefone Fixo: ${contato.fixo}</p>
                <p>Telefone Celular: ${contato.movel}</p>
                <p>URL: ${contato.url}</p>
                <p>Data: ${contato.data}</p>
                <p>Email: ${contato.email}</p>
                <p>CEP: ${contato.cep}</p>
                <p>Cidade: ${contato.cidade}</p>
                <p>Instagram: ${contato.instagram}</p>
                <p>GitHub: ${contato.github}</p>
                <button onclick="editarContato(${index})">Editar</button>
                <button onclick="excluirContato(${index})">Excluir</button>
                <button onclick="criarCopiaContato(${index})">Criar Cópia</button>
            </div>`;
        listaHTML.innerHTML += listaDiv;
    });
    

    const listaFlutuante = document.getElementById('listaFlutuante');
    listaFlutuante.innerHTML = listaHTML.innerHTML;
}

function alternarLista() {
    const listaHTML = document.getElementById('containerLista');
    listaHTML.classList.toggle('left-aligned-list');
}

function editarContato(index) {
    const contato = bibliotecaDeContatos.listaDeContatosArray[index];
    
    document.getElementById("nome").value = contato.nome;
    document.getElementById("fixo").value = contato.fixo;
    document.getElementById("movel").value = contato.movel;
    document.getElementById("url").value = contato.url;
    document.getElementById("data").value = contato.data;
    document.getElementById("email").value = contato.email;
    document.getElementById("cep").value = contato.cep;
    document.getElementById("cidade").value = contato.cidade;
    document.getElementById("instagram").value = contato.instagram;
    document.getElementById("github").value = contato.github;

    bibliotecaDeContatos.listaDeContatosArray.splice(index, 1);
    renderizarConteudo();
}

function excluirContato(index) {
    bibliotecaDeContatos.listaDeContatosArray.splice(index, 1);
    renderizarConteudo();
}

class ListaDeContatos {
    constructor(nome, fixo, movel, url, data, email, cep, cidade, instagram, github) {
        this.nome = nome;
        this.fixo = fixo;
        this.movel = movel;
        this.url = url;
        this.data = data;
        this.email = email;
        this.cep = cep;
        this.cidade = cidade;
        this.instagram = instagram;
        this.github = github;
    }
}

class BibliotecaDeContatos {
    constructor() {
        this.listaDeContatosArray = [];
    }
}

const bibliotecaDeContatos = new BibliotecaDeContatos();

function expandirLista() {
    const listaHTML = document.getElementById('containerLista');
    listaHTML.classList}
