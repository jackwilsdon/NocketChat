NocketChat
==========
NocketChat is a chat client and server 'pair'. The server is written in **Socket.io** and **Node.js**, whilst the client is coded in **jQuery**, **Socket.io** and **JS**.

Usage
-----
To use NocketChat, ensure you have Socket.io installed in your working directory. If you don't have it installed, run `npm install socket.io`. After installing Socket.io, you should be able to run this as long as you have an operating webserver. Upload all of the code apart from server.js to a webserver, and adjust the port (in server.js) and host (in client.js) to suit where you are running the server. Once this is done, you should be able to start up the server (`node server.js`), visit the index.html and chat! If you have any problems, **please don't hesitate to report an issue**, and I'll try and get it fixed **ASAP**.

Where did the name 'NocketChat' come from?
------------------------------------------
````Node + Socket + Chat = NocketChat (NodeSocketChat)````

License
-------
[![Creative Commons License][2]][1]  
This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License](http://creativecommons.org/licenses/by-nc-sa/3.0/deed.en).  
You are allowed to modify and distribute this freely, as long as it is released under the same Creative Commons License, and gives credit to it's original author (me).  
All other licenses can be found inside **LICENSE.md**.

  [1]: http://creativecommons.org/licenses/by-nc-sa/3.0/deed.en
  [2]: http://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png