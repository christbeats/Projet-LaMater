


let user = JSON.parse(localStorage.getItem("user"))?.user;

searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () => {
searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
loginForm.classList.remove('active');
}

let registerForm = document.querySelector('.register-form-container');

document.querySelector('#register-btn').onclick = () => {
registerForm.classList.toggle('active');
}

document.querySelector('#close-register-btn').onclick = () => {
registerForm.classList.remove('active');
}
if((user == null) || (user == undefined)){
    document.querySelector("#logout-btn").style.display = "none"
   
}else{
    document.querySelector("#logout-btn").style.display = "block"
    document.querySelector("#register-btn").style.display = "none"
    document.querySelector("#login-btn").style.display = "none"
    // swal(`bienvenue ${ user.last_name}`)
}

     document.querySelector('#logout-btn').addEventListener('click', (e)=>{
     localStorage.clear()
     location.reload()
     })



// const selected = document.querySelector(".selected");
// const optionsContainer = document.querySelector(".options-container");

// const optionsList = document.querySelectorAll(".option");



// selected.addEventListener("click", () => {
//     optionsContainer.classList.toggle("active");
// });

// optionsList.forEach(o => {
//     o.addEventListener("click", () => {
//         selected.innerHTML = o.querySelector("label").innerHTML;
//         optionsContainer.classList.remove("active");
//     });
// });




const cart = document.querySelector('.cart');
const btnCart = document.querySelector('#cart-btn');

const btnPlus = document.querySelector('#btnPlus');
const btnMinus = document.querySelector('#btnMinus');
const productCounter = document.querySelector('.counter');

const gallery = document.querySelectorAll('.pic');
const heroImg = document.querySelector('.product-hero');

const btnNext = document.querySelector('.next');
const btnPrevious = document.querySelector('.previous');

const btnAddToCard = document.querySelector('.btn-card');
const cartCount = document.querySelector('.cart-count');
const productInShoppingCart = document.querySelector('.products-in-cart');

const msgEmpty = document.querySelector('.msg-empty');
const checkout = document.querySelector('.checkout');

const overlay = document.querySelector('.overlay');
const lightbox = document.querySelector('.lightbox');
console.log(btnAddToCard)
let lightboxGallery;
let lightboxHero;


//Numerical Variables
let productCounterValue = 1;
let productsInCart = 0;
let price = 40000
let discount = 0.5;




btnCart.addEventListener('click', openCart);

btnPlus.addEventListener('click', productCounterPlus);
btnMinus.addEventListener('click', productCounterMinus);

gallery.forEach(img => {
img.addEventListener('click', onThumbClick);
});

btnNext.addEventListener('click', handleBtnClickNext);
btnPrevious.addEventListener('click', handleBtnClickPrevious);

btnAddToCard.addEventListener('click', addToCart);

heroImg.addEventListener('click', onHeroImgClick);




function openCart() {
cart.classList.toggle('hidden');
}

function productCounterPlus() {
//console.log(productCounterValue);
setProductCounter(1);
}

function productCounterMinus() {
setProductCounter(-1);
}

function setProductCounter(value) {
if ((productCounterValue + value) > 0) {
    productCounterValue += value;
    productCounter.innerHTML = productCounterValue;
}
//console.log(value);
}


function onThumbClick(event) {
//clear active state for all thumbnails
gallery.forEach(img => {
    img.classList.remove('active');
});
//set active thumbnail
event.target.parentElement.classList.add('active');
//update hero image
heroImg.src = event.target.src.replace('-thumbnail', '');
}

function handleBtnClickNext() {
let imageIndex = getCurrentImageIndex();
imageIndex++;
if (imageIndex > 4) {
    imageIndex = 1;
}
setHeroImage(imageIndex);
}

function handleBtnClickPrevious() {
let imageIndex = getCurrentImageIndex();
imageIndex--;
if (imageIndex < 1) {
    imageIndex = 4;
}
setHeroImage(imageIndex);
}

function getCurrentImageIndex() {
const imageIndex = parseInt(heroImg.src.split('\\').pop().split('/').pop().replace('.jpg', '').replace('image-product-', ''));
return imageIndex;
}

function setHeroImage(imageIndex) {
heroImg.src = `./images/image-product-${imageIndex}.jpg`;
//images are not sync
gallery.forEach(img => {
    img.classList.remove('active');
});
//set active thumbnail
gallery[imageIndex-1].classList.add('active');
}

