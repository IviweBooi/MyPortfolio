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


// image landing page animation
const image = document.querySelector('#image');

image.addEventListener('mousemove', (event) => {
    const rect = image.getBoundingClientRect();
    const x = event.clientX - rect.left; // X coordinate within the image
    const y = event.clientY - rect.top;  // Y coordinate within the image

    const xRotation = ((y / rect.height) - 0.5) * 30; // Calculate X rotation
    const yRotation = ((x / rect.width) - 0.5) * -30; // Calculate Y rotation

    image.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
});

image.addEventListener('mouseleave', () => {
    image.style.transform = 'rotateX(0deg) rotateY(0deg)'; // Reset rotation
});


// second page image
const imgElements = document.querySelectorAll('.img');

imgElements.forEach((imgElement) => {
    imgElement.addEventListener('mousemove', (event) => {
        const rect = imgElement.getBoundingClientRect();
        const mouseX = event.clientX - rect.left; // X coordinate within the image
        const mouseY = event.clientY - rect.top;  // Y coordinate within the image

        const xRotation = ((mouseY / rect.height) - 0.5) * 30; // Calculate X rotation
        const yRotation = ((mouseX / rect.width) - 0.5) * -30; // Calculate Y rotation

        imgElement.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    });

    imgElement.addEventListener('mouseleave', () => {
        imgElement.style.transform = 'rotateX(0deg) rotateY(0deg)'; // Reset rotation
    });
});



// second page

const buttons = document.querySelectorAll('.sec-page-btn');
    const contents = {
        skills: document.getElementById('skills-content'),
        projects: document.getElementById('projects-content'),
        about: document.getElementById('about-content')
};

function showContent(contentId) {
    // Hide all content
    for (const key in contents) {
        contents[key].style.display = 'none';
    }

    // Show the selected content
    contents[contentId].style.display = 'grid';

    // Remove active class from all buttons
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Set active class on the clicked button
    const activeButton = document.getElementById(contentId + '-btn');
    activeButton.classList.add('active');
}

// Event listeners for buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const contentId = button.id.replace('-btn', '');
        showContent(contentId);
    });
});

// Initialize the page with Skills content
showContent('skills');





