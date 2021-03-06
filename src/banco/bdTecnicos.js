let dadosTecnicos = [
    {
        id: 0,
        name: 'Adriano Pereira Souza',
        nomeAbreviado: 'Adriano P. Souza',
        primeironome: 'Adriano',
        email: 'adriano@cednet.com.br',
        telefone: '(14) 3322-0000',
        celular: '(14) 99900-0000',
        cargo: 'Técnico em redes',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        subtitle: 'Disponível',
        veiculo: 'BZQ-0035',
        servico: 'Manutenção',
        tarefas: 1,
        excluido: false
    },
    {
        id: 1,
        name: 'Aline Oliveira Pereira',
        nomeAbreviado: 'Aline O. Pereira',
        primeironome: 'Aline',
        email: 'aline@cednet.com.br',
        telefone: '(14) 3322-1111',
        celular: '(14) 99900-1111',
        cargo: 'Analista de Infraestrutura',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        subtitle: 'Indisponível',
        veiculo: ' ',
        servico: ' ',
        tarefas: 0,
        excluido: false
    },
    {
        id: 2,
        name: 'Guilherme Pessoa Cardoso',
        nomeAbreviado: 'Guilherme P. Cardoso',
        primeironome: 'Guilherme',
        email: 'guilherme@cednet.com.br',
        telefone: '(14) 3322-2222',
        celular: '(14) 99900-2222',
        cargo: 'Técnico em redes',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        subtitle: 'Indisponível',
        veiculo: ' ',
        servico: ' ',
        tarefas: 0,
        excluido: false
    },
    {
        id: 3,
        name: 'Gustavo Bergamo Mimim',
        nomeAbreviado: 'Gustavo B. Mimim',
        primeironome: 'Gustavo',
        email: 'gustavo@cednet.com.br',
        telefone: '(14) 3322-3333',
        celular: '(14) 99900-3333',
        cargo: 'Analista de Infraestrutura',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        subtitle: 'Disponível',
        veiculo: 'NTR-8133',
        servico: 'Verificação de equipamentos',
        tarefas: 3,
        excluido: false
    },
    {
        id: 4,
        name: 'João Armando Gomes',
        nomeAbreviado: 'João A. Gomes',
        primeironome: 'João',
        email: 'joao@cednet.com.br',
        telefone: '(14) 3322-4444',
        celular: '(14) 99900-4444',
        cargo: 'Técnico em manutenção',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        subtitle: 'Indisponível',
        veiculo: ' ',
        servico: ' ',
        tarefas: 0,
        excluido: false
    },
    {
        id: 5,
        name: 'Lucas Beto Moura',
        nomeAbreviado: 'Lucas B. Moura',
        primeironome: 'Lucas',
        email: 'lucas@cednet.com.br',
        telefone: '(14) 3322-5555',
        celular: '(14) 99900-5555',
        cargo: 'Técnico em redes',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        subtitle: 'Indisponível',
        veiculo: ' ',
        servico: ' ',
        tarefas: 0,
        excluido: false
    },
    {
        id: 6,
        name: 'Márcio Fernando Freitas',
        nomeAbreviado: 'Márcio F. Freitas',
        primeironome: 'Márcio',
        email: 'marcio@cednet.com.br',
        telefone: '(14) 3322-6666',
        celular: '(14) 99900-6666',
        cargo: 'Técnico em manutenção',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        subtitle: 'Disponível',
        veiculo: 'QMM-2353',
        servico: 'Manutenção',
        tarefas: 1,
        excluido: false
    },
    {
        id: 7,
        name: 'Renan Leonardo Ramos da Silva',
        nomeAbreviado: 'Renan L. R. da Silva',
        primeironome: 'Renan',
        email: 'renan@cednet.com.br',
        telefone: '(14) 3322-7777',
        celular: '(14) 99900-7777',
        cargo: 'Técnico em manutenção',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        subtitle: 'Disponível',
        veiculo: 'JLO-7793',
        servico: 'Manutenção',
        tarefas: 2,
        excluido: false
    },
    {
        id: 8,
        name: 'Thainá Toga Romero',
        nomeAbreviado: 'Thainá T. Romero',
        primeironome: 'Thainá',
        email: 'thaina@cednet.com.br',
        telefone: '(14) 3322-8888',
        celular: '(14) 99900-8888',
        cargo: 'Analista de Infraestrutura',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        subtitle: 'Indisponível',
        veiculo: ' ',
        servico: ' ',
        tarefas: 0,
        excluido: false
    },
    {
        id: 9,
        name: 'Vinicius Andrade Ribeiro',
        nomeAbreviado: 'Vinicius A. Ribeiro',
        primeironome: 'Vinicius',
        email: 'vinicius@cednet.com.br',
        telefone: '(14) 3322-9999',
        celular: '(14) 99900-9999',
        cargo: 'Técnico em redes',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        subtitle: 'Disponível',
        veiculo: 'BZQ-0035',
        servico: 'Manutenção',
        tarefas: 2,
        excluido: false
    }
];

const getTecnico = () => dadosTecnicos

const addNewTecnico = (newTecnico) => {
    Object.assign(newTecnico, { id: dadosTecnicos.length })
    dadosTecnicos.push(newTecnico)
}

const getTecnicoByIndex = (i) => dadosTecnicos[i]

export default dadosTecnicos;

export {getTecnicoByIndex, addNewTecnico, getTecnico}