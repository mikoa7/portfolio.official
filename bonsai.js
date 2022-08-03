const list = document.getElementById("product");
const before = document.querySelector(".dropbefore");
const body = document.body;


body.addEventListener("click", e => {
   const isDropdownbutton = e.target.matches("[data-dropbefore-button]")
   if (!isDropdownbutton && e.target.closest("[data-dropbefore]") != null) return

   let currentDropdown
   if (isDropdownbutton) {
    currentDropdown = e.target.closest("[data-dropbefore]");
    currentDropdown.classList.toggle("active");
   
   }

  body.querySelectorAll("[data-dropbefore].active").forEach(dropbefore => {
    if (dropbefore === currentDropdown) return
    dropbefore.classList.remove("active")
   })

 
 })

