// Global Variables to config the page
let ismodalBackdroprender = false;
const devDescriptionFallBack =
  "I'm a developer who excels at turning complex challenges into smooth, well-crafted solutions. I focus on creating products that not only work seamlessly but also feel great to use—engaging, efficient, and user-friendly.";

function letsChat() {
  window.open("https://t.me/Priyanshuk_01", "_blank");
}
function removeSpecialCharacters(input) {
  return input.replace(/[.,\-=_!@#$%^&*(){}[\]<>?/\\|~`:;"']/g, "");
}
function makeElementClickable() {
  const ideaBubble = document.querySelector(".idea-bubble-v4");

  if (ideaBubble) {
    ideaBubble.addEventListener("click", function () {
      window.open(
        "https://www.linkedin.com/in/priyanshu-kumar-97898424a/",
        "_blank"
      );
    });

    ideaBubble.style.cursor = "pointer";

    ideaBubble.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
      this.style.transition = "transform 0.2s ease";
    });

    ideaBubble.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  }
}
function selectRandomPic(arr) {
  size = arr.length;
  return arr[Math.floor(Math.random() * size)];
}
// this function is used to config the page and make it dynamic...
document.addEventListener("DOMContentLoaded", function () {
  const introText = document.querySelector(".introText");
  const devPic2 = document.querySelector(".devPic2");
  fetch("project.json")
    .then((response) => response.json())
    .then((data) => {
      if (introText) {
        introText.innerHTML =
          data.pageConfig.devDescription || devDescriptionFallBack;
        ismodalBackdroprender = data.pageConfig.modalOverLay || false;
      }
      if (devPic2 ) {
        let image;
        if(data.pageConfig.dynamicPic){
          image = "res/" + `${selectRandomPic(data.pageConfig.devpic)}`;
          if (image !== "res/avatar.png") {
            devPic2.className = "smallerImage";
          }
        }
        else{
            image="res/avatar.png";
          } 
        devPic2.src = image;
      }
    });
});
document.addEventListener("DOMContentLoaded", makeElementClickable);

document.addEventListener("DOMContentLoaded", function () {
  const downloadButton = document.getElementById("downloadResume");
  const projectButtons = document.querySelectorAll(".projectButton");
  const minorProjectContainer = document.querySelector(".minorProject");
  const skillsContainer = document.querySelector(".skillsContainer");

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
  // Intersection Observer for active link highlighting
  const sections = document.querySelectorAll("div[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const activateLink = (id) => {
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activateLink(entry.target.id);
        }
      });
    },
    {
      threshold: 0.3, // Reduced threshold for better detection
      rootMargin: "-10% 0px -10% 0px", // Add margin to trigger earlier
    }
  );

  sections.forEach((section) => observer.observe(section));

  // Initialize first visible section
  const initializeActiveSection = () => {
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    let activeSection = null;
    let minDistance = Infinity;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + scrollTop;
      const sectionMiddle = sectionTop + rect.height / 2;
      const viewportMiddle = scrollTop + windowHeight / 2;

      const distance = Math.abs(sectionMiddle - viewportMiddle);

      if (distance < minDistance && rect.top < windowHeight * 0.6) {
        minDistance = distance;
        activeSection = section;
      }
    });

    if (activeSection) {
      activateLink(activeSection.id);
    }
  };

  // Initialize on load
  initializeActiveSection();

  // Optional: Add scroll listener for more responsive updates
  let scrollTimeout;
  window.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      // This will help catch any sections the observer might miss
      const currentSection = [...sections].find((section) => {
        const rect = section.getBoundingClientRect();
        return (
          rect.top <= window.innerHeight * 0.4 &&
          rect.bottom >= window.innerHeight * 0.4
        );
      });

      if (currentSection) {
        activateLink(currentSection.id);
      }
    }, 100);
  });
  // Fetch and display minor projects
  // Ensure minorProjectContainer exists before fetching
  if (minorProjectContainer) {
    fetch("project.json")
      .then((response) => response.json())
      .then((data) => {
        const minorProjectsContainer = document.querySelector(".minorProject");
        data.minorProjects.forEach((minorProjectsProject) => {
          const button = document.createElement("button");
          button.className = "glowbutton projectButton";
          button.textContent = minorProjectsProject.name;
          button.addEventListener("click", () => {
            window.open(minorProjectsProject.link, "_blank");
          });
          minorProjectsContainer.appendChild(button);
        });
      })
      .catch((error) => console.error("Error loading projects:", error));
  }

  // Fetch and display skills
  if (skillsContainer) {
    fetch("project.json")
      .then((response) => response.json())
      .then((data) => {
        const skillsContainer = document.querySelector(".skillsContainer");
        data.skills.forEach((skill) => {
          const skillElement = document.createElement("div");
          skillElement.className = "skillsCards";
          skillElement.id = removeSpecialCharacters(skill.name);
          skillElement.innerHTML = `
                    <div class="iconArea"><img class="skillsIcon" src="${skill.image}" alt="${skill.name}"></div>
                    <div class="skillNameArea"><p>${skill.name}</p></div>`;
          skillsContainer.appendChild(skillElement);
        });
      })
      .catch((error) => console.error("Error loading skills:", error));
  }
});

