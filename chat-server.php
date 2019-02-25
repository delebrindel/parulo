<?php
namespace Parulo;
use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use Parulo\Chat;

require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/lib/chat.php';
$server = IoServer::factory(
    new HttpServer(
        new WsServer(
            new Chat()
            )
        ),
        8080
    );
    
    $server->run();
?>