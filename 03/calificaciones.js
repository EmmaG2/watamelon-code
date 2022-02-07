// !Emmanuel#4877

const alumnosSpan = document.getElementById('alumnos');

const numAlumnos = parseInt(prompt('Ingrese el numero de alumnos: '));
let alumnosNotas = [];

for (let i = 0; i < numAlumnos; i++) {
    alumnosNotas[i] = [prompt(`Ingrese las notas (del 1 al 5): ${i + 1}`)]
}

const notasOrdenadas = alumnosNotas.sort();

alumnosSpan.textContent = `Calificaciones ordenadas: ${alumnosNotas}`;