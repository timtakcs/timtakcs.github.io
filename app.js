
function autoScroll() {
    const element = document.getElementById("projects");
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.lengthl; i++) {
        var windowHeight = widner.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
        else {
            reveals[i].classList.remove("active")
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();

