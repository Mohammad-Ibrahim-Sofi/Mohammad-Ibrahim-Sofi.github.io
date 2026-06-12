// ==========================================
// LOADER
// ==========================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.transition = "all 1s ease";

    }, 1800);

});

// ==========================================
// CUSTOM CURSOR
// ==========================================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

// ==========================================
// CURSOR HOVER EFFECT
// ==========================================

const links = document.querySelectorAll("a");

links.forEach(link => {

    link.addEventListener("mouseenter", () => {

        cursor.style.width = "50px";
        cursor.style.height = "50px";

    });

    link.addEventListener("mouseleave", () => {

        cursor.style.width = "20px";
        cursor.style.height = "20px";

    });

});

// ==========================================
// SCROLL REVEAL
// ==========================================

const revealElements = document.querySelectorAll(
    "section, article, .project-card, blockquote"
);

function revealOnScroll() {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(60px)";

    el.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ==========================================
// MAGNETIC BUTTONS
// ==========================================

const buttons = document.querySelectorAll(
    ".hero-content a, .contact-links a"
);

buttons.forEach(button => {

    button.addEventListener("mousemove", (e) => {

        const rect = button.getBoundingClientRect();

        const x =
            e.clientX -
            rect.left -
            rect.width / 2;

        const y =
            e.clientY -
            rect.top -
            rect.height / 2;

        button.style.transform =
            `translate(${x * 0.2}px, ${y * 0.2}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translate(0px,0px)";

    });

});

// ==========================================
// NAVBAR HIDE / SHOW
// ==========================================

let lastScroll = 0;

const header =
    document.querySelector("header");

window.addEventListener("scroll", () => {

    const currentScroll =
        window.pageYOffset;

    if (currentScroll > lastScroll &&
        currentScroll > 100) {

        header.style.transform =
            "translateY(-100%)";

    } else {

        header.style.transform =
            "translateY(0)";

    }

    lastScroll = currentScroll;

});

// ==========================================
// ACTIVE NAVIGATION LINK
// ==========================================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});

// ==========================================
// HERO TEXT ANIMATION
// ==========================================

const heroTitle =
    document.querySelector(".hero-content h1");

if(heroTitle){

    const letters =
        heroTitle.textContent.split("");

    heroTitle.textContent = "";

    letters.forEach((letter,index)=>{

        const span =
            document.createElement("span");

        span.textContent = letter;

        span.style.opacity = "0";

        span.style.display = "inline-block";

        span.style.transform =
            "translateY(80px)";

        span.style.transition =
            ".6s ease";

        heroTitle.appendChild(span);

        setTimeout(()=>{

            span.style.opacity="1";

            span.style.transform=
                "translateY(0)";

        },50*index);

    });

}

// ==========================================
// PARALLAX HERO EFFECT
// ==========================================

window.addEventListener("mousemove",(e)=>{

    const hero =
        document.querySelector("#hero");

    if(!hero) return;

    const x =
        (window.innerWidth/2-e.clientX)
        /50;

    const y =
        (window.innerHeight/2-e.clientY)
        /50;

    hero.style.backgroundPosition =
        `${x}px ${y}px`;

});

// ==========================================
// SCROLL PROGRESS BAR
// ==========================================

const progressBar =
    document.createElement("div");

progressBar.id = "progressBar";

document.body.appendChild(progressBar);

window.addEventListener("scroll",()=>{

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (window.pageYOffset /
        totalHeight) * 100;

    progressBar.style.width =
        progress + "%";

});
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-content h1", {
    y: 120,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out"
});

gsap.from(".hero-content p", {
    y: 60,
    opacity: 0,
    duration: 1.2,
    delay: 0.3,
    ease: "power3.out"
});

gsap.from(".hero-content a", {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.5
});
gsap.utils.toArray("section h2").forEach(title => {

    gsap.from(title, {

        scrollTrigger: {
            trigger: title,
            start: "top 85%"
        },

        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"

    });

});
gsap.utils.toArray(".project-card").forEach(card => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        },

        y: 120,
        opacity: 0,
        duration: 1.2

    });

});
gsap.utils.toArray(".skills-grid article").forEach(skill => {

    gsap.from(skill, {

        scrollTrigger: {
            trigger: skill,
            start: "top 85%"
        },

        y: 80,
        opacity: 0,
        duration: 0.8

    });

});

gsap.to(".hero-bg", {

    y: 50,

    duration: 4,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

});
