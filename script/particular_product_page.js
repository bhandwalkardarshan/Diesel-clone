let clickProduct = JSON.parse(localStorage.getItem("clickProduct"));

let particularProductSection = document.getElementById("particular-product-section");

let fourImage = document.getElementById("four-image");
let userChooseSize="";
let productDetails = document.getElementById("product-details");
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
  Main.setAttribute("id","sizes")
 
  let button1 = document.createElement("button");
  button1.innerText = "26";
  button1.addEventListener("click",(e)=>{
    userChooseSize=e.target.innerText
  })

  let button2 = document.createElement("button");
  button2.innerText = "28";
  button2.addEventListener("click",(e)=>{
    userChooseSize=e.target.innerText
})

  let button3 = document.createElement("button");
  button3.innerText = "30";
  button3.addEventListener("click",(e)=>{
    userChooseSize=e.target.innerText
})

  let button4 = document.createElement("button");
  button4.innerText = "32";
  button4.addEventListener("click",(e)=>{
    userChooseSize=e.target.innerText
})

  let button5 = document.createElement("button");
  button5.innerText = "34";
  button5.addEventListener("click",(e)=>{
    userChooseSize=e.target.innerText
})

  let button6 = document.createElement("button");
  button6.innerText = "36";
  button6.addEventListener("click",(e)=>{
    userChooseSize=e.target.innerText
})

  Main.append(button1, button2, button3, button4, button5, button6);
  
  let btn = document.createElement("button");
  btn.innerText = "ADD TO CART";
  btn.setAttribute("id", "btn");
  btn.addEventListener("click",(e)=>{
    console.log(e.target.innerText)
    if(userChooseSize==""){
      alert("please select size!");
  
    }
    else{

    }
  })

  let Fav = document.createElement("img");
  Fav.setAttribute("src", "../images/hollow.png");
  Fav.setAttribute("id", "fav2");

  Fav.addEventListener("click", () => {
    Fav.setAttribute("src", "../images/love.png");
    Fav.addEventListener("click", () => {
      Fav.setAttribute("src", "../images/hollow.png");
    })
    Fav.setAttribute("id", "fav3");
  })


  let details = document.createElement("details");
  let desc = document.createElement("p");
  details.append(desc)
  desc.innerText = "Bootcut style with a low waist and higher back coverage. This classic slim jean with a bohemien attitude hugs the body from the hips to the knees."

  productDetails.append(title, price, p, color, size, Main, btn, Fav, details);
}


