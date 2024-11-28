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
    document.documentElement.style.setProperty("--main-color", "#00a6ed");
});

// Get the greenAndWhite icon
const greenAndWhiteIcon = document.querySelector(".greenAndWhite");

// Add click event listener
greenAndWhiteIcon.addEventListener("click", () => {
    // Change CSS variables for green and white
    document.documentElement.style.setProperty("--bg-color", "#f0fff0");
    document.documentElement.style.setProperty("--second-bg-color", "#e0eee0");
    document.documentElement.style.setProperty("--text-color", "#000000");
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
    $('.education .content p').each(function() {

        var eduH3 = $(this).siblings("h3").text();
        var eduH3Words = eduH3.split(' ');

        var text = $(this).text();
        var words = text.split(' ');

        
        if (words.length > 17) {
            var truncatedText = words.slice(0, 17).join(' ') + '...';
            var fullText = words.join(' ');
            
            // $(this).attr('id', 'paragraph' + index);
            $(this).html(truncatedText + ' <a class="click">See More</a>');
            
            $(this).find('.click').click(function() {
                $(this).toggleClass("expanded");
                if ($(this).hasClass("expanded")) {
                    $(this).text("See Less");
                    $(this).parent().html(fullText + ' <a class="click expanded">See Less</a>');
                } else {
                    $(this).text("See More");
                    $(this).html(truncatedText + ' <a class="click">See More</a>');
                }
            });
        }

        if (eduH3.length > 34) {
            var truncatededuH3 = eduH3.slice(0, 34) + '...';
            var fulleduH3Words = eduH3Words.join(' ');
    
            $(this).siblings("h3").html(truncatededuH3);
    
            $(this).siblings('p .click').click(function() {
                $(this).toggleClass("expanded");
                if ($(this).hasClass("expanded")) {
                    $(this).html(fulleduH3Words);
                } else {

                }
            })
        }
    });
    
    // $('.education .content h3').each(function() {
    //     var text = $(this).text();
    //     var words = text.split(' ');
    //     console.log(text)
        
    //     if (text.length > 32) {
    //         //   var truncatedText = text.slice(0, 32) + '...';
    //     //   var fullText = words.join(' ');
    
    //     // $(this).html(truncatedText);

    //     // $(this).find('.click').click(function() {
    //     //     if ($(this).hasClass("expanded")) {
    //     //         $(this).html(fullText);
    //     //     } else {
    //     //         $(this).text("See More");
    //     //     }
    //     // })
    //     }
    //   });
});


//   $(document).ready(function() {
//     console.log("heyy")
//   });


// document.querySelector(".education a.click").addEventListener("click", function () {
//     // Toggle the "expanded" class on the parent element
//     document.querySelector(".education a.click").classList.toggle("expanded");
    // if (
    //     document.querySelector(".education a.click").classList.contains("expanded")
    // ) {
    //     $(".education a.click").text("See Less");
    // } else {
    //     $(".education a.click").text("See More");
    // }
// });