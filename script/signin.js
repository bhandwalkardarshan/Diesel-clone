let signinuser = JSON.parse(localStorage.getItem("signupuser")) || [];
let activeloginuser = JSON.parse(localStorage.getItem("activeLoginUser"));
let obj;
let signinform = document.getElementById("signin");
signinform.addEventListener("submit", (e) => {
  e.preventDefault();
  let signinUserMobileNumber = signinform.usermobilenumber.value;
  let signinUserPassword = signinform.userpassword.value;
  if (
    signinUserMobileNumber== "" ||
    signinUserPassword== ""
  ) {
    alert("Somthing wrong!");
    return;
  }
  if(signinUserMobileNumber.length < 10){
    alert("please enter 10 digit mobile number");
    return;
  }
  ismatch(signinUserMobileNumber, signinUserPassword);
});
function ismatch(signinUserMobileNumber, signinUserPassword) {
    let c=0;
      for (let element of signinuser) {
       
    if (
      signinUserMobileNumber == element.usermobilenumber &&
      signinUserPassword == element.userpassword
    ) {
        obj=element;
        c=1;
      alert(`Welcome back ${element.username}`);
      break;
    }
  }
  if(c==0){
    alert("We can't match your number and password")
  }
  else{
    window.location.href = "../html/index.html";
    localStorage.setItem("activeLoginUser", JSON.stringify(obj));
  }
  
}
