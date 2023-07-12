// ARRAY CON OBJETOS DE PRODUCTOS: CREO UNA CLASE PARA LOS PRODUCTOS DE MI WEB
class Combo {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const COMBOS = [
    new Combo ("BIOLAGE", 4500),
    new Combo ("HAN", 3890),
    new Combo ("KERASTASE", 8400),
    new Combo ("MOROCCANOIL", 7900),
    new Combo ("SCHWARZKOPF", 10000),
    new Combo ("SEBASTIAN", 8300)
]

// CONSULTO AL USUARIO POR CUAL PRODUCTO DESEA SABER EL PRECIO

let marcaUsuario
let combosPorConsultar
let combosTotales = []
function buscar(){
    marcaUsuario = prompt("Por favor indique marca por la cual desea saber precios y nos pondremos en contacto con vos para confirmar compra:\nBIOLAGE\nHAN\nKERASTASE\nMOROCCANOIL\nSCHWARZKOPF\nSEBASTIAN").toUpperCase();
    let encontrado = COMBOS.find((combo)=> combo.nombre === marcaUsuario);

    if(encontrado === undefined){
        alert("Por favor ingrese una marca existente en la web");
        buscar();
    }else{
        alert("El precio del combo Shampoo + Acondicionador + Mascarilla es de $" + encontrado.precio);

        // CONSULTAR SI DESEA CONSULTAR POR MAS DE 1 PRODUCTO:
        
        function variasConsultas(){
            combosPorConsultar = prompt("¿Desea consultar por mas de 1 combo de productos? Responder SI / NO").toUpperCase();
            if(!(combosPorConsultar === "SI" || combosPorConsultar === "NO")){
                alert("Por favor responder con: SI / NO");
                variasConsultas();
            }else if(combosPorConsultar === "SI" ){
                buscar();
            }
        }
        variasConsultas();

        //POR CADA CONSULTA QUE HAGA EL USUARIO EL VALOR DE LOS COMBOS SE GUARDAN EN EL ARRAY
        let precioDeComboConsultado = encontrado.precio;
        return combosTotales.push(precioDeComboConsultado);
    }
}

buscar();

// SUMA TOTAL DE PRODUCTOS POR EL CUAL ESTARIA CONSULTANDO:
sumaTotalCombos = () => {
    const total = combosTotales.reduce ( (acc, el) => acc + el, 0); 

//APLICANDO DESCUENTO DEL ENVIO SEGUN EL VALOR DEL COMBO ELEGIDO
    if (total >= 8000){
        alert("El precio final de los combos por el cual nos estariamos contactando es de $" + total + " y el envío estaría bonificado");
    }else{
        alert("El precio final de los combos por el cual nos estariamos contactando es de $" + total + " y el envío tiene un valor de $800");
    }
}

sumaTotalCombos();