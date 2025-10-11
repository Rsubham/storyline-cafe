// Get forms and popup
const tableForm = document.getElementById('table_form');
const roomForm = document.getElementById('room_form');
const eventForm = document.getElementById('event_form');
const popup = document.getElementById('popup');
const popupMessage = popup.querySelector('p'); 
const closeBtn = document.getElementById('close-popup');

function handleSubmit(form, message) {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 

        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
        }).then(() => {
            popupMessage.textContent = message; 
            popup.classList.add('active'); 
            form.reset();
        }).catch(() => alert('⚠️ Something went wrong. Please try again.'));
    });
}

handleSubmit(tableForm, "Thanks for booking a table. We'll contact you soon!");
handleSubmit(roomForm, "Thanks for reserving a room. We'll contact you soon!");
handleSubmit(eventForm, "Thanks for planning your event with us. We'll contact you soon!");

closeBtn.addEventListener('click', () => popup.classList.remove('active'));
