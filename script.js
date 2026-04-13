document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Quantity Adjustment ---
    const plusButtons = document.querySelectorAll('.plus-btn');
    const minusButtons = document.querySelectorAll('.minus-btn');
    const quantityInputs = document.querySelectorAll('.quantity input');

    plusButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let currentValue = parseInt(quantityInputs[index].value);
            quantityInputs[index].value = currentValue + 1;
            updateTotal();
        });
    });

    minusButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let currentValue = parseInt(quantityInputs[index].value);
            if (currentValue > 1) {
                quantityInputs[index].value = currentValue - 1;
                updateTotal();
            }
        });
    });


    // --- 2. Delete Item ---
    const deleteButtons = document.querySelectorAll('.delete-btn');

    deleteButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const item = e.target.closest('.item');
            item.remove();
            updateTotal();
        });
    });


    // --- 3. Like Button (Heart) ---
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked');
        });
    });


    // --- 4. Calculate Total Price ---
    function updateTotal() {
        const items = document.querySelectorAll('.item');
        let total = 0;

        items.forEach(item => {
            const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
            const quantity = parseInt(item.querySelector('.quantity input').value);
            total += price * quantity;
        });

        document.querySelector('.total-price').textContent = `$${total.toFixed(2)}`;
    }

    // Initial calculation on page load
    updateTotal();
});