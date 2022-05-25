const formulario1 = document.querySelector("#form1");
console.log(formulario1);

formulario1.addEventListener("submit", function (e) {
    e.preventDefault();

    const N1 = document.querySelector("#numero1").value;
    const N2 = document.querySelector("#numero2").value;
    const N3 = document.querySelector("#numero3").value;


    //Proceso Ejercicio 1 y 2 //    
    const salida = document.querySelector("#salida1")

    if (parseInt(N1) < 10 && parseInt(N2) < 10 && parseInt(N3) < 10) {
        const salida = document.querySelector("#salida1")
        salida.textContent = "Todos los números son menores a 10";
        setTimeout(() => {
            salida.remove();
        }, 3000);
    } else {
        if (parseInt(N1) < 10 || parseInt(N2) < 10 || parseInt(N3) < 10) {
            const salida = document.querySelector("#salida1")
            salida.textContent = "Alguno de los números son menores a 10";
            setTimeout(() => {
                salida.remove();
            }, 3000);

        }
    }

    //Alerta de campos//
    if (N1 === "" && N2 === "" && N3 === "") {
        const mensaje = document.querySelector("#mensaje1");
        mensaje.textContent = "Todos los Campos son Obligatorios";


        setTimeout(() => {
            mensaje.remove();
        }, 3000);
    }

})

const formulario2 = document.querySelector("#form2");
console.log(formulario2);

formulario2.addEventListener("submit", function (e) {
    e.preventDefault();

    const N1 = document.querySelector("#J2numero1").value;
    const N2 = document.querySelector("#J2numero2").value;
    const N3 = document.querySelector("#J2numero3").value;

    console.log(N1);
    console.log(N2);
    console.log(N3);

    //Proceso Ejercicio 3 //    
    if (N1 === N2 && N1 === N3) {
        const suma = Number(N1) + Number(N2);
        const produ = suma * Number(N3);

        console.log(suma)
        console.log(produ)
        const salida2 = document.querySelector("#salida2")
        salida2.textContent = "El resultado de la suma de los 2 primeros números es: " + suma + " Y el multiplicandolo por el 3° es: " + produ;


    }

    //Alerta de campos//
    if (N1 === "" && N2 === "" && N3 === "") {
        const mensaje = document.querySelector("#mensaje2");
        mensaje.textContent = "Todos los Campos son Obligatorios";


        setTimeout(() => {
            mensaje.remove();
        }, 3000);
    }

})


const formulario3 = document.querySelector("#form3");
console.log(formulario3);

formulario3.addEventListener("submit", function (e) {
    e.preventDefault();

    const year = document.querySelector("#year").value;
    const sueldo = document.querySelector("#sueldo").value;

    console.log(year)

    //Proceso Ejercicio 4 //    

    if (parseInt(sueldo) < 500 && parseInt(year) > 10) {
        const aumento = (Number(sueldo) * 0.2);

        const sueldofinal = Number(aumento) + Number(sueldo);

        console.log(aumento);
        console.log(sueldofinal);
        const salida3 = document.querySelector("#salida3")
        salida3.textContent = "Su nuevo sueldo sera de: " + sueldofinal;

    } else {
        if (parseInt(sueldo) < 500 && parseInt(year) < 10) {
            const aumento = (Number(sueldo) * 0.05);

            const sueldofinal = Number(aumento) + Number(sueldo);

            console.log(aumento);
            console.log(sueldofinal);
            const salida3 = document.querySelector("#salida3")
            salida3.textContent = "Su nuevo sueldo sera de: " + sueldofinal;
        } else {
            if (parseInt(sueldo) > 500) {
                salida3.textContent = "Su sueldo se mantiene igual";
            }
        }
    }



    //Alerta de campos//
    if (year === "" && sueldo === "") {
        const mensaje3 = document.querySelector("#mensaje3");
        mensaje3.textContent = "Todos los Campos son Obligatorios";


        setTimeout(() => {
            mensaje3.remove();
        }, 3000);
    }

})


const formulario4 = document.querySelector("#form4");
console.log(formulario4);

