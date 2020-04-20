// import server 
const server = require('./api/server.js');

// listen
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`\n** Running on port: ${PORT} **\n`));