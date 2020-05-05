

const botMessage = (chat, unique, loadMore = '', height = 'auto') => {
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
      $(`  <div id="${unique}" class="col-12 single-chat-message-area">
               <div class="single-chat bot-messages mt-2">
                  <figure class="avatar">
                      <img src="images/avatar.png" />
                  </figure> 
                    <p class="chat-content" style="height: ${height}px">
                      ${chat}
                    </p>
                    ${loadMore != '' ? loadMore : ''}
                </div>
            </div>
            `).appendTo($('.chat-display'));

            var objDiv = document.getElementById("chat-display");
            objDiv.scrollTop = objDiv.scrollHeight;
            if(height != 'auto'){
             const loadMoreTrigger = Array.from(document.querySelectorAll('.loadMoreTrigger'));
              loadMoreTrigger.map(x => {
                  x.addEventListener('click', (e) => loadMoreCountiresBtn(e))
              })
              const loadAllTrigger = Array.from(document.querySelectorAll('.loadAllTrigger'));
              loadAllTrigger.map(x => {
                  x.addEventListener('click', (e) => loadAllFunc(e))
              })
            }else {
              const loadCloseTrigger = Array.from(document.querySelectorAll('.loadCloseTrigger'));
              loadCloseTrigger.map(x => {
                  x.addEventListener('click', (e) => loadCloseFunc(e))
              })
            }
            
    }, 600);
  
  }


  window.addEventListener('load', (event) => {
    setTimeout(() => {
      botMessage(`Hello I'm Ewoma.`, randomStr(36, format))
    }, 100);
    setTimeout(() => {
      botMessage(`What can I help you with today? (e.g. Does COVID-19 have a cure?, what are the preventive measures to prevent COVID-19?).`, randomStr(36, format))
    }, 2000);
    setTimeout(() => {
      botMessage(`Type <i style="color: green;">c19</i> to get current 
      case status(confirmed, recovered, deaths) for different country.`, randomStr(36, format))
    }, 4000);
    
  })