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

`mientras sigan llegando más invitados, saludarlos`

`mientras haya espacio en la bolsa, agregar pelotas`

y esto en Javascript se escribe así:

```javascript
while(siganLlegandoInvitados) {
  saludarInvitado();
}
```

Veamos un ejemplo con una cuenta regresiva que empieza con un contador en 100 y se va descontando de a 1 hasta llegar a 0 donde se corta el bucle. 

```javascript
var contador = 100;

while (contador > 0) {
  contador--; 
}
```

Acordate que el ciclo **se va a seguir ejecutando hasta que deje de cumplirse la condición** (en este caso `contador > 0`)

## For

Así como el while nos permite repetir alguna tarea varias veces, 
existe una forma de hacer esto con una sintaxis simplificada.

Podemos poner el contador y la condición y el incremento (o decremento) del contaor en una sola línea:

```javascript
for(var contador = 0; contador < cantidadInvitados; contador++) {
 saludarInvitado();
}
```


que se podría traducir como: 
"Dados un `contador`, una `condición` y un `incremento del contador`, hacé determinada `acción`"

En nuestro ejemplo sería: 

"Dado el `contador de invitados` (contador), si el contador es `menor a la cantidad de invitados`  (condición), `sumá 1 al contador` (incremento) y `saludá al invitado` (acción)."

Parece algo críptico a primera vista, pero sólo estamos resumiendo las cosas:

```javascript
var contador = 0
```

estamos inicializando el contador que nos va indicar la posición en la que estamos

```javascript
contador < cantidadInvitados
```

es la condición para detener el for. Podemos usar cualquier otro tipo de condición. 
No necesariamente debe ser por menor (<) o mayor (>). Puede ser igual (=), igual o menor (=<), etc.

```javascript
contador++
```

en cada iteración del for le suma uno al contador, para avanzar a la siguiente posición
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
