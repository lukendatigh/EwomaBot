const botMessage = (chat) => {
    if ($('.message-input').val() != '') {
      return false;
    }
    $('<div class="message loading new"><figure class="avatar"><img src="images/bot.png" /></figure><span></span></div>').appendTo($('.messages-content'));
    
  
    setTimeout(() => {
      $('.message.loading').remove();
      $('<div class="message new"><figure class="avatar"><img src="images/bot.png" /></figure>' + chat + '</div>').appendTo($('.messages-content')).addClass('new');
    }, 1500);
  
  }


  window.addEventListener('load', (event) => {
    setTimeout(() => {
      botMessage('hello, i am Convid Verify')
    }, 100);
    setTimeout(() => {
      botMessage('you can ask me anything about Corona virus and i will be sure to help out')
    }, 2000);
  })