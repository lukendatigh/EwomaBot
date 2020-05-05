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
    console.log(stripSpaces)
}
