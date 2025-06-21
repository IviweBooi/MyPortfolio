function viewSideBar(){
    const menuIcon = document.querySelector('#menu-icon');
    const crossIcon = document.querySelector('#cross-icon');
    const sideBar = document.querySelector('#sideBar');

    if (menuIcon.style.display == 'flex'){
        sideBar.style.display = 'flex';
        menuIcon.style.display = 'none';
        crossIcon.style.display = 'flex';
    }else{
        sideBar.style.display = 'none';
        menuIcon.style.display = 'flex';
        crossIcon.style.display = 'none';
    }
}


const hoverTarget = document.querySelector('#projects-dd');
const hiddenElement = document.querySelector('#projects-dropdown');

function fadeIn(element) {
    element.style.display = 'flex'; // Show the element
    let opacity = 0;
    element.style.opacity = opacity;

    const interval = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.1; // Increase opacity
            element.style.opacity = opacity;
        } else {
            clearInterval(interval); // Stop when fully visible
        }
    }, 50); // Adjust speed of fade in
}

function fadeOut(element) {
    let opacity = 1;
    element.style.opacity = opacity;

    const interval = setInterval(() => {
        if (opacity > 0) {
            opacity -= 0.1; // Decrease opacity
            element.style.opacity = opacity;
        } else {
            element.style.display = 'none'; // Hide when fully transparent
            clearInterval(interval); // Stop when fully hidden
        }
    }, 50); // Adjust speed of fade out
}

hoverTarget.addEventListener('mouseenter', () => {
    fadeIn(hiddenElement); // Show the element with fade in
});

hiddenElement.addEventListener('mouseenter', () => {
hiddenElement.style.display = 'flex'; // Show the element
});

hiddenElement.addEventListener('mouseleave', () => {
hiddenElement.style.display = 'none'; // Hide the element
});