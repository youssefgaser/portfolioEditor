// Select all elements with a data-key attribute for editing
const editableElements = document.querySelectorAll('[data-key]');

// Load saved content from localStorage on page load
editableElements.forEach((element) => {
  const key = element.getAttribute('data-key');
  const savedContent = localStorage.getItem(key);
  if (savedContent) {
    element.textContent = savedContent;
  }
});

// Save content to localStorage on button click
document.getElementById('saveAllBtn').addEventListener('click', () => {
  editableElements.forEach((element) => {
    const key = element.getAttribute('data-key');
    const content = element.textContent;
    localStorage.setItem(key, content);
  });
});



// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

// scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 405;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document
                    .querySelector("header nav  a[href*=" + id + "]")
                    .classList.add("active");
            });
            // active sections for animation on scroll
            sec.classList.add("show-animate");
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove("show-animate");
        }
    });

    // sticky header
    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");

    // animation footer on scroll
    let footer = document.querySelector("footer");

    // footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
    // footer.classList.toggle('show-animate', window.scrollY >= 100);

    // Calculate the distance from the bottom of the document
    let distanceFromBottom =
        document.documentElement.offsetHeight -
        (window.innerHeight + window.scrollY);

    // Check if the footer is within 100 pixels from the bottom
    if (distanceFromBottom <= 100) {
        footer.classList.add("show-animate");
    } else {
        footer.classList.remove("show-animate");
    }
};

// theme color
// Get the defult icon
const defultIcon = document.querySelector(".defult");

// Add click event listener
defultIcon.addEventListener("click", () => {
    // Change CSS variables for defult
    document.documentElement.style.setProperty("--bg-color", "#081b29");
    document.documentElement.style.setProperty("--second-bg-color", "#112e42");
    document.documentElement.style.setProperty("--text-color", "#ededed");
    document.documentElement.style.setProperty("--second-text-color", "#333");
    document.documentElement.style.setProperty("--third-text-color", "#ededed");
    document.documentElement.style.setProperty("--main-color", "#00abf0");
});

// Get the darkSkyBlue icon
const deepSkyBlueIcon = document.querySelector(".deepSkyBlue");

// Add click event listener
deepSkyBlueIcon.addEventListener("click", () => {
    // Change CSS variables for defult
    document.documentElement.style.setProperty("--bg-color", "#f8f8ff");
    document.documentElement.style.setProperty("--second-bg-color", "#e8e8e8");
    document.documentElement.style.setProperty("--text-color", "#000000");
    document.documentElement.style.setProperty("--second-text-color", "#333");
    document.documentElement.style.setProperty("--third-text-color", "#ededed");
    document.documentElement.style.setProperty("--main-color", "#00abf0");
});

// Get the darkMode icon
const darkModeIcon = document.querySelector(".darkMode");

// Add click event listener
darkModeIcon.addEventListener("click", () => {
    // Change CSS variables for dark mode
    document.documentElement.style.setProperty("--bg-color", "#121212");
    document.documentElement.style.setProperty("--second-bg-color", "#212121");
    document.documentElement.style.setProperty("--text-color", "#ffffff");
    document.documentElement.style.setProperty("--second-text-color", "#333");
    document.documentElement.style.setProperty("--third-text-color", "#ededed");
    document.documentElement.style.setProperty("--main-color", "#00a6ed");
});

// Get the blackColor icon
const blackIcon = document.querySelector(".black");

// Add click event listener
blackIcon.addEventListener("click", () => {
    // Change CSS variables for dark mode
    document.documentElement.style.setProperty("--bg-color", "#f8f8ff");
    document.documentElement.style.setProperty("--second-bg-color", "#e8e8e8");
    document.documentElement.style.setProperty("--text-color", "#000000");
    document.documentElement.style.setProperty("--second-text-color", "#333");
    document.documentElement.style.setProperty("--third-text-color", "#ededed");
    document.documentElement.style.setProperty("--main-color", "#000000");
});

