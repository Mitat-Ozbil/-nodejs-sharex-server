const Server = require('sharex-server');

new Server({
        password: 'password',
        path: 'image',
        port: 8080,
        fileLength: 10
})