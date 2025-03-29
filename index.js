const info = {
    nombre: 'Gustavo',
    Apellido: 'Villarreal',
    Direccion: 'Tulipanes 120',
    Deporte: 'Basketball',
    Correo: 'gus@gmail.com',
}
const Hombre = {
    nombre: 'Jaime',
    Apellido: 'Garcia',
    Direccion: 'La maseca pa dentro',
    Deporte: 'Smash',
    Correo: 'jaime@gmail.com',
}
const Mujer = {
    nombre: 'Ericka',
    Apellido: 'Zavala',
    Direccion: 'nose',
    Deporte: 'leer manga',
    Correo: 'erickad@gmail.com',
}

const mostrarValores = (sexo) => {

    if (sexo === 'Hombre') {
        document.getElementById("nombre").value = Hombre.nombre;
        document.getElementById("apellido").value = Hombre.Apellido;
        document.getElementById("direccion").value = Hombre.Direccion;
        document.getElementById("deporte").value = Hombre.Deporte;
        document.getElementById("correo").value = Hombre.Correo;
    }
    if (sexo === 'Mujer'){
        document.getElementById("nombre").value = Mujer.nombre;
        document.getElementById("apellido").value = Mujer.Apellido;
        document.getElementById("direccion").value = Mujer.Direccion;
        document.getElementById("deporte").value = Mujer.Deporte;
        document.getElementById("correo").value = Mujer.Correo;
    }
}