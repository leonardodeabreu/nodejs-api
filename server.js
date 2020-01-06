const appModule = require('./app/router');
const http = require('http');

const port = process.env.PORT || 8080;

const app = appModule.create();

const server = http.createServer(app);

server.listen(port, () => console.log(`Hello my tandemploy dawgs, we are listening on port ${port}!`));

server.on('error', (error) => {
	if (error.syscall !== 'listen') { 
		throw error;
	} 
	const addr = server.address() || {
		port: port
	};

	const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;

	switch (error.code) { 
		case 'EACCES': 
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
			break
		case 'EADDRINUSE': 
			console.error(bind + ' is already in use');
			process.exit(1);
			break;
		default: 
			throw error;
	} 
})

module.exports = app;
