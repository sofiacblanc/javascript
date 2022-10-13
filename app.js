
//funcion loguin

function loguin (nombre, apellido,){ 
  return "Usuario"+ " "+ nombre + apellido+" "+"ingresado con exito"
    
}


let usuario = prompt("ingrese su nombre")
let usuarioApellido = prompt("ingrese su apellido")
let mail = prompt("ingrese su mail")
let pass = prompt("ingrese su contraseña")


let resultado= loguin (usuario, usuarioApellido)
console.log(resultado)


// compra

/* por medio de prompt le pedimos al usuario si desea comprar algo*/

/*let seleccion = prompt("Hola! desea comprar una fruta?, si o no");

// usamos un bucle para que se repita y anidamos un if else para ver la opcion en caso de q se cumpla o no
while (seleccion != "no") {
  let productos = prompt("agregue la fruta que desea");
  let precio = 0;
  if (productos == "manzana" ||productos == "banana" ||productos == "naranja" 
  ) {
    switch (productos) {
      case "banana":
        precio = 200;
        break;
      case "naranja":
        precio = 250;
        break;
      case "manzana":
        precio = 150;
        break;
     default:
            break;
    }

  } else{
    alert ("no tenemos stock")
  }
// calculamos los resultados
let unidades= parseInt(prompt ("Cuantas desea llevar ?"))
let resultado = precio * unidades
console.log("el total es:"+ resultado)

seleccion= prompt("desea seguir comprando?")
} if(seleccion == "no"){
  alert("gracias, vuelva pronto!")
}*/