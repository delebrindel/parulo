var wsUri = "ws://localhost:8080";
var output;
var person;

new Vue({
    el: '#app',
    data: {
      person: "",
      msg: "",
      output: []
    },
    mounted: function () {
      this.person = prompt("Por favor ingresa tu nombre", "User");
      this.output.push( this.person + " ha iniciado sesión!");
    }
})
/*
function init()
{
  testWebSocket();
}

function testWebSocket()
{
  websocket = new WebSocket(wsUri);
  websocket.onopen = function(evt) { onOpen(evt) };
  websocket.onclose = function(evt) { onClose(evt) };
  websocket.onmessage = function(evt) { onMessage(evt) };
  websocket.onerror = function(evt) { onError(evt) };
}

function onOpen(evt)
{
  writeToScreen("CONNECTED");
  doSend("WebSocket rocks");
}

function onClose(evt)
{
  writeToScreen("DISCONNECTED");
}

function onMessage(evt)
{
  writeToScreen('<span style="color: blue;">' + evt.data+'</span>');
  //websocket.close();
}

function onError(evt)
{
  writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}

function doSend()
{
  let message = document.querySelector("#message").value; // Things you want to do.
  writeToScreen(person+": " + message);
  websocket.send(person+": " + message);
  document.querySelector("#message").value = ""; // Things you want to do.
}

function writeToScreen(message)
{
  var pre = document.createElement("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
  output.appendChild(pre);
}

window.addEventListener("load", init, false);
*/