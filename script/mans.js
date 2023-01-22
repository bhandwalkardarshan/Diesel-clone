let activeloginuser = JSON.parse(localStorage.getItem("activeLoginUser"));
let cartproduct = JSON.parse(localStorage.getItem("cart")) || [];
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

//for cart count show
if(activeloginuser!=null){


let cartcount = document.getElementById("cart-count");
let count = 0;
cartproduct.forEach((element) => {
  if (element.cartusermobilenumber == activeloginuser.usermobilenumber) {
    cartcount.innerText = ++count;
  }
});
// window.location.href="../html/userdashboard.html"
}

//for new signin signup
let forNewSignin=document.getElementById("signin");
forNewSignin.addEventListener("click",()=>{
    console.log("before null")
    if(activeloginuser==null){
        console.log("after null")
        window.location.href="../html/signin.html"
    }
    else{
        window.location.href="../html/userdashboard.html"
    }
});



//<--------------->
// for new signup
let forNewSignup=document.getElementById("signup");
forNewSignup.addEventListener("click",()=>{
    // console.log("before null")
    if(activeloginuser==null){
        // console.log("after null")
        window.location.href="../html/signup.html"
    }
    else{
        window.location.href="../html/userdashboard.html"
    }
});










let allProductSection = document.getElementById("all-product-section");
featchingData();

async function featchingData() {
  try {
    let promise = await fetch("../db.json");
    let res = await promise.json();
    console.log(res.mensData);
    alldatashow(res.mensData);
  } catch (error) {}
}

function alldatashow(allwomandata) {
  allwomandata.forEach((element) => {
    let card = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", element.image);
    image.addEventListener("click", (e) => {
      localStorage.setItem("clickProduct", JSON.stringify(element));
      window.location.href = "../html/prticular_product_page.html";
    });

    let div = document.createElement("div");
    div.setAttribute("class", "price-style");

    let price = document.createElement("p");
    price.innerText = `₹${element.price}`;

    let orgprice = document.createElement("p");
    orgprice.innerText = `₹${element.orgprice}`;

    let off = document.createElement("span");
    off.innerText = "40% OFF";
    div.append(price, orgprice, off);

    let color = document.createElement("p");
    color.innerText = `${element.color}`;

    let title = document.createElement("p");
    title.innerText = `${element.title}`;

    card.append(image, div, color, title);
    allProductSection.append(card);
  });
}
