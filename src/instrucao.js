// IF / ELSE / ELSE IF

let pais = "Brasil";

if(pais != "Brasil"){
    console.log("Você é estrangeiro");
}else{
    console.log("Você é brasileiro");
}

let idade = 22;

if(idade < 16){
    console.log("Não vota");
}else if (idade < 18 || idade > 65){
    console.log("Voto opcional");
}else{
    console.log("Voto obrigatório");
}


// SWITCH

let diaSem = 1;

switch(diaSem){
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segunda")
        break;
    case 3:
        console.log("Terça")
        break;
    case 4:
        console.log("Quarta")
        break;
    default:
        console.log("Esse dia da semana não existe")
        break;
}


// EXERCICIO DE PARCIAL

let x = 7;
let resultado = "";

if (x > 10){
    resultado = "A";
}else if (x < 5){
    resultado = "B";
}else{
    resultado = "C";
}
console.log(resultado);


let bebida = "café";

switch(bebida){
    case "café":
        console.log("Aqui está o seu café Sr(a). O valor é de R$ 3,50.")
        break;
    case "chá":
        console.log("Aqui está o seu chá Sr(a). O valor é de R$ 5,00.")
        break;
    case "leite":
        console.log("Aqui está o seu leite Sr(a). O valor é de R$ 4,80.")
        break;
    default:
        console.log("Desculpe, não servimos " + bebida + " aqui. As opções são café, leite ou chá. O que gostaria?"
        )
        break;
}