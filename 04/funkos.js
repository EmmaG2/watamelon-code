// !Emmanuel#4877

const obtenerInfo = (rareza) => {
    funkos = {
        normal : [['goku', 500], ['veggeta', 322] ],
        cheese : [['don queso', 200], ['quesito funko', 345], ['quesito femboy', 452]],
        cristal: [['cristal furro', 254], ['cristal papu', 453]]
    } 

    if (funkos[rareza]) return funkos[rareza];
    return 'esta rareza no extiste';
}

const normal = obtenerInfo("normal");
document.write(
    `Normal: <strong>${normal[1][1]}, ${normal[0][1]}</strong><br><br>`
    );

const cheese = obtenerInfo("cheese");
document.write(
    `Cheese: <strong>${cheese[0][1]}, ${cheese[1][1]}, ${cheese[2][1]}</strong><br><br>`
    );

const cristal = obtenerInfo("cristal");
document.write(
    `cristal: <strong>${cristal[0][1]}, ${cristal[1][1]}</strong><br><br>`
    );