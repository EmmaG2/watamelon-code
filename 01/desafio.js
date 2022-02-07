// * By ! Emmanuel#4877

const btn = document.getElementById('btn');

const desafio = () => {

    const text = prompt("Enter your text: ");
    const numberRepetitions = parseInt(
      prompt("enter the number of repetitions: ")
    );

    for (let i = 0; i < numberRepetitions; i++) {
      document.writeln(`${text}<br>`);
    }

    document.writeln(
      `\n<strong>number of repetitions</strong>: <b style="color: #48e;">${numberRepetitions}</b>`
    );

}

btn.addEventListener('click', desafio);