let countriesArray = [];
let countriesCounter = 5;

const covid19Statistics = (valueInLowerCase, msg) => {
    const stripSpaces = valueInLowerCase.replace(/\s+/g, '');

    if (stripSpaces.startsWith('stat-c19')) {
        var getdata = valueInLowerCase.replace('stat-c19', '');
        console.log(stripSpaces);
        console.log(getdata)
        if (getdata == '') {
            const defaultSpeech = defaultSpeechFunc();
            const messageBox = document.querySelector("#MSG");
            messageBox.value = 'stat-c19-current-nigeria';
            botMessage(defaultSpeech);
            setTimeout(() => {
                botMessage(`Press send button to test example for statistics in nigeria.`)
            }, 2000);
        }else if(stripSpaces.startsWith('stat-c19-summary-global') && stripSpaces == 'stat-c19-summary-global'){
            formatChecker(stripSpaces)
            statC19SummaryGlobal(stripSpaces)
            msg.value = '';
        }else if(stripSpaces.startsWith('stat-c19-current')){
            formatChecker(stripSpaces) 
            statC19CurrentCountry(stripSpaces)
            msg.value = '';
        }else if(stripSpaces.startsWith('stat-c19-summary-countries')){
            formatChecker(stripSpaces) 
            statC19SummaryCountries(stripSpaces)
            msg.value = '';
        }else{
            const messageBox = document.querySelector("#MSG");
            messageBox.value = 'stat-c19';
            botMessage(`Oops! i noctice that you are not using the right COVID-19 statistic format,
            please type <i style="color: green;">stat-c19</i> to get more information.`);
        }

        return 'non-socket';
    } else if (stripSpaces.includes("statistic")
        || stripSpaces.includes("statistics")
        || stripSpaces.includes("stat")
        || stripSpaces.includes("number")
        || stripSpaces.includes("total")
        || stripSpaces.includes("well")
        || stripSpaces.includes("healed")
        || stripSpaces.includes("confirmed")
        || stripSpaces.includes("recovery")
        || stripSpaces.includes("recovered")
        || stripSpaces.includes("death")
        || stripSpaces.includes("die")
        || stripSpaces.includes("died")) {

        const defaultSpeech = defaultSpeechFunc();
        const messageBox = document.querySelector("#MSG");
        messageBox.value = 'stat-c19-current-nigeria';
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
                <b><span style="color: #29a329;">----> stat-c19-summary-global</span></b> <br> 
                <span style="color: grey; font-weight:bold;">Try this example:<br>
                    ----> stat-c19-summary-global
                </span>
            </small>
            <br><br>
            <b>2. To get current and summary case status for a particular country:
            <i class="fa fa-flag" aria-hidden="true"></i>
            </b><br>
            <small style="font-size: 12px; font-weight: bold;">
                <b><span style="color: #29a329;">----> stat-c19-current-country</span></b> <br> 
                <span style="color: #ff6699; font-size: 10px;">
                    <span style="color: #ff6699;">Please note:</span> 
                    Countries with spaces should be seperated with "/" see example South Africa below.
                </span><br>
                <span style="color: grey; font-weight:bold;">Try this example:<br>
                    ----> stat-c19-current-nigeria <br>
                    ----> stat-c19-current-south/africa
                </span>
            </small>
            <br><br>
            <b>3. To get current and summary case status for different affected countries:
            <i class="fa fa-flag" aria-hidden="true"></i>
            </b><br>
            <small style="font-size: 12px;">
                <b><span style="color: #29a329;">----> stat-c19-summary-countries</span></b> <br> 
                <span style="color: grey; font-weight:bold;">Try this example:<br>
                    ----> stat-c19-summary-countries
                </span>
            </small>
            <br><br>
            <b>4. To get all case status for a particular country beginning from it's first recorded date:</b><br>
            <small style="font-size: 12px; font-weight: bold;">
                <b><span style="color: #29a329;">----> stat-c19-dayone-allcases-country</span></b> <br> 
                <span style="color: #ff6699; font-size: 10px;">
                    <span style="color: #ff6699; ">Please note:</span> 
                    Countries with spaces should be seperated with "/" see example South Africa below.
                </span><br>
                <span style="color: grey; font-weight:bold;">Try this example:<br>
                        ----> stat-c19-dayone-allcases-nigeria <br>
                        ----> stat-c19-dayone-allcases-south/africa
                </span>
            </small>
            <br><br>
            <b>5. To get a case status for a country beginning from it's first recorded date:</b><br>
            <small style="font-size: 12px; font-weight: bold;">
                <b><span style="color: #29a329;">----> stat-c19-dayone-country-status</span></b> <br>
                <span style="color: #ff6699; font-size: 10px;">
                <span style="color: #ff6699;">
                Please note:</span> status can only be (confirmed, recovered or deaths).
                </span><br>
                <span style="color: grey; font-weight:bold;">Try this example:<br>
                     ----> stat-c19-dayone-nigeria-confirmed <br>
                     ----> stat-c19-dayone-canada-recovered <br>
                     ----> stat-c19-dayone-south/africa-recovered <br>
                     ----> stat-c19-dayone-canada-deaths
                </span>
            </small>
            <br><br>
            <b>6. To get all case status for a country with date range:</b><br>
            <small style="font-size: 12px; font-weight: bold;">
                <b><span style="color: #29a329;">----> stat-c19-date-country-fromdate-todate</span></b> <br>
                <span style="color: #ff6699; font-size: 10px;">
                    <span style="color: #ff6699;">Please note:</span> 
                    Date must be in this format YYYY/MM/DD<br>
                    where: [YYYY = Year][MM = Month][DD = Day]
                </span><br>
                <span style="color: grey; font-weight:bold;">Try this example:<br>
                        ----> stat-c19-date-nigeria-2020/03/20-2020/05/02 <br>
                        ----> stat-date-c19-ghana-2020/03/20-2020/05/02 <br> 
                        ----> stat-date-c19-canada-2020/03/20-2020/05/02
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
    please type <i style="color: green;">stat-c19</i> to get more information.`;

    if(!formatCheckText.test(text)) {
        messageBox.value = 'stat-c19';
        botMessage(errorText, randomStr(36, format));
        return false;
    }
    if(formatCheckSlashEnding.test(text)) {
        messageBox.value = 'stat-c19';
        botMessage(errorText, randomStr(36, format));
        return false;
    }
    if(formatCheckDashEnding.test(text)) {
        messageBox.value = 'stat-c19';
        botMessage(errorText, randomStr(36, format));
        return false;
    }
    if(text.indexOf('-/') != -1 || text.indexOf('/-') != -1){
        messageBox.value = 'stat-c19';
        botMessage(errorText, randomStr(36, format));
        return false;
    }
}