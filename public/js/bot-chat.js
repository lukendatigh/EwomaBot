const botMessage = (chat) => {
    if ($('.chat-display').val() != '') {
      return false;
    }
    $(`<div class="preloader_div loading new ">
          <figure class="avatar">
            <img src="images/avatar.png" />
          </figure><span></span>
      </div>`).appendTo($('.chat-display'));
       
       var objDiv = document.getElementById("chat-display");
                    objDiv.scrollTop = objDiv.scrollHeight;
  
    setTimeout(() => {
      $('.preloader_div.loading').remove();
      $(`  <div class="col-12 single-chat-message-area">
               <div class="single-chat bot-messages mt-2">
                  <figure class="avatar">
                      <img src="images/avatar.png" />
                  </figure> 
                <p class="chat-content">
                ${chat}
                </p>
            </div>`).appendTo($('.chat-display'));
            var objDiv = document.getElementById("chat-display");
            objDiv.scrollTop = objDiv.scrollHeight;
    }, 1500);
    
  }


  window.addEventListener('load', (event) => {
    setTimeout(() => {
      botMessage(`Hello I'm Ewoma.`)
    }, 100);
    setTimeout(() => {
      botMessage(`What can I help you with today? (e.g., Current status of COVID-19 in Nigeria)`)
    }, 2000);
  })