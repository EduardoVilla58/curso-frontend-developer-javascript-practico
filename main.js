const productList =[];

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu =document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');
const productDetailClose = document.querySelector('.product-detail-close');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const productDetailInfo = document.querySelector('.product-detailInfo');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailClose.addEventListener('click', closeCardAside);


function toggleDesktopMenu()
{
    if(!aside.classList.contains('inactive'))
    {
        aside.classList.toggle('inactive');
    }
    desktopMenu.classList.toggle('inactive');
    productDetailInfo.classList.add('inactive');
}
function toggleMobileMenu()
{
    if(!aside.classList.contains('inactive'))
    {
        aside.classList.toggle('inactive');
    }
    productDetailInfo.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
    
}
function toggleCarritoAside()
{
    if(!desktopMenu.classList.contains('inactive'))
    {
        desktopMenu.classList.toggle('inactive');
    }
    if(!mobileMenu.classList.contains('inactive'))
    {
        mobileMenu.classList.toggle('inactive');
    }
    aside.classList.toggle('inactive');
}
function openProductCardAside(){
    productDetailInfo.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}
function closeCardAside (){
    console.log("hhhhh");
    productDetailInfo.classList.add('inactive');
}

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Televisor',
    price: 220,
    image: 'https://hogarymoda.com.co/wp-content/uploads/2022/12/UN43T5300AKXZL1.jpg',
});
productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://carulla.vtexassets.com/arquivos/ids/8381186/computador-pc-torre-gamer-power-l38-intel-core-i5-10400-ssd-480gb-ram-8gb-led-22-full-hd-nvidia-730-2gb.jpg?v=637935007016370000',
});
productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://carulla.vtexassets.com/arquivos/ids/8381186/computador-pc-torre-gamer-power-l38-intel-core-i5-10400-ssd-480gb-ram-8gb-led-22-full-hd-nvidia-730-2gb.jpg?v=637935007016370000',
});
productList.push({
    name: 'Televisor',
    price: 220,
    image: 'https://hogarymoda.com.co/wp-content/uploads/2022/12/UN43T5300AKXZL1.jpg',
});

for(product of productList)
{
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.addEventListener('click', openProductCardAside);

    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText='$' + product.price;

    const productName = document.createElement('p');
    productName.innerText=product.name;

    const productInfoFigure = document.createElement('figure');
    const productInfoCard = document.createElement('img');
    productInfoCard.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productInfo.appendChild(productInfoDiv);

    productInfoFigure.appendChild(productInfoCard);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}