//* 1. hacer una funcin llamada "producto" que reciba dos numeros enteros y que devuelva el producto de ambor. luego hacer un programa que pida el precio de un articulo la cantidad vendida y muestre por pantalla el monto total a pagar.(usar funciones ) */
//*2. haceer una funcion llamada "mayor" que reciba dos numero enteros y devuelva el mayor de ellos o cero si son iguales */
/* 3. hacer una funcion llamada "par" que reciba un numero entero que devuelva 1 si es par o cero si no es . hacer un programa para ingresar 20 numeros y mostrar por pantalla cuantos son pares.*/
/*4. hacer una funcion llama "primo" que reciba un numero entero y devuelva 1 si el numero es primo o cero si no lo es. hacer un programa para ingresar numeros. el lote corta cuando se ingresa el numero cero. informar el promedio teniendo en cuenta solo los numeros primos. */
/* 5. hacer una funciona llamada "pagos" que reciba un monto (float) y una cantidad de pagos (enteros) y devuelva el monto de cada pago. hacer un programa para ingresar 10 ventas. para cada venta se conoce el monto y la cantidad de pagos. el programa debera mostrar la cantidad de pagos y el monto del pago para cada una de las ventas.*/
/* 6. hacer una funcion que se llame "sumaresta" que reciba dos numeros y que devuelva la suma y la resta del primer numero con el segundo. NOTA: recordemos que una cuncion solo puede devolver un valor por return.
/* 7. hacer una funcion de tipo void(no tiene return) llama "positivoNegativoCero" que reciba un numero po valor y una variable por referenecia. que analice el numero y escriba variable recibida por referencia con |A: 1 si el numero es positivo |B: -1 si el numero es negativo |C: 0 si el numero es cero*/

{
  const producto = (articulo, cantidad) => articulo * cantidad;
  const priceSell = (artPrice, cantArt) => {
    const totalSell = producto(artPrice, cantArt);
    console.log(totalSell);
  };
  priceSell(322, 50);
}
