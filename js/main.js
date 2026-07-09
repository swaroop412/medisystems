/* ==========================================
   NELLORE MEDI SYSTEMS
   main.js
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       STICKY NAVBAR
    =============================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("shadow");

            navbar.style.padding = "10px 0";

        } else {

            navbar.classList.remove("shadow");

            navbar.style.padding = "15px 0";

        }

    });

    /* ===============================
       SMOOTH SCROLL
    =============================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

    /* ===============================
       ACTIVE NAVIGATION
    =============================== */

    const current = window.location.pathname.split("/").pop();

    document.querySelectorAll(".navbar .nav-link").forEach(link => {

        const href = link.getAttribute("href");

        if (href === current || (current === "" && href === "index.html")) {

            link.classList.add("active");

        }

    });

    /* ===============================
       COUNTER ANIMATION
    =============================== */

    const counters = document.querySelectorAll("[data-count]");

    counters.forEach(counter => {

        const update = () => {

            const target = Number(counter.dataset.count);

            let currentValue = Number(counter.innerText);

            const increment = target / 100;

            if (currentValue < target) {

                counter.innerText = Math.ceil(currentValue + increment);

                setTimeout(update, 20);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });

});

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const backBtn = document.createElement("button");

backBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

backBtn.className = "backToTop";

document.body.appendChild(backBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backBtn.classList.add("show");

    } else {

        backBtn.classList.remove("show");

    }

});

backBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

const progress = document.createElement("div");

progress.className = "progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const totalHeight =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progressHeight =

        (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressHeight + "%";

});

/* ==========================================
   FADE IN ON SCROLL
========================================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-up");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".service-card,.feature-box,.industry-card").forEach(el => {

    observer.observe(el);

});

/* ==========================================
   CONTACT FORM VALIDATION
========================================== */

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        const required = form.querySelectorAll("input, textarea");

        let valid = true;

        required.forEach(field => {

            if (field.value.trim() === "") {

                field.style.borderColor = "red";

                valid = false;

            } else {

                field.style.borderColor = "#ced4da";

            }

        });

        if (!valid) {

            e.preventDefault();

            alert("Please complete all required fields.");

        }

    });

}

/* ==========================================
   IMAGE HOVER EFFECT
========================================== */

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.03)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});

/* ==========================================
   FLOATING WHATSAPP BUTTON
========================================== */

const whatsapp = document.createElement("a");

whatsapp.href = "https://wa.me/919876543210"; // Replace with your WhatsApp number

whatsapp.target = "_blank";

whatsapp.className = "whatsappFloat";

whatsapp.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';

document.body.appendChild(whatsapp);

/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.remove();

        }, 500);

    }

});