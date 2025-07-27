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
 
    
    // Ripple effect on click
    document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600); // remove after animation
    });

    if (devPic && devPic2) { 
        devPic2.addEventListener("mouseenter", function () { 
            devPic2.style.opacity = "0";
            devPic2.style.transform = "scale(0.8)";
            devPic.style.display="block";
            devPic.style.marginTop = "1.3rem"; 
            devPic.style.transform = "scale(1.2)";
        });

        devPic2.addEventListener("mouseleave", function () { 
            devPic2.style.opacity = "1";  
            devPic2.style.transform = "scale(1)";
           
            devPic.style.marginTop = "50rem";
            devPic.style.transform = "scale(0.5)";
            devPic.style.display="hidden";
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
           alert("Unknown Error Occurred. Please try again later.");
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



window.addEventListener('load', () => {
  const target = document.querySelector('.devPic2');

  if (!target) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Visible in Home section
          animateFingerToTarget(); // run once immediately
          startPointerLoop();
        } else {
          // Scrolled away
          stopPointerLoop();
        }
      });
    },
    { threshold: 0.8 } // 80% visibility to trigger
  );

  observer.observe(target);
});

window.addEventListener('resize', animateFingerToTarget);


let fingerIntervalId = null;

function animateFingerToTarget() {
  const finger = document.querySelector('.finger-pointer');
  const target = document.querySelector('.devPic2');

  if (!finger || !target) return;

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const targetRect = target.getBoundingClientRect();
  const targetX = targetRect.left + targetRect.width / 2;
  const targetY = targetRect.top + targetRect.height / 2;

  finger.style.transition = 'none';
  finger.style.opacity = '0';
  finger.style.top = `${centerY}px`;
  finger.style.left = `${centerX}px`;
  finger.style.transform = 'translate(-50%, -50%) scale(1)';

  void finger.offsetWidth;

  finger.style.transition = 'transform 2s ease-in-out, opacity 0.5s ease-in-out';
  finger.style.opacity = '1';
  const deltaX = targetX - centerX;
  const deltaY = targetY - centerY;
  finger.style.setProperty('--x', `calc(-50% + ${deltaX}px)`);
  finger.style.setProperty('--y', `calc(-50% + ${deltaY}px)`);
  finger.style.transform = `translate(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px)) scale(1)`;

  setTimeout(() => {
    finger.classList.add('click-effect');
  }, 2000);

  setTimeout(() => {
    finger.classList.remove('click-effect');
    finger.style.opacity = '0';
  }, 2500);

  setTimeout(() => {
    finger.style.transform = 'translate(-50%, -50%) scale(1)';
  }, 3000);
}

function startPointerLoop() {
  fingerIntervalId = setInterval(animateFingerToTarget, 10000);
}

function stopPointerLoop() {
  if (fingerIntervalId) {
    clearInterval(fingerIntervalId);
    fingerIntervalId = null;
  }
}

