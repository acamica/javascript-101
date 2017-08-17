var esPar = function(nro) {
  return (nro % 2) === 0;
}

for(var i = 1; i <= 40; i++){
  if(esPar(i)){
    console.log(i);
  }
}


var grillaNumeros = [
  [1, 5, 10],
  [5, 20, 22],
  [30, 17, 46]
]

for (var i = 0; i < grillaNumeros.length; i++) {
  for (var j = 0; j < grillaNumeros.length; j++) {
    var actual = grillaNumeros[i][j];
    if(!esPar(actual)){
      console.log(actual);
    }
  }
}
