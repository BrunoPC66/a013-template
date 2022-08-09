// // PRÁTICA GUIADA

// // PARTE 1 - ANINHADO E OP. LÓGICO

// let idadeDependente = 15;

// // if (idadeDependente >= 13 && idadeDependente <=17) {
// //         console.log(`O seu dependente já pode ter um cartão de crédito vinculado ao teu.`);
// //     } else {
// //         console.log(`Consulte outras opções da Labank.`);
// //     };

// // PARTE 2 - TENARIO

// // idadeDependente === 13 ? console.log(`O seu dependente já pode ter um cartão de crédito vinculado ao teu.`) : console.log(`Consulte outras opções da Labank.`);

// // PARTE 3 - SWITCH-CASE

// let cartao = +prompt(`Solicitação de cartão de crédito. Escolha um dos seguintes números: \n 1-Fácil \n 2-Black \n 3-Platinum \n 4-Master Gold`)


// switch (cartao) {
//     case 1:
//         console.log(`Cartão Fácil adquirido!`);
//         break;
//     case 2:
//         console.log(`Cartão Black adquirido!`);
//         break;
        
//     case 3:
//         console.log(`Cartão Platinum adquirido!`);
//         break;
    
//     case 4:
//         console.log(`Cartão Master Gold adquirido!`);
//         break;

//     default:
//         console.log(`Escolha uma das opções disponíveis.`);
// }

// EXERCÍCIO DE FIXAÇÃO

// PARTE 1

let numAleatório = +prompt(`Digite um número:`)

if (numAleatório%2 === 0) {
    console.log(`É divisível por 2`);
    if (numAleatório%3 === 0)
    console.log(`É divisível por 3`);
} else {
    console.log(`Não é divisível por 2 e por 3`);
}

if (numAleatório%2 ===0 && numAleatório%3 === 0) {
    console.log(`É divisível por 2 e por 3`);
// PARTE 2
    numAleatório === 30 ? console.log(`UFA, ACERTEI!`) : console.log(`Não foi dessa vez :(`);
// PARTE 3
    switch (numAleatório) {
        case 6:
            console.log(`O número é 6`);
            break;
        case 12:
            console.log(`O número é 12`);
            break;
        case 18:
            console.log(`O número é 18`);
            break;
        case 24:
            console.log(`O número é 24`);
            break;
        case 30:
            console.log(`O número é 30`);
            break;
        default:
            console.log(`O número menor que 6 ou maior que 30.`);
            break;
    }
} else {
    console.log(`Não é divisível por 2 e por 3`);
};
