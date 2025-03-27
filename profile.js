function letsChat(){
    window.open("https://t.me/Priyanshuk_01",'_blank'); 
}
// document.addEventListener("DOMContentLoaded", function() {
//     const downloadButton = document.getElementById("downloadResume");
//     const projectButtons = document.querySelectorAll(".projectButton"); // Select all buttons
//     const container = document.querySelector(".conatiner");
//     let scrollAmount = 1.3; // Adjust speed
//     let direction = 1; // 1 for right, -1 for left
//     if (downloadButton) {
//         downloadButton.addEventListener("click", function() {
//             let link = document.createElement("a");
//             link.href = "/res/Priyanshu-Resume.pdf"; // Replace with actual resume path
//             link.download = "Priyanshu_Kumar_Resume.pdf"; // Custom filename
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//         });
//     } else {
//         console.error("Download button not found!");
//     }
//     if (container) { // Check if element exists before running the scroll function
//         function autoScroll() {
//             // Reverse direction when reaching the start or end
//         if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
//             direction = -1; // Scroll left
//         } else if (container.scrollLeft <= 0) {
//             direction = 1; // Scroll right
//         }
//         container.scrollLeft += scrollAmount * direction;
//         }

//         setInterval(autoScroll, 10); // Adjust interval for speed
//     }

//     // Loop through each button and add event listener
//     projectButtons.forEach((button) => {
//         button.addEventListener("click", function() {
//             let projectName = button.innerHTML.trim(); // Get button text
            
//             let projectLinks = {
//                 "PDC Library": "https://github.com/priyanshu-k1/PDC-Library-",
//                 "BMI Calculator": "https://github.com/priyanshu-k1/bmi_calculator2",
//                 "Breeze Website": "https://github.com/priyanshu-k1/Breeze-web_site",
//                 "Tik Tak": "https://github.com/priyanshu-k1/tictac_using-Tkinter",
//                 "Cook Book": "https://github.com/priyanshu-k1/Cook-Book-flutter"
//             };

//             if (projectLinks[projectName]) {
//                 window.open(projectLinks[projectName], '_blank');
//             } else {
//                 alert("Project not found");
//             }
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const downloadButton = document.getElementById("downloadResume");
    const projectButtons = document.querySelectorAll(".projectButton"); // Select all buttons
    const container = document.querySelector(".conatiner");
<<<<<<< HEAD

    let scrollAmount = 2; // Adjust speed
    let scrolling = true; // Auto-scroll state
    let interval;

=======
    let scrollInterval;
    let isUserInteracting = false;
    let resumeTimeout;