// Animate title on scroll
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".title h2");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          title.classList.add("animate-in");
        } else {
          title.classList.remove("animate-in");
        }
      });
    },
    { threshold: 0.5 }
  );

  if (title) observer.observe(title);

  const dot = document.querySelector(".cursor-dot");
  const outline = document.querySelector(".cursor-outline");

  let dotX = 0,
    dotY = 0;
  let outlineX = 0,
    outlineY = 0;

  window.addEventListener("mousemove", (e) => {
    dotX = e.clientX;
    dotY = e.clientY;
  });
  function isMobileDevice() {
    return window.innerWidth <= 768;
  }

  function isTabletDevice() {
    return window.innerWidth > 768 && window.innerWidth <= 1024;
  }

  function isSmallScreen() {
    return window.innerWidth <= 1024;
  }

  function animate() {
    if (isMobileDevice() || isTabletDevice() || isSmallScreen()) {
      dot.style.display = "none";
      outline.style.display = "none";
      const style = document.createElement("style");
      style.innerHTML = `* { cursor: default !important; }`;
      document.head.appendChild(style);
      return; // Skip animation on mobile or tablet
    } else {
      dot.style.display = "block";
      outline.style.display = "block";
    }
    // Dot follows instantly
    dot.style.left = dotX + "px";
    dot.style.top = dotY + "px";

    // Outline follows with delay
    outlineX += (dotX - outlineX) * 0.15;
    outlineY += (dotY - outlineY) * 0.15;
    outline.style.left = outlineX + "px";
    outline.style.top = outlineY + "px";

    requestAnimationFrame(animate);
  }

  animate();
});

document.addEventListener("DOMContentLoaded", function () {
  const devPic = document.querySelector(".devPic");
  const devPic2 = document.querySelector(".devPic2");
  const eye1 = document.querySelector(".eye1");
  const eye2 = document.querySelector(".eye2");
  const eye3 = document.querySelector(".eye3");
  const shadow = document.querySelector(".shadow");

  // Ripple effect on click
  document.addEventListener("click", (e) => {
    const ripple = document.createElement("div");
    ripple.className = "ripple";
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });

  if (devPic && devPic2) {
    devPic2.addEventListener("mouseenter", function () {
      devPic2.style.opacity = "0";
      devPic2.style.transform = "scale(0.8)";
      devPic.style.display = "block";
      devPic.style.marginTop = "1.3rem";
      devPic.style.transform = "scale(1.2)";
      // shadow.style.transition = "all 0.6s ease-in-out";
      // shadow.style.background = "linear-gradient(135deg, #1f1c2c, #928dab)";
    });

    devPic2.addEventListener("mouseleave", function () {
      devPic2.style.opacity = "1";
      devPic2.style.transform = "scale(1)";
      devPic.style.marginTop = "50rem";
      devPic.style.transform = "scale(0.5)";
      devPic.style.display = "hidden";
      // shadow.style.background = "linear-gradient(to left, #ffc081, #EECDA3)";
    });
  }
  if (eye1 && eye2 && eye3) {
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

function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}
function renderProjects(projects) {
  const container = document.querySelector(".projectsScreenContainer");
  if (!container) {
    console.warn("projectsScreenContainer element not found.");
    return;
  }

  const majorProjectSpan = container.querySelector(".majorProject");
  container.innerHTML = "";
  if (majorProjectSpan) {
    container.appendChild(majorProjectSpan);
  }

  projects.forEach((project, index) => {
    const truncatedDesc = truncateText(project.description, 50);
    const card = document.createElement("div");
    card.className = "cardBody";
    card.innerHTML = `
            <div class="cardimage">
                <img loading="lazy" src="${project.image}" alt="${project.alt}">
                <span class="covercaption projectName">${project.name}</span>
                <div class="projectOverlay">
                    <h3>${project.name}</h3>
                    <p>${truncatedDesc}</p>
                    <span>Tech Stack: ${truncateText(
                      project.techStack,
                      30
                    )}</span>
                    <button class="openModalBtn" data-project-index="${index}">Know more</button>
                </div>
            </div>
        `;

    container.appendChild(card);
  });

  // Add event listeners to all "Know more" buttons
  addModalEventListeners(projects);
}
// Function to add event listeners for modal functionality
function addModalEventListeners(projects) {
  const openModalBtns = document.querySelectorAll(".openModalBtn");
  const modal = document.querySelector(".detailViewModal");
  const closeModalBtn = document.querySelector(".closeModal");
  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const projectIndex = parseInt(btn.getAttribute("data-project-index"));
      const project = projects[projectIndex];
      openModal(project);
    });
  });
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal);
  }
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
      closeModal();
    }
  });
}

