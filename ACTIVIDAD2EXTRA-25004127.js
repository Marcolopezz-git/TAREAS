function jugar() {
    var nombre = prompt("Ingrese su nombre");
    var carnet = prompt("Ingrese numero de carnet");
    
    while (true) {
        // La computadora genera un número aleatorio entre 1 y 9
        var numeroComputadora = Math.floor(Math.random() * 9) + 1;

        var numeroUsuario;
        do {
            numeroUsuario = parseInt(prompt("Ingrese un número entre 3 y 6:"));
        } while (isNaN(numeroUsuario) || numeroUsuario < 3 || numeroUsuario > 6);

        var eleccion = prompt(`La computadora eligió un número. ¿Tu número es mayor o menor? (Escribe "mayor" o "menor")`).toLowerCase();

        // Comparar los valores
        var resultado = (eleccion === "mayor" && numeroUsuario > numeroComputadora) || 
                        (eleccion === "menor" && numeroUsuario < numeroComputadora);

        // Mostrar resultados
        alert(`La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}.`);
        if (resultado) {
            alert("¡Has adivinado!");
        } else {
            alert("No acertaste. Inténtalo de nuevo.");
        }

        // Preguntar si quiere jugar otra vez
        var jugarOtraVez = prompt("¿Quieres jugar otra vez? (SI/NO)").toUpperCase();
        if (jugarOtraVez !== "SI") {
            alert(`Gracias por jugar, ${nombre}. Tu número de carnet es ${carnet}.`);
            break;
        }
    }
}

// Llamar a la función para iniciar el juego
jugar();