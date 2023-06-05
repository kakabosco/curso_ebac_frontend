const form = document.getElementById("num-form");
form.addEventListener("submit", function (e) {
    let campoA = document.getElementById("a-box");
    let campoB = document.getElementById("b-box");

    let valorA = campoA.value;
    let valorB = campoB.value;
    campoA.value = "";
    campoB.value = "";

    e.preventDefault();

    if (parseInt(valorB, 10) > parseInt(valorA, 10)) {
        document.querySelector(".message").innerText = "Válido";
        document.querySelector(".message").style.backgroundColor =
            "rgba(0, 128, 0, 0.9)";
    } else {
        document.querySelector(".message").innerText =
            "Inválido, o valor em B deve ser maior que em A";
        document.querySelector(".message").style.backgroundColor =
            "rgba(128, 0, 0, 0.9)";
    }
});
