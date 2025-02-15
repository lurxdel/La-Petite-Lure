// Animation for clicking the navigation links
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                smoothScroll(targetElement.offsetTop, 500); 
            }
        });
    });
});

function smoothScroll(targetPosition, duration) {
    let startPosition = window.scrollY;
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Animation for expanding the contacts
document.addEventListener("DOMContentLoaded", function () {
    const details = document.querySelector("details");
    const summary = details.querySelector("summary");

    details.style.overflow = "hidden";
    details.style.transition = "max-height 0.5s ease-in-out, padding 0.5s ease-in-out";
    details.style.maxHeight = summary.offsetHeight + "px"; 

    summary.addEventListener("click", function (event) {
        event.preventDefault();

        if (!details.open) {

            details.style.maxHeight = summary.offsetHeight + "px";

            setTimeout(() => {
                details.open = true;
                let fullHeight = details.scrollHeight + "px";
                details.style.maxHeight = fullHeight;
            }, 10);


            setTimeout(() => {
                summary.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 300);
        } else {
            details.style.maxHeight = summary.offsetHeight + "px"; 
            setTimeout(() => details.open = false, 500); 
        }
    });
});