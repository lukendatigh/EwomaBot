const botMessage = (chat) => {
    if ($('.message-input').val() != '') {
      return false;
    }
    $('<div class="message loading new"><figure class="avatar"><img src="images/bot.png" /></figure><span></span></div>').appendTo($('.messages-content'));
    
  
    setTimeout(function() {
      $('.message.loading').remove();
      $('<div class="message new"><figure class="avatar"><img src="images/bot.png" /></figure>' + chat + '</div>').appendTo($('.messages-content')).addClass('new');
    }, 1500);
  
  }


  window.addEventListener('load', (event) => {
    setTimeout(function() {
      botMessage('hello i am Convid Verify, ask me anything about Corona virus and i will be sure to help')
    }, 100);
  })