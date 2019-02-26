var port = 80;
var vm = new Vue({
    el: '#app',
    data: {
        person: "",
        message: "",
        output: [],
        websocket : io.connect('https://limitless-refuge-67226.herokuapp.com/', { 'forceNew': true })
    },
    mounted: function () {
        this.person = prompt("Por favor ingresa tu nombre", "User");
        this.startWebSocket();
    },
    methods: {
        startWebSocket: function()
        {
            this.websocket.on('messages', function(data) { vm.onMessage(data); });
            this.connect();
        },
        connect: function (){
            this.websocket.emit('new-connection', this.person);
        },
        onMessage: function(data){
            if(data.author != this.person){
                this.output.push({author: data.author, message: data.text, type: "r-out"})
            } 
            else{
                this.output.push({author: data.author, message: data.text, type: "r-in"})
            }
        },
        doSend: function(e) {
            var message = {
                author: this.person,
                text: this.message
            };
            this.message="";
            this.websocket.emit('new-message', message);
            return false;
        }
    }
})