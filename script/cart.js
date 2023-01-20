let cartproduct = JSON.parse(localStorage.getItem("cart")) || [];
let activeLoginUser = JSON.parse(localStorage.getItem("activeLoginUser"));
let cartlist = document.getElementById("cartlist");
let item = document.querySelector(".item");
showcartproduct();

function showcartproduct() {
  cartproduct.forEach((element) => {
    // if(element.cartusername==activeLoginUser.username){
    // let div1 = document.createElement("div");
    // div1.setAttribute("class", "productDetails");
    // let productimg = document.createElement("img");
    // productimg.setAttribute("src", element.cartproductimage);
    // let producttitle = document.createElement("h3");
    // producttitle.innerText = element.cartproducttitle;
    // let productcolor = document.createElement("p");
    // productcolor.innerText = `COLOR: ${element.cartproductcolor}`;
    // let productsize = document.createElement("p");
    // productsize.innerText = `SIZE: ${element.cartproductsize}`;
    // div1.append(
    //   productimg,
    //   producttitle,
    //   producttitle,
    //   productcolor,
    //   productsize
    // );
    // //product increment delete
    // let div2 = document.createElement("div");
    // div2.setAttribute("class", "product-quantity");
    // let dbtn = document.createElement("button");
    // dbtn.innerText = "-";
    // let incquantty = document.createElement("span");
    // incquantty.innerText = element.cartproductquantity;
    // let ibtn = document.createElement("button");
    // ibtn.innerText = "+";
    // let deletebtn = document.createElement("button");
    // deletebtn.innerText = "Delete me";
    // deletebtn.style.backgroundColor = "red";
    // deletebtn.style.color = "white";
    // let priceshow = document.createElement("h3");
    // priceshow.innerText = element.cartproductprice;
    // div2.append(dbtn, incquantty, ibtn, deletebtn, priceshow);

    // // productDetails.append(productimg,producttitle,producttitle,productcolor,productsize);
    // // productQuantity.append(dbtn,incquantty,ibtn,deletebtn,priceshow);
    // cartlist.append(div1,div2);
    // }
    if (element.cartusername == activeLoginUser.username) {
      let card = `
      <div class="buttons">
       
      <!-- <span class="like-btn"></span> -->
    </div>

    <div class="image" id="imagesize">
      <img src=${element.cartproductimage} alt="" />
    </div>

    <div class="description">
      <span>Common Projects</span>
      <span>Bball High</span>
      <span>White</span>
      <span>Size</span>
    </div>

    <div class="quantity">
      <button class="plus-btn" type="button" name="button">
        <img src="https://designmodo.com/demo/shopping-cart/plus.svg" alt="" />
      </button>
      <input type="text" name="name" value="1">
      <button class="minus-btn" type="button" name="button">
        <img src="https://designmodo.com/demo/shopping-cart/minus.svg" alt="" />
      </button>
      
    </div>

    <div class="total-price">$549</div>
    <i class="material-icons" style="font-size:35px;color:red">delete</i>
  </div>
      `;
      item.innerHTML=card;
    }
  });
}
