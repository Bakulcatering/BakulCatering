
const header = document.querySelector('.navbar-default');
const navElements1 = document.getElementById('me1');
const navElements2 = document.getElementById('me2');
const navElements3 = document.getElementById('me3');
// const navElements4 = document.getElementById('me4');
const navElements5 = document.getElementById('me5');
const navElements6 = document.getElementById('me6');
const navElements7 = document.getElementById('me7');


window.onscroll = function () {
    var top = window.scrollY;
    if (top >= 100) {
        header.classList.add('active');
        navElements1.classList.add('navElemChange');
        navElements2.classList.add('navElemChange');
        navElements3.classList.add('navElemChange');
        // navElements4.classList.add('navElemChange');
        navElements5.classList.add('navElemChange');
        navElements6.classList.add('navElemChange');
        navElements7.classList.add('navElemChange');

    }
    else {
        header.classList.remove('active');
        navElements1.classList.remove('navElemChange');
        navElements2.classList.remove('navElemChange');
        navElements3.classList.remove('navElemChange');
        // navElements4.classList.remove('navElemChange');
        navElements5.classList.remove('navElemChange');
        navElements6.classList.remove('navElemChange');
        navElements7.classList.remove('navElemChange');
    }
}