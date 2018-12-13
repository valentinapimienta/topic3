
function iniciar(){
    zonadatos=document.getElementById("zonadatos");
    var archivos=document.getElementById("archivos");
    archivos.addEventListener("change", crear, false);

    boton=document.getElementById('guardar'); //identificar
    boton.addEventListener('click', crear, false);//ponemos a la escucha del evento
    navigator.webkitPersistentStorage.requestQuota(5*1024*1024, acceso);

}

function acceso(){
    window.webkitRequestFileSystem(PERSISTENT,5*1024*1024,crearsis,errores);//el metoddo llama a crearsis cuando esto ocurre se lanza el objeto filesystem


}
function crearsis(sistema){//con sistema estamos haciendo referencia a filesystem
    espacio=sistema.root;//espacio va a ser la raiz de nuestro sistema de archivos

}
function crear(){
    var nombre_archivo=document.getElementById("archivos").value;
    if (nombre_archivo!="") {
        espacio.getFile(nombre_archivo, {create:true, exclusive:false}, mostrar, errores);
    }

}
function mostrar(entrada){
    document.getElementById("archivos").value="";
    zonadatos.innerHTML="Exito en la creacion!"
    zonadatos.innerHTML+="Nombre: "+archivo.name+"<br>";
    zonadatos.innerHTML+="Ruta: "+entrada.fullPath+"<BR>";

}
function errores(e){
    alert("ha habido un error: "+e.code);
}



window.addEventListener("load",iniciar, false);
