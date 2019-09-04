//get to /suppliers responds with a message
//implement a GET to /suppliers/name that returns the name sent

const express = require('express'); 

const router = express.Router(); //creating a router, not a server like with express(); 

// a router can have middleware that applies only to the router
router.use(express.json()); 

// this router handles urls that begin with /products

// GET to /products/
router.get('/', (req, res) => { // /products IS A GIVEN, WE DON't NEED IT
    res.send('get to /suppliers/'); 
})

// GET to /products/:id
router.get('/name', (req, res) => {
    const name = req.body.name
    res.send(`get to /suppliers/${name}`); 
})



module.exports = router; 