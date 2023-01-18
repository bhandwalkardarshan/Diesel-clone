let allProductSection = document.getElementById("all-product-section");
featchingData();

async function featchingData() {
  try {
    let promise = await fetch("../db.json");
    let res = await promise.json();
    alldatashow(res.womenData);
  } catch (error) {}
}

function alldatashow(allwomandata) {
  allwomandata.forEach((element) => {
    let card = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", element.image);
    image.addEventListener("click",(e)=>{
        localStorage.setItem("clickProduct",JSON.stringify(element))
        window.location.href = "../html/prticular_product_page.html";
       
        
    })


    let div=document.createElement("div")
    div.setAttribute("class","price-style")
    let price = document.createElement("p");
    price.innerText =`₹${element.price}`;
    let orgprice = document.createElement("p");
    orgprice.innerText =  `₹${element.orgprice}`;
    let off=document.createElement("span");
    off.innerText="40% OFF"; 
   div.append(price,orgprice,off);
    let color = document.createElement("p");
    color.innerText = `${element.color}`;
    let title = document.createElement("p");
    title.innerText = `${element.title}`;
    card.append(image, div, color, title);
    allProductSection.append(card);
  });
}
