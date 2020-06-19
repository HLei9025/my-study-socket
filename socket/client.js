const net = require('net')


const socket = new net.Socket();

socket.connect({
    port: 9000,
    host: 'localhost'
}, () => {
    console.log('连接上了服务器');
    socket.setEncoding = 'utf-8';
    socket.write('hello world')
    socket.on('data', (data) => {
        console.log('接收到客户端的：' + data)
    })
})


socket.on('close', () => {
    console.log('客户端：通信通道关闭了')
})
socket.on('error', () => {
    console.log('客户端：通信通道关闭了')
})