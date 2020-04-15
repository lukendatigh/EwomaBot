const socket = io('http://127.0.0.1:3333');//Hold the url of the server
const format = '@$%().,/!*1234567890abcdefghijklmnopqrstuvwxyz';

const socketTrigger = () => {

    const sendChat = (e) => {
        e.preventDefault(); 
        
        let msg = document.querySelector('#MSG'); //Get the message input
        socket.emit('bot_chat', { //Send to bot server
            'device_id': randomStr(32, format),
           'message': msg.value,
        });
        
        msg.value = '';
        return false;
    }

    const randomStr = (len, format) => { 
        let ans = ''; 
        for (var i = len; i > 0; i--) { 
            ans +=  
              format[Math.floor(Math.random() * format.length)]; 
        } 
        return ans; 
    } 

    //Trigger the sendchat function
    const chatForm = document.querySelector('#chatForm');
    chatForm.addEventListener('submit', (e) => sendChat(e, chatForm))//Use submit event to connect to the socket connect
}

socketTrigger();//Triigger on load
