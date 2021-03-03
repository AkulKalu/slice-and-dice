let titleBar = document.getElementById('title-bar');
let navMenu = document.getElementById('nav-menu');
let menuIsopen = false;

titleBar.onclick = () => {
    if(window.innerWidth < 600) {
        if(menuIsopen) {
            navMenu.classList.remove('nav-open');
            menuIsopen = false;
        }else {
            navMenu.classList.add('nav-open');
            menuIsopen = true;
        }   
    }
}