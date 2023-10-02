const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

const {
    auth,
    cart,
    product,
    payment,
    order
} = require('./utils/services-registry');

const authProxy = createProxyMiddleware(auth);
app.get('')
app.use("/auth", authProxy);
app.listen(port, () => console.log(`api-gateway ${port}!`));