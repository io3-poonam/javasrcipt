const data=[
    {
        image:"./image/shoe10.png",
        alt:"shoes",
        title:"Nike Sport Shoes",
        description:"Mens Gts 97 NSW Other Sports",
        price:"458",
        inStock:true,

stock:4,    },
    {
        image:"./image/shoes1.png",
        alt:"shoes",
        title:"Sneakers Sports Shoes",
        description:"Men's Mesh Layer Upper Comfort Running Shoes (White sky-blue)",
        price:"658",
        inStock:true,
        stock:19,
     },
    {
        image:"./image/shoes2.png",
        alt:"shoes",
        title:"Nike Sport Shoes",
        description:"female Gts 97 NSW Other Sports",
        price:"852",
        inStock:false,
        stock:0,
    },
    {
      image:"./image/shoe10.png",
      alt:"shoes",
      title:"Nike Sport Shoes",
      description:"male Gts 97 NSW Other Sports",
      price:"852",
      inStock:false,
      stock:0,
  },
 
    {
        image:"./image/shoes6.png",
        alt:"shoes",
        title:"Nike Sport Shoes",
        description:"Mens Gts 97 NSW Other Sports",
        price:"899",
        inStock:true,
        stock:12,
shock:0,      }
,
{
        image:"./image/shoes9.png",
        alt:'shoes',
        title:"Nike Sport Shoes",
        description:"Mens Gts 97 NSW Other Sports",
        price:"928",
        inStock:true,
        stock:5,
    }
]
console.log('testing', data);
const [, , productListDetails]=document.querySelectorAll('.shoes-container')
console.log('productListDetails', productListDetails)
data.map((shoesDetails, index) => {
const productContainer=document.createElement('div');

productContainer.classList.add("shoes-collect")
productContainer.innerHTML=`
<div class="shoe-img">
  <img src="${shoesDetails.image}" alt="${shoesDetails.alt}" >   
</div>
<div>
  <h2 class="product-title">${shoesDetails.title} </h2>
  <p class="product-detail">${shoesDetails.description}</p>
</div>  
<div  class="price-section">
  <span>$ ${shoesDetails.price}</span>
  ${shoesDetails.inStock || shoesDetails.stock>0?
    `<span class="inStock">Stock:${shoesDetails.stock}</span>`:`<span class="inStock">Out of Stock</span>` }
   
    <button class="add-to-cart" onclick="handleToCart(${index})">
    <a href="./testing.html">  
      <i class="fa-solid fa-cart-shopping"></i></a>Add to Cart
  </button>
  <button class="btn">
    <a href="./testing.html">  
      <i class="fa-solid fa-cart-shopping"></i></a>Buy Now
  </button>
</div>
</div>`
productListDetails.append(productContainer);});
let cart =[];
function handleToCart (index){
  console.log('handleToCart', index);
  console.log('index', data[index]);
  cart.push(data[index])
  console.log('cart', cart)
  const cartShopping=document.querySelector('.cart-shopping-span');
  cartShopping.innerHTML=cart.length
  console.log('cartShopping',cartShopping)
}
let isCartClicked = false; 
const cartClick = () => {
  
  console.log('click bar', cart);
  isCartClicked = !isCartClicked;
  const cardShow=document.querySelector('.aside');
  if(isCartClicked ==  true){
    cardShow.classList.remove('d-none');
    cardShow.classList.add('d-block');
  }
  else{
      cardShow.classList.add('d-none');
      cardShow.classList.remove('d-block');
  
  }
}
// console.log('hghjgnjh'), cartClick