// Get the greenAndWhite icon
const greenAndWhiteIcon = document.querySelector(".greenAndWhite");

// Add click event listener
greenAndWhiteIcon.addEventListener("click", () => {
    // Change CSS variables for green and white
    document.documentElement.style.setProperty("--bg-color", "#f0fff0");
    document.documentElement.style.setProperty("--second-bg-color", "#e0eee0");
    document.documentElement.style.setProperty("--text-color", "#000000");
    document.documentElement.style.setProperty("--second-text-color", "#333");
    document.documentElement.style.setProperty("--third-text-color", "#ededed");
    document.documentElement.style.setProperty("--main-color", "#008000");
});

// Get the redAndWhite icon
const redAndWhiteIcon = document.querySelector(".redAndWhite");

// Add click event listener
redAndWhiteIcon.addEventListener("click", () => {
    // Change CSS variables for red and white
    document.documentElement.style.setProperty("--bg-color", "#fff0f5");
    document.documentElement.style.setProperty("--second-bg-color", "#ffe4e1");
    document.documentElement.style.setProperty("--text-color", "#000000");
    document.documentElement.style.setProperty("--second-text-color", "#333");
    document.documentElement.style.setProperty("--third-text-color", "#ededed");
    document.documentElement.style.setProperty("--main-color", "#ff0000");
});

// Get the purpleAndWhite icon
const purpleAndWhiteIcon = document.querySelector(".purpleAndWhite");

// Add click event listener
purpleAndWhiteIcon.addEventListener("click", () => {
    // Change CSS variables for purple and white
    document.documentElement.style.setProperty("--bg-color", "#f8f8ff");
    document.documentElement.style.setProperty("--second-bg-color", "#e8e8e8");
    document.documentElement.style.setProperty("--text-color", "#000000");
    document.documentElement.style.setProperty("--second-text-color", "#333");
    document.documentElement.style.setProperty("--third-text-color", "#ededed");
    document.documentElement.style.setProperty("--main-color", "#800080");
});

// Get the orangeAndWhite icon
const orangeAndWhiteIcon = document.querySelector(".orangeAndWhite");

// Add click event listener
orangeAndWhiteIcon.addEventListener("click", () => {
    // Change CSS variables for orange and white
    document.documentElement.style.setProperty("--bg-color", "#fff8dc");
    document.documentElement.style.setProperty("--second-bg-color", "#ffe4b5");
    document.documentElement.style.setProperty("--text-color", "#000000");
    document.documentElement.style.setProperty("--second-text-color", "#333");
    document.documentElement.style.setProperty("--third-text-color", "#ededed");
    document.documentElement.style.setProperty("--main-color", "#ff8c00");
});

// Get the pinkAndWhite icon
const pinkAndWhiteIcon = document.querySelector(".pinkAndWhite");

// Add click event listener
pinkAndWhiteIcon.addEventListener("click", () => {
    // Change CSS variables for pink and white
    document.documentElement.style.setProperty("--bg-color", "#fff5ee");
    document.documentElement.style.setProperty("--second-bg-color", "#ffe4e1");
    document.documentElement.style.setProperty("--text-color", "#000000");
    document.documentElement.style.setProperty("--second-text-color", "#333");
    document.documentElement.style.setProperty("--third-text-color", "#ededed");
    document.documentElement.style.setProperty("--main-color", "#ff69b4");
});

// Get the brownAndWhite icon
const brownAndWhiteIcon = document.querySelector(".brownAndWhite");

// Add click event listener
brownAndWhiteIcon.addEventListener("click", () => {
    // Change CSS variables for brown and white
    document.documentElement.style.setProperty("--bg-color", "#f5f5dc");
    document.documentElement.style.setProperty("--second-bg-color", "#deb887");
    document.documentElement.style.setProperty("--text-color", "#000000");
    document.documentElement.style.setProperty("--second-text-color", "#333");
    document.documentElement.style.setProperty("--third-text-color", "#ededed");
    document.documentElement.style.setProperty("--main-color", "#a52a2a");
});

