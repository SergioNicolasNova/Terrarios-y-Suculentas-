const menuEmail= document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const producDetailCloseIcon= document.querySelector('.produc-detail-close')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer=document.querySelector('.producDetail')
const cardsContainer =document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
producDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  
    if (!isAsideClosed) {
      shoppingCartContainer.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
  }
  
  function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  
    if (!isAsideClosed) {
      shoppingCartContainer.classList.add('inactive'); 
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
  }
  
  function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
      mobileMenu.classList.add('inactive');
    }  
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
    if (!isProductDetailClosed) {
      productDetailContainer.classList.add('inactive'); 
    }    
    shoppingCartContainer.classList.toggle('inactive');
  }
  
  function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
  }
  
  function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
  }

const productList =[];
productList.push({
    name: 'Terrarios',
    price: 45000,
    image: './Imagenes/WhatsApp Image 2022-12-28 at 1.09.38 PM.jpeg'
});
productList.push({
    name: 'Terrarios',
    price: 45000,
    image: './Imagenes/WhatsApp Image 2022-12-28 at 1.09.38 PM.jpeg'
});
productList.push({
    name: 'Terrarios',
    price: 45000,
    image: './Imagenes/WhatsApp Image 2022-12-28 at 1.09.38 PM.jpeg'
});
function renderProducts(arr) {
    for (product of arr) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
    
      // product= {name, price, image} -> product.image
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
      productImg.addEventListener('click',openProductDetailAside)
    
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
    
      const productInfoDiv = document.createElement('div');
    
      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.price;
      const productName = document.createElement('p');
      productName.innerText = product.name;
    
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
    
      const productInfoFigure = document.createElement('figure');
      const productImgCart = document.createElement('img');
      productImgCart.setAttribute('src', './Imagenes/add_shopping_cart_FILL0_wght400_GRAD0_opsz48.svg');
    
      productInfoFigure.appendChild(productImgCart);
    
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
    
      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);
    
      cardsContainer.appendChild(productCard);
    }
  }
  
  renderProducts(productList);