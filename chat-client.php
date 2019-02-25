<!DOCTYPE html>

<head>
    <meta charset="utf-8" />
    <title>WebSocket Test</title>
</head>
<body>
    <div id="app">
        <div id="chat">
            <div class="response" v-for="(item, index) in output" :key="index" v-text="item">
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="assets/js/app.js"></script>
</body>