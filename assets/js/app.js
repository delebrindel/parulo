//var ip="parulo-app.herokuapp.com/";
var wsUri = "ws://"+ip+":8080";
var output;
var person;

var vm = new Vue({
  el: '#app',
  data: {
    person: "",
    message: "",
    output: []
  },
  mounted: function () {
    this.person = prompt("Por favor ingresa tu nombre", "User");
    this.output.push(this.person + " ha iniciado sesión!");
    this.init();
  },
  methods: {
    init: function () {
      this.testWebSocket();
    },
    testWebSocket: function()
    {
      websocket = new WebSocket(wsUri);
      websocket.onopen = function(evt) { vm.onOpen(evt) };
      websocket.onclose = function(evt) { vm.onClose(evt) };
      websocket.onmessage = function(evt) { vm.onMessage(evt) };
      websocket.onerror = function(evt) { vm.onError(evt) };
    },
    onOpen: function(evt)
    {
      this.output.push({type: "r-out", msg:"Bienvenido/a "+this.person});
      websocket.send(this.person + " ha iniciado sesión");
    },
    onClose: function(evt)
    {
      this.output.push({type: "r-er", msg: evt.data});
    },
    onMessage: function(evt)
    {
      this.output.push({type: "r-in", msg: evt.data});
    },
    doSend: function()
    {
      this.output.push({type: "r-out", msg:this.person+": " + this.message});
      websocket.send(this.person+": " + this.message);
      this.message="";
    },
    
    onError: function(evt)
    {
      this.output.push({type: "r-er", msg:'ERROR ' + evt.data});
    }
  }
})