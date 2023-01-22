//admin anme show in admin page
let showadminname = document.getElementById("showadminname");
let activeadminuser = JSON.parse(localStorage.getItem("activeadminuser")) || "";
showadminname.innerText = `Hello ${activeadminuser}`;
let adminlogout = document.getElementById("adminlogout");
adminlogout.addEventListener("click", () => {
  window.localStorage.removeItem("activeadminuser");
  window.location.href = "../html/index.html";
});
