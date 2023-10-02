module.exports = {
    auth: {
        target: 'http://127.0.0.1:3001',
        pathRewrite:{
            '^/auth':''
        },
        changeOrigin: true,
        logger: console,
        secure: false
    },
    cart: {
        target: 'https://localhost:3002',
        pathRewrite:{
            '^/cart':''
        },
        changeOrigin: true,
        logger: console,
        secure: false
    },
    order: {
        target: 'https://localhost:3003',
        pathRewrite:{
            '^/order':''
        },
        changeOrigin: true,
        logger: console,
        secure: false
    },
    payment: {
        target: 'https://localhost:3004',
        pathRewrite:{
            '^/payment':''
        },
        changeOrigin: true,
        logger: console,
        secure: false
    },
    product: {
        target: 'https://localhost:3005',
        pathRewrite:{
            '^/product':''
        },
        changeOrigin: true,
        logger: console,
        secure: false
    }
}