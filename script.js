document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); 
    const modalId = this.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
    }
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const rect = this.getBoundingClientRect();
    ripple.style.left = (e.clientX - rect.left) + 'px';
    ripple.style.top = (e.clientY - rect.top) + 'px';
    this.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 1000);
  });
});

document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    this.parentElement.parentElement.classList.remove('active');
  });
});

document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', function(e) {
    if (e.target === this) {
      modal.classList.remove('active');
    }
  });
});
