var Socket = new WebSocket("ws://148.251.21.118:5570 ");
Socket.onmessage = function (event) {
  console.log(event.data);
}