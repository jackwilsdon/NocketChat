/*
*  _   _            _        _    _____ _           _   
* | \ | |          | |      | |  / ____| |         | |  
* |  \| | ___   ___| | _____| |_| |    | |__   __ _| |_ 
* | . ` |/ _ \ / __| |/ / _ \ __| |    | '_ \ / _` | __|
* | |\  | (_) | (__|   <  __/ |_| |____| | | | (_| | |_ 
* |_| \_|\___/ \___|_|\_\___|\__|\_____|_| |_|\__,_|\__|
*
*  NocketChat Client
*/

// Custom functions to enable and disable fields
jQuery.fn.enable = function() {
	$(this[0]).removeAttr("disabled");
}

jQuery.fn.disable = function() {
	$(this[0]).attr("disabled", "disabled");
}

// Execute when page has loaded
$(document).ready(function() {

	// Create Socket.io object
	var socket = io.connect('http://localhost:8888');
	
	// Create object references
	var content = $("#messages");
	var input = $("#input");
	var status = $("#status");
	
	// Status messages
	var messages = {
		"error": "Connection lost",
		"user": "Username: ",
		"other": "..? What just happened?", // Unused
		"dave": "Access: Denied" // Upcoming feature support
	};
	
	// On server connection
	socket.on('connect', function () {
		
		// Enable input and set status
		input.enable();
		$(status).html(messages["user"]);
		
		// When the enter key is pressed (send message)
		input.keyup(function(event) {
		
			if(event.keyCode == 13) {
				
				// If the textbox isn't empty
				if ($.trim(input.val())) {
				
					// Set username to field content
					var username = input.val();
					
					// Remove keybinding so it can be re-defined
					// (there's probably a better way than unbinding and rebinding)
					input.unbind('keyup');
					
					// Send 'set_nick' message to server with nickname
					socket.emit("set_nick", {"nick": username});
					
					// Empty input and set status text
					$(input).val(null);
					$(status).text(username+":");
					
					// Re-define keybinding to enter key
					input.keyup(function(event) {
						if (event.keyCode == 13) {
							
							// If textbox isn't empty
							if ($.trim(input.val())) {
							
								// Send message to server and empty textbox
								socket.send(input.val());
								input.val(null);
							}
						}
					});
					
				}
				
			}
			
		});
	});
	
	// When connection fails, disable the input and set status
	// (this doesn't seem to work)
	socket.on('connect_failed', function() {
		input.disable();
		$(status).text(messages["error"]);
	});
	
	// When a join message is sent from the server, add it to the message logs
	socket.on('join', function (data) {
		content.append("<p>User "+data+" joined!</p>");
	});
	
	// When a user leavs, add it to the message logs
	socket.on('leave', function (data) {
		content.append("<p>User "+data+" left!</p>");
	});

	// When a message is sent, add it to the message logs
	socket.on('message', function (data) {
		content.append("<p><b>"+data['user']+"</b> @ "+data['date']+": "+data['msg']+"</p>");
	});
	
	// Upcoming feature support
	socket.on('banned', function (data) {
		$(status).text(messages['dave']);
	});
	
});