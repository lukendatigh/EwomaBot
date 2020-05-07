let countriesArray = [];
let countriesCounter = 5;

const covid19Statistics = (valueInLowerCase, msg) => {
    let stripSpaces = valueInLowerCase.replace(/\s+/g, '');
    if (localStorage.getItem('c19-status')) {
            if(stripSpaces == 'c19'){
                botMessage(`Your are currently in <span style="color: red;">c19</span> mode.`)
                
                setTimeout(() => {
                    const defaultSpeech = defaultSpeechFunc();
                    botMessage(defaultSpeech);
                }, 2000);
                const messageBox = document.querySelector("#MSG");
                messageBox.value = 'current-nigeria';

                setTimeout(() => {
                    botMessage(`Press send button to test example for current statistics in nigeria.`)
                }, 3500);
                setTimeout(() => {
                    botMessage(`Type <span style="color:red;">#</span> to option out <span style="color: red;">c19</span> mode`)
                }, 4500);
            }else if(stripSpaces.startsWith('summary-global') && stripSpaces == 'summary-global'){
                formatChecker(stripSpaces)
                c19SummaryGlobal(stripSpaces)
                msg.value = '';
            }else if(stripSpaces.startsWith('current')){
                if(stripSpaces == 'current' || stripSpaces == 'current-') {
                    botMessage(`Hmmm, your format seems incomplete. i think you mean 
                    <i style="color: green;">current-country</i> eg. (<b>current-nigeria</b>)`);
                    return false;
                }
                if(stripSpaces == 'current-country') {
                    botMessage(`Oh yeah! that certainly is the correct format, 
                    but you doing it all wrong, you are using my format guide, 
                    please replace country with adequate data, (eg. <b>current-ghana</b>)`);
                    return false;
                }
                formatChecker(stripSpaces) 
                c19CurrentCountry(stripSpaces)
                msg.value = '';
            }else if(stripSpaces.startsWith('summary-countries')  && stripSpaces == 'summary-countries'){
                formatChecker(stripSpaces) 
                c19SummaryCountries(stripSpaces)
                msg.value = '';
            }else if(stripSpaces.startsWith('dayone')){
                if(stripSpaces == 'dayone' || stripSpaces == 'dayone-') {
                    botMessage(`Hmmm, your format seem incomplete. i think you mean 
                    <i style="color: green;">dayone-country</i> (eg. <b>dayone-nigeria</b>) or 
                    <i style="color: green;">dayone-country-status</i> (eg. <b>dayone-nigeria-confirmed</b>)`);
                    return false;
                }
                if(stripSpaces == 'dayone-country') {
                    botMessage(`Oh yeah! that certainly is the correct format, 
                    but you doing it all wrong, you are using my format guide, 
                    please replace country or status with adequate data!, (eg. <b>dayone-ghana</b>)`);
                    return false;
                }
                if(stripSpaces == 'dayone-country-status') {
                    botMessage(`Oh yeah! that certainly is the correct format, 
                    but you doing it all wrong, you are using my format guide, 
                    please replace country or status with adequate data!, (eg. <b>dayone-ghana</b>)`);
                    return false;
                }
                formatChecker(stripSpaces) 
                c19DayOne(stripSpaces)
                msg.value = '';
            }else{
                const messageBox = document.querySelector("#MSG");
                messageBox.value = 'c19';
                botMessage(`Oops! i noctice that you are not using the right COVID-19 statistics format,
                please type <i style="color: red;">c19</i> to get more information.`);
            }

        return 'non-socket';
    } else if (stripSpaces.includes("statistic")
        || stripSpaces.includes("statistics")
        || stripSpaces.includes("number")
        || stripSpaces.includes("numbers")
        || stripSpaces.includes("stat")
        || stripSpaces.includes("stats")
        || stripSpaces.includes("counts")
        || stripSpaces.includes("cases")
        || stripSpaces.includes("total")
        || stripSpaces.includes("well")
        || stripSpaces.includes("healed")
        || stripSpaces.includes("confirmed")
        || stripSpaces.includes("recovery")
        || stripSpaces.includes("recovered")
        || stripSpaces.includes("death")
        || stripSpaces.includes("deaths")
        || stripSpaces.includes("die")
        || stripSpaces.includes("died")) {

        botMessage('Type <span>c19</span> to get current statistics on COVID-19.', unique = `bot${randomStr(36, format)}`);
        // setTimeout(() => {
        //     botMessage(`Press send button to test example for statistics in nigeria.`, unique = `bot${randomStr(36, format)}`)
        // }, 2000);
        return 'socket';
    } else {
        return 'socket';
    }
}


