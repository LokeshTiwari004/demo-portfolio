let writter = document.getElementById('writter');
let welcomeLinesWrapper = document.getElementById('welcome-lines-content-wrapper');


const blink = {
    duration: 400,
    timingFunction: timingFunctions.quad,
    draw: function (progress){
        progress = Math.round( progress * 1000 );
        if (progress < 700){
            writter.style.opacity = '1';
        } else {
            writter.style.opacity = '0';
        }
    }
}



let start = Date.now()
const blinks = function () {
    
    time = Date.now() - start;
    if (time > 1000) {
        start = Date.now()
        animate(blink);
    }

    requestAnimationFrame(blinks)
}
blinks();



let greeting = document.getElementById('greeting')
const greetingContent = greeting.innerHTML;
const greetingContentLength = greetingContent.length;
greeting.innerHTML = '';
const writeGreeting = {
    duration: 2000,
    timingFunction: timingFunctions.linear,
    delay: 0,
    draw: function (progress) {
        greeting.innerHTML = greetingContent.slice(0, Math.ceil(progress * greetingContentLength)) ;
    }
}
animate(writeGreeting);



let line = document.getElementById('line');
const drawLine = {
    duration: 2000,
    timingFunction: timingFunctions.getNthPol(2),
    delay: 0,
    draw: function (progress) {
        line.style.width = `${progress * 100}%`;
        if (progress == 1) {
            writter.style.height ='25px'
            welcomeLinesWrapper.removeChild(writter);
            welcomeLinesWrapper.insertAdjacentElement('beforeend', writter);
        }
    }
}
animate(drawLine);



let welcomeWords = document.getElementById('welcome-words');
const welcomeWordsContent = welcomeWords.innerHTML;
const welcomeWordsContentLength = welcomeWordsContent.length;
welcomeWords.innerHTML = ''
const writeWelcomeWords = {
    duration: 10000,
    timingFunction: alterTF.easeInOut(timingFunctions.pseudoBounce(.18, 1, 1)),
    delay: 2000,
    draw: function (progress) {
        let upto = Math.floor(progress * welcomeWordsContentLength);
        welcomeWords.innerHTML = welcomeWordsContent.slice(0, upto);
    }
}

animate(writeWelcomeWords);