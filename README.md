# Portfolio-site

## Description

My portfolio site demonstrating my skills and services. Using this as a hub for all of my most notable web development accomplishments, I will be able to show prospective employers and partners my capabilities. I will also continue to use the portfolio site as a place to practice and hone unique development techniques (i.e. interactive elements, animations, color palettes, JavaScript applications, etc).

[![Portfolio video tour](/assets/media/images/Portfolio-home.png)](https://maxfrank13.github.io/Portfolio-site/)


## What's happening in the code

1. HTML
    - Head links (following title):
        - favicon of a folder/briefcase
        - font-awesome stylesheet for icons
        - main stylesheet - I prefer to set defaults within a main CSS file unless there are a lot of defaults to be made, rather than using a reset like normalize.css
    - Preloader
        - simple preloader icon used while the rest of the page loads
    - Header
        - nav bar that converts to fixed once scrolled past
        - banner image and introduction
    - Sections
        - About with image & contact info
        - Services detailing skills
        - Projects showing off notable accomplishments & first app
            - slider incorporated to reduce clutter
    - Footer & go-to-top link

2. CSS 
    - Variables
        - three colors and their shades; then grey-white-black
        - two font-families
        - general variables used throughout
    - Global styles
        - re-initialize any undesired defaults
        - scroll-behavior to smooth for cleaner UI
    - Main content
        - formatting and configuration
        - general styling for entire document
        - classes & properties initialized for use in JS
            - hide/show classes
            - slider-container uses `overflow: hidden` in conjuction with JS
    - Media queries
        - @ min-width to accomodate mobile-first
            - widths: 512px, 768px, 1024px
    - Animation
        - set keyframes for "pulse" animation

3. JavaScript
    - Preloader
        - add hide class on preloader element once page loads
    - Toggle links menu
        - using `.toggle()` to switch add/remove class
    - Fixed Nav and Go-to-Top scroll
        - hide/show fixed nav depending on how far the user has scrolled using the `pageYOffset` and `getBoundingClientRect()` methods
        - hide/show Go-to-Top link using similar technique
    - Smooth scroll with fixed nav
        - resetting default behavior of navigation links to scroll to a specific spot based on the state of the nav bar
        - after a navigation link has been clicked, remove links if in small viewport
    - Profile pic toggle
        - use `click` events to toggle hide-img class
    - Slider
        - set style of slides so that they are organized left-to-right & CSS hides the overflow
        - counter variable used in conjunction with prev & next buttons to keep track of slides
        - carousel function accesses `transform` style of each slide and positions based on counter variable
            - next/prev buttons are hidden if necessary

## What to work on

The video for the Virtual Kitchen is positioned awkwardly at certain screen widths. The content still plays and is visible but the general presentation is a little clunky. Playing around the the styles on that section would be the next step in cleaning up that area.

As of January 2022, the portfolio is generally lacking in content. Continuing to make web applications will obviously help in that process. However, I would also like to begin contributing to open-source projects. This will further demonstrate my development abilities to potential employers and partners while also showing a willingness to work on larger projects.