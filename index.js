let timeValue = document.querySelector(`.timeValue`);
let gettingDiv = document.querySelector(`.gettingDiv`);

let startBtn = document.querySelector(`.startBtn`);
let resetBtn = document.querySelector(`.resetBtn`);
let stopBtn = document.querySelector(`.stopBtn`);
let gettingBtn = document.querySelector(`.gettingBtn`);
let clearBtn = document.querySelector(`.clearBtn`);
let restartBtn = document.querySelector(`.restartBtn`);

let start = 0;
let setTime;



// start button started;
const startingTime = () =>{
    if (start == 0) {
        setTime = setInterval(() =>{
                timeValue.innerHTML = start++;
            }, 1000);
    }
}

startBtn.addEventListener(`click`, () =>{
    startingTime();
});
// start button closed;

// stop button started;
const stopingBtn = () =>{
        clearInterval(setTime);
        stopBtn.innerHTML = `Locked`;
        restartBtn.innerHTML = `Unlock`;
}

stopBtn.addEventListener(`click`, () =>{
    stopingBtn();
});
// stop button closed;


// clear Button started;
clearBtn.addEventListener(`click`, () =>{
    clearInterval(setTime);
    start = 0;
    timeValue.innerHTML = start;
});
// clear Button closed;


// reset Button started;
resetBtn.addEventListener(`click`, () =>{
    start = 0;
    timeValue.innerHTML = start;
});
// reset Button closed;

// getting button started;
gettingBtn.addEventListener(`click`, () =>{
    let pTag = document.createElement(`p`);
    pTag.innerHTML =`Your time is ` + timeValue.innerHTML;
    gettingDiv.append(pTag);
});
// getting button closed;


// start button started;
const restartingTime = () =>{
    if (start !== 0) {
        setTime = setInterval(() =>{
                timeValue.innerHTML = start++;
            }, 1000);
    }
    restartBtn.innerHTML = `Unlocked`;
    stopBtn.innerHTML = `Lock`;
}

restartBtn.addEventListener(`click`, () =>{
    restartingTime();
});
// start button closed;