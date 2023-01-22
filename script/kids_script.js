
let btn1 = document.getElementById("btn1")

window.addEventListener("load", () => {
    console.log("page is fully loaded")
    fetch("https://63c5a982f3a73b34785b6251.mockapi.io/kids")
    .then((res) => {
        //    console.log(res)
        return res.json()
    }).then((data) => {
        // console.log(data)
        check(data)
    })
  });


let div11 = document.getElementById("div11")
let body = document.getElementById("body")

function check(data) {
        div11.innerHTML=null
    data.forEach((element, i) => {
        let div1 = document.createElement("div")
        div1.style.marginBottom="15px"
        // div1.style.border="2px solid green"
        div1.style.width="94%"
        div1.style.paddingLeft="1%"
        div1.style.paddingRight="1%"
        div1.style.margin="auto"
        


        let image = document.createElement("img")
        image.src = element.image
        image.style.boxShadow ="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
        image.style.borderRadius = "18px"
        image.style.marginBottom = "15px"
        image.style.mixBlendMode = "multiply"
        image.style.width="100%";
        image.style.cursor="pointer"
    

    
        

        let title = document.createElement("h6")
        title.innerText = element.title
        title.style.fontWeight = "500"
        title.style.fontSize="20px"
        title.style.marginBottom = "5px"
        title.style.marginTop = "0px"
        title.style.cursor="default"
       
        let price = document.createElement("span")
        price.style.fontWeight = "800"
        price.innerText = `₹${element.price}`
        price.style.marginBottom="0px"
        price.style.fontSize="20px"
        price.style.cursor="default"
        let discount = document.createElement("span")
        discount.style.marginRight = "22px"
        discount.style.paddingLeft="5px"
        discount.style.opacity="0.6"
        discount.style.fontWeight="600"
        discount.style.cursor="default"
        let color = document.createElement("span")
        color.innerText = element.color.toUpperCase()
        color.style.fontWeight = "600"
        color.style.cursor="default"
        



        if (i % 2 === 0) {
            let image1 = document.createElement("img")
            image1.src = "https://diesel.gumlet.io/images/Best-Seller.png"
            image1.style.width = "80px"
            image1.style.height = "20px";
            image1.style.marginBottom = "25px"
            image1.style.cursor="default"
            discount.innerText = "Flat(30% off)"



            div1.append(image, price, discount, color, title, image1)
            // div1.style.border = "2px solid black"
        }
        if (i % 2 !== 0) {
            let image2 = document.createElement("img")
            image2.src = "https://diesel.gumlet.io/images/diesel-tag-21.png"
            image2.style.width = "80px"
            image2.style.height = "20px"
            image2.style.marginBottom = "25px"
            image2.style.cursor="default"
            discount.innerText = "Flat(25% off)"
            div1.append(image, price, discount, color, title, image2)
            // div1.style.border = "2px solid black"

        }
        // div1.append( image, price, discount, title)
        div11.append(div1)

    })

}

   let apparels= document.getElementById("apparels")
   let color=document.getElementById("color")
  let price=document.getElementById("price")
  let option= document.querySelectorAll("option")
  price.addEventListener("change",()=>{
    if(price.value ==="l2h"){
        // console.log("hello")
    fetch("https://63c5a982f3a73b34785b6251.mockapi.io/kids?sortBy=price&order=asc")
    .then((res) => {
           console.log(res)
           console.log(res)
        return res.json()
    }).then((data) => {
        // console.log(data)
        check(data)
    })
}
else if(price.value ==="h2l"){
    // console.log("hello")
fetch("https://63c5a982f3a73b34785b6251.mockapi.io/kids?sortBy=price&order=desc")
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

  color.addEventListener("change",()=>{
    if(color.value ==="blue"){
        // console.log("hello")
    fetch("https://63c5a982f3a73b34785b6251.mockapi.io/kids?filter=blue")
    .then((res) => {
           console.log(res)
           console.log(res)
        return res.json()
    }).then((data) => {
        // console.log(data)
        check(data)
    })
}
  else if(color.value ==="black"){
    fetch("https://63c5a982f3a73b34785b6251.mockapi.io/kids?filter=black")
    .then((res) => {
           console.log(res)
           console.log(res)
        return res.json()
    }).then((data) => {
        // console.log(data)
        check(data)
    })
}
 
else if(color.value ==="red"){
    fetch("https://63c5a982f3a73b34785b6251.mockapi.io/kids?filter=red")
    .then((res) => {
           console.log(res)
           console.log(res)
        return res.json()
    }).then((data) => {
        // console.log(data)
        check(data)
    })
}
else if(color.value ==="white"){
    fetch("https://63c5a982f3a73b34785b6251.mockapi.io/kids?filter=white")
    .then((res) => {
           console.log(res)
           console.log(res)
        return res.json()
    }).then((data) => {
        // console.log(data)
        check(data)
    })
}
else if(color.value ==="multicolor"){
    fetch("https://63c5a982f3a73b34785b6251.mockapi.io/kids?filter=multicolor")
    .then((res) => {
           console.log(res)
           console.log(res)
        return res.json()
    }).then((data) => {
        // console.log(data)
        check(data)
    })
}
else if(color.value ==="yellow"){
    fetch("https://63c5a982f3a73b34785b6251.mockapi.io/kids?filter=yellow")
    .then((res) => {
           console.log(res)
           console.log(res)
        return res.json()
    }).then((data) => {
        // console.log(data)
        check(data)
    })
} 
else if(color.value ==="green"){
    fetch("https://63c5a982f3a73b34785b6251.mockapi.io/kids?filter=green")
    .then((res) => {
           console.log(res)
           console.log(res)
        return res.json()
    }).then((data) => {
        // console.log(data)
        check(data)
    })
    
}else{
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
   
  apparels.addEventListener("change",()=>{
    if(apparels.value ==="T-shirt"){
        // console.log("hello")
    fetch("https://63c5a982f3a73b34785b6251.mockapi.io/kids?filter=T-shirt")
    .then((res) => {
           console.log(res)
           console.log(res)
        return res.json()
    }).then((data) => {
        // console.log(data)
        check(data)
    })
}
else  if(apparels.value ==="Pants"){
    // console.log("hello")
fetch("https://63c5a982f3a73b34785b6251.mockapi.io/kids?filter=pants")
.then((res) => {
       console.log(res)
       console.log(res)
    return res.json()
}).then((data) => {
    // console.log(data)
    check(data)
})
}
else  if(apparels.value ==="Jeans"){
    // console.log("hello")
fetch("https://63c5a982f3a73b34785b6251.mockapi.io/kids?filter=jeans")
.then((res) => {
       console.log(res)
       console.log(res)
    return res.json()
}).then((data) => {
    // console.log(data)
    check(data)
})
}
else  if(apparels.value ==="Sweaters"){
    // console.log("hello")
fetch("https://63c5a982f3a73b34785b6251.mockapi.io/kids?filter=sweaters")
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
    // console.log("hello")
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

