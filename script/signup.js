let signUpUser = JSON.parse(localStorage.getItem("signupuser")) || [];
let activeloginuser =
  JSON.parse(localStorage.getItem("activeLoginUser")) || null;
let signup = document.getElementById("signup");
let warning = document.getElementById("warning");
warning.style.display = "none";

signup.addEventListener("submit", (e) => {
  let c = 0;
  e.preventDefault();
  let obj = {
    username: signup.username.value,
    usermobilenumber: signup.usermobilenumber.value,
    userpassword: signup.userpassword.value,
  };
  if (
    signup.username.value == "" ||
    signup.usermobilenumber.value == "" ||
    signup.userpassword.value == ""
  ) {
    // alert("Somthing wrong!");
    openPopup1()
  } else {
    for (let phonenumber of signUpUser) {
      if (signup.usermobilenumber.value == phonenumber.usermobilenumber) {
        warning.style.display = "block";
        c = 1;
        signup.usermobilenumber.value = "";
        break;
      }
    }
    if (c == 0) {
      stroeDataofsignupUser(obj);
    }
  }
});

//new user data store (signup) function
function stroeDataofsignupUser(obj) {
  
  signUpUser.push(obj);
  localStorage.setItem("signupuser", JSON.stringify(signUpUser));
  localStorage.setItem("activeLoginUser", JSON.stringify(obj));

  // alert("Congratulation! you are welcome");
         openPopup()
  // window.location.href = "../html/signin.html";
}

//CODE FOR IF SIGNUP IS SUCCESSFULL
let popup=document.getElementById("popup")

function openPopup() {
  // let popup = document.getElementsByClassName("popup")
  popup.classList.add("open-Popup")
  setTimeout(() => {
      closePopup()
  }, 2000)

}

function closePopup() {
  popup.classList.remove("open-Popup")
  window.location.href = "../html/signin.html";
}


//CODE IF SIGN up is unsuccersfull

let popup1=document.getElementById("popup1")

function openPopup1() {
  popup1.classList.add("open-Popup1")
  setTimeout(() => {
      closePopup1()
  }, 2000)

}

function closePopup1() {
  popup1.classList.remove("open-Popup1")
  window.location.href = "../html/signin.html";
}

