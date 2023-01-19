
let btn1 = document.getElementById("btn1")

fetch("https://63c5a982f3a73b34785b6251.mockapi.io/kids")
    .then((res) => {
        //    console.log(res)
        return res.json()
    }).then((data) => {
        // console.log(data)
        check(data)
    })

let div11 = document.getElementById("div11")
let body = document.getElementById("body")

function check(data) {
        div11.innerHTML=null
    data.forEach((element, i) => {
        let div1 = document.createElement("div")


        let image = document.createElement("img")
        image.src = element.image
        image.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px"
        image.style.borderRadius = "18px"
        image.style.marginBottom = "21px"
        image.style.mixBlendMode = "multiply"

        let title = document.createElement("h6")
        title.innerText = element.title
        title.style.fontWeight = "600"
        title.style.marginBottom = "15px"

        let price = document.createElement("h4")
        price.style.fontWeight = "600"
        price.innerText = `₹ ${element.price}`
        let discount = document.createElement("span")
        discount.innerText = "Flat(10% off)"
        discount.style.marginRight = "80px"
        let color = document.createElement("span")
        color.innerText = element.color
        color.style.fontWeight = "600"



        if (i % 2 === 0) {
            let image1 = document.createElement("img")
            image1.src = "https://diesel.gumlet.io/images/Best-Seller.png"
            image1.style.width = "80px"
            image1.style.height = "20px";
            image1.style.marginBottom = "15px"



            div1.append(image, price, discount, color, title, image1)
            // div1.style.border = "2px solid black"
        }
        if (i % 2 !== 0) {
            let image2 = document.createElement("img")
            image2.src = "https://diesel.gumlet.io/images/diesel-tag-21.png"
            image2.style.width = "80px"
            image2.style.height = "20px"
            image2.style.marginBottom = "15px"
            div1.append(image, price, discount, color, title, image2)
            // div1.style.border = "2px solid black"

        }
        // div1.append( image, price, discount, title)
        div11.append(div1)

    })

}

  let price=document.getElementById("price")
  let option= document.querySelectorAll("option")
  price.addEventListener("change",()=>{
    if(price.value ==="l2h"){
        // console.log("hello")
    fetch("https://63c5a982f3a73b34785b6251.mockapi.io/kids?sortBy=price")
    .then((res) => {
           console.log(res)
           console.log(res)
        return res.json()
    }).then((data) => {
        // console.log(data)
        check(data)
    })
}
    
    else{
        fetch("https://63c5a982f3a73b34785b6251.mockapi.io/kids")
        .then((res) => {
               console.log(res)
               console.log(res)
            return res.json()
        }).then((data) => {
            // console.log(data)
            check(data)
    })

}
  })

