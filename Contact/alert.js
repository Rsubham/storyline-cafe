const form = document.getElementById('contact-form');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-popup');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
    }).then(() => {
        popup.classList.add('active'); 
        form.reset();
    }).catch(() => alert('⚠️ Something went wrong. Please try again.'));
});

closeBtn.addEventListener('click', () => popup.classList.remove('active'));