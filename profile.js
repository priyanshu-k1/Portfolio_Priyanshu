function letsChat(){
    window.open("https://t.me/Priyanshuk_01",'_blank'); 
}
function makeElementClickable() {
  const ideaBubble = document.querySelector('.idea-bubble-v4');
  
  if (ideaBubble) {
    ideaBubble.addEventListener('click', function() {
      window.open('https://www.linkedin.com/in/priyanshu-kumar-97898424a/', '_blank');
    });
    
    ideaBubble.style.cursor = 'pointer';
    
    ideaBubble.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.transition = 'transform 0.2s ease';
    });
    
    ideaBubble.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  }
}


document.addEventListener('DOMContentLoaded', makeElementClickable);

document.addEventListener("DOMContentLoaded", function () {
    const downloadButton = document.getElementById("downloadResume");
    const projectButtons = document.querySelectorAll(".projectButton"); 
    const container = document.querySelector(".conatiner");
    const minorProjectContainer = document.querySelector(".minorProject");

    let scrollAmount = 2; 
    let scrolling = true; 
    let interval;

    if (downloadButton) {
        downloadButton.addEventListener("click", function () {
            let link = document.createElement("a");
            link.href = "res/Priyanshu-Resume.pdf"; 
            link.download = "Priyanshu_Kumar_Resume.pdf"; 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    } else {
        console.error("Download button not found!");
    }

    if (container) {
        const items = [...container.children];
        items.forEach((item) => {
            let clone = item.cloneNode(true);
            container.appendChild(clone); 
        });

        function autoScroll() {
            if (!scrolling) return; 

            container.scrollLeft += scrollAmount;
            if (container.scrollLeft >= container.scrollWidth / 2) {
                container.scrollLeft = 0;
            }
        }

        interval = setInterval(autoScroll, 13);
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
    }
    if(minorProjectContainer){
        fetch('project.json')
        .then(response => response.json())
        .then(data => {
            const minorProjectsContainer = document.querySelector('.minorProject');
            data.minorProjects.forEach(minorProjectsProject => {
            const button = document.createElement('button');
            button.className = 'glowbutton projectButton';
            button.textContent = minorProjectsProject.name;
            button.addEventListener('click', () => {
                window.open(minorProjectsProject.link, '_blank');
            });
            minorProjectsContainer.appendChild(button);
            });
        })
        .catch(error => console.error('Error loading projects:', error));}

    
});



document.addEventListener("DOMContentLoaded", function () {
    const devPic = document.querySelector(".devPic");
    const devPic2 = document.querySelector(".devPic2");
    const eye1 = document.querySelector(".eye1");
    const eye2 = document.querySelector(".eye2");
    const eye3 = document.querySelector(".eye3");
    // devPic.style.marginTop = "50rem";

    if (devPic && devPic2) { 
        devPic2.addEventListener("mouseenter", function () { 
            devPic2.style.opacity = "0"; 
            devPic.style.marginTop = "1.4rem"; 
        });

        devPic2.addEventListener("mouseleave", function () { 
            devPic2.style.opacity = "1";  
            devPic.style.marginTop = "50rem";
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
document.addEventListener('DOMContentLoaded', function() {
    // Fetch the projects data
    fetch('project.json')
        .then(response => response.json())
        .then(data => {
            renderProjects(data.projects);
        })
        .catch(error => {
            console.error('Error loading projects:', error);
            const container = document.querySelector('.projectsScreenContainer');
            if (container) {
                container.innerHTML = '<p>Unable to load projects. Please check back later.</p>';
            }
        });

    function renderProjects(projects) {
        const container = document.querySelector('.projectsScreenContainer');
        if (!container) {
            console.warn('projectsScreenContainer element not found.');
            return;
        }

        const majorProjectSpan = container.querySelector('.majorProject');
        container.innerHTML = '';
        if (majorProjectSpan) {
            container.appendChild(majorProjectSpan);
        }

        projects.forEach(project => {
            const truncatedDesc = truncateText(project.description, 50);
            const card = document.createElement('div');
            card.className = 'cardBody';
            card.innerHTML = `
                <div class="cardimage">
                    <img src="${project.image}" alt="${project.alt}">
                    <span class="covercaption projectName">${project.name}</span>
                    <div class="projectOverlay">
                        <h3>${project.name}</h3>
                        <p>${truncatedDesc}</p>
                        <span>Tech Stack: ${truncateText(project.techStack, 30)}</span>
                        <a href="${project.link}" target="_blank">Know more</a>
                    </div>
                </div>
            `;
            
            container.appendChild(card);
        });
    }

   
    function truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }
});

// class AvatarHintSystem {
//     constructor() {
//         this.avatarContainer = document.querySelector('.shadow'); 
//         this.hintHand = document.createElement('div');
//         this.hintHand.className = 'hint-hand';
//         this.hintHand.textContent = '👆';
//         this.avatarContainer.appendChild(this.hintHand);

//         this.pulseRing = document.createElement('div');
//         this.pulseRing.className = 'pulse-ring';
//         this.avatarContainer.appendChild(this.pulseRing);

//         this.sparklesContainer = document.createElement('div');
//         this.sparklesContainer.className = 'sparkles';
//         this.avatarContainer.appendChild(this.sparklesContainer);

//         this.tooltip = document.createElement('div');
//         this.tooltip.className = 'tooltip';
//         this.tooltip.textContent = 'Hover to see real photo!';
//         this.avatarContainer.appendChild(this.tooltip);
        
//         this.isHovering = false;
//         this.hasUserInteracted = false;
//         this.hintShownCount = 0;
//         this.maxHints = 3;
        
//         this.init();
//     }

//     init() {
//         this.setupEventListeners();
//         this.startRandomHints();
//         this.createSparkles();
//     }

//     setupEventListeners() {
//         this.avatarContainer.addEventListener('mouseenter', () => {
//             this.isHovering = true;
//             this.hasUserInteracted = true;
//             this.tooltip.classList.add('show');
//         });

//         this.avatarContainer.addEventListener('mouseleave', () => {
//             this.isHovering = false;
//             this.tooltip.classList.remove('show');
//         });

//         this.avatarContainer.addEventListener('click', () => {
//             this.hasUserInteracted = true;
//             this.createSparklesBurst();
//         });
//     }

//     startRandomHints() {
//         setTimeout(() => {
//             this.showHint();
//         }, 3000);

//         this.scheduleNextHint();
//     }

//     scheduleNextHint() {
//         if (this.hintShownCount >= this.maxHints || this.hasUserInteracted) return;

//         const interval = Math.random() * 7000 + 8000;
        
//         setTimeout(() => {
//             if (!this.hasUserInteracted && !this.isHovering) {
//                 this.showHint();
//             }
//             this.scheduleNextHint();
//         }, interval);
//     }

//     showHint() {
//         if (this.hasUserInteracted || this.isHovering) return;
        
//         this.hintShownCount++;
//         this.hintHand.classList.add('show');
//         this.pulseRing.classList.add('show');
//         this.createRandomSparkles();
        
//         setTimeout(() => {
//             this.hintHand.classList.remove('show');
//             this.pulseRing.classList.remove('show');
//         }, 2500);
//     }

//     createSparkles() {
//         for (let i = 0; i < 8; i++) {
//             const sparkle = document.createElement('div');
//             sparkle.className = 'sparkle';
//             this.sparklesContainer.appendChild(sparkle);
//         }
//     }

//     createRandomSparkles() {
//         const sparkles = this.sparklesContainer.querySelectorAll('.sparkle');
        
//         sparkles.forEach((sparkle, index) => {
//             const angle = (index / sparkles.length) * 360 + Math.random() * 45;
//             const radius = 120 + Math.random() * 40;
//             const x = Math.cos(angle * Math.PI / 180) * radius;
//             const y = Math.sin(angle * Math.PI / 180) * radius;
            
//             sparkle.style.left = `calc(50% + ${x}px)`;
//             sparkle.style.top = `calc(50% + ${y}px)`;
            
//             setTimeout(() => {
//                 sparkle.classList.add('show');
//                 setTimeout(() => sparkle.classList.remove('show'), 2000);
//             }, index * 200);
//         });
//     }

//     createSparklesBurst() {
//         const sparkles = this.sparklesContainer.querySelectorAll('.sparkle');
        
//         sparkles.forEach((sparkle, index) => {
//             const angle = Math.random() * 360;
//             const radius = 80 + Math.random() * 60;
//             const x = Math.cos(angle * Math.PI / 180) * radius;
//             const y = Math.sin(angle * Math.PI / 180) * radius;
            
//             sparkle.style.left = `calc(50% + ${x}px)`;
//             sparkle.style.top = `calc(50% + ${y}px)`;
            
//             setTimeout(() => {
//                 sparkle.classList.add('show');
//                 setTimeout(() => sparkle.classList.remove('show'), 2000);
//             }, index * 50);
//         });
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     setTimeout(() => {
//         const avatarContainer = document.querySelector('.shadow');
//         if (avatarContainer && !document.querySelector('.hint-hand')) {
//             try {
//                 new AvatarHintSystem();
                
//                 // Random hand emoji changer
//                 const handEmojis = ['👆', '☝️', '👇', '🖱️', '✋'];
//                 setInterval(() => {
//                     const hintHand = document.querySelector('.hint-hand');
//                     if (hintHand) {
//                         const randomEmoji = handEmojis[Math.floor(Math.random() * handEmojis.length)];
//                         hintHand.textContent = randomEmoji;
//                     }
//                 }, 5000);
//             } catch (error) {
//                 console.error('Avatar hint initialization error:', error);
//             }
//         }
//     }, 300);
// });