// Get the grayAndWhite icon
const grayAndWhiteIcon = document.querySelector(".grayAndWhite");

// Add click event listener
grayAndWhiteIcon.addEventListener("click", () => {
    // Change CSS variables for gray and white
    document.documentElement.style.setProperty("--bg-color", "#f5f5f5");
    document.documentElement.style.setProperty("--second-bg-color", "#dcdcdc");
    document.documentElement.style.setProperty("--text-color", "#000000");
    document.documentElement.style.setProperty("--second-text-color", "#333");
    document.documentElement.style.setProperty("--third-text-color", "#ededed");
    document.documentElement.style.setProperty("--main-color", "#808080");
});

// Read More Expandable
// document.querySelector(".about .btn-box").addEventListener("click", function () {
//     var textContainer = document.querySelector(".text-container");
//     var moreText = document.querySelector(".more-text");

//     textContainer.classList.toggle("expanded");

//     if (textContainer.classList.contains("expanded")) {
//         btnText.innerHTML = "Read Less";
//     } else {
//         btnText.innerHTML = "Read More";
//     }
// });

// Change Read More to Read Less
document.querySelector(".about .btn-box").addEventListener("click", function () {
        // Toggle the "expanded" class on the parent element
        document.querySelector(".text-container").classList.toggle("expanded");
        if (
            document.querySelector(".text-container").classList.contains("expanded")
        ) {
            $(".about .btn-box a.btn").html("Read Less");
        } else {
            $(".about .btn-box a.btn").html("Read More");
        }
    });

    // document.querySelector(".education a.click").addEventListener("click", function () {
    //     var content = document.querySelector(".content");
    //     var moreText = document.querySelector(".more-text");
    //     var btnText = document.querySelector(".education a.click");
    
    //     textContainer.classList.toggle("expanded");
    
    //     if (content.classList.contains("expanded")) {
    //         btnText.innerHTML = "See Less";
    //     } else {
    //         btnText.innerHTML = "See More";
    //     }
    // });

                                                // document.querySelector(".education a.click").addEventListener("click", function () {
                                                //     // Toggle the "expanded" class on the parent element
                                                //     document.querySelector(".education a.click").classList.toggle("expanded");
                                                //     if (
                                                //         document.querySelector(".education a.click").classList.contains("expanded")
                                                //     ) {
                                                //         $(".education a.click").text("See Less");
                                                //     } else {
                                                //         $(".education a.click").text("See More");
                                                //     }
                                                // });

    // JavaScript code

// Read More button functionality
// const readMoreBtns = document.querySelectorAll('.btn-box.btns .btn');
// readMoreBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     const parent = btn.closest('.text-container');
//     const textContent = parent.querySelector('.text-content');
//     const moreText = parent.querySelector('.more-text');

//     if (moreText.style.display === 'none' || moreText.style.display === '') {
//       moreText.style.display = 'inline';
//       btn.textContent = 'Read Less';
//     } else {
//       moreText.style.display = 'none';
//       btn.textContent = 'Read More';
//     }
//   });
// });

// See More link functionality
// const seeMoreLinks = document.querySelectorAll('.education-content .click');
// seeMoreLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     const parent = link.closest('.education-content');
//     const moreText = parent.querySelector('.more-text');

//     if (moreText.style.display === 'none' || moreText.style.display === '') {
//       moreText.style.display = 'inline';
//       link.textContent = 'See Less';
//     } else {
//       moreText.style.display = 'none';
//       link.textContent = 'See More';
//     }
//   });
// });

// // Theme color switcher functionality
// const themeIcons = document.querySelectorAll('.theme .themeContainer .themeIcon');
// themeIcons.forEach(icon => {
//   icon.addEventListener('click', () => {
//     const theme = icon.className.split(' ')[1];
//     document.documentElement.className = theme;
//   });
// });

