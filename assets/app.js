// Smooth scroll for contact link
document.addEventListener('click',(e)=>{
  const a=e.target.closest('a.contact-link');
  if(!a)return;
  const t=document.querySelector('#subscribe');
  if(t){
    e.preventDefault();
    t.scrollIntoView({behavior:'smooth',block:'start'});
  }
});

// Auto-load images from assets/img/ folder
const gallery = document.querySelector('.gallery');
if(gallery && gallery.id === 'gallery'){
  // GitHub raw content URL
  const imgFolder = 'https://raw.githubusercontent.com/JuliannaGulianna/following-seas-site/main/assets/img/';
  
  // List your image filenames here (update this array when you add images)
  const images = [
    'artwork1.jpg',
    'artwork2.jpg',
    'artwork3.jpg',
    'artwork4.jpg',
    'artwork5.jpg',
    'artwork6.jpg'
  ];
  
  gallery.innerHTML = '';
  
  images.forEach((img, idx) => {
    const tile = document.createElement('div');
    tile.className = 'tile portrait';
    tile.innerHTML = `<img src="${imgFolder}${img}" alt="Artwork ${idx+1}" loading="lazy">`;
    tile.onclick = () => openModal(`${imgFolder}${img}`);
    gallery.appendChild(tile);
  });
}

// Modal functions
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.modal-close');

function openModal(src) {
  modal.classList.add('active');
  modalImg.src = src;
}

if(closeBtn) {
  closeBtn.onclick = () => modal.classList.remove('active');
}

if(modal) {
  modal.onclick = (e) => {
    if(e.target === modal) modal.classList.remove('active');
  };
}