// Function to open modal and populate with project data
function openModal(project) {
  const modal = document.querySelector(".detailViewModal");
  const projectLogoImg = document.querySelector(".projectLogoImg");
  const modalProjectTitle = document.querySelector(".modalProjectTitle");
  const modalProjectDesc = document.querySelector(".modalProjectDesc");
  const techStackList = document.querySelector(".techStackList");
  const modalFooter = document.querySelector(".modalFooter button");
  const modalBackdrop = document.querySelector(".modalBackdrop");

  if (!modal) {
    console.warn("Modal element not found.");
    return;
  }
  if (projectLogoImg) {
    projectLogoImg.src = project.image;
    projectLogoImg.alt = project.alt;
  }
  if (modalProjectTitle) {
    modalProjectTitle.textContent = project.name;
    const icon = document.createElement("i");
    icon.className = project.modalcontent?.icon || "fa fa-check";
    modalProjectTitle.appendChild(icon);
  }
  if (modalProjectDesc) {
    const description = project.modalcontent?.content || project.description;
    modalProjectDesc.textContent = description;
  }
  if (techStackList) {
    techStackList.innerHTML = "";
    let techStackArray;
    if (
      project.modalcontent?.techStack &&
      Array.isArray(project.modalcontent.techStack)
    ) {
      techStackArray = project.modalcontent.techStack;
    } else if (project.techStack) {
      techStackArray = project.techStack.split(",").map((tech) => tech.trim());
    } else {
      techStackArray = [];
    }
    techStackArray.forEach((tech) => {
      const li = document.createElement("li");
      li.className = "techStackItem";
      li.textContent = tech;
      techStackList.appendChild(li);
    });
  }
  // Set GitHub link
  if (modalFooter && project.link) {
    modalFooter.onclick = () => {
      window.open(project.link, "_blank");
    };
  }

  // Show modal
  modal.style.display = "block";
  if (modalBackdrop && ismodalBackdroprender) {
    modalBackdrop.style.display = "block";
    document.body.style.overflow = "hidden";
  }
  addTechStackAutoScroll();

  // Add smooth transition
  setTimeout(() => {
    modal.style.opacity = "1";
    modal.style.transform = "scale(1)";
    modalBackdrop.style.opacity = "1";
    modalBackdrop.style.transform = "scale(1)";
  }, 10);
}

