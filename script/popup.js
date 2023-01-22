let popup = document.getElementsByClassName("popup")
let popup1=document.getElementById("popup")
// let btn = document.getElementById("btn")

// btn.addEventListener("click", () => {
        //  openPopup()
    function openPopup() {
        let popup = document.getElementsByClassName("popup")
        popup.classList.add("open-Popup")
        setTimeout(() => {
            closePopup()
        }, 900)

    }

    function closePopup() {
        popup.classList.remove("open-Popup")
    }

