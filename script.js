const menuIcon= document.querySelector('#menu-icon');
const navLinks= document.querySelector('.nav-links');
//document → Represents your HTML document.
//querySelector() → Selects the first HTML element matching a CSS selector.

menuIcon.onclick  = () => {
    navLinks.classList.toggle('active');
}

//navLinks → Refers to your navigation element.
//.classList → Lets you work with the element's CSS classes.
//.toggle('active') → Removes the active class if it exists;
// otherwise, adds it.
//First click → Adds active.
//Second click → Removes active.T

const githuba=document.querySelector('.visit-btn');
githuba.onclick = () => {
    window.location.href = "https://github.com/DivyanshDevSharma07";
};
const githubb=document.querySelector('#githubb');
githubb.onclick = () => {
    window.location.href = "https://github.com/DivyanshDevSharma07";
};