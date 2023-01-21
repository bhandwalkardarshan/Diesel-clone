let cartproduct = JSON.parse(localStorage.getItem("cart")) || [];
let activeLoginUser = JSON.parse(localStorage.getItem("activeLoginUser"));
let cartlist = document.getElementById("cartlist");
let item = document.querySelector(".item");
let cartcount=document.getElementById("cart-count");
let total=document.getElementById("total");
//<--------for display login user--------------->
let activeloginuser = JSON.parse(localStorage.getItem("activeLoginUser"));
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
showcartproduct();

function showcartproduct() {
  let sum=0;
  let count=0;
  cartlist.innerHTML=null;

  cartproduct.forEach((element,index) => {
    if(element.cartusermobilenumber==activeLoginUser.usermobilenumber){
      cartcount.innerText=++count;
    let div1 = document.createElement("div");
    div1.setAttribute("class", "productDetails");
    let productimg = document.createElement("img");
    productimg.setAttribute("src", element.cartproductimage);
    let producttitle = document.createElement("h4");
    producttitle.innerText = element.cartproducttitle;
    let productcolor = document.createElement("p");
    productcolor.innerText = `COLOR: ${element.cartproductcolor}`;
    let productsize = document.createElement("p");
    productsize.innerText = `SIZE: ${element.cartproductsize}`;
    let productprice = document.createElement("h4");
    productprice.innerText = `Price: ${element.cartproductprice}`;
   
      let ibtn=document.createElement("button")
      ibtn.innerText="+";
      ibtn.addEventListener("click",()=>{
        ++element.cartproductquantity;
        localStorage.setItem("cart",JSON.stringify(cartproduct));
        showcartproduct();
      })


      let quantity=document.createElement("span")
      quantity.innerText=element.cartproductquantity
      let dbtn=document.createElement("button")
      dbtn.innerText="-";
      if(element.cartproductquantity!=1){
        dbtn.addEventListener("click",()=>{
          --element.cartproductquantity;
          localStorage.setItem("cart",JSON.stringify(cartproduct));
          showcartproduct();
        })
      }
      
      let deletebtn=document.createElement("button")
      deletebtn.innerText="Remove";
      deletebtn.addEventListener("click",()=>{
        cartproduct.splice(index,1);
        // console.log(cartproduct);
        localStorage.setItem("cart", JSON.stringify(cartproduct))
        window.location.reload();
        showcartproduct(cartproduct)
      })
      div1.append(
        productimg,
        producttitle,
        producttitle,
        productcolor,
        productsize,
        productprice,
        ibtn,quantity,dbtn,deletebtn
      );
        sum+=element.cartproductquantity*element.cartproductprice;



    cartlist.append(div1)
    }
    total.innerText="Total: ₹"+sum;
  });

}
