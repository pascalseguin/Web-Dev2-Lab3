
document.addEventListener("DOMContentLoaded", function() {
    const slide = document.querySelectorAll(".panel");
    console.log(slide);
    for (let s of slide){
    s.addEventListener("click", function(e) {
        e.target.classList.toggle('open');
    })
    }
});

