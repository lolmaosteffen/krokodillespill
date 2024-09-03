const inputfelt = document.getElementById("inputfield");
const points = document.getElementById("poengtavla");
const nmb1 = document.getElementById("randomtall1");
const nmb2 = document.getElementById("randomtall2");
const submitButton = document.getElementById("cunt");




let tall1, tall2;
randomTallEn()
randomTallTo()
function randomTallEn() {
    tall1 = Math.floor(Math.random() * 10) + 1;
    nmb1.innerHTML = tall1;
    // return tall1;
}
function randomTallTo() {
    tall2 = Math.floor(Math.random() * 10) + 1;
    nmb2.innerHTML = tall2;
    // return tall2;
}
function submitKnapp() {
    // let tallEn = randomTallEn;
    // let tallTo = randomTallTo;
    let userInput = inputfelt.value;
    let currentScore = points;
    let riktigSvar;
    if (tall1 > tall2) {
        riktigSvar = '>';
    }
    else if (tall1 < tall2) {
        riktigSvar = '<';
    }
    else riktigSvar = '=';

    if (userInput === riktigSvar) {
        points.innerHTML = +currentScore.innerHTML + 1;
    }
    else points.innerHTML = +currentScore.innerHTML - 1;
    points.value = '';
    submitButton.innerHTML = `<button onclick="">submit</button>`;
}
function resetKnapp() {
    randomTallEn()
    randomTallTo()
    inputfelt.value = '';
    submitButton.innerHTML = `<button onclick="submitKnapp()">submit</button>`;
}