function addToCart() {
productsInCart += productCounterValue;
console.log(this)
const productDetails = JSON.parse(localStorage.getItem('productDetails'))
console.log(productDetails.price)
const productHTMLElement = `
<div class="item">
    <img class="product-img" src=${productDetails.medias[0].link} alt="product 1 thumb">
    <div class="details">
        <div class="product-name">${productDetails.name}</div>
        <div class="price-group">
            <div class="price">${(productDetails.price).toFixed(2)}F</div> x
            <div class="count">${productsInCart}</div>
            <div class="total-amount">${(productDetails.price*productsInCart).toFixed(2)}F</div>
    </div>
    </div>
    <img id="btnDelete" src="image/icon-delete.svg" alt="icon delete">
</div>
`;

productInShoppingCart.innerHTML = productHTMLElement;

updateCart();

const btnDelete = document.querySelector('#btnDelete');
btnDelete.addEventListener('click', onBtnDeleteClick);
//console.log(productsInCart);
}

function updateCart() {
updateCartIcon();
updateMsgEmpty();
updateCheckoutButton();
}

function updateCartIcon() {
cartCount.textContent = productsInCart;
if (productsInCart == 0) {
    if (!cartCount.classList.contains('hidden')) {
        cartCount.classList.add('hidden');
    }
} else {
    cartCount.classList.remove('hidden');
}
}

function updateMsgEmpty() {
if (productsInCart == 0) {
    if (msgEmpty.classList.contains('hidden')) {
        msgEmpty.classList.remove('hidden');
    }
} else {
    if (!msgEmpty.classList.contains('hidden')){
        msgEmpty.classList.add('hidden');
    }
}

}

function updateCheckoutButton() {
if (productsInCart == 0) {
    if (!checkout.classList.contains('hidden')) {
        checkout.classList.add('hidden');
    }
} else {
    checkout.classList.remove('hidden');
}
}

function onBtnDeleteClick() {
productsInCart--;
updateCart();

const el = document.querySelector('.count');
const totalAmount = document.querySelector('.total-amount');
el.innerHTML = productsInCart;
totalAmount.innerHTML = `${(productDetails.price*productsInCart).toFixed(2)}F`;

if (productsInCart == 0) {
    productInShoppingCart.innerHTML = '';
}
}

function onHeroImgClick() {
if (window.innerWidth >= 1440) {
    if (overlay.childElementCount == 1) {
        const newNode = lightbox.cloneNode(true);
        overlay.appendChild(newNode);

        const btnOverlayClose = document.querySelector('#btnOverlayClose');
        btnOverlayClose.addEventListener('click', onBtnOverlayClose);

        lightboxGallery = overlay.querySelectorAll('.pic');
        lightboxHero = overlay.querySelector('.product-hero');
        lightboxGallery.forEach(img => {
            img.addEventListener('click', onThumbClickLightbox);
        });

        const btnOverlayNext = overlay.querySelector('.next');
        const btnOverlayPrevious = overlay.querySelector('.previous');
        btnOverlayNext.addEventListener('click', handleBtnClickNextOverlay);
        btnOverlayPrevious.addEventListener('click', handleBtnClickPreviousOverlay);
    }
    overlay.classList.remove('hidden');
}
}

function onBtnOverlayClose() {
overlay.classList.add('hidden');
}

function onThumbClickLightbox(event) {
//clear active state for all thumbnails
lightboxGallery.forEach(img => {
    img.classList.remove('active');
});
//set active thumbnail
event.target.parentElement.classList.add('active');
//update hero image
lightboxHero.src = event.target.src.replace('-thumbnail', '');
}


function handleBtnClickNextOverlay() {
let imageIndex = getOverlayCurrentImageIndex();
imageIndex++;
if (imageIndex > 4) {
    imageIndex = 1;
}
setOverlayHeroImage(imageIndex);
}

function handleBtnClickPreviousOverlay() {
let imageIndex = getOverlayCurrentImageIndex();
imageIndex--;
if (imageIndex < 1) {
    imageIndex = 4;
}
setOverlayHeroImage(imageIndex);
}

function getOverlayCurrentImageIndex() {
const imageIndex = parseInt(lightboxHero.src.split('\\').pop().split('/').pop().replace('.jpg', '').replace('image-product-', ''));
return imageIndex;
}

function setOverlayHeroImage(imageIndex) {
lightboxHero.src = `image/image-product-${imageIndex}.jpg`;
//images are not sync
lightboxGallery.forEach(img => {
    img.classList.remove('active');
});
//set active thumbnail
lightboxGallery[imageIndex-1].classList.add('active');
}

