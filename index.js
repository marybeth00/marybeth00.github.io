document.addEventListener('DOMContentLoaded', () => {
    const quantityInputs = document.querySelectorAll('input[type="number"]');
    const totalDisplay = document.querySelector('.order-summary p:nth-child(1)');
    const cashInput = document.querySelector('.order-summary input[type="number"]');
    const changeDisplay = document.querySelector('.order-summary p:nth-child(3)');

    quantityInputs.forEach(input => {
        input.addEventListener('input', calculateTotal);
    });

    cashInput.addEventListener('input', calculateChange);

    function calculateTotal() {
        let total = 0;
        quantityInputs.forEach(input => {
            const price = parseFloat(input.previousElementSibling.textContent);
            const quantity = parseInt(input.value) || 0;
            total += price * quantity;
        });
        totalDisplay.textContent = `Total: ${total.toFixed(2)}`;
        calculateChange();
    }

    function calculateChange() {
        const total = parseFloat(totalDisplay.textContent.replace('Total: ', ''));
        const cashTendered = parseFloat(cashInput.value) || 0;
        const change = cashTendered - total;
        changeDisplay.textContent = `Change: ${change.toFixed(2)}`;
    }
