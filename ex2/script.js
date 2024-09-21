let notas = listaNotas();

function listaNotas() {

    let notas = {};

    for (i = 0; i < 4; i++) {
        let nota

        do {
            let notal = parseFloat(prompt(`Informe a nota de linguagens: `));
            if (isNaN(notal))
                alert(`Valor inválido, informe um número.`);

            let notam = parseFloat(prompt(`Informe a nota de matemática: `));
            if (isNaN(notam))
                alert(`Valor inválido, informe um número.`);

            let notah = parseFloat(prompt(`Informe a nota de humanas: `));
            if (isNaN(notah))
                alert(`Valor inválido, informe um número.`);

            let notan = parseFloat(prompt(`Informe a nota de natureza: `));
            if (isNaN(notan))
                alert(`Valor inválido, informe um número.`);

            let notar = parseFloat(prompt(`Informe a nota de redação: `));
            if (isNaN(notar))
                alert(`Valor inválido, informe um número.`);

        } while (isNaN(nota))

        notas.push({ notal, motam, notah, notan, notar })


    }
    return notas;
}





exibirNotas(notas)
function exibirNotas() {
    let mensagem = ""
    for (i = 0; i < notas.length; i++) {

        if (i == notas.length - 1)
            mensagem += notas.notar + `.`

        else if (i == notas.length - 2)
            mensagem += notas.notan + " e "

        else
            mensagem += notas.notal + ", " + notas.notam + ", " + notas.notam + ", "



    }
    alert(mensagem)
}