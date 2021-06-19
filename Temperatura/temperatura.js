function converterTemperatura(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("Fahrenheit").innerHTML = (valNum * 1.8) + 32;
}