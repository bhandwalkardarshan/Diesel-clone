let cartproduct = JSON.parse(localStorage.getItem("cart")) || [];
let clickProduct = JSON.parse(localStorage.getItem("clickProduct"));
let activeloginuser = JSON.parse(localStorage.getItem("activeLoginUser"));


let particularProductSection = document.getElementById(
  "particular-product-section"
);

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




//for cart count show
if(activeloginuser!=null){


  let cartcount = document.getElementById("cart-count");
  let count = 0;
  cartproduct.forEach((element) => {
    if (element.cartusermobilenumber == activeloginuser.usermobilenumber) {
      cartcount.innerText = ++count;
    }
  });
  }
//<--------------->





let fourImage = document.getElementById("four-image");
let userChooseSize = "";
let productDetails = document.getElementById("product-details");
let loginuserlive = document.querySelector(".loginuserlive");
let signinText = document.getElementById("signin");
let signupText = document.getElementById("signup");
//for login user name show
if (activeloginuser) {
  signinText.classList.add("signinSignuptextnone");
  signupText.classList.add("signinSignuptextnone");
  signinText.classList.remove("signinSignuptextnone");
  signinText.innerText = `Hello, ${activeloginuser.username}`;
} else {
  signinText.classList.remove("signinSignuptextnone");
  signupText.classList.remove("signinSignuptextnone");
}

showClickedProduct();

function showClickedProduct() {
  //four additional image

  let div1 = document.createElement("div");
  let image1 = document.createElement("img");
  image1.setAttribute("src", clickProduct.additionalImg[0]);
  div1.append(image1);

  let div2 = document.createElement("div");
  let image2 = document.createElement("img");
  image2.setAttribute("src", clickProduct.additionalImg[1]);
  div2.append(image2);

  let div3 = document.createElement("div");
  let image3 = document.createElement("img");
  image3.setAttribute("src", clickProduct.additionalImg[2]);
  div3.append(image3);

  let div4 = document.createElement("div");
  let image4 = document.createElement("img");
  image4.setAttribute("src", clickProduct.additionalImg[3]);
  div4.append(image4);

  fourImage.append(div1, div2, div3, div4);
  //product details

  let title = document.createElement("h3");
  title.innerText = clickProduct.title;

  let price = document.createElement("h3");
  price.innerText = `MRP ₹${clickProduct.price}`;

  let p = document.createElement("P");
  p.innerText = `Price inclusive of all taxes`;

  let color = document.createElement("P");
  color.innerText = `COLOR: ${clickProduct.color}`;

  let size = document.createElement("p");
  size.innerText = "CHOOSE SIZE :";

  let Main = document.createElement("div");
  Main.setAttribute("id", "sizes");

  let button1 = document.createElement("button");
  button1.innerText = "26";
  button1.addEventListener("click", (e) => {
    userChooseSize = e.target.innerText;
    button1.style.backgroundColor = "black";
    button1.style.color = "white";
  });

  let button2 = document.createElement("button");
  button2.innerText = "28";
  button2.addEventListener("click", (e) => {
    userChooseSize = e.target.innerText;
    button2.style.backgroundColor = "black";
    button2.style.color = "white";
  });

  let button3 = document.createElement("button");
  button3.innerText = "30";
  button3.addEventListener("click", (e) => {
    userChooseSize = e.target.innerText;
    button3.style.backgroundColor = "black";
    button3.style.color = "white";
  });

  let button4 = document.createElement("button");
  button4.innerText = "32";
  button4.addEventListener("click", (e) => {
    userChooseSize = e.target.innerText;
    button4.style.backgroundColor = "black";
    button4.style.color = "white";
  });

  let button5 = document.createElement("button");
  button5.innerText = "34";
  button5.addEventListener("click", (e) => {
    userChooseSize = e.target.innerText;
    button5.style.backgroundColor = "black";
    button5.style.color = "white";
  });

  let button6 = document.createElement("button");
  button6.innerText = "36";
  button6.addEventListener("click", (e) => {
    userChooseSize = e.target.innerText;
    button6.style.backgroundColor = "black";
    button6.style.color = "white";
  });

  Main.append(button1, button2, button3, button4, button5, button6);

  let btn = document.createElement("button");
  btn.innerText = "ADD TO CART";
  btn.setAttribute("id", "btn");
  btn.addEventListener("click", (e) => {
   


    console.log(e.target.innerText);
    if (userChooseSize == "") {
      alert("please select size!");
    }
    
    else {
      if (JSON.parse(localStorage.getItem("activeLoginUser")) == null) {
        alert("You have to login first");
        setTimeout(() => {
          window.location.href = "../html/signin.html";
        }, 2000);
      } else {
        signinText.classList.add("signinSignuptextnone");
        signupText.classList.add("signinSignuptextnone");
        // loginuserlive.innerHTML = `Hello`;
        signinText.classList.remove("signinSignuptextnone");
        signinText.innerText = `Hello, ${activeloginuser.username}`;

        
        for(let element of cartproduct){
          if(element.cartusermobilenumber==activeloginuser.usermobilenumber){
              if(clickProduct.id==element.cartproductid){
                alert("already you cart this product");
                return;
              }
          }
        }

        let obj = {
          cartusermobilenumber: activeloginuser.usermobilenumber,
          cartproductimage: clickProduct.additionalImg[0],
          cartproducttitle: clickProduct.title,
          cartproductprice: clickProduct.price,
          cartproductid: clickProduct.id,
          cartproductcolor: clickProduct.color,
          cartproductsize: userChooseSize,
          cartproductquantity: 1,
        };
        cartproduct.push(obj);
        localStorage.setItem("cart", JSON.stringify(cartproduct));
        window.location.href = "../html/cart.html";
      }
    }
  });

  let Fav = document.createElement("img");
  Fav.setAttribute("src", "../images/hollow.png");
  Fav.setAttribute("id", "fav2");

  Fav.addEventListener("click", () => {
    Fav.setAttribute("src", "../images/love.png");
    Fav.addEventListener("click", () => {
      Fav.setAttribute("src", "../images/hollow.png");
    });
    Fav.setAttribute("id", "fav3");
  });

  let details = document.createElement("details");
  let desc = document.createElement("p");
  details.append(desc);
  desc.innerText =
    "Bootcut style with a low waist and higher back coverage. This classic slim jean with a bohemien attitude hugs the body from the hips to the knees.";

  productDetails.append(title, price, p, color, size, Main, btn, Fav, details);
}
