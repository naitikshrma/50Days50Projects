const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))


// ChatGPT version




// function toggleNav() {
    //var navMenu = document.getElementById('navMenu');
    //if(navMenu.style.right == '-100%') {
      //navMenu.style.right = '0';
      //document.querySelector('.circle').style.transform = 'rotate(90deg)';
    //} else {
     // navMenu.style.right = '-100%';
      //document.querySelector('.circle').style.transform = 'rotate(0deg)';
    //}
  //}
  