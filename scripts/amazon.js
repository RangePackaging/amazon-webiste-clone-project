import { cart, addToCart } from "../data/cart.js";
import { products } from '../data/products.js'
import { formatPrice } from "./utils/money.js";


// first we going to create our data inside a variable
// called products (DATA STRUCTURE) with a datatype as List. As each product
// going into the list will have many values we will
// use an Object Datatype to represent each of the 
// product NB: Object let us group multiple values together

// So inside the Array(list) we going to have multiple
// for each product

// Here we using the information from the products data to GENERATE the HTML
// We set a variable productsHTML to append our generated HTML into a STRING
// The process of accumulating/appending the result of each loop into the STRING
// productsHTML is called the ACCUMULATOR PATTERN

let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
        <div class="product-container">
                <div class="product-image-container">
                    <img class="product-image"
                    src="${product.image}">
                </div>
        
                <div class="product-name limit-text-to-2-lines">
                    ${product.name}
                </div>
        
                <div class="product-rating-container">
                    <img class="product-rating-stars"
                    src="images/ratings/rating-${product.rating.stars * 10}.png">
                    <div class="product-rating-count link-primary">
                    ${product.rating.count}
                    </div>
                </div>
        
                <div class="product-price">
                    $${formatPrice(product.priceCents)}
                </div>
        
                <div class="product-quantity-container">
                    <select>
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    </select>
                </div>
        
                <div class="product-spacer"></div>
        
                <div class="added-to-cart">
                    <img src="images/icons/checkmark.png">
                    Added
                </div>
        
                <button class="add-to-cart-button button-primary 
                js-add-to-cart" data-product-id='${product.id}'>
                    Add to Cart
                </button>
            </div> 
        `; 
});

// Here we add a class to the particular element in the HTML and 
// Using the DOM to select the class of that element from the HTML file 
// to insert the generated HTML unto the page
document.querySelector('.js-products-grid').innerHTML = productsHTML;

// MAKING THE PAGE INTERACTIVE
// Selecting all ADD To CART BUTTONS in the HTML to add EVENTLISTNER TO THEM
// to perform an action of adding produts into a CART
// where the CART is an ARRAY(list) of OBJECTS of Product's Name, Price and Qty
// NB: A cart.js file will be created in the data folder and  made to load in
// the HTML using a script element
// NB: To know the exact product(OBJECT) being pushed into the CART, we would
// need a DATA ATTRIBUTE(html attribute) to enable us add any information to the
// the particular element being used.
// The technique here is:
// First we loop through the cart to check if there are matching products
// If there is, then we create a variable call matchingItem then we increase
// it by 1, if not then we push it into the cart.
// The after UPDATING THE CART, we loop through it to sum the item quantities
// After getting the total CartQuantity then we put it in the Icon on the page
// using the DOM


// putting the update cart quantity into one function
function updateCartQuantity() {
    let cartQuantity = 0;
                cart.forEach((cartItem) => {
                    cartQuantity += cartItem.quantity
                });
                document.querySelector('.js-cart-quantity').innerHTML = cartQuantity
}
document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;

            addToCart(productId);
            updateCartQuantity()                              
        });
    });

    

