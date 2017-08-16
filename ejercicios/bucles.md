# Bucles
 
Cuando programamos es común que tengamos que repetir alguna tarea varias veces.
Imagínense que queremos hacer un programa que salude a todos los invitados a una fiesta. Haríamos algo como:
```javascript
saludar invitado 1
saludar invitado 2
saludar invitado 3
saludar invitado 4
…
saludar invitado 120
```

Esto no parece ser una buena forma, tenemos que usar 120 líneas de código que dicen exactamente lo mismo.
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
