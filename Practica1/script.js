function mostrarInputs() {
    const figura = document.getElementById("figura").value;
    const container = document.getElementById("inputs-container");
    container.innerHTML = '';

    if (figura === "rectangulo" || figura === "cuadrado" || figura === "triangulo") {
        container.innerHTML += `
            <label for="valor1">${figura === "triangulo" ? 'Base' : 'Lado 1'}:</label>
            <input type="number" id="valor1" required>
        `;
    }

    if (figura === "rectangulo" || figura === "triangulo") {
        container.innerHTML += `
            <label for="valor2">${figura === "triangulo" ? 'Altura' : 'Lado 2'}:</label>
            <input type="number" id="valor2" required>
        `;
    }

    if (figura === "circulo") {
        container.innerHTML += `
            <label for="radio">Radio:</label>
            <input type="number" id="radio" required>
        `;
    }
}

function calcular() {
    const figura = document.getElementById("figura").value;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    let area = 0;
    let perimetro = 0;

    if (figura === "rectangulo") {
        const largo = parseFloat(document.getElementById("valor1").value);
        const ancho = parseFloat(document.getElementById("valor2").value);
        area = largo * ancho;
        perimetro = 2 * (largo + ancho);
    } else if (figura === "cuadrado") {
        const lado = parseFloat(document.getElementById("valor1").value);
        area = lado * lado;
        perimetro = 4 * lado;
    } else if (figura === "triangulo") {
        const base = parseFloat(document.getElementById("valor1").value);
        const altura = parseFloat(document.getElementById("valor2").value);
        area = (base * altura) / 2;
        perimetro = 3 * base; // Aquí puedes ajustar según los lados
    } else if (figura === "circulo") {
        const radio = parseFloat(document.getElementById("radio").value);
        area = Math.PI * radio * radio;
        perimetro = 2 * Math.PI * radio;
    } else {
        resultado.innerHTML = "Selecciona una figura válida.";
        return;
    }

    resultado.innerHTML = `Área: ${area.toFixed(2)} <br> Perímetro: ${perimetro.toFixed(2)}`;
}
