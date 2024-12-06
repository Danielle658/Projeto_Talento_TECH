const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 3;

console.log("Bem-vindo ao jogo de adivinhação!");
console.log("Você tem 3 tentativas para adivinhar o número secreto entre 1 e 100.");

function fornecerDica(palpite, numeroSecreto) {
    if (palpite > numeroSecreto) {
        return "Muito alto!";
    } else if (palpite < numeroSecreto) {
        return "Muito baixo!";
    } else {
        return "Correto!";
    }
}

for (let i = 1; i <= tentativas; i++) {
    const palpite = parseInt(prompt(`Tentativa ${i}: Faça seu palpite: `), 10);

    const dica = fornecerDica(palpite, numeroSecreto);
    console.log(dica);

    if (palpite === numeroSecreto) {
        console.log("Parabéns! Você acertou o número secreto!");
        break;
    }

    if (i === tentativas) {
        console.log(`Infelizmente você já usou todas as suas tentativas. O número secreto era ${numeroSecreto}. Mais sorte da próxima vez!`);
    }
}
