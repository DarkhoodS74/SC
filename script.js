document.querySelectorAll('.popup-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetPopup = document.getElementById(this.dataset.target);
        targetPopup.style.display = 'flex';
    });
});

document.querySelectorAll('.close-popup').forEach(button => {
    button.addEventListener('click', function() {
        const popup = button.closest('.popup');
        popup.style.display = 'none';
    });
});

document.querySelectorAll('.order-button').forEach(button => {
    button.addEventListener('click', function(e) {
        const targetPopup = document.getElementById(this.dataset.target);
        targetPopup.style.display = 'flex';
    });
});
