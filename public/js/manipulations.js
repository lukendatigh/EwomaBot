
const renderCountriesSummary = (height, len, unique, pass = 'default') => {
    let botText = '';
    let loadMore = '';
    let loadMoreHeight;

    Number(len) >= 220 ? loadMoreHeight = 'auto' : loadMoreHeight =  Number(height) + 2050;
   
    countriesArray.map((x, i) => {
        const {Country, CountryCode, 
            NewConfirmed, NewDeaths, NewRecovered, 
            TotalConfirmed, TotalDeaths, TotalRecovered} = x;

        botText += `
        <b>${i+1}. <span styl="font-size: 15px">COVID-19 Current Statistics For Country:</span></b><br>
        <b>${Country} (${CountryCode})</b> <img src="images/country-flags-16px/16/${CountryCode.toLowerCase()}_16.png"><br><br>
        <span style="color: #0033cc;">NewConfirmed: ${NewConfirmed}</span><br>
        <span style="color: tomato;">NewDeaths: ${NewDeaths}</span><br>
        <span style="color: #009900;"> NewRecovered: ${NewRecovered}</span><br>
        <span style="color: #002080;">TotalConfirmed: ${TotalConfirmed}</span><br>
        <span style="color: red;"> TotalDeaths: ${TotalDeaths}</span><br>
        <span style="color: green;"> TotalRecovered: ${TotalRecovered}</span><br>
        <span style="float: right; text-align: right !important; 
        border-bottom: 1px solid #e6e6e6;
        background: #e6e6e6e; font-size: 10px;">
            <b>${new Date(x.Date).toUTCString()}</b>
        </span><br><br>
        `;
    });
    if(loadMoreHeight != 'auto') {
        loadMore = `
        <div class="col-12 row">
            <div class="loadMoreBtn row">
                <span class="loadMoreTrigger" data-id="${unique}" data-height="${loadMoreHeight}" data-len="${Number(len) + 10}">Load More</span>
                <span class="loadAllTrigger" data-id="${unique}" data-height="auto" data-len="247">Load All</span>
            </div>
        </div>
        `;
    }else {
        loadMore = `
        <div class="col-12 row">
            <div class="loadMoreBtn row">
                <span style="color: white; border: 1px solid tomato; background: tomato;" class="loadCloseTrigger" data-id="${unique}" data-height="2050" data-len="10">Close</span>
            </div>
        </div>
        `;
    }
    
    if(pass == 'default') {
        botMessage(botText, unique, loadMore, height)
        setTimeout(() => {
            botMessage('Hey friend! you can type <i style="color: green;">c19</i> to try more format', randomStr(36, format))
        }, 2000);
    }else {
        return {
            botText,
            loadMore,
            loadMoreHeight
        }
    }
}

//This controls the load more countries and load all countries
const loadMoreCountiresBtn = (e) => {
    const id = e.target.dataset.id;
    const height = e.target.dataset.height;
    const len = e.target.dataset.len;
    const chattext = document.querySelector(`#${id}`);
    let chatHeight = 'auto';
    //update the chat Dom
    (height != 'auto') ? chatHeight = `${Number(height)}px` : null;

    const data = renderCountriesSummary(height, len, id, pass = 'load') 

    chattext.innerHTML = `
        <div class="single-chat bot-messages mt-2">
                <figure class="avatar">
                    <img src="images/avatar.png" />
                </figure> 
                <p class="chat-content" style="height: ${chatHeight}">
                    ${data.botText}
                </p>
                ${data.loadMore}
        </div>
    `;
    if(data.loadMoreHeight != 'auto'){
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

}


//This controls the load more countries and load all countries
const loadAllFunc = (e) => {
    const id = e.target.dataset.id;
    const height = e.target.dataset.height;
    const len = e.target.dataset.len;
    const chattext = document.querySelector(`#${id}`);
    //update the chat Dom

    const data = renderCountriesSummary(height, len, id, pass = 'load') 

    chattext.innerHTML = `
            <div class="single-chat bot-messages mt-2">
                <figure class="avatar">
                    <img src="images/avatar.png" />
                </figure> 
                <p class="chat-content" style="height: ${height}">
                    ${data.botText}
                </p>
                ${data.loadMore}
            </div>
    `;
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

}

const loadCloseFunc = (e) => {
    const id = e.target.dataset.id;
    const height = e.target.dataset.height;
    const len = e.target.dataset.len;
    const chattext = document.querySelector(`#${id}`);
    //update the chat Dom

    const data = renderCountriesSummary(height, len, id, pass = 'load');
    chattext.innerHTML = `
        <div class="single-chat bot-messages mt-2">
            <figure class="avatar">
                <img src="images/avatar.png" />
            </figure> 
            <p class="chat-content" style="height: ${Number(height)}px; overflow: hidden;">
                ${data.botText}
            </p>
            ${data.loadMore}
        </div>
    `;
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

}

