// Пункти меню: прокручування до секцій
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Поп-апи
document.querySelectorAll('.orderBtn').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.getAttribute('data-product');
        openOrderForm(product);
    });
});

function openOrderForm(product) {
    const orderForm = document.getElementById('orderForm');
    const orderTitle = document.getElementById('orderTitle');
    const cost = document.getElementById('cost');

    if (product === 'book') {
        orderTitle.innerText = 'Замовити книгу';
        cost.innerText = `Вартість: 600 грн`;
    } else {
        orderTitle.innerText = 'Замовити електронну книгу';
        cost.innerText = `Вартість: 250 грн`;
    }

    orderForm.style.display = 'flex';
}

document.querySelectorAll('.closeBtn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('orderForm').style.display = 'none';
        document.getElementById('paymentForm').style.display = 'none';
    });
});

document.getElementById('orderDetails').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);

    // Send data to email (for the sake of demo, we can print it to console)
    console.log('Form data:', ...formData.entries());

    document.getElementById('orderForm').style.display = 'none';
    document.getElementById('paymentForm').style.display = 'flex';
});
