//get Summary Statistics Globally from server api request
const statC19SummaryGlobal = (stripSpaces) => {
    socket.emit('stat-c19-summary-global', { //Send to bot server
        'device_id': localStorage.getItem('device_id')
    });
}

//get Summary Statistics For Countries from server api request
const statC19CurrentCountry = (stripSpaces) => {
    const rmDefaultText = stripSpaces.replace('stat-c19-current-', '');
    console.log(rmDefaultText)
    socket.emit('stat-c19-current-country', { //Send to bot server
        'device_id': localStorage.getItem('device_id'),
        'message': rmDefaultText
    });

}
//get Summary case Status for all affected country

const statC19SummaryCountries = (stripSpaces) => {
    socket.emit('stat-c19-summary-countries', { //Send to bot server
        'device_id': localStorage.getItem('device_id')
    });
}
