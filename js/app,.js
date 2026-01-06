document.addEventListener("DOMContentLoaded", iniciarApp);
const contenedorProductos = document.querySelector("#contenedor-productos");
const cantidadCarrito = document.querySelector("#cantidad-items");

let carrito = [];

function iniciarApp() {
  productos.forEach((producto) => {
    const productoCard = document.createElement("DIV");
    const { nombre, precio, categorias, descripcion, id } = producto;
    productoCard.classList.add("producto-card");
    productoCard.innerHTML = `
    <img src="imagenes/pizza-2589575_1280.jpg" alt="${nombre}">
        <div class="producto-info">
            <h3>${nombre}</h3>
            <p>${descripcion}</p>
            <div class="precio-accion">
                <span class="precio">$${precio}</span>
                <button class="btn-agregar" onclick="agregarCarrito(${id})">+</button>
            </div>
        </div>
    `;
    contenedorProductos.appendChild(productoCard);
  });
}

function agregarCarrito(id) {
  const pedido = productos.filter((producto) => producto.id === id);
  console.log(pedido);
}
