const dadosVeiculos = [
    {
        id: 0,
        name: 'CDU-2532',
        avatar: 'https://www.firstcarrental.co.za/images/group-b-suzuki-swift-june2019.jpg',
        fabricante: 'Ford',
        modelo: 'Ka',
        ano: '2020',
        cor: 'Branco',
        status: 'Disponível para uso',
        utilizadopor: ' ',
        disponivel: true,
        excluido: false
    },
    {
        name: 'TYA-8991',
        id: 1,
        avatar: 'https://i2.wp.com/blog.twwhiteandsons.co.uk/wp-content/uploads/2014/08/siwft-sport.png?fit=447%2C237&ssl=1',
        fabricante: 'Renault',
        modelo: 'Kwid',
        ano: '2019',
        cor: 'Preto',
        status: 'Disponível para uso',
        utilizadopor: ' ',
        disponivel: true,
        excluido: false
    },
    {
        name: 'MTR-4318',
        id: 2,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1VdYdn_6WEgG-g405G05ScMlCHysgwIjtwN8RGQu-QqSuxYPd&usqp=CAU',
        fabricante: 'Fiat',
        modelo: 'Mobi',
        ano: '2020',
        cor: 'Preto',
        status: 'Em manutenção',
        utilizadopor: ' ',
        disponivel: true,
        excluido: false
    },
    {
        name: 'UPC-7112',
        id: 3,
        avatar: 'https://www.firstcarrental.co.za/images/group-b-suzuki-swift-june2019.jpg',
        fabricante: 'Ford',
        modelo: 'Ka',
        ano: '2019',
        cor: 'Branco',
        status: 'Em uso',
        utilizadopor: ' ',
        disponivel: false,
        excluido: false
    },
    {
        name: 'BZQ-0035',
        id: 4,
        avatar: 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2020-joy/mov/03-images/performance-joy-hb-2020.jpg?imwidth=960',
        fabricante: 'Chevrolet',
        modelo: 'Joy',
        ano: '2019',
        cor: 'Branco',
        status: 'Em uso',
        utilizadopor: 'Adriano P. Souza, Vinicius A. Ribeiro',
        disponivel: false,
        excluido: false
    },
    {
        name: 'NTR-8133',
        id: 5,
        avatar: 'https://i2.wp.com/blog.twwhiteandsons.co.uk/wp-content/uploads/2014/08/siwft-sport.png?fit=447%2C237&ssl=1',
        fabricante: 'Renault',
        modelo: 'Kwid',
        ano: '2019',
        cor: 'Preto',
        status: 'Em uso',
        utilizadopor: 'Gustavo B. Mimim',
        disponivel: false,
        excluido: false
    },
    {
        name: 'QMM-2353',
        id: 6,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1VdYdn_6WEgG-g405G05ScMlCHysgwIjtwN8RGQu-QqSuxYPd&usqp=CAU',
        fabricante: 'Fiat',
        modelo: 'Mobi',
        ano: '2020',
        cor: 'Preto',
        status: 'Em uso',
        utilizadopor: 'Márcio F. Freitas',
        disponivel: false,
        excluido: false
    },
    {
        name: 'JLO-7793',
        id: 7,
        status: 'Disponível para uso',
        avatar: 'https://production.autoforce.com/uploads/version/profile_image/3468/model_main_comprar-attractive-1-0_1345f83a1d.png',
        fabricante: 'Fiat',
        modelo: 'Uno Attractive',
        ano: '2020',
        cor: 'Cinza',
        status: 'Em uso',
        utilizadopor: 'Renan L. R. da Silva',
        disponivel: false,
        excluido: false
    }
]

const getVeiculo = () => dadosVeiculos

const addNewVeiculo= (newVeiculo) => {
    Object.assign(newVeiculo, { id: dadosVeiculos.length }, {disponivel: true}, {excluido: false})
    dadosVeiculos.push(newVeiculo)
}


const getVeiculoByIndex = (i) => dadosVeiculos[i]

export default dadosVeiculos;

export {getVeiculoByIndex, addNewVeiculo, getVeiculo}