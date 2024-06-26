//CONTENEDORES PARA EL LISTADO DE PRODUCTOS
const seccionNike = document.getElementById("sectionNike")
const seccionAdidas = document.getElementById("sectionAdidas")
const seccionPuma = document.getElementById("sectionPuma")

const productos = [
    { imagen: './img/nike_sb-dunk-high.png', id: 1001, nombre: 'Nike SB Dunk High', precio: 120, marca: 'Nike' },
    { imagen: './img/nike-air-force-1.png', id: 1002, nombre: 'Nike Air Force 1', precio: 110, marca: 'Nike' },
    { imagen: './img/nike-air-max.png', id: 1003, nombre: 'Nike Air Max', precio: 130, marca: 'Nike' },
    { imagen: './img/nike-air-presto.png', id: 1004, nombre: 'Nike Air Presto', precio: 125, marca: 'Nike' },
    { imagen: './img/nike-blazer-mid.png', id: 1005, nombre: 'Nike Blazer Mid', precio: 115, marca: 'Nike' },
    { imagen: './img/nike-dunk-high-retro.png', id: 1006, nombre: 'Nike Dunk High Retro', precio: 140, marca: 'Nike' },
    { imagen: './img/nike-dunk-low.png', id: 1007, nombre: 'Nike Dunk Low', precio: 110, marca: 'Nike' },
    { imagen: './img/nike-ice-3.png', id: 1008, nombre: 'Nike Ice 3', precio: 135, marca: 'Nike' },
    { imagen: './img/nike-kyrie-5.png', id: 1009, nombre: 'Nike Kyrie 5', precio: 125, marca: 'Nike' },
    { imagen: './img/nike-roshe-run.png', id: 1010, nombre: 'Nike Roshe Run', precio: 100, marca: 'Nike' },
    { imagen: './img/nike-vapor-max.png', id: 1011, nombre: 'Nike Vapor Max', precio: 145, marca: 'Nike' },
    { imagen: './img/nike-zoom-pegasus.png', id: 1012, nombre: 'Nike Zoom Pegasus', precio: 135, marca: 'Nike' },
    { imagen: './img/nike-air-max-90.png', id: 1013, nombre: 'Nike Air Max 90', precio: 130, marca: 'Nike' },
    { imagen: './img/adidasultraboost-light-23.png', id: 1014, nombre: 'Adidas Ultra Boost', precio: 150, marca: 'Adidas' },
    { imagen: './img/adidas-alphaboost-v1.png', id: 1015, nombre: 'Adidas Alphaboost', precio: 145, marca: 'Adidas' },
    { imagen: './img/adidas-terrex-ax4.png', id: 1016, nombre: 'Adidas Terrex Ax4', precio: 140, marca: 'Adidas' },
    { imagen: './img/adidas-free-hiker-2.0-gore-tex.png', id: 1017, nombre: 'Adidas Free Hiker 2.0', precio: 155, marca: 'Adidas' },
    { imagen: './img/adidas-galaxy-6.png', id: 1018, nombre: 'Adidas Galaxy 6', precio: 120, marca: 'Adidas' },
    { imagen: './img/adidas-court-jam.png', id: 1019, nombre: 'Adidas Court Jam', precio: 115, marca: 'Adidas' },
    { imagen: './img/adidas-gazelle-indoor.png', id: 1020, nombre: 'Adidas Gazelle Indoor', precio: 110, marca: 'Adidas' },
    { imagen: './img/adidas-samba-og.png', id: 1021, nombre: 'Adidas Samba Og', precio: 105, marca: 'Adidas' },
    { imagen: './img/adidas-forum-low.png', id: 1022, nombre: 'Adidas Forum Low', precio: 130, marca: 'Adidas' },
    { imagen: './img/adidas-grand-court-2.0-shoes.png', id: 1023, nombre: 'Adidas Grand Court 2.0', precio: 125, marca: 'Adidas' },
    { imagen: './img/adidas-swift-run-2.0-shoes.png', id: 1024, nombre: 'Adidas Swift Run 2.0', precio: 115, marca: 'Adidas' },
    { imagen: './img/adidas-run-80s-shoes.png', id: 1025, nombre: 'Adidas Run 80s', precio: 110, marca: 'Adidas' },
    { imagen: './img/adidas-rivalry-low-shoes.png', id: 1026, nombre: 'Adidas Rivalry Low', precio: 105, marca: 'Adidas' },
    { imagen: './img/adidas-racer-tr23.png', id: 1027, nombre: 'Adidas Racer Tr23', precio: 130, marca: 'Adidas' },
    { imagen: './img/adidas-swift-run-1.0-shoes.png', id: 1028, nombre: 'Adidas Swift Run 1.0', precio: 125, marca: 'Adidas' },
    { imagen: './img/puma-infusion.png', id: 1029, nombre: 'Puma Infusion', precio: 115, marca: 'Puma' },
    { imagen: './img/puma-lex-nova.png', id: 1030, nombre: 'Puma Lex Nova', precio: 110, marca: 'Puma' },
    { imagen: './img/puma-pwr-frame.png', id: 1031, nombre: 'Puma Power Frame', precio: 140, marca: 'Puma' },
    { imagen: './img/puma-pwr-frame-2.0.png', id: 1032, nombre: 'Puma Power Frame 2.0', precio: 145, marca: 'Puma' },
    { imagen: './img/puma-training-fuse-3.0.png', id: 1033, nombre: 'Puma Training Fuse 3.0', precio: 135, marca: 'Puma' },
    { imagen: './img/puma-nitro-3.0.png', id: 1034, nombre: 'Puma Nitro 3.0', precio: 125, marca: 'Puma' },
    { imagen: './img/puma-nitro-2.0.png', id: 1035, nombre: 'Puma Nitro 2.0', precio: 120, marca: 'Puma' },
    { imagen: './img/puma-nitro.png', id: 1036, nombre: 'Puma Nitro', precio: 130, marca: 'Puma' },
    { imagen: './img/puma-fuse-hyperwave.png', id: 1037, nombre: 'Puma Fuse Hyperwave', precio: 115, marca: 'Puma' }
]

