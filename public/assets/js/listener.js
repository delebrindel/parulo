var socket = new io("https://parulo.herokuapp.com");

// Run something on certain events
socket.on('connect', function(){onOpen()});
socket.on('messages', function(data){onMessage(data)});
socket.on('disconnect', function(){onClose()});

function onOpen(){
    console.log("Opened");
}

function onMessage(evt){
    console.log("Opened",evt);
}

function onClose(){
    console.log("Closed");
}