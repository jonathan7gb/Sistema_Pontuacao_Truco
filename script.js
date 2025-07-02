//Variaveis Time A
const tituA = document.getElementById("tituloA");
const pontA = document.getElementById("pontuacaoA");
const btnM1A = document.getElementById("maisUmA");
const btnM3A = document.getElementById("maisTresA");
const btnM6A = document.getElementById("maisSeisA");
const btnM9A = document.getElementById("maisNoveA");
const btnM12A = document.getElementById("maisDozeA");
const btnZA = document.getElementById("zerarA");
const totalVitA = document.getElementById("totalVitoriasA");
const zerarVitA = document.getElementById("zerarVitoriasA");
const nomeTimeA = document.getElementById("NomeTimeA");
const imagemGanhouA = document.getElementById("imagemGanhouA");
const imagemPerdeuA = document.getElementById("imagemPerdeuA");
var pontosA =  0;
var totalA =  0;

//Variaveis Time B
const tituB = document.getElementById("tituloB");
const pontB = document.getElementById("pontuacaoB");
const btnM1B = document.getElementById("maisUmB");
const btnM3B = document.getElementById("maisTresB");
const btnM6B = document.getElementById("maisSeisB");
const btnM9B = document.getElementById("maisNoveB");
const btnM12B = document.getElementById("maisDozeB");
const btnZB = document.getElementById("zerarB");
const totalVitB = document.getElementById("totalVitoriasB");
const zerarVitB = document.getElementById("zerarVitoriasB");
const nomeTimeB = document.getElementById("NomeTimeB");
const imagemGanhouB = document.getElementById("imagemGanhouB");
const imagemPerdeuB = document.getElementById("imagemPerdeuB");
var pontosB =  0;
var totalB =  0;

//Tema Escuro/claro
const bodyzao = document.getElementById("body");
const tituHeader = document.getElementById("tituloHeader");
const btnTema = document.getElementById("tema");

function mudarTema(){
    btnTema.addEventListener("click", () => {

    });
}

btnM1A.addEventListener("click", () => {
    pontosA++;
    pontA.innerText = pontosA;
    verificarVencedor();
    verificarPrimeiro();
})

btnM3A.addEventListener("click", () => {
    pontosA+=3;
    pontA.innerText = pontosA;
    verificarVencedor();
    verificarPrimeiro();
})

btnM6A.addEventListener("click", () => {
    pontosA+=6;
    pontA.innerText = pontosA;
    verificarVencedor();
    verificarPrimeiro();
})

btnM9A.addEventListener("click", () => {
    pontosA+=9;
    pontA.innerText = pontosA;
    verificarVencedor();
    verificarPrimeiro();
})

btnM12A.addEventListener("click", () => {
    pontosA+=12;
    pontA.innerText = pontosA;
    verificarVencedor();
    verificarPrimeiro();
})

btnZA.addEventListener("click", () => {
    pontosA=0;
    pontA.innerText = pontosA;
    verificarVencedor();
    verificarPrimeiro();
})

//--------------------

btnM1B.addEventListener("click", () => {
    pontosB++;
    pontB.innerText = pontosB;
    verificarVencedor();
    verificarPrimeiro();
})

btnM3B.addEventListener("click", () => {
    pontosB+=3;
    pontB.innerText = pontosB;
    verificarVencedor();
    verificarPrimeiro();
})

btnM6B.addEventListener("click", () => {
    pontosB+=6;
    pontB.innerText = pontosB;
    verificarVencedor();
    verificarPrimeiro();
})

btnM9B.addEventListener("click", () => {
    pontosB+=9;
    pontB.innerText = pontosB;
    verificarVencedor();
    verificarPrimeiro();
})

btnM12B.addEventListener("click", () => {
    pontosB+=12;
    pontB.innerText = pontosB;
    verificarVencedor();
    verificarPrimeiro();
})

btnZB.addEventListener("click", () => {
    pontosB = 0;
    pontB.innerText = pontosB;
    verificarVencedor();
    verificarPrimeiro();
})

//---------------------

zerarVitA.addEventListener("click", () => {
    totalA = 0;
    totalVitA.innerText = totalA + "🏆" ;
    verificarPrimeiro();
})

zerarVitB.addEventListener("click", () => {
    totalB = 0;
    totalVitB.innerText = totalB + "🏆";
    verificarPrimeiro();
})

//----------------------

function verificarVencedor(){
    pontA.style.color = "white";
    pontB.style.color = "white";
    tituA.style.color = "#06923E";
    tituB.style.color = "#5EABD6";

    verificarPrimeiro();
    if(pontosA >= 12){
        pontosB = 0;
        pontosA = 0;
        pontA.innerText = pontosA;
        pontB.innerText = pontosB;
        totalA++;
        totalVitA.innerText = totalA + "🏆";
        totalVitA.style.fontWeight = "600";

        imagemGanhouA.style.opacity = "1";
        imagemPerdeuB.style.opacity = "1";
        imagemGanhouA.style.display = "block";
        imagemPerdeuB.style.display = "block";
        pontA.style.display = "none";
        pontB.style.display = "none";

        setTimeout(() => {
            imagemGanhouA.style.opacity = "0";
            imagemPerdeuB.style.opacity = "0";
            
            setTimeout(() => {
                pontA.innerText = pontosA;
                pontB.innerText = pontosB;

                imagemGanhouA.style.display = "none";
                imagemPerdeuB.style.display = "none";
                pontA.style.display = "block";
                pontB.style.display = "block";
            }, 500); 
          }, 5000);
    }
    
    if(pontosB >= 12){
        pontosA = 0;
        pontosB = 0;
        pontA.innerText = pontosA;
        pontB.innerText = pontosB;
        totalB++;
        totalVitB.innerText = totalB + "🏆";
        totalVitB.style.fontWeight = "600";

        imagemGanhouB.style.opacity = "1";
        imagemPerdeuA.style.opacity = "1";
        imagemGanhouB.style.display = "block";
        imagemPerdeuA.style.display = "block";
        pontB.style.display = "none";
        pontA.style.display = "none";

        setTimeout(() => {
            imagemGanhouB.style.opacity = "0";
            imagemPerdeuA.style.opacity = "0";
            
            setTimeout(() => {
                pontA.innerText = pontosA;
                pontB.innerText = pontosB;

                imagemGanhouB.style.display = "none";
                imagemPerdeuA.style.display = "none";
                pontB.style.display = "block";
                pontA.style.display = "block";
            }, 500); 
          }, 5000);

    }
}

function verificarPrimeiro(){
    if(totalA == totalB){
        totalVitA.innerText = totalA + "🏆";
        totalVitB.innerText = totalB + "🏆";
    }else if(totalA > totalB){
        totalVitA.innerText = totalA + "🏆";
        totalVitB.innerText = totalB + "🏆";
    }else{
        totalVitA.innerText = totalA + "🏆";
        totalVitB.innerText = totalB + "🏆";
    }
}

function atualizarTitulos(){
    if(nomeTimeA.value === ""){
        tituA.innerText = "Time A";
    }else{
        tituA.innerText = nomeTimeA.value;
    }
    
    if(nomeTimeB.value === ""){
        tituB.innerText = "Time B";
    }else{
        tituB.innerText = nomeTimeB.value;
    }
}

document.getElementById("forms").addEventListener("submit", function(event) {
    event.preventDefault();
    atualizarTitulos();
  });