/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */


//Functions
/**
 * Start Helper Functions
 */

function inViewport(element) {

    // Get the elements position relative to the viewport

    var bb = element.getBoundingClientRect();

    // Check if the element is outside the viewport
    // Then invert the returned value because you want to know the opposite

    return !(bb.top > innerHeight || bb.bottom < 0);

}

/**
 * End Helper Functions
 */


// Build the nav
/**
 * 1. Get all sections from landing page
 * 2. Create nav clickable list
 * 3. Add Scroll to
 * 4. Add Active section
 * 5. Automatically update nav
 */

var sections = document.getElementsByTagName("section");
for (let section of sections) {
    const sectionId = section.id;
    const sectionDataNav = section.getAttribute("data-nav");
    let li = document.createElement("li");

    li.innerHTML = `
                    <a class="menu__link" href="#${sectionId}">${sectionDataNav}</a>
                `;

    // Scroll to anchor ID using scrollTO event
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Listen for the scroll event
    document.addEventListener('scroll', event => {

        // Check the viewport status

        if (inViewport(section)) {
            // Add class 'active' to section when near top of viewport
            section.classList.add("your-active-class");

        } else {
            section.classList.remove("your-active-class");

        }

    })

    document.getElementById("navbar__list").appendChild(li);
    console.log(li);
}

/**
 * End Build the nav
 * End Scroll to
 * End Active section
 */