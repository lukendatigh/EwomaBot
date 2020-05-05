let countriesArray = [];
let countriesCounter = 5;

const covid19Statistics = (valueInLowerCase, msg) => {
    const stripSpaces = valueInLowerCase.replace(/\s+/g, '');

    if (stripSpaces.startsWith('c19')) {
        var getdata = valueInLowerCase.replace('c19', '');
    
        if (getdata == '') {
            const defaultSpeech = defaultSpeechFunc();
            const messageBox = document.querySelector("#MSG");
            messageBox.value = 'c19-current-nigeria';
            botMessage(defaultSpeech);
            setTimeout(() => {
                botMessage(`Press send button to test example for statistics in nigeria.`)
            }, 2000);
        }else if(stripSpaces.startsWith('c19-summary-global') && stripSpaces == 'c19-summary-global'){
            formatChecker(stripSpaces)
            c19SummaryGlobal(stripSpaces)
            msg.value = '';
        }else if(stripSpaces.startsWith('c19-current')){
            if(stripSpaces == 'c19-current' || stripSpaces == 'c19-current-') {
                botMessage(`Hmmm, your format seems incomplete. i think you mean 
                <i style="color: green;">c19-current-country</i> eg. (<b>c19-current-nigeria</b>)`);
                return false;
            }
            if(stripSpaces == 'c19-current-country') {
                botMessage(`Oh yeah! that certainly is the correct format, 
                but you doing it all wrong, you are using my format style, 
                please replace country with adequate data, (eg. <b>c19-current-ghana</b>)`);
                return false;
            }
            formatChecker(stripSpaces) 
            c19CurrentCountry(stripSpaces)
            msg.value = '';
        }else if(stripSpaces.startsWith('c19-summary-countries')  && stripSpaces == 'c19-summary-countries'){
            formatChecker(stripSpaces) 
            c19SummaryCountries(stripSpaces)
            msg.value = '';
        }else if(stripSpaces.startsWith('c19-dayone')){
            if(stripSpaces == 'c19-dayone' || stripSpaces == 'c19-dayone-') {
                botMessage(`Hmmm, your format seem incomplete. i think you mean 
                <i style="color: green;">c19-dayone-country</i> (eg. <b>c19-dayone-nigeria</b>) or 
                <i style="color: green;">c19-dayone-country-status</i> (eg. <b>c19-dayone-nigeria-confirmed</b>)`);
                return false;
            }
            if(stripSpaces == 'c19-dayone-country') {
                botMessage(`Oh yeah! that certainly is the correct format, 
                but you doing it all wrong, you are using my format style, 
                please replace country or status with adequate data!, (eg. <b>c19-dayone-ghana</b>)`);
                return false;
            }
            formatChecker(stripSpaces) 
            c19DayOne(stripSpaces)
            msg.value = '';
        }else{
            const messageBox = document.querySelector("#MSG");
            messageBox.value = 'c19';
            botMessage(`Oops! i noctice that you are not using the right COVID-19 statistic format,
            please type <i style="color: green;">c19</i> to get more information.`);
        }

        return 'non-socket';
    } else if (stripSpaces.includes("statistic")
        || stripSpaces.includes("statistics")
        || stripSpaces.includes("stat")
        || stripSpaces.includes("cases")
        || stripSpaces.includes("total well")
        || stripSpaces.includes("total healed")
        || stripSpaces.includes("total confirmed")
        || stripSpaces.includes("total recovery")
        || stripSpaces.includes("total recovered")
        || stripSpaces.includes("total death")
        || stripSpaces.includes("total deaths")
        || stripSpaces.includes("total die")
        || stripSpaces.includes("total died")) {

        const defaultSpeech = defaultSpeechFunc();
        const messageBox = document.querySelector("#MSG");
        messageBox.value = 'c19-current-nigeria';
        botMessage(defaultSpeech);
        setTimeout(() => {
            botMessage(`Press send button to test example for statistics in nigeria.`)
        }, 2000);
        return 'non-socket';
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
                <b><span style="color: #29a329;">----> c19-summary-global</span></b> <br> 
                <span style="color: grey; font-weight:bold;">Try this example:<br>
                    ----> c19-summary-global
                </span>
            </small>
            <br><br>
            <b>2. To get current and summary case status for a particular country:
            <i class="fa fa-flag" aria-hidden="true"></i>
            </b><br>
            <small style="font-size: 12px; font-weight: bold;">
                <b><span style="color: #29a329;">----> c19-current-country</span></b> <br> 
                <span style="color: #ff6699; font-size: 10px;">
                    <span style="color: #ff6699;">Please note:</span> 
                    Countries with spaces should be seperated with "/" see example South Africa below.
                </span><br>
                <span style="color: grey; font-weight:bold;">Try this example:<br>
                    ----> c19-current-nigeria <br>
                    ----> c19-current-south/africa
                </span>
            </small>
            <br><br>
            <b>3. To get current and summary case status for different affected countries:
            <i class="fa fa-flag" aria-hidden="true"></i>
            </b><br>
            <small style="font-size: 12px;">
                <b><span style="color: #29a329;">----> c19-summary-countries</span></b> <br> 
                <span style="color: grey; font-weight:bold;">Try this example:<br>
                    ----> c19-summary-countries
                </span>
            </small>
            <br><br>
            <b>4. To get all case status for a particular country beginning from it's first recorded date:</b><br>
            <small style="font-size: 12px; font-weight: bold;">
                <b><span style="color: #29a329;">----> c19-dayone-country</span></b> <br> 
                <span style="color: #ff6699; font-size: 10px;">
                    <span style="color: #ff6699; ">Please note:</span> 
                    Countries with spaces should be seperated with "/" see example South Africa below.
                </span><br>
                <span style="color: grey; font-weight:bold;">Try this example:<br>
                        ----> c19-dayone-nigeria <br>
                        ----> c19-dayone-south/africa
                </span>
            </small>
            <br><br>
            <b>5. To get a case status for a country beginning from it's first recorded date:</b><br>
            <small style="font-size: 12px; font-weight: bold;">
                <b><span style="color: #29a329;">----> c19-dayone-country-status</span></b> <br>
                <span style="color: #ff6699; font-size: 10px;">
                <span style="color: #ff6699;">
                Please note:</span> status can only be (confirmed, recovered or deaths).
                </span><br>
                <span style="color: grey; font-weight:bold;">Try this example:<br>
                     ----> c19-dayone-nigeria-confirmed <br>
                     ----> c19-dayone-canada-recovered <br>
                     ----> c19-dayone-south/africa-recovered <br>
                     ----> c19-dayone-canada-deaths
                </span>
            </small>
            <br><br>
            <b>6. To get all case status for a country with date range:</b><br>
            <small style="font-size: 12px; font-weight: bold;">
                <b><span style="color: #29a329;">----> c19-date-country-fromdate-todate</span></b> <br>
                <span style="color: #ff6699; font-size: 10px;">
                    <span style="color: #ff6699;">Please note:</span> 
                    Date must be in this format YYYY/MM/DD<br>
                    where: [YYYY = Year][MM = Month][DD = Day]
                </span><br>
                <span style="color: grey; font-weight:bold;">Try this example:<br>
                        ----> c19-date-nigeria-2020/03/20-2020/05/02 <br>
                        ----> c19-date-ghana-2020/03/20-2020/05/02 <br> 
                        ----> c19-date-canada-2020/03/20-2020/05/02
                </span>
            </small>
            `
}

const formatChecker = (text) => {
    const formatCheckText = /^[a-z0-9-/]+$/i;
    const formatCheckSlashEnding = /\/$/
    const formatCheckDashEnding = /-$/
    const messageBox = document.querySelector("#MSG");
    const errorText = `Oops! i noctice that you are not using the right COVID-19 statistic format,
    please type <i style="color: green;">c19</i> to get more information.`;

    if(!formatCheckText.test(text)) {
        messageBox.value = 'c19';
        botMessage(errorText, randomStr(36, format));
        return false;
    }
    if(formatCheckSlashEnding.test(text)) {
        messageBox.value = 'c19';
        botMessage(errorText, randomStr(36, format));
        return false;
    }
    if(formatCheckDashEnding.test(text)) {
        messageBox.value = 'c19';
        botMessage(errorText, randomStr(36, format));
        return false;
    }
    if(text.indexOf('-/') != -1 || text.indexOf('/-') != -1){
        messageBox.value = 'c19';
        botMessage(errorText, randomStr(36, format));
        return false;
    }
}