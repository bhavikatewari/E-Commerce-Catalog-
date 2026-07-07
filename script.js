
// =======================================
// TechNova Store
// Developed by Bhavika Tewari
// =======================================

const cartCount = document.getElementById("cart-count");

// Create product section if it doesn't exist
const productSection = document.createElement("section");
productSection.className = "products";
document.body.insertBefore(productSection, document.querySelector("footer"));

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update Cart Count
function updateCartCount(){
    cartCount.textContent = cart.length;
}

// Display Products
function displayProducts(productArray){

    productSection.innerHTML = "";

    productArray.forEach(product=>{

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>${product.category}</p>

            <h4>₹${product.price.toLocaleString()}</h4>

            <p>⭐ ${product.rating}</p>

            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        `;

        productSection.appendChild(card);

    });

}

// Add To Cart
function addToCart(id){

    const product = products.find(item=>item.id===id);

    cart.push(product);

    localStorage.setItem("cart",JSON.stringify(cart));

    updateCartCount();

    alert(product.name + " added to cart!");

}

// Search Bar

const searchBox = document.createElement("input");

searchBox.type = "text";

searchBox.placeholder = "Search Products...";

searchBox.className = "search-box";

document.body.insertBefore(searchBox,productSection);

searchBox.addEventListener("keyup",()=>{

    const value = searchBox.value.toLowerCase();

    const filtered = products.filter(product=>

        product.name.toLowerCase().includes(value) ||

        product.category.toLowerCase().includes(value)

    );

    displayProducts(filtered);

});

// Initial Load

displayProducts(products);

updateCartCount();
