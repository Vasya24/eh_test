const { forms } = document;

for (const f of forms) {
  f.onsubmit = (e) => { e.preventDefault(); };
}
const drop = document.querySelector('.dropdown');
const dropLink = document.querySelector('.header-link:nth-child(1)');
dropLink.onmouseover = () => {
  drop.classList.add('active')
}
drop.onmouseleave = () => {
  drop.classList.remove('active')
}
