const express = require('express'); 
const productsRouter = require('./products/products-router'); 
const suppliersRouter = require('./suppliers/suppliers-router'); 

const server = express();

// server.use(express.json());

//manage products (8)
//manage clients (8)
//manage orders (8)
//manage suppliers (8)


// global middleware
server.use(express.json()); 
server.use('/products', productsRouter); 
server.use('/suppliers', suppliersRouter); 

// route handlers
server.get('/', (req, res) => {
    res.status(201).json({ api: 'up' }); 
})


// export default server; 
module.exports = server; 