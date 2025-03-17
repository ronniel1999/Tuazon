// 🔥 Mobile Menu Toggle
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// 🔥 Typewriter Effect (Only Runs on Homepage)
document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelector(".typewriter-text");

    if (textElements) {
        const texts = ["DEVELOPER", "DESIGNER", "YOUTUBER"];
        let speed = 100;
        let textIndex = 0;
        let charIndex = 0;

        function typeWriter() {
            if (charIndex < texts[textIndex].length) {
                textElements.innerHTML += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, speed);
            } else {
                setTimeout(eraseText, 1000);
            }
        }

        function eraseText() {
            if (textElements.innerHTML.length > 0) {
                textElements.innerHTML = textElements.innerHTML.slice(0, -1);
                setTimeout(eraseText, 50);
            } else {
                textIndex = (textIndex + 1) % texts.length;
                charIndex = 0;
                setTimeout(typeWriter, 500);
            }
        }

        typeWriter();
    }
});

// 🔥 Smooth Scrolling for Navigation Links
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function (event) {
        if (this.getAttribute("href").startsWith("#")) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});

// 🔥 Highlight Active Page in Navbar
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nav-links a").forEach((link) => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

// 🔥 Contact Form Validation (For `contact.html`)
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.querySelector(".contact-form input[type='text']").value;
            const email = document.querySelector(".contact-form input[type='email']").value;
            const message = document.querySelector(".contact-form textarea").value;

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields!");
                return;
            }

            alert("Message sent successfully!");
            contactForm.reset();
        });
    }
});
