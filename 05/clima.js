// !Emmanuel#4877

const climaTv = prompt('Ingrese el clima de la tv: ')
const climaFelipe = prompt('Ingresa tu clima Felipe: ')

const clima = (climaTv, climaFelipe) => {
    (climaTv == 'soleado' && climaFelipe == 'soleado') ? 'Yes': 'no'
}

document.writeln(clima)