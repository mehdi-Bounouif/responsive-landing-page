let icons = document.querySelector('.menuOpen')
let bars = document.querySelector('#bars');
let xmark = document.querySelector('#xmark');
let navlist = document.querySelector('.list');

icons.onclick = () => {
	bars.style.display = 'none';
	xmark.style.display = 'block';
	navlist.classList.toggle('open');
};
