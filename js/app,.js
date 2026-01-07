document.addEventListener("DOMContentLoaded", iniciarApp);
const contenedorProductos = document.querySelector("#contenedor-productos");
const cantidadCarrito = document.querySelector("#cantidad-items");

const total = document.querySelector("#total");
console.log(total);

const verPedido = document.querySelector(".btn-ver-pedido");
verPedido.addEventListener("click", mostrarPedido);

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
  // traer el pedido completo

  const pedido = productos.find((producto) => producto.id === id);
  carrito = [...carrito, pedido];

  const resultado = carrito.reduce((acc, producto) => {
    return acc + producto.precio;
  }, 0);
  total.textContent = `Total: $ ${resultado}`;

  console.log(resultado);

  cantidadCarrito.textContent = carrito.length;
}

function mostrarPedido(e) {
  e.preventDefault();
  carrito.forEach((producto) => {
    const pedidoCard = document.createElement("div");
    console.log(pedidoCard);
  });
}
