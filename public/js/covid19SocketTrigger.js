//get Summary Statistics Globally from server api request
const c19SummaryGlobal = (stripSpaces) => {
    socket.emit('c19-summary-global', { //Send to bot server
        'device_id': localStorage.getItem('device_id')
    });
}

//get Summary Statistics For Countries from server api request
const c19CurrentCountry = (stripSpaces) => {
    const rmDefaultText = stripSpaces.replace('c19-current-', '');
    socket.emit('c19-current-country', { //Send to bot server
        'device_id': localStorage.getItem('device_id'),
        'message': rmDefaultText
    });

}
//get Summary case Status for all affected country

const c19SummaryCountries = (stripSpaces) => {
    socket.emit('c19-summary-countries', { //Send to bot server
        'device_id': localStorage.getItem('device_id')
    });
}

//Get summary from day one for a particular country
const c19DayOne = (stripSpaces) => {
    //Handle two format Request
    const rmDefaultText = stripSpaces.replace('c19-dayone-', '');
    const toArray = rmDefaultText.split('-');
    if(toArray.length == 1) {
        //For Country
        console.log(toArray[0]);
        //Call the socket for the country format 
        socket.emit('c19-dayone-country', { //Send to bot server
            'device_id': localStorage.getItem('device_id'),
            'message': {
                'country': toArray[0],
            }
        });
        
    } else if(toArray.length == 2){
        //For status and country
        console.log(toArray[1])
        if(!(toArray[1] == 'confirmed' || toArray[1] == 'recovered' || toArray[1] == 'deaths')) {
            botMessage(`Oops! you made a typo in your spelling, please only three status are currently accepted</br>
            (confirmed, recovered, deaths).`, unique = `bot${randomStr(36, format)}`);
            return false;
        }
        //Call a socket for the country and status format
        socket.emit('c19-dayone-country-status', { //Send to bot server
            'device_id': localStorage.getItem('device_id'),
            'message': {
                'country': toArray[0],
                'status': toArray[1]
            }
        });
    }else {
        //return error to the use 
        botMessage(`Oops! i noctice that you are not using the right COVID-19 statistics format,
        please type <i style="color: green;">c19</i> to get more information.`, unique = `bot${randomStr(36, format)}`);
        return false;
    }
}
