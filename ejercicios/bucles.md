# Bucles
 
Cuando programamos es común que tengamos que repetir alguna tarea varias veces.
Imagínense que queremos hacer un programa que salude a todos los invitados a una fiesta. Haríamos algo como:

```
saludar invitado 1
saludar invitado 2
saludar invitado 3
saludar invitado 4
// repetir muchas veces más...
saludar invitado 120
```

Esto no parece ser una buena forma, tenemos que usar 120 líneas de código que dicen exactamente lo mismo.

## While

Acá es donde aparece la sentencia `while` ("mientras" en castellano), que tiene más o menos el siguiente significado:

`mientras se cumpla una condición, hacer algo.`

o

`while se cumpla una condición, hacer algo.`

Algunos ejemplos podrían ser:

`mientras (siga lloviendo), cerrar las puertas`

`mientras (haya espacio en la bolsa), agregar pelotas`

y esto en Javascript se escribe así:

* While en Javascript:

  ```javascript
  while(/*Condición*/) {
    //acción
  }
  ```

Veamos un ejemplo con una cuenta regresiva que empieza con un contador en 100 y se va descontando de a 1 hasta llegar a 0 donde se corta el bucle. 

* Cuenta regresiva:

  ```javascript
  var contador = 100;

  while (contador > 0) {
    contador--; 
    console.log(contador);
  }
  ```

El ciclo **se va a seguir ejecutando hasta que deje de cumplirse la condición** (en este caso `contador > 0`).

¿Qué pasará si nunca deja de cumplirse la condición? Ojo... si lo probás, podés tildar tu navegador!

## For

Así como el while nos permite repetir alguna tarea varias veces, 
existe una forma de hacer esto con una sintaxis simplificada.

Podemos poner el **contador**, la **condición** y el **incremento** (o decremento) del contador en una sola línea:

* Sintaxis For

  ```javascript
  for(var contador = 100; contador > 0; contador--) {
   console.log(contador);
  }
  ```

que se podría traducir como: 

Dados un `contador`, una `condición` y un `incremento del contador`
   hacé determinada `acción`

En nuestro ejemplo sería: 

"Dado el `contador iniciado en 100` (**contador**), si el contador es `mayor a 0`  (**condición**), `restar 1 al contador` (decremento) y `mostrá al contador por la consola` (**acción**)."

Parece algo críptico a primera vista, pero sólo estamos resumiendo las cosas:

`var contador = 100`: estamos inicializando el contador que nos va indicar la posición en la que estamos

`contador > 0`: es la condición para detener el for. Podemos usar cualquier otro tipo de condición. 
No necesariamente debe ser por menor (<) o mayor (>). Puede ser igual (=), igual o menor (=<), etc.

`contador--`: en cada iteración del for le resta uno al contador

Así, tendremos exactamente el mismo resultado que con el `while.`

## For en arreglos
Algo muy muy común es recorrer los valores de un arreglo y para eso podemos utilizar al bucle for y la propiedad length. Lo que queremos lograr es que mientras queden elementos en el arreglo ir recorriendo (o iterando, palabra muy usada en la programación).

```javascript
var gustosHelado = ['Vainilla', 'Frutilla', 'Chocolate', 'Limón'];
// mostramos los gustos de helado
for(var i = 0; i < gustosHelado.length; i++){
 console.log(gustosHelado[i]);
}
```

Lo que estamos haciendo es recorrer todos los gustos y mostrándolos en pantalla. 
Repasemos parte por parte el código:

`var i = 0;`: crea la variable que va a representar al índice

`i < gustosHelado.length;`: es la condición. Si el índice es equivalente al largo del arreglo, deberá detenerse (recordemos que empieza en 0, así que el chequeo debe ser por < y no por <=) 

`i++;`: en cada iteración le suma uno al índice para seguir recorriendo el arreglo.

