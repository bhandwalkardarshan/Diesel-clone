let activeloginuser = JSON.parse(localStorage.getItem("activeLoginUser"));
let cartproduct = JSON.parse(localStorage.getItem("cart")) || [];


//for cart count show
let cartcount=document.getElementById("cart-count");
let count=0;
cartproduct.forEach(element => {
  if(element.cartusermobilenumber==activeloginuser.usermobilenumber){
    cartcount.innerText=++count;
  }
});
//<--------------->


//<--------for display login user--------------->
// let activeloginuser = JSON.parse(localStorage.getItem("activeLoginUser"));
let signinText = document.getElementById("signin");
let signupText = document.getElementById("signup");
if (activeloginuser) {
  signinText.classList.add("signinSignuptextnone");
  signupText.classList.add("signinSignuptextnone");
  signinText.classList.remove("signinSignuptextnone");
  signinText.innerText = `Hello, ${activeloginuser.username}`;
} else {
  signinText.classList.remove("signinSignuptextnone");
  signupText.classList.remove("signinSignuptextnone");
}
//<--------------user show end---------------->