// ============================================
// FOLLOWING SEAS - COMPLETE JAVASCRIPT
// Replace ENTIRE contents of assets/app.js
// ============================================

// SMOOTH SCROLL FOR CONTACT LINK
document.addEventListener('click', (e) => {
  const contactLink = e.target.closest('a[href="#subscribe"]');
  if (!contactLink) return;
  
  const subscribeSection = document.querySelector('#subscribe');
  if (subscribeSection) {
    e.preventDefault();
    subscribeSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
});

// LIGHTBOX FUNCTIONALITY
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

// Add click listeners to all gallery items with lightbox
const galleryItems = document.querySelectorAll('[data-lightbox]');
galleryItems.forEach(item => {
  item.addEventListener('click', function() {
    const imgSrc = this.getAttribute('data-lightbox');
    const imgAlt = this.querySelector('img').getAttribute('alt');
    
    if (lightboxImg) {
      lightboxImg.src = imgSrc;
      lightboxImg.alt = imgAlt;
    }
    
    if (lightbox) {
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});

// Close lightbox when clicking X
if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

// Close lightbox when clicking outside image
if (lightbox) {
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
    closeLightbox();
  }
});

function closeLightbox() {
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}