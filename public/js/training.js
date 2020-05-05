const reverseSpeechTest = (valueInLowerCase) => {
    let reverseSpeech = 'Hmmmmm';
    if(valueInLowerCase.startsWith('my name is')) {
        var res =  valueInLowerCase.replace('my name is', '');
        
      
        reverseSpeech = `Hello ${res}, i hope your health is okay!`;

        botMessage(reverseSpeech);
        setTimeout(() => {
            botMessage(`I am Ewoma, You can ask me any question about COVID-19, i promise to be of help.`)
        }, 2000);
        return 'non-socket';
             //prints: 123
    }else if(valueInLowerCase.startsWith('hello my name is')) {
        var res =  valueInLowerCase.replace('hello my name is', '');
        
        reverseSpeech = `Hello ${res}, nice to meet you!`;

        botMessage(reverseSpeech);
        setTimeout(() => {
            botMessage(`I am Ewoma, You can ask me any question about COVID-19 virus, i promise to be of help.`)
        }, 2000);
        return 'non-socket';
             //prints: 123
    }else if(valueInLowerCase.startsWith('helo my name is')) {
        var res =  valueInLowerCase.replace('helo my name is', '');
        
        reverseSpeech = `Hey ${res}, nice to meet you!`;

        botMessage(reverseSpeech);
        setTimeout(() => {
            botMessage(`I am Ewoma, You can ask me any question about COVID-19 virus, i promise to be of help.`)
        }, 2000);
        return 'non-socket';
             //prints: 123
    }else if(valueInLowerCase.startsWith('hey my name is')) {
        var res =  valueInLowerCase.replace('hey my name is', '');
        
        reverseSpeech = `Hey ${res}, what a nice name!`;

        botMessage(reverseSpeech);
        setTimeout(() => {
            botMessage(`I am Ewoma by the way, You can ask me any question about COVID-19 virus, i promise to be of help.`)
        }, 2000);
        return 'non-socket';
             //prints: 123
    }else if(valueInLowerCase.startsWith('i am')) {
        var res =  valueInLowerCase.replace('i am', '');
        
        reverseSpeech = `Hy ${res}, i am Ewoma, ask me any question about COVID-19 virus, i promise to be of help`;

        botMessage(reverseSpeech);
        return 'non-socket';
             //prints: 123
    }else if(valueInLowerCase.startsWith('is my name')) {
        var res =  valueInLowerCase.replace('is my name', '');
        
        reverseSpeech = `How're you doing ${res}, i believe you are awesome!`;

        botMessage(reverseSpeech);
        setTimeout(() => {
            botMessage("Anyway i am Ewoma by name, You can ask relate any question about COVID-19 virus, i promise to be of help.")
        }, 2000);
        return 'non-socket';
             //prints: 123
    }   else {
        return 'socket';
    }
}
