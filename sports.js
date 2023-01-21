let x = Math.ceil(Math.random()*10)
let y=Math.ceil(Math.random()*1000)
let sportsItems=[
    {
        image:"https://cdn.shopify.com/s/files/1/0261/7393/1605/products/IMG_1178_360x.jpg?v=1668232487",
        title:"Men's Hoodie Sweatshirt Burgundy/Black Inj."  ,
        price: 1049,
        description:"Be it a morning run or a casual night out, this Hooded Sweatshirt has got you covered. Fitted with kangaroo pockets, it makes it even more comfortable to walk around with.",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        discount:x,
        color:"Burgundy"

    },
  
    {
        image:"https://cdn.shopify.com/s/files/1/0261/7393/1605/products/IMG_1109_1512x.jpg?v=1668232480",
        title:"Men's Hoodie Sweatshirt Blue/Black Inj."  ,
        price: 1050,
        description:" Made with flexiloop features, this is a versatile sweatshirt that can be teamed with joggers or jeans. The terry knit fabric used in knitting the sweatshirt provides for added stability. ",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Blue"

    },
    {
        image:"https://cdn.shopify.com/s/files/1/0261/7393/1605/products/IMG_1257-2_ed0a635e-6339-4528-a276-bb039950ee9f_1512x.jpg?v=1668232460",
        title:"Men's Hoodie Sweatshirt Grey With Jaspe"  ,
        price: 1200,
        description:"Fleece fabric Traps body heat, wrist cuff on the sleeve, Bottom ribbed, Kangaroo pocket, Hoodie with contrast panel for style and protection, metal eyelet for drawstring adjustments, Sleeve styling with contrast color tape and graphic printed",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Grey"

    },
    {
        image:"https://cdn.shopify.com/s/files/1/0261/7393/1605/products/jpg_1512x.jpg?v=1668580583",
        title:"Men's Sweatshirt Blue Melange"  ,
        price: 764 ,
        description:"Fleece fabric Traps body heat, Raglan Full sleeve, Modern Slim Fit, wrist cuff on the sleeve, Bottom ribbed, Trendy Print",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Blue Melange"

    }, 
       {
        image:"https://cdn.shopify.com/s/files/1/0261/7393/1605/products/IMG_0849-2_360x.jpg?v=1669108481",
        title:"Men's Athletic Jersey Quick Dry T-Shirt Charcoal"  ,
        price: 800,
        description:"Fast Dry Micro Fiber Fabric Sporty Raglan Sleeve with Mesh Side Panel Constructed with Reinforcement Stitch for Extended Durability",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Charcoal"

    }, 
       {
        image:"https://cdn.shopify.com/s/files/1/0261/7393/1605/products/Untitleddesign_11_1512x.png?v=1669101055",
        title:"Men's Athletic Jersey Quick Dry T-Shirt Black"  ,
        price: 1049,
        description:"Printed Fast Dry Micro Fiber Fabric V-Neck in Modern Slim Fit Constructed with Reinforcement Stitch for Extended Durability",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Black"

    }, 
       {
        image:"https://cdn.shopify.com/s/files/1/0261/7393/1605/products/Untitleddesign_15_1512x.png?v=1669102766",
        title:"Men's Athletic Jersey Quick Dry T-Shirt Blue Melange",
        price: 359,
        description:"Fast Dry Micro Fiber Fabric Round Neck in Modern Slim Fit Constructed with Reinforcement Stitch for Extended Durability",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Blue Melange"

    },
        {
        image:"https://cdn.shopify.com/s/files/1/0261/7393/1605/products/IMG_0518-2_460x.jpg?v=1669102398",
        title:"Men's Athletic Jersey Quick Dry T-Shirt Navy"  ,
        price: 500,
        description:"Fast Dry Micro Fiber Fabric Sporty Raglan Sleeve with Mesh Side Panel Constructed with Reinforcement Stitch for Extended Durability",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Navy"

    }, 
       {
        image:"https://cdn.shopify.com/s/files/1/0272/5065/5367/products/code-cotton-rich-oxford-blue-mens-track-pant-lookshot1.jpg?v=1667207068",
        title:"TRACK PANTS"  ,
        price: 1049,
        description:"Our Code Cotton-rich track pants are the perfect blend of ultra-soft feel, relaxing fit, and a contemporary look.",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Blue"

    },
        {
        image:"https://cdn.shopify.com/s/files/1/0272/5065/5367/products/XYPYJM30-PitchBlack_LookShot-2.jpg?v=1667913904",
        title:"TRACK PANTS PITCH BLACK"  ,
        price: 1300,
        description:"Our Code Cotton-rich track pants are the perfect blend of ultra-soft feel, relaxing fit, and a contemporary look.",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Black"

    }, 
       {
        image:"https://cdn.shopclues.com/images1/thumbnails/116538/320/320/153145580-116538122-1664126108.jpg",
        title:"Shoes"  ,
        price: 2200,
        description:"Mesh shoes Reebok Mens Gray Running Shoes Reebok Mens Gray Running Shoes Reebok Mens Gray Running Shoes Reebok Mens Gray Running Shoes Reebok Mens Gray Running Shoes",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"grey"

    },
        {
        image:"https://cdn.shopclues.com/images1/thumbnails/116538/320/320/153145582-116538130-1664127577.jpg",
        title:"Shoes"  ,
        price: 2290,
        description:"Black mesh shoes high quality material and highly ventilated shoes for comfortable sports activities ",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Black"

    }, 
       {
        image:"https://cdn.shopclues.com/images1/thumbnails/116537/320/320/153145550-116537989-1664127307.jpg",
        title:"Reebok Mens Multicolor Running Shoes"  ,
        price: 3559,
        description:"Mesh shoes Reebok Mens Gray Running mesh shoes high quality material and highly ventilated shoes for comfortable sports activities",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Grey"

    }, 
       {
        image:"https://cdn.shopclues.com/images1/thumbnails/116538/320/320/153145555-116538012-1660723054.jpg",
        title:"Reebok Mens Black Sport Shoes"  ,
        price: 3599,
        description:"Mesh shoes Reebok Mens Gray Running mesh shoes high quality material and highly ventilated shoes for comfortable sports activities",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Black"

    },
        {
        image:"https://cdn.shopclues.com/images1/thumbnails/104837/320/320/148984591-104837657-1580974324.jpg",
        title:"Track Suit"  ,
        price: 2599,
        description:"Muffy Men's Black Cotton Blends Solid Zip Closure Tracksuit Muffy Men's Black Cotton Blends Solid Zip Closure Tracksuit",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Black"

    }, 
       {
        image:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/6/tr:w-480,/a6844d5NYF_PMA5101_2.jpg?rnd=20200526195200",
        title:"Track Suit"  ,
        price: 3599,
        description:"Black Ferrari Motorsport Style T7 Track Pants Black Ferrari Motorsport Style T7 Track Pants Black Ferrari Motorsport Style T7 Track Pants",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Black"

    },
        {
        image:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/d/c/tr:w-480,/dc9bd86Cava-jkt-sol20-58-BLK_1.jpg?rnd=20200526195200",
        title:"Black Removable Hooded Jacket"  ,
        price: 1999,
        description:"Black Ferrari Motorsport Style T7 Black Removable Hooded Jacket Black Removable Hooded Jacket",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Black"

    }, 
       {
        image:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/b/6/tr:w-480,/b6d13b0AAMJKTSM00036602_1.jpg?rnd=20200526195200",
        title:"Jacket",
        price: 2599,
        description:"Men Green Printed Bomber Jacket. Alcis is a performance wear brand launched by the promoters of",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Green"

    },  
      {
        image:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/7/tr:w-480,/77f38b4Asics-2031C753001_1.jpg?rnd=20200526195200",
        title:"Trackpants",
        price: 3500,
        description:"M Hybrid Black Men Gym & Training Trackpants. Alcis is a performance wear brand launched by the promoters of ",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Grey Black"

    }, 
       {
        image:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/5/tr:w-480,/254ea2aMM-ABBOJB4084-1_1.jpg?rnd=20200526195200",
        title:"Bomber Jacket",
        price: 1999,
        description:"Mens Solid Black Bomber Jacket Mens Solid Black Bomber Jacket Mens Solid Black Bomber Jacket",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Black"

    }, 
       {
        image:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/f/1/tr:w-480,/f129a2aMM-ABMBOJW4361-1_1.jpg?rnd=20200526195200",
        title:"Bomber Jacket",
        price: 2999,
        description:"Mens Maroon Solid Reversible Bomber Jacket Mens Maroon Solid Reversible Bomber Jacket",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Maroon"

    },
        {
        image:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/h/o/tr:w-480,/hoj256indigo_2_bb114e93.jpg?rnd=20200526195200",
        title:"Lower"  ,
        price: 1049,
        description:"Mens Cotton Lycra Blue Track Pants",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Blue"

    }, 
       {
        image:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/f/0/tr:w-480,/f0903b0MTE7092_1.jpg?rnd=20200526195200",
        title:"Gym T-shirt"  ,
        price: 599,
        description:"Men Teal Black Typography Printed Training Or Gym T-shirt Men Teal Black Typography Printed Training Or Gym T-shirt",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Teal Black"

    }, 
       {
        image:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/8/tr:w-480,/68c63b0AAMHDYSM00038201_1.jpg?rnd=20200526195200",
        title:"Hood Upper"  ,
        price: 1599,
        description:"Men Navy Blue Printed Hooded Men Navy Blue Printed Hooded Men Navy Blue Printed Hooded",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Navy Blue"

    },  
      {
        image:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/6/tr:w-480,/5659255GLCPQ01-OCEAN-GREY-FOREST-GREEN_1.jpg?rnd=20200526195200",
        title:"Polo Tshirt"  ,
        price: 1049,
        description:"Cotton Polo - Pack of 2 Anti-Stain & Anti-Odour - Ocean Grey/Forest Green Cotton Polo - Pack of 2 Anti-Stain & Anti-Odour - Ocean Grey/Forest Green ",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Ocean Grey"

    },
        {
        image:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/b/1/tr:w-480,/b10223aGLCPQ01-COBALT-BLUE-FOREST-GREEN_1.jpg?rnd=20200526195200",
        title:"Polo Tshirt"  ,
        price: 1049,
        description:"Anti Stain & Anti Odor Polo With No Curl Collar Blue & Green (Pack of 2) Anti Stain & Anti Odor Polo With No Curl Collar Blue & Green (Pack of 2) ",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Blue and Green"

    }, 
       {
        image:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/8/0/tr:w-480,/809f3b0AAMJKTSM00040602_1.jpg?rnd=20200526195200",
        title:"Jacket"  ,
        price: 1399,
        description:"Men Black Printed Running Sporty  Men Black Printed Running Sporty  Men Black Printed Running Sporty  jacket ",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Black"

    }, 
       {
        image:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/c/tr:w-480,/5c183b0AAMSWTSM00038101_1.jpg?rnd=20200526195200",
        title:"SweatShirt"  ,
        price: 1400,
        description:"Men White Solid Sweatshirt Men White Solid Sweatshirt Men White Solid Sweatshirt for stylish look",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"white"

    },  
      {
        image:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/e/tr:w-480,/6ed21faMAA20C932100_1.jpg?rnd=20200526195200",
        title:"Tracksuit"  ,
        price: 2999,
        description:" Men Black Solid Tracksuit Men Black Solid Tracksuit for nice look sports wear",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Black"

    },  
      {
        image:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/7/tr:w-480,/c7ca3b0MJOJA219631_1.jpg?rnd=20200526195200",
        title:"Track Pants"  ,
        price: 900,
        description:"Men Navy Blue Solid Slim Fit Joggers With Printed Detail Men Navy Blue Solid Slim Fit Joggers With Printed Detail Men Navy Blue Solid Slim Fit Joggers With Printed Detail ",
        discountedPrice:Math.ceil(Math.random(Math.ceil(y-(x/100)*y))*1000),
        color:"Navy Blue"

    }
]    
console.log(sportsItems)

let container=document.querySelector("#container")
// container.textContent="hello"



sportsItems.forEach(el => {
    let div=document.createElement("div")

    let image=document.createElement("img")
    image.setAttribute("src",el.image);
    let title=document.createElement("h2");
    title.textContent=el.title;
    let price=document.createElement("h5");
    price.textContent="Original price   Rs-"+el.price+"❌" ;
    let discountedPrice=document.createElement("h4")
    discountedPrice.textContent="Discounted price   Rs-"+el.discountedPrice;
    let color=document.createElement("h4");
    color.textContent=el.color;
    let description=document.createElement("p");
    description.textContent=el.description.substring(0,50);
    let cartBtn=document.createElement("button");
    cartBtn.textContent="Add To Cart"



    div.append(image,title,price,discountedPrice,color,description,cartBtn);
    container.append(div)
});

