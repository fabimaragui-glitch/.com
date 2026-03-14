fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => {
    console.log(data);

    const productoContainer = document.getElementById('producto');

    data.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.classList.add('tarjeta-producto');

        productoElement.innerHTML = `
            <h4 class="titulo">${producto.title}</h4>
            <img class="imagen" src="${producto.image}" alt="Imagen del producto">
            <p class="descripcion"><strong>Descripción:</strong> ${producto.description}</p>
            <p class="precio"><strong>Precio:</strong> $${producto.price}</p>
            <button class="agregar">Agregar al carrito</button>
        `;

        productoContainer.appendChild(productoElement);
    });
})
.catch(error => console.error('Error al obtener el producto:', error));