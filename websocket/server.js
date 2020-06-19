const ws = require('ws');

const websocketServer = new ws.Server({
    port: 9000,
    host: 'localhost'
},(error)=>{
    if(error){
        console.log('服务器启动失败');
    }else{
        console.log('服务器启动成功');
    }
});

websocketServer.on('connection',(websocket)=>{
    console.log('有客户端链接');
    websocket.on('message', (msg)=>{
        console.log('接收到了：' + msg);
        websocket.send('服务器接收到了');
    })
})



