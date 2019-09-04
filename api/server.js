const express = require('express'); 

const server = express(); 

const port = 5000; 


//manage products (8)
//manage clients (8)
//manage orders (8)
//manage suppliers (8)


server.get('/', (req, res) => {
    res.status(201).json(req); 
})

// export default server; 
module.exports = server; 