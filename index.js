document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            if (document.querySelector(this.getAttribute('href'))) {
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Theme toggle
    const themeToggle = document.querySelector('#theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
        });
    }

  
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); 
            const emailInput = document.querySelector('[type="email"]');
            if (!emailInput.value) {
                alert('Please enter a valid email address');
                emailInput.focus();
            } else {
                alert('Thank you for your submission!');
                form.reset(); 
            }
        });
    }

   
    document.querySelectorAll('.expand-section').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.previousElementSibling;
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                button.textContent = 'Less Details';
            } else {
                content.style.display = 'none';
                button.textContent = 'More Details';
            }
        });
    });
    
});
