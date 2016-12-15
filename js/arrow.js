var obj = document.getElementById("svg");

var hideSVG = function() {
    if ($(window).scrollTop() + $(window).height() < $(document).height() - 300) {
        obj.style.display = "none";
        setTimeout(function() { obj.style.display = "block"; }, 3000);
    } else {
        obj.style.display = "none";
    }
}

window.addEventListener("scroll", hideSVG);