// row-1
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

// row-2
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

// p-3
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

// row-3
// p-1

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

// p-2
var mainImage7=document.getElementById("mainImage7");
var smallimg7=document.getElementsByClassName("small-img7");

smallimg7[0].onclick=function(){
    mainImage7.src=smallimg7[0].src;
}

smallimg7[1].onclick=function(){
    mainImage7.src=smallimg7[1].src;
}



// p-3
var mainImage8=document.getElementById("mainImage8");
var smallimg8=document.getElementsByClassName("small-img8");

smallimg8[0].onclick=function(){
    mainImage8.src=smallimg8[0].src;
}

smallimg8[1].onclick=function(){
    mainImage8.src=smallimg8[1].src;
}

smallimg8[2].onclick=function(){
    mainImage8.src=smallimg8[2].src;
}

// row-4
// p-1
var mainImage9=document.getElementById("mainImage9");
var smallimg9=document.getElementsByClassName("small-img9");

smallimg9[0].onclick=function(){
    mainImage9.src=smallimg9[0].src;
}

smallimg9[1].onclick=function(){
    mainImage9.src=smallimg9[1].src;
}

// p-2
var mainImage10=document.getElementById("mainImage10");
var smallimg10=document.getElementsByClassName("small-img10");

smallimg10[0].onclick=function(){
    mainImage10.src=smallimg10[0].src;
}

smallimg10[1].onclick=function(){
    mainImage10.src=smallimg10[1].src;
}

smallimg10[2].onclick=function(){
    mainImage10.src=smallimg10[2].src;
}

// p-3
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

// 5th row
// p-1
var mainImage12=document.getElementById("mainImage12");
var smallimg12=document.getElementsByClassName("small-img12");

smallimg12[0].onclick=function(){
    mainImage12.src=smallimg12[0].src;
}

smallimg12[1].onclick=function(){
    mainImage12.src=smallimg12[1].src;
}

smallimg12[2].onclick=function(){
    mainImage12.src=smallimg12[2].src;
}

// p-2
var mainImage13=document.getElementById("mainImage13");
var smallimg13=document.getElementsByClassName("small-img13");

smallimg13[0].onclick=function(){
    mainImage13.src=smallimg13[0].src;
}

smallimg13[1].onclick=function(){
    mainImage13.src=smallimg13[1].src;
}

smallimg13[2].onclick=function(){
    mainImage13.src=smallimg13[2].src;
}
smallimg13[3].onclick=function(){
    mainImage13.src=smallimg13[3].src;
}
smallimg13[4].onclick=function(){
    mainImage13.src=smallimg13[4].src;
}

// p-3
var mainImage14=document.getElementById("mainImage14");
var smallimg14=document.getElementsByClassName("small-img14");

smallimg14[0].onclick=function(){
    mainImage14.src=smallimg14[0].src;
}

smallimg14[1].onclick=function(){
    mainImage14.src=smallimg14[1].src;
}

smallimg14[2].onclick=function(){
    mainImage14.src=smallimg14[2].src;
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