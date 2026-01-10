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
                    <input id="nota" type="text" class="nota" maxlength="20" placeholder="Ej. Sin cebolla">
                </details>

                <div class="precio-modal">
                    <div class="contador">
                        <button disabled id="menos" class="menos">−</button>
                        <span  id="cantidad" class="cantidad">0</span>
                        <button id="mas" class="mas">+</button>
                    </div>

                    <button class="modal-agregar">
                        <span>Agregar</span>
                        Mx $${precio}
                    </button>
                </div>
            </div>
  `;
  const nota = productoCliente.querySelector("#nota");
  const divImagen = productoCliente.querySelector(".imagen");
  const menos = productoCliente.querySelector("#menos");
  const mas = productoCliente.querySelector("#mas");

  divImagen.style.backgroundImage = `url(${imagen})`;

  menos.addEventListener("click", () => {
    restarCarrito(nombre, precio);
  });
  mas.addEventListener("click", () => {
    sumarCarrito(nombre, precio);
  });
  const salirMenu = productoCliente.querySelector("#atras");
  salirMenu.addEventListener("click", regresarmenu);
  modalCLiente.appendChild(productoCliente);
}

function sumarCarrito(nombre, precio) {
  const menos = document.querySelector("#menos");
  const cantidad = document.querySelector("#cantidad");
  let cantidadActual = Number(cantidad.textContent);
  cantidadActual++;
  cantidad.textContent = cantidadActual;
  if (cantidadActual >= 1) {
    menos.disabled = false;
    menos.style.opacity = "1";
  }
  console.log(precio);
}
function restarCarrito(nombre, precio) {
  const menos = document.querySelector("#menos");
  const cantidad = document.querySelector("#cantidad");
  let cantidadValor = Number(cantidad.textContent);
  cantidadValor--;
  cantidad.textContent = cantidadValor;
  if (cantidadValor <= 0) {
    menos.disabled = true;
    menos.style.opacity = ".4";
  }
  console.log(precio);
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