formulario4.addEventListener("submit", function (e) {
    e.preventDefault();

    const N1 = document.querySelector("#J4numero1").value;
    const N2 = document.querySelector("#J4numero2").value;
    const N3 = document.querySelector("#J4numero3").value;

    console.log(N1);
    console.log(N2);
    console.log(N3);

    //Proceso Ejercicio 4 //    
    if (parseInt(N1) < parseInt(N2) && parseInt(N1) < parseInt(N3)) {
        const salida4 = document.querySelector("#salida4")
        salida4.textContent = "El número de menor valor es: " + N1;
    } else if (parseInt(N2) < parseInt(N3) && parseInt(N2) < parseInt(N1)) {
        const salida4 = document.querySelector("#salida4")
        salida4.textContent = "El número de menor valor es: " + N2;
    } else if (parseInt(N3) < parseInt(N2) && parseInt(N3) < parseInt(N1)) {
        const salida4 = document.querySelector("#salida4")
        salida4.textContent = "El número de menor valor es: " + N3;
    }


    if (parseInt(N1) > parseInt(N2) && parseInt(N1) > parseInt(N3)) {
        const salida42 = document.querySelector("#salida42")
        salida42.textContent = "El número de mayor valor es: " + N1;
    } else if (parseInt(N2) > parseInt(N3) && parseInt(N2) > parseInt(N1)) {
        const salida42 = document.querySelector("#salida42")
        salida42.textContent = "El número de mayor valor es: " + N2;
    } else if (parseInt(N3) > parseInt(N2) && parseInt(N3) > parseInt(N1)) {
        const salida42 = document.querySelector("#salida42")
        salida42.textContent = "El número de mayor valor es: " + N3;
    }
    //Alerta de campos//
    if (N1 === "" && N2 === "" && N3 === "") {
        const mensaje = document.querySelector("#mensaje4");
        mensaje.textContent = "Todos los Campos son Obligatorios";


        setTimeout(() => {
            mensaje.remove();
        }, 3000);
    }

})


const formulario5 = document.querySelector("#form5");
console.log(formulario5);

formulario5.addEventListener("submit", function (e) {
    e.preventDefault();

    const NP = document.querySelector("#personas").value;


    let i = 0;
    let suma = 0;
    // let promedio = 0;
    console.log(NP);

    //Proceso Ejercicio 1 actividad 3//    
    while (i < NP) {
        i += 1;
        let AL = prompt("Ingrese la altura de las personas")
        suma += parseFloat(AL);
    }

    let promedio = suma / (NP);

    const salida5 = document.querySelector("#salida5")
    salida5.textContent = "El promedio de las alturas ingresadas es: " + promedio;
    console.log(promedio);
    console.log(suma);



    //Alerta de campos//
    if (NP === "") {
        const mensaje = document.querySelector("#mensaje5");
        mensaje.textContent = "Todos los Campos son Obligatorios";


        setTimeout(() => {
            mensaje.remove();
        }, 3000);
    }

})

const formulario6 = document.querySelector("#form6");
console.log(formulario6);

formulario6.addEventListener("submit", function (e) {
    e.preventDefault();

    const EM = document.querySelector("#EM").value;


    let i = 0;
    let mas = 0;
    let menos = 0;
    let importe = 0;
    console.log(EM);

    //Proceso Ejercicio 2 actividad 3//    
    while (i < EM) {
        i += 1;
        let sueldo = prompt("Ingrese el sueldo de uno de los empleados")
        importe +=Number(sueldo);
        if (parseInt(sueldo)>=100 && parseInt(sueldo)<=300) {
            menos += 1;
        } else if (parseInt(sueldo)>300){
            mas += 1;
        }
    }


    const salida6 = document.querySelector("#salida6")
    salida6.textContent = "El numero de empleados que ganan entre 100$ y 300$ es: " +menos+ " y los que ganan más de 300$ son: " +mas;

    const salida62 = document.querySelector("#salida62")
    salida62.textContent = "El importe en sueldos de la empresa es de: " +importe+ "$";


    //Alerta de campos//
    if (EM === "") {
        const mensaje = document.querySelector("#mensaje5");
        mensaje.textContent = "Todos los Campos son Obligatorios";


        setTimeout(() => {
            mensaje.remove();
        }, 3000);
    }

})