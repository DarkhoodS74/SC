document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('orderPopup').style.display = 'flex';
    });
});

document.querySelectorAll('.close').forEach(span => {
    span.addEventListener('click', () => {
        document.getElementById('orderPopup').style.display = 'none';
        document.getElementById('paymentPopup').style.display = 'none';
    });
});

document.getElementById('paymentButton').addEventListener('click', () => {
    document.getElementById('orderPopup').style.display = 'none';
    document.getElementById('paymentPopup').style.display = 'flex';
});
