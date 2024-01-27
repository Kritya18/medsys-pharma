document.addEventListener('DOMContentLoaded', function () {
    // Sample product data (replace this with your actual product data)
    const products = [
        { id: 1, name: 'Vitamin', description: 'Description for Product 1', price: 19.99, image: "images/realistic-vitamin-complex-package_23-2148490928.avif" },
        { id: 2, name: 'Protein', description: 'Description for Product 2', price: 29.99, image: "images/high-angle-pill-containers-with-foils_23-2148533502.avif" },
        { id: 3, name: 'Hemoglobin', description: 'Description for Product 3', price: 39.99, image: "images/brain-booster-pills-still-life_23-2150769460.avif" },
    ];
    

    displayProducts(products);

    function displayProducts(products) {
        const productListDiv = document.getElementById('product-list');

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const productName = document.createElement('h3');
            productName.textContent = product.name;

            const productDescription = document.createElement('p');
            productDescription.textContent = product.description;

            const productPrice = document.createElement('p');
            productPrice.textContent = `$${product.price.toFixed(2)}`;

            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.alt = product.name;

            const buyButton = document.createElement('button');
            buyButton.textContent = 'Buy Now';
            buyButton.addEventListener('click', () => buyProduct(product.id));

            productCard.appendChild(productName);
            productCard.appendChild(productImage);
            productCard.appendChild(productDescription);
            productCard.appendChild(productPrice);
            productCard.appendChild(buyButton);

            productListDiv.appendChild(productCard);
        });
    }

    function buyProduct(productId) {
        // Implement logic to handle the purchase
        alert(`Product with ID ${productId} has been added to your cart.`);
    }
});
