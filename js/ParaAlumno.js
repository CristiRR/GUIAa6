document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const carnet = document.getElementById('carnet').value;
    const carnetRegex = /^[A-Z]{2}\d{3}$/;
    if (!carnetRegex.test(carnet)) {
        alert('Carnet inválido. Debe tener el formato AB001.');
        return;
    }

  
    const nombre = document.getElementById('nombre').value;
    const nombreRegex = /^[a-zA-Z\s]+$/;
    if (!nombreRegex.test(nombre)) {
        alert('Nombre inválido. No debe contener números ni caracteres especiales.');
        return;
    }

    const dui = document.getElementById('dui').value;
    const duiRegex = /^\d{8}-\d{1}$/;
    if (!duiRegex.test(dui)) {
        alert('Número de DUI inválido. Debe tener el formato ########-#.');
        return;
    }

 
    const nit = document.getElementById('nit').value;
    const nitRegex = /^\d{4}-\d{6}-\d{3}-\d{1}$/;
    if (!nitRegex.test(nit)) {
        alert('Número de NIT inválido. Debe tener el formato ####-######-###-#.');
        return;
    }


    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    if (!fechaNacimiento) {
        alert('Fecha de nacimiento inválida.');
        return;
    }

    
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Correo electrónico inválido.');
        return;
    }

    const edad = document.getElementById('edad').value;
    if (isNaN(edad) || edad <= 0) {
        alert('Edad inválida. Debe ser un número positivo.');
        return;
    }

    alert('Formulario enviado correctamente.');
});
