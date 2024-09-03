let tall1, tall2;
randomTallEn()
randomTallTo()
function randomTallEn() {
    tall1 = Math.floor(Math.random() * 10) + 1;
    document.getElementById("randomtall1").innerHTML = tall1;
    // return tall1;
}
function randomTallTo() {
    tall2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById("randomtall2").innerHTML = tall2;
    // return tall2;
}
function submitKnapp() {
    // let tallEn = randomTallEn;
    // let tallTo = randomTallTo;
    let userInput = document.getElementById("inputfield").value;
    let currentScore = document.getElementById("poengtavla");
    let riktigSvar;
    if (tall1 > tall2) {
        riktigSvar = '>';
    }
    else if (tall1 < tall2) {
        riktigSvar = '<';
    }
    else riktigSvar = '=';

    if (userInput === riktigSvar) {
        document.getElementById("poengtavla").innerHTML = +currentScore.innerHTML + 1;
    }
    else document.getElementById("poengtavla").innerHTML = +currentScore.innerHTML - 1;
    // document.getElementById("inputfield").value = '';
    // if (userInput === '') {
    //     document.getElementById("poengtavla").innerHTML = +currentScore.innerHTML + 1;
    //     document.getElementById("poengtavla").innerHTML = currentScore.innerHTML - 1;
    // }
}
function resetKnapp() {
    randomTallEn()
    randomTallTo()
    document.getElementById("inputfield").value = '';
}