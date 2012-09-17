/*
*  _   _            _        _    _____ _           _   
* | \ | |          | |      | |  / ____| |         | |  
* |  \| | ___   ___| | _____| |_| |    | |__   __ _| |_ 
* | . ` |/ _ \ / __| |/ / _ \ __| |    | '_ \ / _` | __|
* | |\  | (_) | (__|   <  __/ |_| |____| | | | (_| | |_ 
* |_| \_|\___/ \___|_|\_\___|\__|\_____|_| |_|\__,_|\__|
*
*  NocketChat Server
*/

// Define variables and include socket.io and moment (date formatter)
var	io = require('socket.io').listen(8888),
		moment = require('./js/moment.min.pretty.js'),
		logger = io.log,
		users = [];

// Disable most forms of logging (debug)
io.set('log level', 2);

// When a user connects
io.sockets.on('connection', function (socket){

	// Log user ID
	logger.info("User joined with an ID of '"+socket.store.id+"'!");

	// When a user sets their nick
	socket.on('set_nick', function (data){
	
		// Set their ID in the array to have the nick and log it
		users[socket.store.id] = {"nick": data.nick};
		logger.info("User '"+socket.store.id+"' set their username to '"+data.nick+"'!");
		
		// Add the user to the 'online' room and tell all clients a user has joined
		socket.join('online');
		io.sockets.in('online').emit('join', users[socket.store.id].nick);
	});
	
	// When a message is recieved
	socket.on('message', function (message) {
	
		// Get the time (using moment)
		var time = moment().format('LLL');
		
		// Send the message to all users in that room and log the message
		io.sockets.in('online').emit('message', {"user": users[socket.store.id].nick, "msg": message, "date": time});
		logger.info(users[socket.store.id].nick+" @ "+time+": "+message);
	});
	
	// When a user disconnects
	socket.on('disconnect', function (data) {
	
		// Set their username for use later
		var username = users[socket.store.id];
		
		// If they have a username
		if (username != undefined) {
		
			// Unset it, log the disconnection and broadcast it to all users in that room
			delete users[socket.store.id];
			logger.info("User '"+username.nick+"' left!");
			io.sockets.in('online').emit('leave', username.nick);
		}
		
		// Disconnect the user from the room
		socket.leave('online');
	});
});