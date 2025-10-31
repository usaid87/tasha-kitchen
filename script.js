
// best seller

// p-1
var mainImage =document.getElementById("mainImg");
var smallimg=document.getElementsByClassName("small-img");

smallimg[0].onclick=function(){
    mainImage.src=smallimg[0].src;
}

smallimg[1].onclick=function(){
    mainImage.src=smallimg[1].src;
}

smallimg[2].onclick=function(){
    mainImage.src=smallimg[2].src;
}

// p-3
var mainImage17=document.getElementById("mainImage17");
var smallimg17=document.getElementsByClassName("small-img17");

smallimg17[0].onclick=function(){
    mainImage17.src=smallimg17[0].src;
}

smallimg17[1].onclick=function(){
    mainImage17.src=smallimg17[1].src;
}

// p-4
var mainImage2 =document.getElementById("mainImage2");
var smallimg2=document.getElementsByClassName("small-img2");

smallimg2[0].onclick=function(){
    mainImage2.src=smallimg2[0].src;
}

smallimg2[1].onclick=function(){
    mainImage2.src=smallimg2[1].src;
}

smallimg2[2].onclick=function(){
    mainImage2.src=smallimg2[2].src;
}
smallimg2[3].onclick=function(){
    mainImage2.src=smallimg2[3].src;
}

// p-5
var mainImage7=document.getElementById("mainImage7");
var smallimg7=document.getElementsByClassName("small-img7");

smallimg7[0].onclick=function(){
    mainImage7.src=smallimg7[0].src;
}

smallimg7[1].onclick=function(){
    mainImage7.src=smallimg7[1].src;
}

// p-6
var mainImage11=document.getElementById("mainImage11");
var smallimg11=document.getElementsByClassName("small-img11");

smallimg11[0].onclick=function(){
    mainImage11.src=smallimg11[0].src;
}

smallimg11[1].onclick=function(){
    mainImage11.src=smallimg11[1].src;
}

smallimg11[2].onclick=function(){
    mainImage11.src=smallimg11[2].src;
}

// p-7
var mainImage8=document.getElementById("mainImage8");
var smallimg8=document.getElementsByClassName("small-img8");

smallimg8[0].onclick=function(){
    mainImage8.src=smallimg8[0].src;
}

smallimg8[1].onclick=function(){
    mainImage8.src=smallimg8[1].src;
}

// p-8
var mainImage5=document.getElementById("mainImage5");
var smallimg5=document.getElementsByClassName("small-img5");

smallimg5[0].onclick=function(){
    mainImage5.src=smallimg5[0].src;
}

smallimg5[1].onclick=function(){
    mainImage5.src=smallimg5[1].src;
}

smallimg5[2].onclick=function(){
    mainImage5.src=smallimg5[2].src;
}

// p-9
var mainImage4=document.getElementById("mainImage4");
var smallimg4=document.getElementsByClassName("small-img4");

smallimg4[0].onclick=function(){
    mainImage4.src=smallimg4[0].src;
}

smallimg4[1].onclick=function(){
    mainImage4.src=smallimg4[1].src;
}

smallimg4[2].onclick=function(){
    mainImage4.src=smallimg4[2].src;
}

// new arrival
// p-1
var mainImage3=document.getElementById("mainImage3");
var smallimg3=document.getElementsByClassName("small-img3");

smallimg3[0].onclick=function(){
    mainImage3.src=smallimg3[0].src;
}

smallimg3[1].onclick=function(){
    mainImage3.src=smallimg3[1].src;
}

smallimg3[2].onclick=function(){
    mainImage3.src=smallimg3[2].src;
}

// p-2
var mainImage1 =document.getElementById("mainImage1");
var smallimg1=document.getElementsByClassName("small-img1");

smallimg1[0].onclick=function(){
    mainImage1.src=smallimg1[0].src;
}

smallimg1[1].onclick=function(){
    mainImage1.src=smallimg1[1].src;
}

smallimg1[2].onclick=function(){
    mainImage1.src=smallimg1[2].src;
}

// p-3

var mainImage6=document.getElementById("mainImage6");
var smallimg6=document.getElementsByClassName("small-img6");

smallimg6[0].onclick=function(){
    mainImage6.src=smallimg6[0].src;
}

smallimg6[1].onclick=function(){
    mainImage6.src=smallimg6[1].src;
}

smallimg6[2].onclick=function(){
    mainImage6.src=smallimg6[2].src;
}


const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}


// cart

document.addEventListener("DOMContentLoaded", function () {
  const cartButtons = document.querySelectorAll(".add-to-cart");

  cartButtons.forEach(button => {
    button.addEventListener("click", function () {
      const id = this.dataset.id;
      const name = this.dataset.name;
      const price = this.dataset.price;
      const img = this.dataset.img;

     
      let cart = JSON.parse(localStorage.getItem("cart")) || [];


      const existingItem = cart.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1; 
      } else {
        cart.push({ id, name, price, img, quantity: 1 });
      }

      
      localStorage.setItem("cart", JSON.stringify(cart));

      
      alert(`${name} has been added to your cart!`);
    });
  });
        updateCartCount();
});

function updateCartCount() {
  const countEl = document.getElementById("cart-count");
  if (!countEl) return;
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  countEl.textContent = totalCount;
}


document.addEventListener("DOMContentLoaded", updateCartCount);


window.addEventListener("storage", updateCartCount);
