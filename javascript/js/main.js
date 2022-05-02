let numero1=10; //declaracion de variables var_ es para todo el codigo, let es para una parte y constant es una variable que nunca se va a cambiar
let numero2=10;
concatenacion= ""+ numero1 +" "+numero2; //Para concatenar numeros se hace así se pone "" al principio
document.write(concatenacion) //esta funcion sirve para imprimir en la pagina lo que se esta haciendo 
//backits concatenacion

frase1="estoy viendo el partido del Quindío"; 
frase2= ` soy juan gerardo y ${frase1}`; //control + alt + ] para sacar esas comillas
document.write(frase2);
//condicionales
if (numero1==numero2){
    alert("oe parcero son iguales.")
}
else if(numero1>numero2){
    alert(numero1 + " es mayor que el " + numero2)
}
else {
    alert("no sé")
}
/* Pracita*/
dineroCofla = prompt("Cuanto dinero tienes, Cofla?");
dineroPedro = prompt("Cuanto dinero tienes, Cofla?");
dineroRoberto = prompt("Cuanto dinero tienes, Cofla?");
if (dineroCofla=>0,6 && dineroCofla<1) {
    alert("Cofla, comprate el helado de Agua");
}
"</br>"
// ARRAYS
let arrayNames= ["lucas","andres", "Jhon", "Merchan"]; //la coma se usa para separar los elementos.
document.write(arrayNames[0]);
//ARRAY ASOCIATIVOS en vez de asignar las posiciones con numeros se asignan con alfanumericos.
let pc ={
    nombre: "GerardPC",
    procesador : "Intel",
    ram : "24gb",
    espacio: "1tb"
};
document.write (pc["nombre"])

//BUCLES :) 
let numero= 0;
while (numero<5){
    numero++;
    document.write(numero + "<br>");
}
//bucle do while
do {
    document.write(numero + "<br>");
    numero++;
}
while (numero >6)
//Primero se ejecuta la accion del "do" y luego se pregunta en el while si la condicion es verdadera el break sirve para parar un ciclo
//CICLOS FOR dentro del parentesis (declaracion de variable; condicion; aumento o decremento;)
for(let i= 0; i<6; i++){
    
    if(i==3){
        continue;//si i = 3 entonces se va a saltar la ejecucion del bucle y sube directamente al bucle
    }
    document.write(i  + "<br>")
}
//FOR IN 
let animals=[gato,dinosaurio,perro]
for (animal in animals){
    document.write(animal + "<br>") // Este ciclo lo que hace es mostrar la posicion del arreglo, los subindices, se puede combinar tambien para usar ese subinidice para imprimir por pantalla el elemento.
}
//FOR OF
for(animal of animals){
    document.write(animal+ "<br>") //Este muestra por pantalla el elemento de un arreglo y la variable animal va tomar el valor de la posicion en el arreglo.
}

//FUNCIONES !
function sumar(a,b){
    let result=a+b;
    return result;
}
let resultadoSuma=sumar(8,4);
document.write(`La suma de los numeros es ${resultadoSuma}`);