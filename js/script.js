// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // sticky navbar

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link (scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

document.getElementById('openPdfBtn').addEventListener('click', function() {
  const pdfUrl = '/CV-Himash.pdf';
  window.open(pdfUrl, '_blank');
});

// scroll reveal
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

// typed js

const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Mobile App Developer','Blogger'],
    typeSpeed: 150,
    backSpeed: 150,
    backDelay: 1000,
    loop: true
});

// Initialize EmailJS with your user ID
emailjs.init('oAtfcXYXsaZELxqnL'); // Replace with your EmailJS user ID

// Add event listener to the send button
document.getElementById('sendMessageBtn').addEventListener('click', function () {
    // Collect form data
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validate fields (optional but recommended)
    if (!fullName || !email || !message) {
        alert('Please fill in all required fields!');
        return;
    }

    // Prepare the email data
    const templateParams = {
        fullName,
        email,
        mobile,
        subject,
        message,
    };

    // Send email using EmailJS
    emailjs.send('service_8a0vrwt', 'template_ycygxz9', templateParams)
        .then(function (response) {
            alert('Message sent successfully! Thank you for contacting me.');
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('contact-form').reset(); // Clear the form
        }, function (error) {
            alert('Failed to send the message. Please try again.');
            console.error('FAILED...', error);
        });
});





