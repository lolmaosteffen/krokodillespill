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
    let tall1 = randomTall1;
    let tall2 = randomTall2;
    let userInput = document.getElementById("inputfield").value.trim();
    let currentScore = document.getElementById("poengtavla").innerHTML;
    let riktigSvar;
    if (tall1 > tall2)
        riktigSvar = '>';
    else if (tall1 < tall2)
        riktigSvar = '<';
    else (tall1 === tall2)
    riktigSvar = '=';

    if (userInput === riktigSvar)
        document.getElementById("poengtavla").innerHTML = currentScore + 1;
    else
        document.getElementById("poengtavla").innerHTML = currentScore - 1;
    // document.getElementById("inputfield").value = '';


}
function resetKnapp() {
    randomTall1()
    randomTall2()
    document.getElementById("inputfield").value = '';
}