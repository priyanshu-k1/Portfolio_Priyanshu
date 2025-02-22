function letsChat(){
    window.open("https://t.me/Priyanshuk_01",'_blank'); 
}
document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById("downloadResume");
    const projectButtons = document.querySelectorAll(".projectButton"); // Select all buttons

    if (downloadButton) {
        downloadButton.addEventListener("click", function() {
            let link = document.createElement("a");
            link.href = "/res/Priyanshu-Resume.pdf"; // Replace with actual resume path
            link.download = "Priyanshu_Kumar_Resume.pdf"; // Custom filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    } else {
        console.error("Download button not found!");
    }

    // Loop through each button and add event listener
    projectButtons.forEach((button) => {
        button.addEventListener("click", function() {
            let projectName = button.innerHTML.trim(); // Get button text
            
            let projectLinks = {
                "PDC Library": "https://github.com/priyanshu-k1/PDC-Library-",
                "BMI Calculator": "https://github.com/priyanshu-k1/bmi_calculator2",
                "Breeze Website": "https://github.com/priyanshu-k1/Breeze-web_site",
                "Tik Tak": "https://github.com/priyanshu-k1/tictac_using-Tkinter",
                "Cook Book": "https://github.com/priyanshu-k1/Cook-Book-flutter"
            };

            if (projectLinks[projectName]) {
                window.open(projectLinks[projectName], '_blank');
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
    if(eye1 && eye2 && eye3) {
        eye1.addEventListener("click", function () {
            window.open("/res/pythonCertificate.jpg", "_blank");
        });
        eye2.addEventListener("click", function () {
            window.open("/res/kotlinCertificate.jpg", "_blank");
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



