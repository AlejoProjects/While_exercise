function limiteSuperior() {
    let rta = document.getElementById('respuesta1');
    let N = -1;
    while (parseInt(N) > 10000 || parseInt(N) < 0) {
        N = prompt('dime un numero menor o igual a 10E4');
    }
    let i = 0;
    let text = '';
    let num;
    while (i < N) {
        if (i == 0) {
            num = i;
        }
        else {
            num = "," + i;
        }
        text = text.concat(num);
        console.log(i);
        console.log(text)
        i += 5;
    }
    console.log(text);
    rta.innerHTML = text;
}
function loteria() {
    let rta2 = document.getElementById('respuesta2');
    let numero1 = -1;
    let numero2 = -1;
    let i = 0;
    while (parseInt(numero1) > 50 || parseInt(numero2) > 50 || parseInt(numero1) < 0 || parseInt(numero2) < 0) {
        numero1 = prompt('dame un numero para la loteria positivo y menor a 51');
        numero2 = prompt('dame otro numero para la loteria positivo y menor a 51');
    }
    while (i < 51) {
        if (i == parseInt(numero1) || i == parseInt(numero2)) {
            console.log('loteria');
        }
        else {
            console.log(i);
        }
        i++;
    }
    rta2.innerHTML = "porfavor abre la consola para ver la respuesta";

}
function addNumbers() {
    let val;
    let array = [];
    let rta3 = document.getElementById('respuesta3');
    while (parseInt(val) != 0) {
        val = prompt("escribe un digito del 0 al 9, el 0 lo terminara todo,"); 
        if (isNaN(parseInt(val))) {
            alert("porfavor solo digitos");
        }
        else if (parseInt(val) > 9 || parseInt(val) < 0) {
            alert("escribe un digito del 0 al 9 no tus mamadas.");
        }
        else {
            array.push(val);
        }
        console.log(array)
    }
    rta3.innerHTML = "[" + array + "]";
}
function addSemana() {
    let val;
    let array = [];
    let rta4 = document.getElementById('respuesta4');
    while (val != 'domingo') {
        val = prompt('dame un día de la semana sin tildes, ni mayusculas.');
        switch (val) {
            case "lunes":
                mensaje = "Ten un principio de semana increible";
                break;
            case "martes":
                mensaje = "Martes de marte como el planeta";
                break;
            case "miercoles":
                mensaje = "Miercoles a mitad de semana";
                break;
            case "jueves":
                mensaje = "Prefiesta de la fiesta";
                break;
            case "viernes":
                mensaje = "La gran fiesta es hoy";
                break;
            case "sabado":
                mensaje = "Recuperate de la fiesta";
                break;
            case "domingo":
                mensaje = "La familia siempre estara contigo";
                break;
            default:
                mensaje = "dame un día, no tus pensamientos xd";
                break;
        }
        alert(mensaje);
    }
}

