const {Server} = require('ws');


const websocketServer = new Server({
    port: 9000,
    host: 'localhost'
},(error)=>{
    if(error){
        console.log('服务器链接失败');
    }else{
        console.log('服务器链接成功');
    }
})

let socketArr = [];

// 接收客户端的链接
websocketServer.on('connection',(websocket)=>{
    // 有人上线了
    socketArr.push(websocket);
    // console.log(websocket.name)
    websocket.on('message',(data)=>{
        let {name,msg} = JSON.parse(data);
        // 判断是否第一次发送信息
        if(!websocket.name){
            websocket.name = name;
            return;
        }

        // 处理其他情况
        socketArr.forEach(ws=>{
            if(ws === websocket){
                // 当前的说话者
            }else{
                // 其他人
                let info = JSON.stringify({
                    send: websocket.name,
                    msg
                });
                ws.send(info);
            }
        })
    })
});