// JavaScript code

// See More link functionality
// const seeMoreLinks = document.querySelectorAll('.education-content .click');
// seeMoreLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     const parent = link.closest('.education-content');
//     const moreText = parent.querySelector('.more-text');

//     if (moreText.style.display === 'none' || moreText.style.display === '') {
//       moreText.style.display = 'inline';
//       link.textContent = 'See Less';
//     } else {
//       moreText.style.display = 'none';
//       link.textContent = 'See More';
//     }
//   });
// });

                                        // document.querySelector(".education a.click").addEventListener("click", function () {
                                        //     // Toggle the "expanded" class on the parent element
                                        //     document.querySelector(".content").classList.toggle("expanded");
                                        //     if (
                                        //         document.querySelector(".content").classList.contains("expanded")
                                        //     ) {
                                        //         $(".education a.click").html("See Less");
                                        //     } else {
                                        //         $(".education a.click").html("See More");
                                        //     }
                                        // });

// JavaScript code

// Function to count words and add anchor tag
// function addAnchorTag() {
//     const paragraphs = document.querySelector('.content p');
  
//     paragraphs.forEach(paragraph => {
//       const text = paragraph.textContent;
//       const words = text.split(' ');
  
//       if (words.length > 17) {
//         const truncatedText = text.substring(0, 170) + '...';
//         const anchorTag = `<a class="click">See More</a>`;
//         paragraph.innerHTML = truncatedText + anchorTag;
//       }
//     });
//   }
  
//   // Call the function to add anchor tag
//   addAnchorTag();
  
// document.querySelector(".education a.click").addEventListener("click", function () {

// });

// $(document).ready(function() {
//     $(".education .click").on("click", function() {
//         var $content = $(this).closest('.content');
//         var $moreText = $content.find('.more-text');
        
//         $moreText.slideToggle(300);
        
//         if ($(this).text() === 'See More') {
//             $(this).text('See Less');
//         } else {
//             $(this).text('See More');
//         }
//     });
// });

// $(document).ready(function() {
//     $('.education .content p').each(function() {
//         var text = $(this).text();
//         var words = text.split(' ');
//         var wordCount = words.length;
//         console.log('Word count for element:', wordCount);

//     });
// });

// $(document).ready(function() {
//     $('.education .content p').each(function() {
//         var text = $(this).text();
//         var words = text.split(' ');

//         if (words.length > 17) {
//             var truncatedText = words.slice(0, 17).join(' ') + '...';
//             $(this).text(truncatedText);
//         }
//     });
// });

// $(document).ready(function() {
//     $('.education .content p').each(function() {
//         var text = $(this).text();
//         var words = text.split(' ');

//         if (words.length > 17) {
//             var truncatedText = words.slice(0, 17).join(' ') + '...';
//             var fullText = words.join(' ');

//             $(this).html(truncatedText + '<a href="#" class="see-more">See More</a>');

//             $(this).find('.see-more').click(function(e) {
//                 e.preventDefault();
//                 $(this).parent().html(fullText + '<a href="#" class="see-less">See Less</a>');
//             });

//             $(this).find('.see-less').click(function(e) {
//                 e.preventDefault();
//                 $(this).parent().html(truncatedText + '<a href="#" class="see-more">See More</a>');
//             });
//         }
//     });
// });

// $(document).ready(function() {
//     $('.education .content p').each(function() {
//         var text = $(this).text();
//         var words = text.split(' ');

//         if (words.length > 17) {
//             var truncatedText = words.slice(0, 17).join(' ') + '...';
//             var fullText = words.join(' ');

//             $(this).html(truncatedText + '<a class="click">See More</a>');

//             $(this).find('.see-more').click(function(e) {
//                 e.preventDefault();
//                 $(this).parent().html(fullText + '<a class="click">See Less</a>');
//                 $(this).parent().addClass('expanded');
//             });

