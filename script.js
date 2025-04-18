window.addEventListener("scroll", function () {
    const scrollMore = document.querySelector(".scroll-more p");
    const profile = document.querySelector(".profile");
    const card = document.querySelector(".card");
    const scrollY = window.scrollY;
  
    if (scrollY > 10) {
      scrollMore.classList.add("hide");
      profile.classList.add("hide");
      card.classList.add("hide");
    } else {
      scrollMore.classList.remove("hide");
      profile.classList.remove("hide");
      card.classList.remove("hide");
    }
  });

  function updateClock() {
    const now = new Date();
  
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';
  
   
    let displayHours = hours % 12;
    displayHours = displayHours === 0 ? '00' : displayHours.toString().padStart(2, '0');
  
    const displayMinutes = minutes.toString().padStart(2, '0');
    const displaySeconds = seconds.toString().padStart(2, '0');
  
    const timeString = `${displayHours}:${displayMinutes}:${displaySeconds} ${amPm}`;
    document.getElementById('clock').textContent = timeString;
  }
  
  setInterval(updateClock, 1000);
  updateClock();


  const tiltY = document.querySelector(".big-Y");

  tiltY.addEventListener("mousemove", (e) => {
    const rect = tiltY.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
  
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
  
    const rotateX = ((y - centerY) / centerY) * -25;
    const rotateY = ((x - centerX) / centerX) * 25;
  
    tiltY.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });
  
  tiltY.addEventListener("mouseleave", () => {
    tiltY.style.transform = `rotateX(0) rotateY(0) scale(1)`;
  });


  const text = '"Scroll More. Know More."';
  const target = document.getElementById("typing-text");
  let index = 0;
  let isDeleting = false;
  
  function typeLoop() {
    if (!isDeleting) {
      target.innerHTML = text.substring(0, index + 1);
      index++;
      if (index === text.length) {
        isDeleting = true;
        setTimeout(typeLoop, 1500); 
        return;
      }
    } else {
      target.innerHTML = text.substring(0, index - 1);
      index--;
      if (index === 0) {
        isDeleting = false;
      }
    }
    setTimeout(typeLoop, isDeleting ? 40 : 60); 
  }
  
  window.addEventListener("DOMContentLoaded", typeLoop);x
  



  const container = document.getElementById("anomalibg");

  window.addEventListener("wheel", function(e) {
    if (container.scrollTop + container.clientHeight < container.scrollHeight && e.deltaY > 0) {
      e.preventDefault(); 
      container.scrollTop += e.deltaY; 
    } else if (container.scrollTop > 0 && e.deltaY < 0) {
      e.preventDefault();
      container.scrollTop += e.deltaY;
    }
  }, { passive: false });

