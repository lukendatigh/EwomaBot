//Summary Global
    socket.on('summary-global', function(data){
        const info = JSON.parse(data);
        if(info.status == 200){
            console.log(info.global)
            if(info.device_id === localStorage.getItem('device_id')){
                const botText = `
                <b><span styl="font-size: 15px">COVID-19 Global Case Statistics</span></b> &#x1F30E<br><br>
                <span style="color: #0033cc;">NewConfirmed: ${info.global.NewConfirmed}</span><br>
                <span style="color: tomato;">NewDeaths: ${info.global.NewDeaths}</span><br>
                <span style="color: #009900;"> NewRecovered: ${info.global. NewRecovered}</span><br>
                <span style="color: #002080;">TotalConfirmed: ${info.global.TotalConfirmed}</span><br>
                <span style="color: red;"> TotalDeaths: ${info.global. TotalDeaths}</span><br>
                <span style="color: green;"> TotalRecovered: ${info.global. TotalRecovered}</span><br>
                <span style="float: right; text-align: right !important; 
                    border-bottom: 1px solid #e6e6e6;
                    background: #e6e6e6e; font-size: 10px;">
                        <b>${new Date().toUTCString()}</b>
                </span>
                `;
                botMessage(botText)
                setTimeout(() => {
                    botMessage('You can type <i style="color: red;">c19</i> to try more format!', unique = `bot${randomStr(36, format)}`)
                }, 2000);
            }
        }

    });
//Country Summary
    socket.on('current-country', function(data){
        const info = JSON.parse(data);
        if(info.status == 200){
            if(info.device_id === localStorage.getItem('device_id')){
                const {Country, CountryCode, 
                       TotalConfirmed, TotalDeaths, TotalRecovered} = info.country_summary;
                const botText = `
                <b><span styl="font-size: 15px">COVID-19 Current Statistics For Country:</span></b><br>
                <b>${Country} (${CountryCode})</b> <img src="images/country-flags-16px/16/${CountryCode.toLowerCase()}_16.png"><br><br>
                <span style="color: #002080;">TotalConfirmed: ${TotalConfirmed}</span><br>
                <span style="color: red;"> TotalDeaths: ${TotalDeaths}</span><br>
                <span style="color: green;"> TotalRecovered: ${TotalRecovered}</span><br>
                <span style="float: right; text-align: right !important; background: #e6e6e6e; font-size: 10px;">
                    <b> Date: ${new Date(info.country_summary.Date).toUTCString()}</b>
                </span><br>
                `;
                botMessage(botText, unique = `bot${randomStr(36, format)}`)
                setTimeout(() => {
                    botMessage('You can type <i style="color: red;">c19</i> to try more format!', randomStr(36, format))
                }, 2000);
            }
        }
        if(info.status == 400) {
            if(info.device_id === localStorage.getItem('device_id')){
                const botText = `${info.message}`;
                botMessage(botText, unique = `bot${randomStr(36, format)}`)
            }
        }

    });
//All Affected Counrties
socket.on('summary-countries', function(data){
    const info = JSON.parse(data);

    if(info.status == 200){
        if(info.device_id === localStorage.getItem('device_id')){
            //Put into an array to re render
            countriesArray.push(...info.countries);
            renderCountriesSummary(height= '2050', len = 10, unique = `bot${randomStr(36, format)}`)
        }
    }
});
//From Dayone of Infection
socket.on('dayone-country', function(data){
    const info = JSON.parse(data);
    let botText = '';
    if(info.status == 200){
        if(info.device_id === localStorage.getItem('device_id')){
            botText += `
            <b><span styl="font-size: 13px">Detailed Information of 
            COVID-19 Pandemic from first recorded date to current date.</span></b></br></br>
            `;
            info.dayone.map((x, i) => {
                const {Active, Country, Confirmed, CountryCode, Deaths, Recovered} = x;
                botText += `
                    <b><span style="font-size: 12px"><span style="color: grey;">Day ${i+1}.</span> COVID-19 Statistics For Country:</span></b><br>
                    <b>${Country} (${CountryCode})</b> <img src="images/country-flags-16px/16/${CountryCode.toLowerCase()}_16.png"><br><br>
                    <span style="color: #002080;">Active: ${Active}</span><br>
                    <span style="color: #002080;">Confirmed: ${Confirmed}</span><br>
                    <span style="color: red;"> Deaths: ${Deaths}</span><br>
                    <span style="color: green;"> Recovered: ${Recovered}</span><br>
                    <span style="float: right; text-align: right !important; 
                    border-bottom: 1px solid #e6e6e6;
                    background: #e6e6e6e; font-size: 10px;">
                        <b>${new Date(x.Date).toUTCString()}</b>
                    </span><br><br>
                `;
            })

            botMessage(botText, unique = `bot${randomStr(36, format)}`)
        }
    }
    if(info.status == 400) {
        if(info.device_id === localStorage.getItem('device_id')){
            const botText = `${info.message}`;
            botMessage(botText, unique = `bot${randomStr(36, format)}`)
        }
    }
});
//From Dayone of Infection and status
socket.on('dayone-country-status', function(data){
    const info = JSON.parse(data);
    let botText = '';
    let color = 'grey';
    if(info.status == 200){
        if(info.device_id === localStorage.getItem('device_id')){
            info.caseStatus == 'Confirmed' ? color = '#002080': null;
            info.caseStatus == 'Recovered' ? color = 'green': null;
            info.caseStatus == 'Deaths' ? color = 'red': null;
            botText += `
            <b><span styl="font-size: 13px">Detailed Information of 
            COVID-19 Pandemic from first recorded date to current date with Case Status 
            <span style="color: ${color};">${info.caseStatus}</span>.
            </span></b></br></br>
            `;
            info.dayone.map((x, i) => {
                const {Country, Cases, CountryCode} = x;
                botText += `
                    <b><span style="font-size: 12px"><span style="color: grey;">Day ${i+1}.</span> COVID-19 ${info.caseStatus} Case Status For Country:</span></b><br>
                    <b>${Country} (${CountryCode})</b> <img src="images/country-flags-16px/16/${CountryCode.toLowerCase()}_16.png"><br><br>
                    <span style="color: ${color}; font-weight: bold;">${info.caseStatus}: ${Cases}</span><br>
                    <span style="float: right; text-align: right !important; 
                    border-bottom: 1px solid #e6e6e6;
                    background: #e6e6e6e; font-size: 10px;">
                        <b>${new Date(x.Date).toUTCString()}</b>
                    </span><br><br>
                `;
            })

            botMessage(botText, unique = `bot${randomStr(36, format)}`)
        }
    }

    if(info.status == 400) {
        if(info.device_id === localStorage.getItem('device_id')){
            const botText = `${info.message}`;
            botMessage(botText, unique = `bot${randomStr(36, format)}`)
        }
    }
});