//             $(this).find('.see-less').click(function(e) {
//                 e.preventDefault();
//                 $(this).parent().html(truncatedText + '<a class="click">See More</a>');
//                 $(this).parent().removeClass('expanded');
//             });
//         }
//     });
// });



$(document).ready(function() {
    $('.text-container p.editable').each(function() {
        var $this = $(this);
        
        // Function to truncate text
        function applyTruncation() {
            var fullText = $this.text().trim(); // Re-capture the full text after editing
            var truncatedText = fullText.split(' ').slice(0, 17).join(' ') + '...';

            // If the full text exceeds 17 words, truncate it
            if (fullText.split(' ').length > 17) {
                $this.html(truncatedText + ' <a class="click">See More</a>');
            } else {
                $this.html(fullText); // If less than 17 words, show full text without "See More"
            }
        }

        // Initial application of truncation
        applyTruncation();

        // Toggle on click
        $this.on('click', '.click', function(event) {
            event.preventDefault();
            var isExpanded = $(this).text() === 'See Less';
            
            if (isExpanded) {
                applyTruncation(); // Return to truncated view
            } else {
                var fullText = $this.text().trim();
                $this.html(fullText + ' <a class="click">See Less</a>'); // Show full text
            }
        });

        // Reapply truncation after editing is done (on blur)
        $this.on('blur', function() {
            applyTruncation();
        });
    });
});



$(document).ready(function () {
    $('.education .content').each(function () {
        var heading = $(this).find('h3');
        var paragraph = $(this).find('p');

        var fullHeading = heading.text();
        var fullText = paragraph.text();

        // Truncate heading if it exceeds 34 characters
        if (fullHeading.length > 34) {
            var truncatedHeading = fullHeading.slice(0, 34) + '...';
            heading.data('full-text', fullHeading);
            heading.data('truncated-text', truncatedHeading);
            heading.text(truncatedHeading); // Initialize truncated heading
        }

        // Truncate paragraph if it exceeds 150 characters
        if (fullText.length > 65) {
            var truncatedParagraph = fullText.slice(0, 65) + '...';
            paragraph.data('full-text', fullText);
            paragraph.data('truncated-text', truncatedParagraph);
            paragraph.html(truncatedParagraph + ' <a href="#" class="click">See More</a>');
        }
    });

    // Handle expand/collapse for heading and paragraph together
    $(document).on('click', '.education .content p .click', function (e) {
        e.preventDefault();
        var parentContent = $(this).closest('.content');
        var heading = parentContent.find('h3');
        var paragraph = parentContent.find('p');
        var link = $(this);

        parentContent.toggleClass('expanded');

        if (parentContent.hasClass('expanded')) {
            // Expand heading and paragraph
            heading.addClass('expanded');
            paragraph.addClass('expanded');
            heading.text(heading.data('full-text'));
            paragraph.html(paragraph.data('full-text') + ' <a href="#" class="click">See Less</a>');
        } else {
            // Collapse heading and paragraph
            heading.removeClass('expanded');
            paragraph.removeClass('expanded');
            heading.text(heading.data('truncated-text'));
            paragraph.html(paragraph.data('truncated-text') + ' <a href="#" class="click">See More</a>');
        }
    });
});









//   $(document).ready(function() {
//     console.log("heyy")
//   });


// document.querySelector(".education a.click").addEventListener("click", function () {
//     // Toggle the "expanded" class on the parent element
//     document.querySelector(".education a.click").classList.toggle("expanded");
//     if (
//         document.querySelector(".education a.click").classList.contains("expanded")
//     ) {
//         $(".education a.click").text("See Less");
//     } else {
//         $(".education a.click").text("See More");
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const editableHeadings = document.querySelectorAll(".editable-heading");
//   const saveAllButton = document.getElementById("save-all-button");