>>>>>>> ceb1bf5a54e7d8129184ba8152e3a6d1ca066cca
    if (downloadButton) {
        downloadButton.addEventListener("click", function () {
            let link = document.createElement("a");
            link.href = "res/Priyanshu-Resume.pdf"; 
            link.download = "Priyanshu Kumar Resume.pdf"; // Custom filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    } else {
        console.error("Download button not found!");
    }
<<<<<<< HEAD

    if (container) {
        // **Clone child elements for infinite loop effect**
        const items = [...container.children]; // Get all items inside container
        items.forEach((item) => {
            let clone = item.cloneNode(true);
            container.appendChild(clone); // Duplicate items for looping effect
        });

        function autoScroll() {
            if (!scrolling) return; // Stop scrolling if user interacts

            container.scrollLeft += scrollAmount;

            // **If reached end, reset without noticeable jump**
            if (container.scrollLeft >= container.scrollWidth / 2) {
                container.scrollLeft = 0;
            }
        }

        interval = setInterval(autoScroll, 20);

        // **Pause scrolling on user interaction**
        container.addEventListener("mouseenter", () => {
            scrolling = false;
            clearInterval(interval);
        });
        container.addEventListener("mouseleave", () => {
            scrolling = true;
            interval = setInterval(autoScroll, 20);
        });

        container.addEventListener("touchstart", () => {
            scrolling = false;
            clearInterval(interval);
        });
        container.addEventListener("touchend", () => {
            scrolling = true;
            interval = setInterval(autoScroll, 20);
        });
=======
    function startAutoScroll() {
        if (!isUserInteracting) {
            scrollInterval = setInterval(() => {
                if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                    container.scrollLeft = 0; // Reset scroll when it reaches the end
                } else {
                    container.scrollLeft += 1; // Adjust speed by changing this value
                }
            }, 20);
        }
    }
     function stopAutoScroll() {
        clearInterval(scrollInterval);
        isUserInteracting = true;
        clearTimeout(resumeTimeout); // Prevent multiple timeouts
        resumeTimeout = setTimeout(() => {
            isUserInteracting = false;
            startAutoScroll(); // Resume scrolling after delay
        }, 3000); // Restart scrolling after 3 seconds of no interaction
    }
    if (container) { 
        startAutoScroll();
        container.addEventListener("mouseenter", stopAutoScroll);
        container.addEventListener("mouseleave", startAutoScroll);
        container.addEventListener("touchstart", stopAutoScroll);
        container.addEventListener("touchend", startAutoScroll);
        container.addEventListener("wheel", stopAutoScroll);    
>>>>>>> ceb1bf5a54e7d8129184ba8152e3a6d1ca066cca
    }

    // Loop through each button and add event listener
    projectButtons.forEach((button) => {
        button.addEventListener("click", function () {
            let projectName = button.innerHTML.trim(); // Get button text

            let projectLinks = {
                "PDC Library": "https://github.com/priyanshu-k1/PDC-Library-",
                "BMI Calculator": "https://github.com/priyanshu-k1/bmi_calculator2",
                "Breeze Website": "https://github.com/priyanshu-k1/Breeze-web_site",
                "Tik Tak": "https://github.com/priyanshu-k1/tictac_using-Tkinter",
                "Cook Book": "https://github.com/priyanshu-k1/Cook-Book-flutter"
            };

            if (projectLinks[projectName]) {
                window.open(projectLinks[projectName], "_blank");
            } else {
                alert("Project not found");
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const devPic = document.querySelector(".devPic");
    const devPic2 = document.querySelector(".devPic2");
    const eye1 = document.querySelector(".eye1");
    const eye2 = document.querySelector(".eye2");
    const eye3 = document.querySelector(".eye3");
    // devPic.style.marginTop = "50rem";

    if (devPic && devPic2) { // Check if elements exist before adding event listeners
        devPic2.addEventListener("mouseenter", function () { // Trigger on hover
            devPic2.style.opacity = "0";  // Make devPic2 disappear
            devPic.style.marginTop = "1.4rem"; // Move devPic up
        });

        devPic2.addEventListener("mouseleave", function () { // Reset on mouse leave
            devPic2.style.opacity = "1";  // Show devPic2 again
            // devPic2.style.pointerEvents = "auto"; // Enable interactions again
            devPic.style.marginTop = "50rem"; // Reset devPic position
        });
    }
    if(eye1 && eye2 && eye3) {
        eye1.addEventListener("click", function () {
            window.open("res/pythonCertificate.jpg", "_blank");
        });
        eye2.addEventListener("click", function () {
            window.open("res/kotlinCertificate.jpg", "_blank");
        });
        eye3.addEventListener("click", function () {
           alert("Unknow Error Occured");
        });
    }
});

// document.addEventListener('DOMContentLoaded', function() { 
//     const navbar = document.getElementById("NAVBAR");

//     if (navbar) {  // Check if NAVBAR exists
//         const scroller = navbar.offsetHeight; 
//         console.log(scroller);
//         document.documentElement.style.setProperty('--scroll-val', (scroller + 'px'));
//     } else {
//         console.error("NAVBAR element not found! Check the ID.");
//     }
// });

  let arrayOfID=['text1', 'text2', 'text3', 'text4', 'text5', 'text6'];
  var count=0;
  var forward=true
  
  function lightUP() {
      if(forward==true){
          var element=document.getElementById(arrayOfID[count]);
          element.style.color= "white";
          element.style.filter='drop-shadow(5px 0px 10px  #6554AF)';
          count++;
          if(count==6){
              forward=false
          }
          
      }
      else{
          var element=document.getElementById(arrayOfID[count-1]);
          element.style.color= "#212529";
          element.style.filter='drop-shadow(0px 0px 0px  #09101a)';
          count--;
          if(count==0){
              forward=true
          }
  
      } 
    setTimeout(lightUP, 300); 
  }



// optimize js code