/* 
Estas funciones nos permitirán listar los productos en el html sin tener que escribirlo manualmente.
Separo cada una en 3 secciones distintas determinadas por marca con el filter.
En este caso a cada uno le di un id que contiene el nombre de la marca.
*/
function retornarListadoProductos(productos){
    return `
            <h3>${productos.nombre}</h3>
            <h4>ID :${productos.id}</h4>
            <p>$${productos.precio}</p>
            <br>
            `
}
function cargarListadoProductos(productos,...secciones) {
    if (productos.length > 0) {
        secciones.forEach(seccion =>{
        let productosFiltrados = productos.filter((producto) => seccion.id.includes(producto.marca))
        seccion.innerHTML = ""
        productosFiltrados.forEach((producto)=> seccion.innerHTML += retornarListadoProductos(producto))
    })}
}

cargarListadoProductos(productos,seccionNike,seccionAdidas,seccionPuma)


function calcularTotalCarrito(carrito){
    return carrito.reduce((acc,producto)=>acc + producto.precio, 0)
}

function buscarProducto(productos,idProductoBuscado){
    return  productos.find((producto)=> producto.id === parseInt(idProductoBuscado))
}

// Uso un eventlistener porque de otra manera es dificil que no se ejecuten antes de que cargue el contenido los prompts
let carrito = []
window.addEventListener('load', function() {
    let seguir = true
    while (seguir){
        seguir = confirm("¿Deseas añadir un producto al carrito?")
        if (seguir){

            let idProductoSeleccionado = prompt("Ingresa el id del producto deseas agregar?")
            let productoSeleccionado = buscarProducto(productos,idProductoSeleccionado)

            if (productoSeleccionado){
                alert(`${productoSeleccionado.nombre} se ha añadido al carrito`)
                carrito.push(productoSeleccionado)
            } else {
                alert("No se ha encontrado un producto con ese id")
            }

        } else {
            alert("Puedes ver tu carrito en la consola")
            console.table(carrito)
            alert(`El valor total de tu carrito es de $${calcularTotalCarrito(carrito)}`)
        }
    }
})

