//Summary Global
    socket.on('c19-summary-global', function(data){
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
                    botMessage('Hey friend! you can type <i style="color: green;">c19</i> to try more format')
                }, 2000);
            }
        }

    });
//Country Summary
    socket.on('c19-current-country', function(data){
        const info = JSON.parse(data);
        if(info.status == 200){
            if(info.device_id === localStorage.getItem('device_id')){
                const {Country, CountryCode, 
                       NewConfirmed, NewDeaths, NewRecovered, 
                       TotalConfirmed, TotalDeaths, TotalRecovered} = info.country_summary;
                const botText = `
                <b><span styl="font-size: 15px">COVID-19 Current Statistics For Country:</span></b><br>
                <b>${Country} (${CountryCode})</b> <img src="images/country-flags-16px/16/${CountryCode.toLowerCase()}_16.png"><br><br>
                <span style="color: #0033cc;">NewConfirmed: ${NewConfirmed}</span><br>
                <span style="color: tomato;">NewDeaths: ${NewDeaths}</span><br>
                <span style="color: #009900;"> NewRecovered: ${NewRecovered}</span><br>
                <span style="color: #002080;">TotalConfirmed: ${TotalConfirmed}</span><br>
                <span style="color: red;"> TotalDeaths: ${TotalDeaths}</span><br>
                <span style="color: green;"> TotalRecovered: ${TotalRecovered}</span><br>
                <span style="float: right; text-align: right !important; background: #e6e6e6e; font-size: 10px;">
                    <b> Date: ${new Date(info.country_summary.Date).toUTCString()}</b>
                </span><br>
                `;
                botMessage(botText, randomStr(36, format))
                setTimeout(() => {
                    botMessage('Hey friend! you can type <i style="color: green;">c19</i> to try more format', randomStr(36, format))
                }, 2000);
            }
        }
        if(info.status == 400) {
            if(info.device_id === localStorage.getItem('device_id')){
                const botText = `${info.message}`;
                botMessage(botText, randomStr(36, format))
            }
        }

    });
//All Affected Counrties
socket.on('c19-summary-countries', function(data){
    const info = JSON.parse(data);

    if(info.status == 200){
        if(info.device_id === localStorage.getItem('device_id')){
            //Put into an array to re render
            countriesArray.push(...info.countries);
            renderCountriesSummary(height= '2050', len = 10, unique = `bot${randomStr(36, format)}`)
        }
    }

});