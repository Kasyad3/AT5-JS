let maxPessoas = 50
let pessoa = []
let mensagem = 0

function menu() {
    let opcao
    do {
        opcao = prompt("Menu:\n1. Cadastrar pessoa\n2. exibir dados\n3. Sair")
        switch (opcao) {
            case "1":
                cadastrarServico()
                break;
            case "2":
                exibirDados()
                break;
            case '3':
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida! Tente novamente.");
        }
    } while (opcao !== '3');
}



function cadastrarServico() {
    if (pessoa.length >= maxPessoas) {
        alert("Número máximo de pessoas cadastradas.");
        return;
    }

    let nomeCompleto
    do {
        nomeCompleto = prompt(`Informe o nome completo do prestador de serviço:`);
        nomeCompleto = nomeCompleto.trim()
        if (isNaN(nomeCompleto) === false || nomeCompleto.indexOf(" ") < 3) {
            alert("Nome inválido, informe um nome válido.")
        }


    } while (isNaN(nomeCompleto) === false || nomeCompleto.indexOf(" ") < 3)

    let numPIS
    do {
        numPIS = parseFloat(prompt("Informe o número PIS/PASEP: "))
        if (isNaN(numPIS) || (numPIS.length < 11) || (numPIS.length > 11)) {
            alert("Número PIS/PASEP inválido, Informe um número válido. \n (PIS/PASEP deve ter 11 digitos.)")
        }

    } while (isNaN(numPIS) || (numPIS.length < 11) || (numPIS.length > 11))

    let ValorHora
    do {
        ValorHora = parseFloat(prompt("Informe o valor da hora: \n (O VALOR DEVE SER ENTRE R$20 E R$500.)"))
        ValorHora = ValorHora.trim()
        if (isNaN(ValorHora) || ValorHora > 20 || ValorHora < 500) {
            alert("Valor inválido, informe um valor válido.")
        }

    } while (isNaN(ValorHora) || ValorHora > 20 || ValorHora < 500)

    let quantHora
    do {
        quantHora = parseFloat(prompt("Informe quantas horas trabalhadas no mês: \n (VALOR ENTRE 20 E 200 HORAS.)"))
        quantHora = quantHora.trim()
        if (isNaN(quantHora) || quantHora > 20 || quantHora < 200)
            alert("Valor inválido, informe um valor válido.")
    } while (isNaN(quantHora) || quantHora > 20 || quantHora < 200)

    pessoa.push({ nomeCompleto, numPIS, ValorHora, quantHora });

    if (pessoa.length >= 5) {
        alert("Mínimo de 5 pessoas cadastradas atingido.");
    }

}

let salarioBruto = 0
function calSalarioBruto() {
    for (i = 0; i <= pessoa.length; i++) {
        salarioBruto = pessoa.ValorHora * pessoa.quantHora
        pessoa.push(salarioBruto)
    }
}

let salarioLiquido
let descINSS
let descIRPF
let descISS

function calSalarioLiquido() {
    INSS(salarioBruto)

    function INSS() {
        for (i = 0; i <= pessoa.length; i++) {
            if (salarioBruto < 0 || salarioBruto > 1500.99) {
                descINSS = salarioBruto * 7.5 / 100
            }
            else if (salarioBruto < 1501 || salarioBruto > 3000.99) {
                descINSS = salarioBruto * 9 / 100
            }
            else if (salarioBruto < 3001 || salarioBruto > 5000.99) {
                descINSS = salarioBruto * 12 / 100
            }
            else if (salarioBruto < 5001) {
                descINSS = salarioBruto * 14 / 100
            }

        }
    }

    IRPF(descINSS)
    function IRPF() {
        for (i = 0; i <= pessoa.length; i++) {
            if (salarioBruto >= 1500.99) {
                descIRPF = descINSS
            }
            else if (salarioBruto < 1501 || salarioBruto > 2000.99) {
                descIRPF = descINSS * 7.5 / 100
            }
            else if (salarioBruto < 2001 || salarioBruto > 3000.99) {
                descIRPF = descINSS * 15 / 100
            }
            else if (salarioBruto < 3001 || salarioBruto > 4000.99) {
                descIRPF = descINSS * 22.5 / 100
            }
            else if (salarioBruto < 4001) {
                descIRPF = descINSS * 22.7 / 100
            }
        }
    }
    ISS(descIRPF)
    function ISS() {
        for (i = 0; i <= pessoa.length; i++) {
            salarioLiquido = descIRPF * 5 / 100
            pessoa.push(salarioLiquido)
        }
    }

}

function exibirDados() {
    document.write(`Funcionário: ${pessoa.nomeCompleto} \n Salario Bruto: ${pessoa.salarioBruto} \n Salario Líquido: ${salarioLiquido}`)
}

menu()