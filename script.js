let total = 0;

function agregar(nombre, precio) {
    let lista = document.getElementById("lista");

    let item = document.createElement("li");
    item.textContent = nombre + " - $" + precio;

    lista.appendChild(item);

    total += precio;
    document.getElementById("total").textContent = total;
}

function comprar() {
    if (total === 0) {
        alert("Tu carrito está vacío");
    } else {
        alert("Compra realizada con éxito 🛒");
        location.reload();
    }
}