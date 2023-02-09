const menuEmail= document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer =document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

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
    
    mobileMenu.classList.toggle('inactive');
  }
  
  function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
      mobileMenu.classList.add('inactive'); 
    }
    
    shoppingCartContainer.classList.toggle('inactive');
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