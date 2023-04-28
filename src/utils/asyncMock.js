const products = [
    {   id: '1',
        name: 'Sahumo flor',
        price: 90,
        category: 'Saumerios & Hierbas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_680044-MLM44767154546_012021-O.jpg',
        stock: 25,
        description: 'Sahumo flor Aromaterapia',
    },

    {   id: '2',
        name: 'Sahumo tierra',
        price: 90,
        category: 'Saumerios & Hierbas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_967854-MLM44767150829_012021-O.jpg',
        stock: 25,
        description: 'Sahumo tierra Aromaterapia',
    },

    {   id: '3',
        name: 'Hierba vida',
        price: 50,
        category: 'Saumerios & Hierbas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_665754-MLM44767149859_012021-O.jpg',
        stock: 25,
        description: 'Hierba vida Aromaterapia',
    },
    {
        id: '4',
        name: 'Vela Floral',
        price: 500,
        category: 'Velas',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4wMBdIKAyM2Z8daUoZIAuwXFyznipXLi-aSqyy-OGPhS2m3d9vt8ZBE-igwqec5e03SM&usqp=CAU',
        stock: 25,
        description: 'Vela Floral Aromaterapia',
    },
    {
        id: '5',
        name: 'Vela Jardin',
        price: 500,
        category: 'Velas',
        img: 'https://i.pinimg.com/564x/1d/20/e8/1d20e85750d1c11923ab082033473d7e.jpg',
        stock: 25,
        description: 'Vela Jardin Aromaterapia',
    },
    {
        id: '6',
        name: 'Vela Primavera',
        price: 500,
        category: 'Velas',
        img: 'https://4.bp.blogspot.com/-AFeXWCxR3VY/W3JJaAPlmDI/AAAAAAAA6VA/OXX2datPdTMjy_wk_b625AIXv6WfxtslwCLcBGAs/s1600/velas-flores-incrustadas4.jpg',
        stock: 25,
        description: 'Vela Primavera Aromaterapia',
    },

    {   id: '7',
        name: 'Cuenco',
        price: 500,
        category: 'Complementos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_657189-MLA52539960716_112022-W.jpg',
        stock: 25,
        description: 'Cuenco Aromaterapia',
    },

    {   id: '8',
        name: 'Porta sahumo',
        price: 500,
        category: 'Complementos',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/856/products/20230302084927_img_1808-011-1289ea1f02474f628716777696048288-640-0.webp',
        stock: 25,
        description: 'Porta sahumo Aromaterapia',
    },

    {
        id: '9',
        name: 'Caldero para hierbas',
        price: 500,
        category: 'Complementos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_936869-MLA42308249945_062020-V.jpg',
        stock: 25,
        description: 'Caldero para hierbas Aromaterapia',
    },
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.id === productCategory));
        }, 500);
    });
};

export default products;