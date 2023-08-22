let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchform.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}

let loginform = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginform.classList.toggle('active');
    searchform.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginform.classList.remove('active');
}

window.onscroll = () =>{
    searchform.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider",{
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centerSlides: true,
    breakpoints: {
      0:{
        slidesPerView: 1,
      },
      768:{
        slidesPerView: 2,
      },
      1020:{
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".review-slider",{
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centerSlides: true,
    breakpoints: {
      0:{
        slidesPerView: 1,
      },
      768:{
        slidesPerView: 2,
      },
      1020:{
        slidesPerView: 3,
      },
    },
  });

  let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    cartItemsElement.innerHTML = "";
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerText = `${item.productName} - $${item.price}`;
        cartItemsElement.appendChild(listItem);
    });
    cartTotalElement.innerText = total;
}

function checkout() {
    // Implement the payment processing logic here (communicating with the server).
    alert("Payment successful! Thank you for shopping with us.");
    cart = [];
    total = 0;
    updateCart();
}