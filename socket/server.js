const net = require('net');

const server = new net.createServer();


server.on('connection', (socket) => {
    console.log('客户端链接了')
    socket.on('data', (data) => {
        console.log(data + '')
        socket.write('hi')
    })
    socket.on('close', () => {
        console.log('服务器：通信通道关闭了')
    })
    socket.on('error', () => {
        console.log('服务器：通信通道关闭了')
    })
})




server.listen(9000, (error) => {
    if (error) {
        console.log('启动失败')
    } else {
        console.log('启动成功')
    }
})