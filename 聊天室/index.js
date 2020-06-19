

const vm = new Vue({
    el: '#app',
    data: {
        name: '',
        password: '',
        isLogin: false,
        message: '',
        list: []
    },
    methods: {
        loginAction(){
            console.log(this.name);
            console.log(this.password);
            this.isLogin = true;
            // 执行登录，登录成功后，使用 websocket 连接服务器
            let websocket = this.websocket = new WebSocket('ws://localhost:9000');
            websocket.onopen = ()=>{
                // 告诉服务器当前客户端的名字
                let msg = JSON.stringify({name: this.name});
                websocket.send(msg);
            }
            websocket.onmessage = (ev)=>{
                let msg = JSON.parse(ev.data);
                this.list.push(msg);
            }
        },
        sendAction(){
            // 发送信息给服务器
            let msg = JSON.stringify({msg: this.message});
            this.websocket.send(msg);
            this.list.push({send: this.name, msg: this.message});
            this.message = '';
        }
    }
}) 