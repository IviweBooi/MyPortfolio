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

// projects dropdown
const dropdownTarget = document.querySelector('#projects-dd');
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


dropdownTarget.addEventListener('click', () => {
    if (hiddenElement.style.display === 'none' || hiddenElement.style.display === '') {
        fadeIn(hiddenElement); // Show the element with fade in
    } else {
        hiddenElement.style.display = 'none'; // Hide the element with fade out
    }
});

//help dropdown
const dropdownTarget2 = document.querySelector('#help-dd');
const hiddenElement2 = document.querySelector('#help-menu-dd');

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


dropdownTarget2.addEventListener('click', () => {
    if (hiddenElement2.style.display === 'none' || hiddenElement2.style.display === '') {
        fadeIn(hiddenElement2); // Show the element with fade in
    } else {
        hiddenElement2.style.display = 'none'; // Hide the element with fade out
    }
});




