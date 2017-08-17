# Funciones
Como su nombre lo indica, las funciones cumplen con una función. ¿Qué sería esto? 
Si lo llevamos a nosotros y nuestra vida, podría ser cualquier acción que realizamos. 
Hablar, correr, saltar, sumar, restar. Pero estas acciones tienen muchos pasos intermedios. 
Si yo le digo a alguien que corra no tengo que decirle “move la pierna hacia arriba, ahora dobla la rodilla un poco, 
llevala hacia adelante”, etc. 
“Correr” ya incluye todo eso. Las funnciones en el código son lo mismo, 
son formas de resumir un conjunto de pasos y reutilzarlos. 

Veamos el ejemplo de una función que saluda al usuario en la consola:

`saludar();`

Esto así como está no va a hacer nada. Porque en ningún momento dijimos que es `saludar()` y la computadora no es tan inteligente 
como para saberlo...

Para que sepa que hacer tenemos que **declarar** la función en algún lugar, es decir, describir que pasos hay que hacer
cada vez que escribamos `saludar()`


para declararlas vamos a tener una sintaxis similar al de la creación de variables, 
de hecho, la función va a estar guardada en una variable.

* Declaración:

    ```javascript
    var saludar = function() {
      console.log("¡Hola! Estamos aprendiendo sobre funciones en JavaScript");
    }
    ```


Ahora en la variable “saludar” tenemos guardada una función, que podemos ejecutar en cualquier momento. 
Es como que estamos **etiquetando con un nombre a este bloque de código y lo podemos reutilizar**. 

* Ejecución:

    `saludar();`
   
   
Ahora sí, se mostrará en la consola el texto "¡Hola! Estamos aprendiendo sobre funciones en JavaScript".


## Parámetros de funciones
Si pensamos con el ejemplo de `correr`, los parámetros serían como agregar algún tipo de dato extra que va a variar. 
Por ejemplo, correr 200m, correr 50m, correr 1000m. 

La funcionalidad es siempre la misma: correr, pero se está modificando
la distancia que pedimos que alguien corra. Esto son los parámetros que recibe un función.
Sabemos cómo ejecutar un bloque de código y reutilizarlo. 

Ahora, queremos poder llamar varias veces a una función “saludar” y
que muestre el saludo que nosotros queremos cada vez que la llamamos.
Por ejemplo, una vez con “hola amigos”, otra con “Cómo andan?”, etc. Para eso podemos utilizar los parámetros. 

* Ejecución con parámetros

    ```javascript
    saludar("hola amigos");
    saludar("¿Cómo andan?");
    ```


Si ejecutamos esto no va a pasar nada, sigue siendo siempre el mismo mensaje de saludo. 
Eso es porque cuando creamos nuestra función tenemos que decirle que puede recibir parámetros. ¿Te acordás cuando la declaramos?

* Cambiando la declaración para aceptar parámetros 

    ```javascript
    var saludar = function(saludo) {
      console.log(saludo);
    }
    ```

Una función con parámetros podemos pensarla como una caja que le damos algo y nos devuelve otra cosa.
Como esas máquinas de helado, le pasamos crema, leche y hielo y nos devuelve un helado. 
Es decir, hizo algo con los parámetros (la crema, la leche y el hielo),


## Return
Somos personas de hábitos, y qué mejor que generar hábitos saludables. 
Por ejemplo, salir a caminar. Para eso está muy bueno tener un registro de los km que caminamos a diario, 
y saber a lo largo del tiempo, dado un número de días cuantos kms tenemos acumulados para regocijarnos de nuestro esfuerzo.

Para eso, podemos hacer el cálculo manualmente. Si camino 5 km por día, en 365 días tendré caminados 1825 km! 

Entonces en dos años tendré: 5\*365\*2 km recorridos.
Podemos escribir en la consola del navegador 5\*365\*2, y si camino durante 5 años,5\*365\*5 para ver el resultado. 

Pero qué pasa si queremos que este cálculo sea automatizado? 
Acá siempre estamos repitiendo 5\*365, entonces seguramente existe una mejor forma. 
Por algo sabemos usar funciones, así que vamos a aprovecharlas.

* Retornando kilómetros recorridos:

    ```javascript
    
    var kmRecorridos = function(años){
        var kmsTotales = 5*365*años; 
        return kmsTotales;
    }
    
    ```

Apareció la palabra clave `return` es un valor que va a devolver nuestra función. 

Sólo tenemos que pasar los años que queremos por parámetro a la función y retornara el resultado!

```javascript
kmRecorridos(10) // retorna 18250  
kmRecorridos(6) // retorna 10950
```

## Ejercicios
Para programar una calculadora, necesitamos funciones para **sumar, restar, dividir y multiplicar.** 
¿Cómo implementarias estas funciones para que pasados dos parámetros **retornen** el valor luego de aplicar la operación correspondiente?

[Respuestas](/respuestas/funciones.js)
