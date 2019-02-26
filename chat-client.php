<!DOCTYPE html>

<head>
    <meta charset="utf-8" />
    <title>WebSocket Test</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css">
    <link rel="stylesheet" href="assets/css/app.css">
</head>

<body>
    <div class="container">
        <div id="app" class="section">
            <h1 class="title">Parulo - Una prueba de chat</h1>
            <div class="columns is-desktop">
                <div class="column is-one-third">
                    <div class="field">
                        <div class="control">
                            <input type="text" class="input is-info" v-model="message" @keyup.enter="doSend"
                                placeholder="Mensaje a enviar">
                        </div>
                    </div>
                </div>
                <div id="chat" class="column is-two-thirds">
                    <div v-for="(item, index) in output" :key="index" v-text="item.msg" :class="item.type"></div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="assets/js/app.js"></script>
</body>