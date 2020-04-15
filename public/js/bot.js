const socketTrigger = () => {
    var socket = io('http://127.0.0.1:3333');//Hode the url of the server

    const sendChat = (e) => {
        e.preventDefault(); 
        
        let msg = document.querySelector('#MSG');//Get the message input
        socket.emit('bot_chat', msg.value);//Send to bot server
        
        msg.value = '';
        return false;
    }
    
    const chatForm = document.querySelector('#chatForm');
    chatForm.addEventListener('submit', (e) => sendChat(e, chatForm))//Use submit event to connect to the socket connect
}

socketTrigger();//Triigger on load
