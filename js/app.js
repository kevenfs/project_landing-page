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

/**
 * Define Global Variables
 * 
 */


/**
 * End Global Variables
 * Start Helper Functions
 * 
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
 * Begin Main Functions
 * 
 */

// build the nav
/**
 * 1. Get all sections from landing page
 * 2. Create nav clickable list
 * 3. Automatically update nav
 */



var sections = document.getElementsByTagName("section");
for (let section of sections) {
    const sectionId = section.id;
    const sectionDataNav = section.getAttribute("data-nav");
    let li = document.createElement("li");

    li.innerHTML = `
                    <a class="menu__link" href="#${sectionId}">${sectionDataNav}</a>
                `;

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



// Add class 'active' to section when near top of viewport



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active