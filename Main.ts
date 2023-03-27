import { Direccion } from "./Direccion.js";
import { Mail } from "./Mail.js";
import { Persona } from "./Persona.js";
import { Telefono } from "./Telefono.js";

//Instanciamos 3 objetos de personas
let persona1 = new Persona("Sara", "Rodriguez", 24, "934932K", new Date("03-23-1999"), "Azul",
    "Femenino", [new Direccion("C/ Layos", 13, 3, "A", 45002, "Toledo", "Toledo")], [new Mail("Postal", "C/ Ermita, 34"),
    new Mail("Electrónico", "sara@hotmail.com")], [new Telefono("Móvil", 673648323)], "Alérgica a los frutos secos");

let persona2 = new Persona("Pedro", "Marcos", 21, "03478432R", new Date("12-01-2001"), "Verde",
    "Masculino", [new Direccion("C/ Piedras", 54, 2, "A", 28050, "Madrid", "Madrid")], [new Mail("Postal", "C/ Piedras, 54"),
    new Mail("Electrónico", "pedross@hotmail.com")], [new Telefono("Móvil", 722563789)], "Intolerancia a la lactosa");

let persona3 = new Persona("Laura", "Calvo", 13, "934932K", new Date("01-01-2010"), "Amarillo",
    "Femenino", [new Direccion("C/ Layos", 13, 3, "A", 45002, "Toledo", "Toledo")], [new Mail("Postal", "C/ Layos, 13")], 
    [new Telefono("Móvil", 673648323)], "Sin alergias conocidas");

//Mostramos los objetos creados
persona1.Imprimir();
persona2.Imprimir();
persona3.Imprimir();

//Modificamos un registro
let personas: Array<Persona> = [persona1, persona2, persona3];
var dni = "934932K";
personas.forEach(function (persona) {
    if(persona.$dni == dni){
        persona.$direcciones.push(new Direccion("C/ Nueva Direccion", 43, 1, "B", 45002, "Toledo", "Toledo"));
        persona.$mails.push(new Mail("Electrónico", "nuevoemail@gmail.com"));
        persona.$telefonos.push(new Telefono("Fijo", 976542313));
    }
});

//Mostramos de nuevo los registros creados
console.log("");
persona1.Imprimir();
persona2.Imprimir();
persona3.Imprimir();