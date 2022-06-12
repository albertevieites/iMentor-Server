const app = require("./app");
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: process.env.ORIGIN,
  }
});

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 5005;

io.on('connection', (socket) => {

  console.log('NEW CONNECTION', socket)
  socket.on('newMessage', users=>{
    io.emit('updateChat', users)
  })

 {/* socket.on('acceptedFavour',()=>{
    io.emit('updateFavours',[])
  })

  socket.on('createdFavour',()=>{
    io.emit('updateFavours',[])
  })*/}
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

