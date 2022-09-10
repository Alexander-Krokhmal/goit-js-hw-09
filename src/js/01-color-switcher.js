refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
};

console.log(refs.startBtn);
refs.startBtn.addEventListener('click', onChangeColor);
refs.stopBtn.addEventListener('click', onChangeColorStop);

let timerId = null;
refs.stopBtn.disabled = true;

function onChangeColor () {
    const body = document.body;

    timerId = setInterval(() => { body.style.backgroundColor = getRandomHexColor(); }, 1000);

    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    };

function onChangeColorStop() {
    clearInterval(timerId);
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }