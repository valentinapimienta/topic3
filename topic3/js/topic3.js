
var input=document.querySelector("input")
var textoGuardado=localStorage.getItem('getData');
var button=document.querySelector("button")

button.addEventListener("click",function(){
    localStorage.setItem("textoGuardado", input.value);

});

/*las variables que no tienen la palabra var delante es para que puedan ser utilizadas fuera de las funciones,
si tienen la plabra var son locales, es decir que solo pueden utilizarse donde fueron declaradas*/
var bd;
function iniciar(){
    boton=document.getElementById('guardar'); //identificar
    boton.addEventListener('click', agregarObjeto, false);//ponemos a la escucha del evento
    var solicitud=indexedDB.open("miBase2"); //crear base de datos

    //si el crear la bd tuvo exito que ejecute esta funcion
    solicitud.onsuccess=function(e){
        bd=e.target.result; //almaceno en la variable bd (e es el objeto que desencadena el evento) mi base de datos
    }

    solicitud.onupgradeneeded=function(e){//si mi base de datos necesita actualizacion que se cree un almacen de objetos
        bd=e.target.result;
        bd.createObjectStore("textoingresado", {keyPath: "texto"});
    }
}
function agregarObjeto(){
    var texto =document.getElementById("texto").value;
    var transaccion=bd.transaction(["textoingresado"], "readwrite");
    var almacen=transaccion.objectStore("textoingresado");//almaceno en la variable la transaccion, para hacer cualquier modificacion solo necesito llamar a esta var.
    var agregar = almacen.add({texto:texto});
    //la tabla textoingresado va a tener un campo que se llame texto que va a tener la informacion de texto.

    document.getElementById("texto").value="";

}

/*
function borrar() {
    boton2=document.getElementById("borrar");
    boton2=addEventListener('click', borrarObjeto, false);
}
function borrarObjeto() {
    var transaccion=bd.transaction(["textoingresado"], "readwrite");
    var almacen=transaccion.objectStore("textoingresado");
    var borrar=almacen.delete("textoingresado");

    borrar.onsuccess=function(e){
        document.querySelector("texto").value="";

    }

}



window.addEventListener("load",iniciar, false);
