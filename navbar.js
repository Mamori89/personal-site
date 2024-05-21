document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('.background-video');
    
    video.addEventListener('loadedmetadata', function() {
        video.currentTime = 0;
        video.play();
    });

    var navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            video.currentTime = 0;
            video.play();
        });
    });

    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    let isScrolling;

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            var navbarVideo = document.querySelector('.background-video');
            navbarVideo.currentTime = 0;
            navbarVideo.play();
        }, 500);
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "flex";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });
});
