document.addEventListener('DOMContentLoaded', () => {
    const coupon = document.getElementById('coupon');
    const closeBtn = document.getElementById('close-coupon');

    if (coupon && closeBtn) {
        setTimeout(() => {
            coupon.classList.remove('hidden'); // Показывает окно через 10 секунд
        }, 10000);

        closeBtn.addEventListener('click', () => {
            coupon.classList.add('hidden'); // Закрывает окно при клике
        });
    } else {
        console.error('Element not found: #coupon or #close-coupon');
    }
});
