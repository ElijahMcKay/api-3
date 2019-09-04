const server = require('./api/server'); 

const port = 5000; 

server.listen(5000, () => console.log(`\n ** Port is listening on port ${port}`)); 
