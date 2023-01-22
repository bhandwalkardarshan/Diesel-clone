let allsignupuser = JSON.parse(localStorage.getItem("signupuser")) || [];
let tbody = document.getElementById("tbody");
showData(allsignupuser);


function showData(allsignupuser) {
  tbody.innerHTML = null;
  allsignupuser.forEach((element, index) => {
    let tr = document.createElement("tr");
    let id = document.createElement("td");
    id.innerText = "1";
    let name = document.createElement("td");
    name.innerText = element.username;
    let mobilenumber = document.createElement("td");
    mobilenumber.innerText = element.usermobilenumber;
    let password = document.createElement("td");
    password.innerText = "******";
    let edituser = document.createElement("td");
    edituser.setAttribute("id", "edituser");
    edituser.innerHTML = `<i class="fa fa-edit" style="font-size:20px;"></i>`;
      edituser.addEventListener("click",()=>{

            })

    let Delete = document.createElement("td");
    Delete.setAttribute("id", "deleteuser");
    Delete.innerHTML = `<i class="fa fa-trash-o" style="font-size:25px;color:red"></i>`;
            Delete.addEventListener("click",()=>{
                allsignupuser.splice(index,1);
                localStorage.setItem("signupuser",JSON.stringify(allsignupuser));
                showData(allsignupuser);
            })


    tr.append(
      id,
      name,
      mobilenumber,
      password,
     edituser,
      Delete
    );
    tbody.append(tr);
  });
}


//admin anme show in admin page
let showadminname=document.getElementById("showadminname");
let activeadminuser=JSON.parse(localStorage.getItem("activeadminuser"))||"";
showadminname.innerText=`Hello ${activeadminuser}`;