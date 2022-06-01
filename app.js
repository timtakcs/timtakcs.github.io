
function autoScroll() {
    const element = document.getElementById("projects");
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

function reveal() {
    const reveals = document.getElementsByClassName('reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        console.log(1);

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }

    
}

window.addEventListener('scroll', reveal);




