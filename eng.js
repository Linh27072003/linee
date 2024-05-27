var oppenShopping = document.querySelector(".shopping");
var closeShopping = document.querySelector(".closeShopping");
var listProduct = document.querySelector(".listProduct");
var listCart = document.querySelector(".listCart");
var body = document.querySelector("body");
var total = document.querySelector(".total");
var quantity = document.querySelector(".quantity");

oppenShopping.addEventListener("click", () => {
    body.classList.add("active");
})
closeShopping.addEventListener("click", () => {
    body.classList.remove("active");
})
var products = [
  {
      id: 1,
      name: "Crochet bouquet of 7 flowers",
      img: "best1.jpg",
      price: 100000
  },
  {
      id: 2,
      name: "Croptop Shirt",
      img: "best2.jpg",
      price: 150000
  },
  {
      id: 3,
      name: "Mitsu the Bunny",
      img: "best4.jpg",
      price: 10000
},
  {
      id: 4,
      name: "Handmade necklaces",
      img: "best3.jpg",
      price: 95000
  },
  {
      id: 5,
      name: "Head wreath",
      img: "best6.jpg",
      price: 80000
  },
  {
      id: 6,
      name: "Wedding flowers",
      img: "best5.jpg",
      price: 250000
  }
];
var listCarts = [];
function initApp(){
    products.forEach((value, key)=>{
        var newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
        <div class="img-product">
        <img src="img/${value.img}" alt="" class = "san-pham">
    </div>
    <div class="name-product">
        <h3 class="name">
            ${value.name}
        </h3>
        <div class="vote">
            <div class="vote-star">
                <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </div>
            <h5>Đã bán 2,5k </h5>
        </div>
        <h4 class="price">
            ${value.price.toLocaleString()} <sup>đ</sup> <button class= "addToCart"onclick="addToCart(${key})">Buy</i></button>
        </h4>
    </div>
        `;
        listProduct.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
  if(listCarts[key]==null){
      listCarts[key]= JSON.parse(JSON.stringify(products[key]));
      listCarts[key].quantity = 1;
  }
  reloadCart();
}
function reloadCart(){
  listCart.innerHTML = '';
  var count = 0;
  var totalPrice = 0;
  listCarts.forEach((value, key) => {
      totalPrice = totalPrice + value.price;
      count = count + value.quantity;

      if(value != null){
          let newDiv = document.createElement('li');
          newDiv.innerHTML = `
              <img src="img/${value.img}"/>
              <div class="nameProduct">${value.name}</div>
              <div class="priceProduct">${value.price.toLocaleString()}<sup>đ</sup></div>
              <div class= "btn-change">
                  <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                  <div class="count">${value.quantity}</div>
                  <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
              </div>
              `;
              listCart.appendChild(newDiv);
      }
  })
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity){
  if(quantity == 0){
      delete listCarts[key];
  }else{
      listCarts[key].quantity = quantity;
      listCarts[key].price = quantity * products[key].price;
  }
  reloadCart();
}

//---------------------SHOW DETAIL-----------------//
let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.product-list .products').forEach(product =>{
  product.onclick = () =>{
    previewContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.close-icon').onclick = () =>{
    close.classList.remove('active');
    previewContainer.style.display = 'none';
  };
});

//------------------Login-------------------------//

var loginContainer = document.querySelector(".login-container");
var wrapper = document.querySelector(".wrapper");

var loginLink = document.querySelector(".login-link");

var registerLink = document.querySelector(".register-link");

var loginPopup = document.querySelector(".btnLogin-popup");
var iconClose = document.querySelector(".close-icon");

registerLink.addEventListener("click", ()=>{
    wrapper.classList.add("active-login"); 
});

loginLink.addEventListener("click", ()=>{
    wrapper.classList.remove("active-login"); 
});


loginPopup.addEventListener("click", ()=>{
    wrapper.classList.add("active-popup"); 
    loginContainer.classList.add("active-loginContainer");
});

iconClose.addEventListener("click", ()=>{
    wrapper.classList.remove("active-popup"); 
    loginContainer.classList.remove("active-loginContainer")
});


// Show password
var showPassword = document.getElementById("showPassword")

var inputPassword = document.getElementById("inputPassword")

showPassword.onclick = function (){
    if(inputPassword.type == 'password'){
        inputPassword.type = 'text';
        showPassword.classList.add('show');
    }
    else{
        inputPassword.type='password';
        showPassword.classList.remove('show');
    }
};
var showPasswordRegister = document.getElementById("showPasswordRegister")
var inputPasswordRegister = document.getElementById("inputPasswordRegister")
showPasswordRegister.onclick = function (){
    if(inputPasswordRegister.type == 'password'){
        inputPasswordRegister.type = 'text';
        showPasswordRegister.classList.add('show');
    }
    else{
        inputPasswordRegister.type='password';
        showPasswordRegister.classList.remove('show');
    }
};







//---------------------BUTTON HOVER-----------------//
var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }




  
//---------Chuyen slide anh------------------//

const listImg = document.querySelector(".list-img");
// const element = document.getElementById(".slide-show-js");
// console.log(element)
const imgs = document.getElementById("slide-show-js").getElementsByTagName("img");
console.log(imgs)
const btnLeft = document.querySelector(".change-left");
const btnRight = document.querySelector(".change-right");
const length = imgs.length;
let current=0;

btnRight.addEventListener("click", () =>{
    if(current == length - 1){
        current = 0;
        let width = imgs[0].offsetWidth
        listImg.style.transform = `translateX(0px)`;
    }
    else{
        current ++;
        let width = imgs[0].offsetWidth;
        listImg.style.transform = `translateX(${width * -1 * current}px)`
    }
})
btnLeft.addEventListener("click", () =>{
    if(current == 0){
        current = length - 1;
        let width = imgs[0].offsetWidth
        listImg.style.transform = `translateX(${width * -1 * current}px)`;
    }
    else{
        current --;
        let width = imgs[0].offsetWidth;
        listImg.style.transform = `translateX(${width * -1 * current}px)`
    }
})