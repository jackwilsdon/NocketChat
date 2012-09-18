NocketChat
==========
NocketChat is a chat client and server 'pair'. The server is written in **Socket.io** and **Node.js**, whilst the client is coded in **jQuery**, **Socket.io** and **JS**.

Usage (overview)
-----
To use NocketChat, ensure you have Socket.io installed in your working directory. If you don't have it installed, run `npm install socket.io`. After installing Socket.io, you should be able to run this as long as you have an operating webserver. Upload all of the code apart from server.js to a webserver, and adjust the port (in server.js) and host (in client.js) to suit where you are running the server. Once this is done, you should be able to start up the server (`node server.js`), visit the index.html and chat! If you have any problems, **please don't hesitate to report an issue**, and I'll try and get it fixed **ASAP**.

Full setup tutorial
-------------------
You should have read the above info to help you get started. If you don't understand the above instructions, you should follow these.

1. Ensure you have [node.js][3] and `npm` installed.
2. Pull this repo to a folder using the command;  
`git clone http://github.com/jackwilsdon/NocketChat.git`
3. Ensure you are inside the `NocketChat` directory. There should be files such as `server.js` and `index.html`.
4. Run the following command to install `socket.io` inside the `NocketChat` folder;  
`npm install socket.io`
5. Copy all of the files (apart from `node_modules` and `server.js`) onto a webserver.
6. Modify `js/client.js` to point towards the server you are hosting the chat server on (`var socket = io.connect('http://host:port');`)
7. Modify `js/server.js` to have the correct port that you have pointed `client.js` to, and a port that is either already forwarded, or you can forward on your router.
8. Inside the `NocketChat` folder, run `node server.js` and hopefully, you should get some messages about the server starting.
9. Visit your webserver in any web browser and voila, it should work! If it doesn't, ensure the server is running and the url/ports are right. If it still doesn't work, and you are sure these details are correct, open the JS Console inside your web browser, and copy the contents into a new post on the issue tracker found [here][4].
10. If your chat works, it's done! To test it out, open two tabs and chat between them. The messages should be near instant!

Where did the name 'NocketChat' come from?
------------------------------------------
    Node + Socket + Chat = NocketChat (NodeSocketChat)

License
-------
[![Creative Commons License][2]][1]  
This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License](http://creativecommons.org/licenses/by-nc-sa/3.0/deed.en).  
You are allowed to modify and distribute this freely, as long as it is released under the same Creative Commons License, and gives credit to it's original author (me).  
All other licenses can be found inside **LICENSE.md**.
	
   [1]: http://creativecommons.org/licenses/by-nc-sa/3.0/deed.en
   [2]: http://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png
   [3]: http://nodejs.org
   [4]: http://github.com/jackwilsdon/NocketChat/issues
