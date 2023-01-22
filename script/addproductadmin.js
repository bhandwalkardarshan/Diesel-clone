console.log("kids");
let baseURL = "http://localhost:3000/";
let datatype = document.getElementById("datatype");
let addData = document.getElementById("adddata");
let title = document.getElementById("title");
let category = document.getElementById("category");
let price = document.getElementById("price");
let orgprice = document.getElementById("orgprice");
let color = document.getElementById("color");
let imgurl = document.getElementById("imgurl");
let adimage1 = document.getElementById("adimage1");
let adimage2 = document.getElementById("adimage2");
let adimage3 = document.getElementById("adimage3");
let adimage4 = document.getElementById("adimage4");
addData.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    addData.title.value == "" ||
    addData.category.value == "" ||
    addData.price.value == "" ||
    addData.orgprice.valu == "" ||
    addData.color.value == "" ||
    addData.imgurl.value == "" ||
    adddata.adimage1.value == "" ||
    adddata.adimage2.value == "" ||
    adddata.adimage3.value == "" ||
    adddata.adimage4.value == "" ||
    adddata.datatype.value == ""
  ) {
    alert("Please fill");
    return;
  } else {
    let ar = [];
    ar.push(adddata.adimage1.value);
    ar.push(adddata.adimage2.value);
    ar.push(adddata.adimage3.value);
    ar.push(adddata.adimage4.value);

    let obj = {
      title: addData.title.value,
      catagory: addData.category.value,
      price: addData.price.value,
      orgprice: addData.orgprice.value,
      color: addData.color.value,
      image: addData.imgurl.value,
      additionalImg: ar,
    };
    //<----call this function you will able to store your data in localhost json server
    if (addData.datatype.value == "womandata") {
      addyourdata(obj); //for womans data add function call
    }
    if (addData.datatype.value == "kidsdata") {
      addyourdataforkids(obj);
    }
    if (addData.datatype.value == "mensdata") {
      addyourdataformens(obj);
    }
    if (addData.datatype.value == "sportsdata") {
      addyourdataforsports(obj);
    }
  }
});

//<----this function you will able to store your data in localhost json server
//for add womansdata
function addyourdata(obj) {
  fetch("http://localhost:3000/womenData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  alert("data added successfull");
  title.value = "";
  category.value = "";
  price.value = "";
  imgurl.value = "";
  orgprice.value = "";
  color.value = "";
  adimage1.value = "";
  adimage2.value = "";
  adimage3.value = "";
  adimage4.value = "";
  datatype.value = "";
}

//for add kidsdata
function addyourdataforkids(obj) {
  fetch("http://localhost:3000/kidsdata", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  alert("data added successfull");
  title.value = "";
  category.value = "";
  price.value = "";
  imgurl.value = "";
  orgprice.value = "";
  color.value = "";
  adimage1.value = "";
  adimage2.value = "";
  adimage3.value = "";
  adimage4.value = "";
  datatype.value = "";
}

//for add mens data
function addyourdataformens(obj) {
  fetch("http://localhost:3000/mensData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  alert("data added successfull");
  title.value = "";
  category.value = "";
  price.value = "";
  imgurl.value = "";
  orgprice.value = "";
  color.value = "";
  adimage1.value = "";
  adimage2.value = "";
  adimage3.value = "";
  adimage4.value = "";
  datatype.value = "";
}

//for add sportsdata
function addyourdataforsports(obj) {
  fetch("http://localhost:3000/sportsdata", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  alert("data added successfull");
  title.value = "";
  category.value = "";
  price.value = "";
  imgurl.value = "";
  orgprice.value = "";
  color.value = "";
  adimage1.value = "";
  adimage2.value = "";
  adimage3.value = "";
  adimage4.value = "";
  datatype.value = "";
}


//admin anme show in admin page
let showadminname=document.getElementById("showadminname");
let activeadminuser=JSON.parse(localStorage.getItem("activeadminuser"))||"";
showadminname.innerText=`Hello ${activeadminuser}`;