//   // Load saved content from local storage on page load
//   editableHeadings.forEach(heading => {
//       const key = heading.getAttribute("data-key");
//       const savedContent = localStorage.getItem(key);
//       if (savedContent) {
//           heading.textContent = savedContent;
//       }

//       // Add click event to make heading editable
//       heading.addEventListener("click", function () {
//           heading.setAttribute("contenteditable", "true");
//           heading.focus();
//           heading.classList.add("editing");

//           // Save changes on pressing Enter
//           heading.addEventListener("keydown", function (event) {
//               if (event.key === "Enter") {
//                   event.preventDefault();
//                   heading.blur();
//               }
//           });

//           // Remove editing on blur
//           heading.addEventListener("blur", function () {
//               heading.removeAttribute("contenteditable");
//               heading.classList.remove("editing");
//           });
//       });
//   });

//   // Save all headings to local storage when the "Save All" button is clicked
//   saveAllButton.addEventListener("click", function () {
//       editableHeadings.forEach(heading => {
//           const key = heading.getAttribute("data-key");
//           const content = heading.textContent;

//           // Save content to local storage
//           localStorage.setItem(key, content);
//       });
//       alert("All content saved successfully!");
//   });
// });

// Editor Form
// const modal = document.getElementById('modal');
// const editButton = document.getElementById('editButton');
// const closeModalButton = document.querySelector('.close');
// const contentForm = document.getElementById('contentForm');

// const userTitle = document.getElementById('userTitle');
// const userDescription = document.getElementById('userDescription');
// const aboutText = document.getElementById('aboutText');
// const featuresList = document.getElementById('featuresList');
// const contactInfo = document.getElementById('contactInfo');
// const contactEmail = document.getElementById('contactEmail');

// document.addEventListener('DOMContentLoaded', () => {
//     userTitle.innerText = localStorage.getItem('userTitle') || userTitle.innerText;
//     userDescription.innerText = localStorage.getItem('userDescription') || userDescription.innerText;
//     aboutText.innerText = localStorage.getItem('aboutText') || aboutText.innerText;
//     featuresList.innerHTML = (localStorage.getItem('featuresList') || featuresList.innerHTML)
//         .split(',').map(feature => `<li>${feature.trim()}</li>`).join('');
//     contactInfo.innerHTML = localStorage.getItem('contactInfo') || contactInfo.innerHTML;
//     contactEmail.href = `mailto:${localStorage.getItem('contactEmail') || "example@example.com"}`;
// });

// editButton.addEventListener('click', () => {
//     modal.style.display = 'flex';
//     document.getElementById('titleInput').value = userTitle.innerText;
//     document.getElementById('descriptionInput').value = userDescription.innerText;
//     document.getElementById('aboutInput').value = aboutText.innerText;
//     document.getElementById('featuresInput').value = Array.from(featuresList.querySelectorAll('li')).map(li => li.innerText).join(', ');
//     document.getElementById('contactInput').value = contactInfo.innerText;
// });

// closeModalButton.addEventListener('click', () => {
//     modal.style.display = 'none';
// });

// window.addEventListener('click', (event) => {
//     if (event.target === modal) {
//         modal.style.display = 'none';
//     }
// });

// contentForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const newTitle = document.getElementById('titleInput').value;
//     const newDescription = document.getElementById('descriptionInput').value;
//     const newAbout = document.getElementById('aboutInput').value;
//     const newFeatures = document.getElementById('featuresInput').value.split(',');
//     const newContact = document.getElementById('contactInput').value;

//     userTitle.innerText = newTitle;
//     userDescription.innerText = newDescription;
//     aboutText.innerText = newAbout;
//     featuresList.innerHTML = newFeatures.map(feature => `<li>${feature.trim()}</li>`).join('');
//     contactInfo.innerText = newContact;

//     localStorage.setItem('userTitle', newTitle);
//     localStorage.setItem('userDescription', newDescription);
//     localStorage.setItem('aboutText', newAbout);
//     localStorage.setItem('featuresList', newFeatures.join(', '));
//     localStorage.setItem('contactInfo', newContact);

