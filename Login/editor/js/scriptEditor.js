// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 405;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav  a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');            
        }
    })

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    // footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
    // footer.classList.toggle('show-animate', window.scrollY >= 100);

        // Calculate the distance from the bottom of the document
        let distanceFromBottom = document.documentElement.offsetHeight - (window.innerHeight + window.scrollY);

        // Check if the footer is within 100 pixels from the bottom
        if (distanceFromBottom <= 100) {
            footer.classList.add('show-animate');
        } else {
            footer.classList.remove('show-animate');
        }
}


    // theme color
    // Get the defult icon
    const defultIcon = document.querySelector('.defult');

    // Add click event listener
    defultIcon.addEventListener('click', () => {
                // Change CSS variables for defult
        document.documentElement.style.setProperty('--bg-color', '#081b29');
        document.documentElement.style.setProperty('--second-bg-color', '#112e42');
        document.documentElement.style.setProperty('--text-color', '#ededed');
        document.documentElement.style.setProperty('--main-color', '#00abf0');
    });

    // Get the darkMode icon
    const darkModeIcon = document.querySelector('.darkMode');

    // Add click event listener
    darkModeIcon.addEventListener('click', () => {
        // Change CSS variables for dark mode
        document.documentElement.style.setProperty('--bg-color', '#121212');
        document.documentElement.style.setProperty('--second-bg-color', '#212121');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--main-color', '#00a6ed');
    });

    // Get the greenAndWhite icon
    const greenAndWhiteIcon = document.querySelector('.greenAndWhite');

    // Add click event listener
    greenAndWhiteIcon.addEventListener('click', () => {
                // Change CSS variables for green and white
        document.documentElement.style.setProperty('--bg-color', '#f0fff0');
        document.documentElement.style.setProperty('--second-bg-color', '#e0eee0');
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--main-color', '#008000');
    });

    // Get the redAndWhite icon
    const redAndWhiteIcon = document.querySelector('.redAndWhite');

    // Add click event listener
    redAndWhiteIcon.addEventListener('click', () => {
                // Change CSS variables for red and white
        document.documentElement.style.setProperty('--bg-color', '#fff0f5');
        document.documentElement.style.setProperty('--second-bg-color', '#ffe4e1');
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--main-color', '#ff0000');
    });

    // Get the purpleAndWhite icon
    const purpleAndWhiteIcon = document.querySelector('.purpleAndWhite');

    // Add click event listener
    purpleAndWhiteIcon.addEventListener('click', () => {
                // Change CSS variables for purple and white
        document.documentElement.style.setProperty('--bg-color', '#f8f8ff');
        document.documentElement.style.setProperty('--second-bg-color', '#e8e8e8');
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--main-color', '#800080');
    });

    // Get the orangeAndWhite icon
    const orangeAndWhiteIcon = document.querySelector('.orangeAndWhite');

    // Add click event listener
    orangeAndWhiteIcon.addEventListener('click', () => {
                // Change CSS variables for orange and white
        document.documentElement.style.setProperty('--bg-color', '#fff8dc');
        document.documentElement.style.setProperty('--second-bg-color', '#ffe4b5');
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--main-color', '#ff8c00');
    });

    // Get the pinkAndWhite icon
    const pinkAndWhiteIcon = document.querySelector('.pinkAndWhite');

    // Add click event listener
    pinkAndWhiteIcon.addEventListener('click', () => {
                // Change CSS variables for pink and white
        document.documentElement.style.setProperty('--bg-color', '#fff5ee');
        document.documentElement.style.setProperty('--second-bg-color', '#ffe4e1');
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--main-color', '#ff69b4');
    });

    // Get the brownAndWhite icon
    const brownAndWhiteIcon = document.querySelector('.brownAndWhite');

    // Add click event listener
    brownAndWhiteIcon.addEventListener('click', () => {
                // Change CSS variables for brown and white
        document.documentElement.style.setProperty('--bg-color', '#f5f5dc');
        document.documentElement.style.setProperty('--second-bg-color', '#deb887');
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--main-color', '#a52a2a');
    });

    // Get the grayAndWhite icon
    const grayAndWhiteIcon = document.querySelector('.grayAndWhite');

    // Add click event listener
    grayAndWhiteIcon.addEventListener('click', () => {
                // Change CSS variables for gray and white
        document.documentElement.style.setProperty('--bg-color', '#f5f5f5');
        document.documentElement.style.setProperty('--second-bg-color', '#dcdcdc');
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--main-color', '#808080');
    });



    // editor
     // Function to save content to local storage
     function saveContent() {
        const content = document.getElementById('editable-content').innerHTML; // Get the content
        localStorage.setItem('editableContent', content); // Save it to local storage
        alert('Content saved!');
    }

    // Function to load content from local storage
    function loadContent() {
        const savedContent = localStorage.getItem('editableContent'); // Get the saved content
        if (savedContent) {
            document.getElementById('editable-content').innerHTML = savedContent; // Set the content if it exists
            // alert('Content loaded!');
        } else {
            alert('No saved content found.');
        }
    }

    // Add event listeners to buttons
    document.getElementById('save-btn').addEventListener('click', saveContent);
    // document.getElementById('load-btn').addEventListener('click', loadContent);

    // Optionally load content when the page loads
    window.onload = loadContent;
