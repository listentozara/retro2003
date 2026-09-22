const logoButton = document.getElementById('logoButton');
const overlay = document.getElementById('bioOverlay');
const closeButton = document.getElementById('closeButton');
const overlayClose = document.getElementById('overlayClose');

function openBio(){
  logoButton.classList.add('bloom');
  setTimeout(() => {
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');
    closeButton.focus();
  }, 180);
  setTimeout(() => logoButton.classList.remove('bloom'), 700);
}
function closeBio(){
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
  logoButton.focus();
}
logoButton.addEventListener('click', openBio);
closeButton.addEventListener('click', closeBio);
overlayClose.addEventListener('click', closeBio);
document.addEventListener('keydown', e => { if(e.key === 'Escape' && overlay.classList.contains('open')) closeBio(); });
