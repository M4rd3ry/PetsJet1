document.addEventListener('DOMContentLoaded', () => {
    const coupon = document.getElementById('coupon');
    const closeBtn = document.getElementById('close-coupon');

    setTimeout(() => {
        coupon.classList.remove('hidden'); // Показывает купон через 10 секунд
    }, 10000);

    closeBtn.addEventListener('click', () => {
        coupon.classList.add('hidden'); // Закрывает купон по клику
    });
});
