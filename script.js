
var listaObjetos =[];
function crearObjetoVendedor(nombreVendedor, apellidoVendedor, cedulaVendedor, nacimientoVendedor){
    if(nombreVendedor == "" ||apellidoVendedor == "" || cedulaVendedor=="" ||nacimientoVendedor==""){
        alert("Faltan campos por llenar !!");
    }else{

    
    var nuevoVendedor = {
        nombre : nombreVendedor,
        apellido : apellidoVendedor,
        cedula : cedulaVendedor,
        nacimiento : nacimientoVendedor
    };
    console.log(nuevoVendedor);
    listaObjetos.push(nuevoVendedor);
    }
    
}
function getObjetosLista(){
    return listaObjetos;
}







var btnGuardarVendedor = document.querySelector('#btn-guardar-vendedor');
var btnGuardarProducto = document.querySelector('#btn-guardar-producto');

function GuardarVendedor(){
var nombreVendedor = document.querySelector('#nombre-vendedor').value;
var apellidoVendedor = document.querySelector('#apellido-vendedor').value;
var cedulaVendedor = document.querySelector('#cedula-vendedor').value;
var nacimientoVendedor = document.querySelector('#nacimiento-vendedor').value;
crearObjetoVendedor(nombreVendedor, apellidoVendedor, cedulaVendedor, nacimientoVendedor);

console.log(getObjetosLista());

}

btnGuardarVendedor.addEventListener('click', GuardarVendedor);
