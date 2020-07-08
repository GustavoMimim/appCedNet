const dadosVeiculos = [
    {
        id: 0,
        name: 'CDU-2532',
        avatar: 'https://www.firstcarrental.co.za/images/group-b-suzuki-swift-june2019.jpg',
        subtitle: 'Ford Ka - 2020',
        disponivel: true
    },
    {
        name: 'TYA-8991',
        id: 1,
        avatar: 'https://i2.wp.com/blog.twwhiteandsons.co.uk/wp-content/uploads/2014/08/siwft-sport.png?fit=447%2C237&ssl=1',
        subtitle: 'Kwid - 2019',
        disponivel: true
    },
    {
        name: 'MTR-4318',
        id: 2,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1VdYdn_6WEgG-g405G05ScMlCHysgwIjtwN8RGQu-QqSuxYPd&usqp=CAU',
        subtitle: 'Mobi - 2020',
        disponivel: true
    },
    {
        name: 'QMM-2353',
        id: 3,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1VdYdn_6WEgG-g405G05ScMlCHysgwIjtwN8RGQu-QqSuxYPd&usqp=CAU',
        subtitle: 'Mobi - 2020',
        disponivel: false
    }
]



const getVeiculoByIndex = (i) => dadosVeiculos[i]

export default dadosVeiculos;

export {getVeiculoByIndex}