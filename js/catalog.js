const cartButton=document.querySelectorAll(".buy-button"),cart=document.querySelector(".cart-modal");for(let t=0;t<cartButton.length;t++)cartButton[t].addEventListener("click",function(t){t.preventDefault(),cart.classList.add("modal-show")});const closeButton=document.querySelectorAll(".close-button"),continueButton=document.querySelector(".cart-modal-continue"),activeModal=document.querySelector(".modal-show");continueButton.addEventListener("click",function(t){t.preventDefault(),cart.classList.remove("modal-show")});for(let t=0;t<closeButton.length;t++)closeButton[t].addEventListener("click",function(t){t.preventDefault(),cart.classList.remove("modal-show")});