//     modal.style.display = 'none';
// });

// // Editor Form
// function updatePercentage1(value) {
//     document.getElementById('percentage-display1').textContent = value + '%';
//   }

//   function updatePercentage2(value) {
//     document.getElementById('percentage-display2').textContent = value + '%';
//   }

const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

// Function to open the modal
function openModal() {
    modal.classList.add('active'); // Add the active class for transitions
    openModalBtn.classList.add('hidden'); // Hide the Edit button
}

// Function to close the modal
function closeModal() {
    modal.classList.remove('active'); // Remove the active class for transitions

    // Wait for the transition to complete before making the modal invisible
    setTimeout(() => {
        modal.style.visibility = 'hidden';
    }, 300); // Match the transition duration
}

// Event listener for the open button
openModalBtn.addEventListener('click', () => {
    modal.style.visibility = 'visible'; // Ensure modal is visible for the animation
    setTimeout(openModal, 10); // Add slight delay to trigger the transition
});

// Event listener for the close button
closeBtn.addEventListener('click', closeModal);

// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});


function updatePercentage1(value) {
    const softSkillDisplay = document.getElementById('hardSkillDisplay');
    softSkillDisplay.textContent = `${value}%`; // Update the display with the current slider value
}

// Initialize with the default value on page load
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('hardSkillPercentage');
    updatePercentage1(slider.value); // Set the initial value for the display
});



function updatePercentage2(value) {
    const softSkillDisplay = document.getElementById('softSkillDisplay');
    softSkillDisplay.textContent = `${value}%`; // Update the display with the current slider value
}

// Initialize with the default value on page load
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('softSkillPercentage');
    updatePercentage2(slider.value); // Set the initial value for the display
});

// Get the social media links and message container
const twitterLink = document.getElementById('twitterLink');
const linkedinLink = document.getElementById('linkedinLink');
const submitBtn = document.querySelector('.submit-btn');
const resetBtn = document.querySelector('#resetButton');
const messageContainer = document.getElementById('messageContainer');
const closeMessageBtn = document.getElementById('closeMessageBtn');

// Show the message when any of the social media links are clicked
twitterLink.addEventListener('click', function (e) {
  e.preventDefault();  // Prevent default link action
  messageContainer.style.display = 'flex';  // Show the message
});

linkedinLink.addEventListener('click', function (e) {
  e.preventDefault();  // Prevent default link action
  messageContainer.style.display = 'flex';  // Show the message
});

// Show the message when the submit button is clicked
submitBtn.addEventListener('click', function (e) {
  e.preventDefault();  // Prevent form submission
  messageContainer.style.display = 'flex';  // Show the message
});

// Show the message when the reset button is clicked
resetBtn.addEventListener('click', function (e) {
  e.preventDefault();  // Prevent reset
  messageContainer.style.display = 'flex';  // Show the message
});

// Close the message when the close button is clicked
closeMessageBtn.addEventListener('click', function (e) {
  e.preventDefault();  // Prevent default link action
  messageContainer.style.display = 'none';  // Hide the message container
});

// Get modal elements
const publishButton = document.getElementById('publish');
const confirmationModal = document.getElementById('confirmationModal');
const confirmPublish = document.getElementById('confirmPublish');
const cancelPublish = document.getElementById('cancelPublish');

// Show confirmation modal with smooth animation
publishButton.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default action
    confirmationModal.classList.add('show'); // Add 'show' class to modal
});

// Close modal without publishing
cancelPublish.addEventListener('click', function () {
    confirmationModal.classList.remove('show'); // Remove 'show' class
});

// Confirm and proceed with publishing
confirmPublish.addEventListener('click', function () {
    confirmationModal.classList.remove('show'); // Hide modal smoothly
    // Add additional logic here if needed before navigating
});

