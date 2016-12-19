var obj = document.getElementById("svg");
obj.timeOutApplied = false;

var hideSVG = function() {
    if ($(window).scrollTop() + $(window).height() < $(document).height() - 50 && !obj.timeOutApplied) {
        obj.style.display = "none";
        obj.timeOutApplied = true;
        setTimeout(function() {
            obj.style.display = "block";
            obj.timeOutApplied = false;
        }, 1500);
    } else {
        obj.style.display = "none";
    }
}

window.addEventListener("scroll", hideSVG);