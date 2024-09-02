randomTall1()
randomTall2()
function randomTall1() {
    let tall1 = Math.floor(Math.random() * 10) + 1;
    document.getElementById("randomtall1").innerHTML = tall1;
    return tall1;
}
function randomTall2() {
    let tall2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById("randomtall2").innerHTML = tall2;
    return tall2;
}
function submitKnapp() {
    let tall1 = randomTall1();
    let tall2 = randomTall2();
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

    console.log(riktigSvar, tall1, tall2);
}
function resetKnapp() {
    // randomTall1()
    // randomTall2()
    document.getElementById("inputfield").value = '';
}