const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburgerMenu = document.getElementById("hamburgermenu");

hamburgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburgerMenu.classList.toggle('ri-close-large-line');
});

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]");
        hamburgerMenu.classList.toggle('ri-close-large-line');
    });
});

const scrollUp = () => {
    const scrollUpButton = document.getElementById("scroll-up");

    if (this.scrollY >= 250) {
        scrollUpButton.classList.remove("-bottom-1/2")
        scrollUpButton.classList.add("bottom-4")
    }else {
        scrollUpButton.classList.add("-bottom-1/2")
        scrollUpButton.classList.remove("bottom-4")
    }
};


window.addEventListener("scroll", scrollUp);


const scrollHeader = () => {
    const header = document.getElementById("navbar");

    if (this.scrollY >= 50) {
        header.classList.add("border-b", "border-yellow-500")
    }else {
      
        header.classList.remove("border-b", "border-yellow-500")
    }
};


window.addEventListener("scroll", scrollHeader);



const activeLink = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "home";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        console.log("a")

        if (this.scrollY >= sectionTop - 60) {
            current = section.getAttribute("id")
            console.log("a")
        };

    });

    navLinks.forEach(item => {
        item.classList.remove("active");
        if (item.href.includes(current)) {
            item.classList.add("active");
        };
    });   
};


window.addEventListener("scroll", activeLink);









const swiper = new Swiper('.swiper', {
   speed: 400,
   spaceBetween: 30,
   autoplay: {
    delay: 3000,
    disableOnInteraction: false
   },
  

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPreview: 1
        },
        768: {
            slidesPreview: 2
        },
        1024: {
            slidesPreview: 3
        },
    }
  
  });
  