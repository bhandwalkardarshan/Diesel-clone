let activeloginuser = JSON.parse(localStorage.getItem("activeLoginUser"));
let cartproduct = JSON.parse(localStorage.getItem("cart")) || [];
let signinText = document.getElementById("signin");
let signupText = document.getElementById("signup");
let fortempdata;
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
if (activeloginuser != null) {
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
let forNewSignin = document.getElementById("signin");
forNewSignin.addEventListener("click", () => {
  console.log("before null");
  if (activeloginuser == null) {
    console.log("after null");
    window.location.href = "../html/signin.html";
  } else {
    window.location.href = "../html/userdashboard.html";
  }
});

//<--------------->
// for new signup
let forNewSignup = document.getElementById("signup");
forNewSignup.addEventListener("click", () => {
  // console.log("before null")
  if (activeloginuser == null) {
    // console.log("after null")
    window.location.href = "../html/signup.html";
  } else {
    window.location.href = "../html/userdashboard.html";
  }
});

let allProductSection = document.getElementById("all-product-section");
featchingData();

async function featchingData() {
  try {
    let promise = await fetch("../db.json");
    let res = await promise.json();
    fortempdata=res.womenData
    // console.log(res.womenData);
    alldatashow(res.womenData);
  } catch (error) {}
}

function alldatashow(allwomandata) {
  allProductSection.innerHTML=null;
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

//for woman jeans

let jeans = document.getElementById("jeans");
jeans.addEventListener("click", () => {
 
  featchingDataforjeans();
  async function featchingDataforjeans() {
    try {
      let promise = await fetch("../db.json");
      let res = await promise.json();
      let womenjeans = res.womenData.filter((element) => {
        if (element.catagory == "jeans") {
          return true;
        }
      });
      // console.log(womenjeans)
      alldatashow(womenjeans);
    } catch (error) {}
  }
});
//for woman shoes

let shoes = document.getElementById("shoes");
shoes.addEventListener("click", () => {
 
  featchingDataforjeans();
  async function featchingDataforjeans() {
    try {
      let promise = await fetch("../db.json");
      let res = await promise.json();
      let womenjeans = res.womenData.filter((element) => {
        if (element.catagory == "shoes") {
          return true;
        }
      });
      console.log(womenjeans)
      alldatashow(womenjeans);
    } catch (error) {}
  }
});
//for woman tops

let tops = document.getElementById("tops");
tops.addEventListener("click", () => {
 
  featchingDataforjeans();
  async function featchingDataforjeans() {
    try {
      let promise = await fetch("../db.json");
      let res = await promise.json();
      let womenjeans = res.womenData.filter((element) => {
        if (element.catagory == "tops") {
          return true;
        }
      });
      console.log(womenjeans)
      alldatashow(womenjeans);
    } catch (error) {}
  }
});
//for woman wallet

let wallet = document.getElementById("wallet");
wallet.addEventListener("click", () => {
 
  featchingDataforjeans();
  async function featchingDataforjeans() {
    try {
      let promise = await fetch("../db.json");
      let res = await promise.json();
      let womenjeans = res.womenData.filter((element) => {
        if (element.catagory == "wallet") {
          return true;
        }
      });
      console.log(womenjeans)
      alldatashow(womenjeans);
    } catch (error) {}
  }
});



// filter product by color------------------>
let color=document.getElementById("color");
color.addEventListener("change",()=>{
  filterbycolor(color.value)
  
})
function filterbycolor(colorname){
  if(colorname==""){
    alldatashow(fortempdata)
  }
  else{
    let t=fortempdata.filter(element=>{
      if(element.color==colorname){
        return true;
      }
    })
    console.log(t)
    alldatashow(t);
  }
 
}
// filter product by category------------------>
let category=document.getElementById("category");
category.addEventListener("change",()=>{
  filterbycategory(category.value)
  
})
function filterbycategory(categoryname){
  if(categoryname==""){
    alldatashow(fortempdata)
  }
  else{
    let t=fortempdata.filter(element=>{
      if(element.catagory==categoryname){
        return true;
      }
    })
    console.log(t)
    alldatashow(t);
  }
 
}
// filter product by price------------------>
let price=document.getElementById("price");
price.addEventListener("change",()=>{
  filterbyprice(price.value)
  
})
function filterbyprice(pricerange){
  let t1=fortempdata
  if(pricerange==""){
    window.location.href="../html/woman.html"
  }
  else{
      if("l2h"==pricerange){
        
        t1.sort((a,b)=>+a.price - +b.price);
        alldatashow(t1)
      }
      else if("h2l"==pricerange){
        t1.sort((a,b)=>+b.price - +a.price);
        alldatashow(t1)
      }

  }
}
// filter product by order------------------>
let order=document.getElementById("order");
order.addEventListener("change",()=>{
  filterbyoredr(order.value)
  
})
function filterbyoredr(order){
  let t1=fortempdata
  if(order==""){
    window.location.href="../html/woman.html"
  }
  else{
      if("asc"==order){
        
        t1.sort((a,b)=>{
          if(a.title < b.title) { return -1; }
          if(a.title > b.title) { return 1; }
          return 0;
        });
        alldatashow(t1)
      }
      else if("dsce"==order){
        
        t1.sort((a,b)=>{
          if(a.title < b.title) { return 1; }
          if(a.title > b.title) { return -1; }
          return 0;
        });
        alldatashow(t1)
      }

  }
}


