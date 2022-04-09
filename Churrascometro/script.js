// carne  - 400 gr por pessoa + de 6 horas - 650
// cerveja - 1200 ml por pessoa + 6 horas 2000 ml
// refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml

// crianças valem por 0,5(meio)

let inputAdultos = document.getElementById("adultos");
let inputCrianças = document.getElementById("crianças");
let inputDuraçao = document.getElementById("duraçao");

let resultado = document.getElementById("resultado");

function calcular(){

    let adultos = inputAdultos.value;
    let crianças = inputCrianças.value;
    let duraçao = inputDuraçao.value;

    let qdtTotalCarne =carnePP(duraçao) * adultos + (carnePP(duraçao) / 2 * crianças);
    let qdtTotalCerveja =cervajaPP(duraçao) * adultos 
    let qdtTotalBebidas = bebidasPP(duraçao) * adultos + (bebidasPP(duraçao) / 2 * crianças);
    

    resultado.innerHTML = `<p>   ${qdtTotalCarne/1000} kg de carne </p>`
    resultado.innerHTML += `<p>  ${Math.ceil(qdtTotalCerveja / 355)}   latas de cerveja</p>`
    resultado.innerHTML += `<p>  ${Math.ceil( qdtTotalBebidas/2000)}     garrafas de bedidas </p>`
}

               // calculo itens


function carnePP(duraçao){
     if(duraçao >= 6){
       return 650;
     }else{
      return 400
    } 
}

function cervajaPP(duraçao){
      if(duraçao >= 6){
      return 2000;
      }else{
       return 1200
    } 
 }

 function bebidasPP(duraçao){
    if(duraçao >= 6){
    return 1500;
    }else{
     return 1000
    } 
}

       // botao de calcular

function onOver(elemento){ 
  elemento.style.backgroundColor = "rgb(0, 7, 39)"
  elemento.style.color = "white"
}

function onOut(elemento){
  elemento.style.backgroundColor = "white"
  elemento.style.color = "rgb(0, 7, 39)"
}

             // botao de limpar 


function onOver2(elemento){ 
  elemento.style.backgroundColor = "rgb(0, 7, 39)"
  elemento.style.color = "white"
}

function onOut2(elemento){
  elemento.style.backgroundColor = "white"
  elemento.style.color = "rgb(0, 7, 39)"
}