//const socket = io('https://convid19verify.herokuapp.com/');//Hold the url of the server
const socket = io('https://ewomaappapi.herokuapp.com/');
const format = '@$%().,/!*1234567890abcdefghijklmnopqrstuvwxyz';

const socketTrigger = () => {

    socket.on('bot-chat', function(data){
      
        const info = JSON.parse(data);
        if(info.status == 200){
            if(info.device_id === localStorage.getItem('device_id')){
                const botMessages = info['chat-info'].result.fulfillment.messages;
                botMessages.forEach((element, i) => {
                    if(i == 0) {
                        botMessage(element.speech)
                    }else {
                        setTimeout(() => {
                            botMessage(element.speech)
                        }, 2000);
                    }
                });
            }
        }

    });

    const sendChat = (e) => {
        e.preventDefault(); 
        console.log(e)
        
        let msg = document.querySelector('#MSG'); //Get the message input
        if ($.trim(msg) == '') {
            return false;
        }
        
        //Show user chat message to the DOM
        $(`<div class="col-12 single-chat-message-area">
                <div class="single-chat user-messages mt-2">
                    <p class="chat-content">
                        ${msg.value}
                    </p>
                </div>
            </div>
        `).appendTo($('.chat-display'));  
        var objDiv = document.getElementById("chat-display");
                    objDiv.scrollTop = objDiv.scrollHeight;
        
        //Track sensitive question and use it with user
        let valueInLowerCase = msg.value.toLowerCase();
        let socketTrigger = reverseSpeechTest(valueInLowerCase);//Socket is trigger in here
        if(socketTrigger == 'socket'){
            socket.emit('bot_chat', { //Send to bot server
                'device_id': localStorage.getItem('device_id'),
                'message': msg.value,
             });
        }
        
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

    //Store a unique identification of this device
    !localStorage.getItem('device_id') ? localStorage.setItem('device_id', randomStr(32, format)) : null;

    //Trigger the sendchat function
    const chatForm = document.querySelector('#chatForm');
    chatForm.addEventListener('submit', (e) => sendChat(e, chatForm))//Use submit event to connect to the socket connect
}

socketTrigger();//Triigger on load
