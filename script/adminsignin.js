let adminsignin = document.getElementById("adminsignin");
let adminsubmit = document.getElementById("adminsubmit");

adminsubmit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("hii");
  let obj = {
    username: adminsignin.adminusername.value,
    password: adminsignin.adminuserpassword.value,
  };
  foradminuser(obj);
});

async function foradminuser(obj) {
  console.log("in");
  let res = await fetch("http://localhost:3000/admin");
  let result = await res.json();
  for (let adminuser of result) {
    if (
      adminuser.username == obj.username &&
      adminuser.password == obj.password
    ) 
    {
      localStorage.setItem(
        "activeadminuser",
        JSON.stringify(adminuser.username)
      );
      window.location.href = "../html/adminhome.html";
      break;
    }
    else{
      alert("Wrong credentials!")
    }
  }
}


