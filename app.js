 // Function to handle the smooth scrolling
function handleLinkClick(e) {
    e.preventDefault(); 
    const sectionId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // Close the dropdown menu on mobile after clicking a link
        if (window.innerWidth <= 768) {
            document.getElementById('dropdownContent').style.display = 'none';
        }
    }
}

// Add event listeners to both desktop and mobile navigation links
document.querySelectorAll('.navRight a, #dropdownContent a').forEach(link => {
    link.addEventListener('click', handleLinkClick);
});

// Toggle the dropdown menu on mobile
document.getElementById('toggleMenu').addEventListener('click', function() {
    var dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

 
  //anim

  document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.anim');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('show');
        }, index * 300);
    });
});

function scrollToSection(sectionId) {
    // Scroll to the section with the given ID
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });

    // Remove active class from all links
    document.querySelectorAll('.navRight a').forEach((link) => {
        link.classList.remove('active-link');
    });

    // Add active class to the clicked link
    document.getElementById(sectionId + 'Link').classList.add('active-link');
}

// career box
const career = document.querySelector('.career');
const h1Elements = document.querySelectorAll('h1');

function adjustCareerWidth() {
    let totalWidth = 0;
    h1Elements.forEach(h1 => {
        totalWidth = Math.max(totalWidth, h1.offsetWidth);
    });
    career.style.width = totalWidth + 'px';
}

adjustCareerWidth();

let currentIndex = 0;
const totalH1 = h1Elements.length;

function transitionToNextH1() {
    const currentH1 = h1Elements[currentIndex];
    const nextIndex = (currentIndex + 1) % totalH1;
    const nextH1 = h1Elements[nextIndex];

    currentH1.style.transition = 'filter 7s'; 
    currentH1.style.filter = 'blur(5px)';

    setTimeout(() => {
        career.innerHTML = '';
        career.appendChild(nextH1);
        adjustCareerWidth();
        currentH1.style.filter = 'blur(0)';
        currentIndex = nextIndex;
        career.style.transition = 'width 2s'; 
        adjustCareerWidth();
    }, 2000); 
}

transitionToNextH1();
setInterval(transitionToNextH1, 6000);

//DOWNLOAD CV
 
// VALIDATION FORM
function validateForm(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (name === "") {
        document.getElementById("nameError").style.display = "block";
    } else {
        document.getElementById("nameError").style.display = "none";
    }

    if (email === "") {
        document.getElementById("emailError").style.display = "block";
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    if (subject === "") {
        document.getElementById("subjectError").style.display = "block";
    } else {
        document.getElementById("subjectError").style.display = "none";
    }

    if (message === "") {
        document.getElementById("messageError").style.display = "block";
    } else {
        document.getElementById("messageError").style.display = "none";
    }

    if (name === "" || email === "" || subject === "" || message === "") {
         return false;
    }


}