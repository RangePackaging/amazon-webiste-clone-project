export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
    cart = [
        {
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId: '1',
        },
    
        {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1,
            deliveryOptionId: '2',
        }
    ];
}



function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
}

// Putting the add to cart code into one function
export function addToCart (productId) {
    let matchingItem;    
    cart.forEach((cartItem) => {
        if (cartItem.productId === productId) {
            matchingItem = cartItem
            } 
        }); 
        
        if(matchingItem) {
            matchingItem.quantity += 1;
        }else {
            cart.push({
                productId: productId,
                quantity: 1,
                deliveryOptionId: '1'
            });
        }
        saveToStorage();
};

// Technique for removing product from the cart
// 1. create an array
// 2. Loop through the cart
// 3. Add each product to the new except for this productid
export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    })
    cart = newCart;
    saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;    
    cart.forEach((cartItem) => {
        if (cartItem.productId === productId) {
            matchingItem = cartItem
            } 
        }); 

        matchingItem.deliveryOptionId = deliveryOptionId

        saveToStorage();
}