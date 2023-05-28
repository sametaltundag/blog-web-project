const menuLink = document.querySelectorAll(".menu-link");

menuLink.forEach(function(e){
    e.addEventListener("click",() => {
        menuLink.forEach(item=>{
            item.classList.remove("active");
            e.classList.add("active");
        })
    });
})