// Function to close modal
function closeModal() {
  const modal = document.querySelector(".detailViewModal");
  const modalBackdrop = document.querySelector(".modalBackdrop");
  if (modal) {
    modal.style.opacity = "0";
    modal.style.transform = "scale(0.8)";

    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }
  if (modalBackdrop) {
    modalBackdrop.style.opacity = "0";
    modalBackdrop.style.transform = "scale(0.8)";

    setTimeout(() => {
      modalBackdrop.style.display = "none";
    }, 300);
  }
  document.body.style.overflowY = "scroll";
}
// Enhanced auto-scroll with visual hover zones
function addTechStackAutoScroll() {
  const techStackList = document.querySelector(".techStackList");
  if (!techStackList) return;

  let scrollInterval;
  const scrollSpeed = 2;
  const hoverZoneWidth = 50;

  techStackList.addEventListener("mousemove", (e) => {
    const rect = techStackList.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const containerWidth = rect.width;

    // Clear any existing interval and classes
    clearInterval(scrollInterval);
    techStackList.classList.remove("hover-left", "hover-right");

    // Left hover zone
    if (mouseX <= hoverZoneWidth) {
      techStackList.classList.add("hover-left");
      scrollInterval = setInterval(() => {
        techStackList.scrollLeft -= scrollSpeed;
        if (techStackList.scrollLeft <= 0) {
          clearInterval(scrollInterval);
        }
      }, 16);
    }
    // Right hover zone
    else if (mouseX >= containerWidth - hoverZoneWidth) {
      techStackList.classList.add("hover-right");
      scrollInterval = setInterval(() => {
        const maxScroll = techStackList.scrollWidth - techStackList.clientWidth;
        techStackList.scrollLeft += scrollSpeed;
        if (techStackList.scrollLeft >= maxScroll) {
          clearInterval(scrollInterval);
        }
      }, 16);
    }
  });
  techStackList.addEventListener("mouseleave", () => {
    clearInterval(scrollInterval);
    techStackList.classList.remove("hover-left", "hover-right");
  });
}
document.addEventListener("DOMContentLoaded", function () {
  // Fetch the projects data
  fetch("project.json")
    .then((response) => response.json())
    .then((data) => {
      renderProjects(data.projects);
    })
    .catch((error) => {
      console.error("Error loading projects:", error);
      const container = document.querySelector(".projectsScreenContainer");
      if (container) {
        container.innerHTML =
          "<p>Unable to load projects. Please check back later.</p>";
      }
    });
});

// window.addEventListener('load', () => {
//   const target = document.querySelector('.devPic2');

//   if (!target) return;

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           // Visible in Home section
//           animateFingerToTarget(); // run once immediately
//           startPointerLoop();
//         } else {
//           // Scrolled away
//           stopPointerLoop();
//         }
//       });
//     },
//     { threshold: 0.8 } // 80% visibility to trigger
//   );

//   observer.observe(target);
// });

// Pointer animation for the finger icon
let fingerIntervalId = null;

function animateFingerToTarget() {
  const finger = document.querySelector(".finger-pointer");
  const target = document.querySelector(".devPic2");

  if (!finger || !target) return;

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const targetRect = target.getBoundingClientRect();
  const targetX = targetRect.left + targetRect.width / 2;
  const targetY = targetRect.top + targetRect.height / 2;

  finger.style.transition = "none";
  finger.style.opacity = "0";
  finger.style.top = `${centerY}px`;
  finger.style.left = `${centerX}px`;
  finger.style.transform = "translate(-50%, -50%) scale(1)";

  void finger.offsetWidth;

  finger.style.transition =
    "transform 2s ease-in-out, opacity 0.5s ease-in-out";
  finger.style.opacity = "1";
  const deltaX = targetX - centerX;
  const deltaY = targetY - centerY;
  finger.style.setProperty("--x", `calc(-50% + ${deltaX}px)`);
  finger.style.setProperty("--y", `calc(-50% + ${deltaY}px)`);
  finger.style.transform = `translate(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px)) scale(1)`;

  setTimeout(() => {
    finger.classList.add("click-effect");
  }, 2000);

  setTimeout(() => {
    finger.classList.remove("click-effect");
    finger.style.opacity = "0";
  }, 2500);

  setTimeout(() => {
    finger.style.transform = "translate(-50%, -50%) scale(1)";
  }, 3000);
}

// stopped the exectution of the animation cause it was kinda unprofessional
// function startPointerLoop() {
//   fingerIntervalId = setInterval(animateFingerToTarget, 10000);
// }
// window.addEventListener('resize', animateFingerToTarget);
function stopPointerLoop() {
  if (fingerIntervalId) {
    clearInterval(fingerIntervalId);
    fingerIntervalId = null;
  }
}
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});
