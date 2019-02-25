<!DOCTYPE html>
<meta charset="utf-8" />
<title>WebSocket Test</title>
<script language="javascript" type="text/javascript">

var wsUri = "wss://parulo-app.herokuapp.com:8080";
var output;
var person;

function init()
{
  output = document.getElementById("output");
  person = prompt("Please enter your name", "User");
  document.getElementById("screenName").innerHTML =
  "Bienvenido " + person + "!";
  document.getElementById("message").value =
  " ha iniciado sesión!";
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
</script>

<h2>WebSocket Test</h2>
<h4 id="screenName">WebSocket Test</h4>

<div id="output"></div>

<input type="text" id="message" value="Connecting">
<button id="sendMessage" onclick="doSend()">Send</button>
