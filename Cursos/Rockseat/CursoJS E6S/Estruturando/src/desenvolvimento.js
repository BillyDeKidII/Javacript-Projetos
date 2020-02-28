class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}
class TodoList extends List {
    constructor() {
        super();
        this.usuario = 'Thiago';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();

class Math {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Math.soma(1, 2));

const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item) {
    return item * 2;
});

console.log(newArr);

const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log(sum);

const filter = arr.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item) {
    return item === 4;
});

console.log(find);

const arr2 = [1, 2, 3, 4, 5, 6];

const newArr2 = arr2.map((item) => item * 2);

console.log(newArr2);

const teste = () => {
    return 'teste';
}

console.log(teste());

function soma(a = 1, b = 2) {
    return a + b;
}

const soma2 = (a = 1, b = 2) => a + b;

console.log('SOMA ERRADA ' + soma());
console.log(soma2(10, 20));

const usuario = {
    nome: 'Thiago',
    idade: 23,
    endereco: {
        cidade: 'Londrina',
        estado: 'PR',
    },
};

console.log(usuario.nome, usuario.idade, usuario.endereco.cidade, usuario.endereco.estado);
const { nome, idade, endereco: { cidade, estado } } = usuario;
console.log(nome, idade, cidade, estado);

function mostarInfo({ nome, idade, endereco: { cidade, estado } }) {
    console.log(nome, idade, cidade, estado);
}

mostarInfo(usuario);


//REST

const usuarioRest = {
    chave: 1,
    index: 'Primeiro',
    heranca: 'Filho do molho'
};

const { chave, ...restante } = usuarioRest;


console.log(chave);
console.log(restante);

const numeros = [1, 2, 3, 4, 5, 6];

const [a, b, ...c] = numeros;

console.log(a, b, c);

function somaRest(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(somaRest(1, 2, 5, 6));

//SPREAD

const l1 = [1, 2, 3];
const l2 = [4, 5, 6];
const l3 = [...l1, ...l2];

console.log(l3);

const usuarioSpread = {
    nome: 'Carlos',
    idade: 40
};

const usuarioSpreadNovo = {...usuarioSpread, nome: 'Thiago', idade: 23, cidade: 'Londrina' };

console.log(usuarioSpread);
console.log(usuarioSpreadNovo);

//TEMPLATE LITERALS

const nome2 = 'Thiago',
    idade2 = 23;

console.log(` Meu nome é ${nome2} e tenho ${idade2} anos.`);

//Promises

const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

async function executaPromiseGrande() {
    minhaPromise().then(response => {
        console.log(response);
    });

    minhaPromise().then(response => {
        console.log(response);
    });

    minhaPromise().then(response => {
        console.log(response);
    });
};

async function executaPromise() {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

const executaPromiseArrowFunction = async() => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromiseArrowFunction();
executaPromiseGrande();
executaPromise();