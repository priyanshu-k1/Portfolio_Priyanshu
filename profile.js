
document.addEventListener("DOMContentLoaded", function () {
    const devPic = document.querySelector(".devPic");
    const devPic2 = document.querySelector(".devPic2");

    if (devPic && devPic2) { // Check if elements exist before adding event listeners
        devPic2.addEventListener("mouseenter", function () { // Trigger on hover
            devPic2.style.opacity = "0";  // Make devPic2 disappear
            devPic.style.marginTop = "1.4rem"; // Move devPic up
        });

        devPic2.addEventListener("mouseleave", function () { // Reset on mouse leave
            devPic2.style.opacity = "1";  // Show devPic2 again
            devPic2.style.pointerEvents = "auto"; // Enable interactions again
            devPic.style.marginTop = "50rem"; // Reset devPic position
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const sroller= document.getElementById("NAVBAR").offsetHeight; 
    console.log(sroller)
    document.documentElement.style.setProperty('--scroll-val',(sroller+'px'))
  });