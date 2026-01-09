// variables y selectores
const contendorProducto = document.querySelector("#contenedor-productos");
const header = document.querySelector("header");
const categorias = document.querySelector(".categorias");
const carritoBar = document.querySelector(".carrito-bar");
const modalCLiente = document.querySelector(".pedido");

// eventos
document.addEventListener("DOMContentLoaded", mostrarProductos);
// btnAgregar.addEventListener("click", mostrarModal);

// funciones

function mostrarProductos() {
  productos.forEach((producto) => {
    const { id, nombre, precio, categoria, descripcion, imagen } = producto;

    const divCard = document.createElement("DIV");
    divCard.classList.add("producto-card");
    divCard.innerHTML = `
        <img src="${imagen}" alt="Producto">
            <div class="producto-info">
                <h3>${nombre}</h3>
                <p>${descripcion}</p>
                <div class="precio-accion">
                    <span class="precio">$${precio}</span>
                    <button class="btn-agregar">+</button>
                </div>
            </div>
    `;

    const agrear = divCard.querySelector(".btn-agregar");
    agrear.addEventListener("click", () => {
      agregar(id);
    });

    contendorProducto.appendChild(divCard);
  });
}
function agregar(id) {
  eliminarHtml(modalCLiente);
  mostrarModal();
  const pedidoCliente = productos.find((producto) => producto.id === id);
  const { imagen, nombre, precio, descripcion } = pedidoCliente;

  const productoCliente = document.createElement("DIV");
  productoCliente.classList.add("modal");
  productoCliente.innerHTML = `
  
   <div id="atras" class="atras">×</div>

            <div class="imagen"></div>

            <div class="producto-modal">
                <h3>${nombre}</h3>
                <p>${descripcion}</p>

                <details>
                    <summary>Agregar nota</summary>
                    <input type="text" class="nota" maxlength="20" placeholder="Ej. Sin cebolla">
                </details>

                <div class="precio-modal">
                    <div class="contador">
                        <button id="menos" class="menos" disabled>−</button>
                        <span id="cantidad" class="cantidad">0</span>
                        <button id="mas" class="mas">+</button>
                    </div>

                    <button class="modal-agregar">
                        <span>Agregar</span>
                        MX $${precio}
                    </button>
                </div>
            </div>
  `;
  const divImagen = productoCliente.querySelector(".imagen");

  divImagen.style.backgroundImage = `url(${imagen})`;

  const salirMenu = productoCliente.querySelector("#atras");
  salirMenu.addEventListener("click", regresarmenu);
  modalCLiente.appendChild(productoCliente);
}

function mostrarModal() {
  header.classList.add("hidden");
  categorias.classList.add("hidden");
  contendorProducto.classList.add("hidden");
  carritoBar.classList.add("hidden");
  modalCLiente.classList.remove("hidden");
}

function cerrarModal() {
  header.classList.remove("hidden");
  categorias.classList.remove("hidden");
  contendorProducto.classList.remove("hidden");
  carritoBar.classList.remove("hidden");
  modalCLiente.classList.add("hidden");
}

function regresarmenu() {
  cerrarModal();
}

function eliminarHtml(contenedor) {
  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }
}
