let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top =  window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
} 

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        }
    });
});

document.getElementById("contact").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Display the confirmation message
    document.getElementById("confirmation-message").style.display = "block";

    // Optionally clear the form fields
    this.reset();

    // Hide the message after 3 seconds
    setTimeout(() => {
        document.getElementById("confirmation-message").style.display = "none";
    }, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".wrapper");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let index = 0;
    const items = document.querySelectorAll(".project-item");
    const totalItems = items.length;

    function updateSlide() {
        wrapper.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
        if (index < totalItems - 1) {
            index++;
            updateSlide();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
            updateSlide();
        }
    });

    window.addEventListener("resize", updateSlide);
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = form.querySelector("input[name='name']");
    const emailInput = form.querySelector("input[name='email']");
    const phoneInput = form.querySelector("input[name='phone']");
    const subjectInput = form.querySelector("input[placeholder='Subject']");
    const messageInput = form.querySelector("textarea[name='message']");
    const confirmationMessage = document.getElementById("confirmation-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Validate inputs
        if (!nameInput.value.trim()) {
            alert("Please enter your full name.");
            nameInput.focus();
            return;
        }

        if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            return;
        }

        if (!phoneInput.value.trim() || isNaN(phoneInput.value) || phoneInput.value.length < 10) {
            alert("Please enter a valid phone number (at least 10 digits).");
            phoneInput.focus();
            return;
        }

        if (!subjectInput.value.trim()) {
            alert("Please enter a subject.");
            subjectInput.focus();
            return;
        }

        if (!messageInput.value.trim()) {
            alert("Please enter your message.");
            messageInput.focus();
            return;
        }

        // Show confirmation message
        confirmationMessage.style.display = "block";
        confirmationMessage.textContent = "Message sent successfully! I will get back to you soon.";

        // Optionally clear the form
        form.reset();
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});



document.getElementById("contact").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Display the confirmation message
    document.getElementById("confirmation-message").style.display = "block";

    // Optionally clear the form fields
    this.reset();

    // Hide the message after 3 seconds
    setTimeout(() => {
        document.getElementById("confirmation-message").style.display = "none";
    }, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".wrapper");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let index = 0;
    const items = document.querySelectorAll(".project-item");
    const totalItems = items.length;

    function updateSlide() {
        wrapper.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
        if (index < totalItems - 1) {
            index++;
            updateSlide();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
            updateSlide();
        }
    });

    window.addEventListener("resize", updateSlide);
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = form.querySelector("input[name='name']");
    const emailInput = form.querySelector("input[name='email']");
    const phoneInput = form.querySelector("input[name='phone']");
    const subjectInput = form.querySelector("input[placeholder='Subject']");
    const messageInput = form.querySelector("textarea[name='message']");
    const confirmationMessage = document.getElementById("confirmation-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Validate inputs
        if (!nameInput.value.trim()) {
            alert("Please enter your full name.");
            nameInput.focus();
            return;
        }

        if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            return;
        }

        if (!phoneInput.value.trim() || isNaN(phoneInput.value) || phoneInput.value.length < 10) {
            alert("Please enter a valid phone number (at least 10 digits).");
            phoneInput.focus();
            return;
        }

        if (!subjectInput.value.trim()) {
            alert("Please enter a subject.");
            subjectInput.focus();
            return;
        }

        if (!messageInput.value.trim()) {
            alert("Please enter your message.");
            messageInput.focus();
            return;
        }

        // Show confirmation message
        confirmationMessage.style.display = "block";
        confirmationMessage.textContent = "Message sent successfully! I will get back to you soon.";

        // Optionally clear the form
        form.reset();
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});

