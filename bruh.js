//Standart timer starts here
let mlsec = 0;
let sec = 0;
let min = 0;
let hrs = 0;
let intervalID = 0;
const counter = document.getElementsByClassName("counter")[0];
console.log(counter);


function start() {
    stop();
    intervalID = setInterval(() => {
        let pre_stringhrs = "";
        let pre_stringmin = "";
        let pre_stringsec = "";
        let pre_stringmlsec = "";
        pre_stringhrs += (hrs < 10) ? (`0${hrs}:`) : (`${hrs}:`);
        pre_stringmin += (min < 10) ? (`0${min}:`) : (`${min}:`);
        pre_stringsec += (sec < 10) ? (`0${sec}:`) : (`${sec}:`);
        pre_stringmlsec += (mlsec < 10) ? (`0${mlsec}`) : (`${mlsec}`);
        counter.innerHTML = pre_stringhrs + pre_stringmin + pre_stringsec + pre_stringmlsec;
        mlsec += 1;
        if (mlsec == 100) {
            sec += 1;
            mlsec = 0;
        }
        if (sec == 60) {
            min += 1;
            sec = 0;
        }
        if (min == 60) {
            hrs += 1;
            min = 0;
        }
    }, 10);
}


function stop() {
    if (intervalID != 0) {
    clearInterval(intervalID);
    }}


function reset() {
    stop();
    counter.innerHTML = "00:00:00:00";
    mlsec = 0;
    sec = 0;
    min = 0;
    hrs = 0;
}


//Clear functions for standart timer
function cls() {
   sec = 0;
}
function clm() {
   min = 0;
}
function clh() {
   hrs = 0;
}


//Reverse timer(countdown timer) starts here
let revsec = 0;
let revmin = 0;
let revhrs = 0;
let revdays = 0;
let revintervalID = 0;
const reverse_counter = document.getElementsByClassName("reverse_counter")[0];
console.log(reverse_counter);


function revstart() {
    revintervalID = setInterval(() => {
        let revpre_stringdays = "";
        let revpre_stringhrs = "";
        let revpre_stringmin = "";
        let revpre_stringsec = "";
        revpre_stringdays += (revdays < 10) ? (`0${revdays}:`) : (`${revdays}:`);
        revpre_stringhrs += (hrs < 10) ? (`0${hrs}:`) : (`${hrs}:`);
        revpre_stringmin += (min < 10) ? (`0${min}:`) : (`${min}:`);
        revpre_stringsec += (sec < 10) ? (`0${sec}`) : (`${sec}`);
        reverse_counter.innerHTML = revpre_stringdays + revpre_stringhrs + revpre_stringmin + revpre_stringsec;
        revsec -= 1;
        if (revsec < 0) {
            revmin -= 1;
            revsec = 59;
        }
        if (revmin < 0) {
            revhrs -= 1;
            revmin = 59;
        }
        if (revhrs < 0) {
            revdays -= 1;
            revhrs = 23;
        }
    }, 1000);
}

function revstop() {
    if (revintervalID != 0) {
        clearInterval(revintervalID);
}}


function revreset() {
    stop();
    reverse_counter.innerHTML = "00:00:00:00";
    revmlsec = 0;
    revsec = 0;
    revmin = 0;
    revhrs = 0;
}


//Clear functions for reverse timer(countdown timer) no seconds bc fuck you
function revclm() {
    revmin = 0;
}
function revclh() {
    revhrs = 0;
}
function revcld() {
    revdays = 0;
}


//self explanatory
function input_time() {
    time = prompt("Enter the time in this format DD:HH:MM:SS (keep in mind, that you don't have to place zero before number which is less than 10!)");
    if (time !== null) {
        let [days, hours, minutes, seconds] = time.split(":");

        revdays = Number(days);
        revhrs = Number(hours);
        revmin = Number(minutes);
        revsec = Number(seconds);
        
        let revpre_stringdays_time_function = (revdays < 10) ? `0${revdays}:` : `${revdays}:`;
        let revpre_stringhrs_time_function = (revhrs < 10) ? `0${revhrs}:` : `${revhrs}:`;
        let revpre_stringmin_time_function = (revmin < 10) ? `0${revmin}:` : `${revmin}:`;
        let revpre_stringsec_time_function = (revsec < 10) ? `0${revsec}` : `${revsec}`;
        
        reverse_counter.innerHTML = revpre_stringdays_time_function + revpre_stringhrs_time_function + revpre_stringmin_time_function + revpre_stringsec_time_function;
        alert("Time is set - " + reverse_counter.innerHTML + "!");
    } else {
        alert("You canceled the input.");
    }
}


//Do not touch that filthy animal!
let indian = document.getElementById("horny");
function indian_playboy() {
    let indian = new Audio("./meme.mp3");
    indian.play()
}
play.addEventListener("click", indian_playboy)


let advice = document.getElementById("latinas");
function latinas() {
    let advice = new Audio("./meme.mp4");
    advice.play()
}
advice.addEventListener("click", latinas)