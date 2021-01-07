// Removing default behavior for forms
const { forms } = document;

for (const f of forms) {
  f.onsubmit = (e) => {
    e.preventDefault();
  };
}

// Initializing top dropdown
const drop = document.querySelector('.dropdown');
const links = document.querySelectorAll('.header-link');
for (let l=1; l<links.length; l++) {
  links[0].onclick = () => {
    drop.classList.add('active')
  }
  links[l].onmouseover = () => {
    drop.classList.remove('active')
  }
}

// Smooth scrolling
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

//Mobile menu rolling in and out
const mobAside = document.querySelector('.mobile-aside');
const burger = document.querySelector('.burger');
const close = document.getElementById('close-aside');

burger.onclick = () => {
  mobAside.classList.add('active');
  let nodes= document.querySelector('.top').children;
  for (let i=1; i<nodes.length; i++) {
    nodes[i].classList.add('hidden')
  }
}

close.onclick = () => {
  mobAside.classList.remove('active');
  let nodes= document.querySelector('.top').children;
  for (let i=1; i<nodes.length; i++) {
    nodes[i].classList.remove('hidden')
  }
}