const defaultSpeechFunc = () => {
    return `<span style="font-size: 13px; font-weight:bold;">
                To get current world statistics about COVID-19  
            </span><br>
            <i style="font-size: 12px;">please use the format below:</i>
            <br><br>
            <b>1. To get summary case status globally:
            &#x1F30E
            </b><br>
            <small style="font-size: 12px;">
                <b><span style="color: #29a329;">----> summary-global</span></b> <br> 
                <span style="color: grey; font-weight:bold;">Try this example:<br>
                    Type this: summary-global
                </span>
            </small>
            <br><br>
            <b>2. To get current and summary case status for a particular country:
            <i class="fa fa-flag" aria-hidden="true"></i>
            </b><br>
            <small style="font-size: 12px; font-weight: bold;">
                <b><span style="color: #29a329;">----> current-country</span></b> <br> 
                <span style="color: #ff6699; font-size: 10px;">
                    <span style="color: #ff6699;">Please note:</span> 
                    Countries with spaces should be seperated with "/" see example South Africa below.
                </span><br>
                <span style="color: grey; font-weight:bold;">Try this example:<br>
                    Type this:  current-nigeria <br> or
                    current-south/africa
                </span>
            </small>
            <br><br>
            <b>3. To get current and summary case status for different countries:
            <i class="fa fa-flag" aria-hidden="true"></i>
            </b><br>
            <small style="font-size: 12px;">
                <b><span style="color: #29a329;">----> summary-countries</span></b> <br> 
                <span style="color: grey; font-weight:bold;">Try this example:<br>
                    Type this: summary-countries
                </span>
            </small>
            <br><br>
            <b>4. To get all case status for a particular country beginning from it's first recorded date:</b><br>
            <small style="font-size: 12px; font-weight: bold;">
                <b><span style="color: #29a329;">----> dayone-country</span></b> <br> 
                <span style="color: #ff6699; font-size: 10px;">
                    <span style="color: #ff6699; ">Please note:</span> 
                    Countries with spaces should be seperated with "/" see example South Africa below.
                </span><br>
                <span style="color: grey; font-weight:bold;">Try this example:<br>
                        Type this: dayone-nigeria <br> or
                         dayone-south/africa
                </span>
            </small>
            <br><br>
            <b>5. To get a case status for a country beginning from it's first recorded date:</b><br>
            <small style="font-size: 12px; font-weight: bold;">
                <b><span style="color: #29a329;">----> dayone-country-status</span></b> <br>
                <span style="color: #ff6699; font-size: 10px;">
                <span style="color: #ff6699;">
                Please note:</span> status can only be (confirmed, recovered or deaths).
                </span><br>
                <span style="color: grey; font-weight:bold;">Try this example:<br>
                     Type This dayone-nigeria-confirmed <br> or
                      dayone-canada-recovered <br>or
                      dayone-south/africa-recovered <br>or
                      dayone-canada-deaths
                </span>
            </small>
            <br><br>
            <b>6. To get all case status for a country with date range:</b><br>
            <small style="font-size: 12px; font-weight: bold;">
                <b><span style="color: #29a329;">----> date-country-fromdate-todate</span></b> <br>
                <span style="color: #ff6699; font-size: 10px;">
                    <span style="color: #ff6699;">Please note:</span> 
                    Date must be in this format YYYY/MM/DD<br>
                    where: [YYYY = Year][MM = Month][DD = Day]
                </span><br>
                <span style="color: grey; font-weight:bold;">Try this example:<br>
                        ----> date-nigeria-2020/03/20-2020/05/02 <br>
                        ----> date-ghana-2020/03/20-2020/05/02 <br> 
                        ----> date-canada-2020/03/20-2020/05/02 <br>
                        ----> date-south/africa-2020/03/20-2020/05/02
                </span>
            </small>
            `
}

const formatChecker = (text) => {
    const formatCheckText = /^[a-z0-9-/]+$/i;
    const formatCheckSlashEnding = /\/$/
    const formatCheckDashEnding = /-$/
    const messageBox = document.querySelector("#MSG");
    const errorText = `Oops! i noctice that you are not using the right COVID-19 statistics format,
    please type <i style="color: red;">c19</i> to get more information.`;

    if(!formatCheckText.test(text)) {
        messageBox.value = 'c19';
        botMessage(errorText, unique = `bot${randomStr(36, format)}`);
        return false;
    }
    if(formatCheckSlashEnding.test(text)) {
        messageBox.value = 'c19';
        botMessage(errorText, unique = `bot${randomStr(36, format)}`);
        return false;
    }
    if(formatCheckDashEnding.test(text)) {
        messageBox.value = 'c19';
        botMessage(errorText, unique = `bot${randomStr(36, format)}`);
        return false;
    }
    if(text.indexOf('-/') != -1 || text.indexOf('/-') != -1){
        messageBox.value = 'c19';
        botMessage(errorText, unique = `bot${randomStr(36, format)}`);
        return false;
    }
}