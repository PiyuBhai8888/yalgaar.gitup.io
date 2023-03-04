window.addEventListener("DOMContentLoaded", e=>{
    document.body.querySelector("#mainNav") && new bootstrap.ScrollSpy(document.body,{
        target: "#mainNav",
        offset: 74
    });
    const n = document.body.querySelector(".navbar-toggler");
    [].slice.call(document.querySelectorAll("#navbarResponsive .nav-link")).map(function(e) {
        e.addEventListener("click", ()=>{
            "none" !== window.getComputedStyle(n).display && n.click()
        }
        )
    })
}
);
