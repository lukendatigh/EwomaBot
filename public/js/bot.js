//const socket = io('https://convid19verify.herokuapp.com/');//Hold the url of the server
// const socket = io('http://localhost:5000/');
const socket = io('https://ewomaappapi.herokuapp.com/');

const socketTrigger = () => {
    const sendChat = (e) => {
        e.preventDefault(); 
        
        let msg = document.querySelector('#MSG'); //Get the message input
        if ($.trim(msg.value) == '') {
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
        
        let valueInLowerCase = msg.value.toLowerCase();
        console.log(valueInLowerCase)
        
        if($.trim(valueInLowerCase) === 'c19') {
            localStorage.setItem('c19-status', true);
            document.querySelector('[data-c19]').style.display = 'block';
            document.querySelector('[data-mobileNav]').classList.add('animated', 'fadeIn')
        }
        if($.trim(valueInLowerCase) === '#') {
            if(localStorage.getItem('c19-status')) {
                localStorage.removeItem('c19-status');
                document.querySelector('[data-c19]').style.display = 'none';
                document.querySelector('[data-mobileNav]').classList.remove('animated', 'fadeIn')
                botMessage(`Your are currently out of <span style="color: red;">c19</span> mode.`, unique = `bot${randomStr(36, format)}`)
            }else {
                botMessage(`Your are not currently in <span style="color: red;">c19</span> mode.`, unique = `bot${randomStr(36, format)}`)
            }
           
            return;
        }
        

        //Track if statistic is needed 
        let statTrigger = covid19Statistics(valueInLowerCase, msg);
   
        if(statTrigger == 'socket'){
            //Track sensitive question and use it with user
            let socketTrigger = reverseSpeechTest(valueInLowerCase);//Socket is trigger in here
            if(socketTrigger == 'socket'){
                socket.emit('bot-chat', { //Send to bot server
                    'device_id': localStorage.getItem('device_id'),
                    'message': msg.value,
                });
            }
            msg.value = '';
        }

        return false;
    }

    //Store a unique identification of this device
    !localStorage.getItem('device_id') ? localStorage.setItem('device_id', randomStr(36, format)) : null;

    //Trigger the sendchat function
    const chatForm = document.querySelector('#chatForm');
    chatForm.addEventListener('submit', (e) => sendChat(e, chatForm))//Use submit event to connect to the socket connect
}

socketTrigger();//Triigger on load

//Listen for bot message event form 
socket.on('bot-chat', function(data){
    const info = JSON.parse(data);
    console.log(info)
    console.log(info.chat_info[0].queryResult.fulfillmentMessages, info.device_id)

    if(info.status == 200){
        if(info.device_id === localStorage.getItem('device_id')){
            const botMessages = info.chat_info[0].queryResult.fulfillmentMessages;
            botMessages.forEach((element, i) => {
                if(i == 0) {
                    botMessage(element.text.text, unique = `bot${randomStr(36, format)}`)
                }else {
                    setTimeout(() => {
                        botMessage(element.text.text, unique = `bot${randomStr(36, format)}`)
                    }, 2000);
                }
            });
        }
    }

});