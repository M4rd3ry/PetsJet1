document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('discount-popup');
    const closePopup = document.getElementById('close-popup');

    setTimeout(() => {
        popup.classList.remove('hidden');
    }, 10000); // Показываем через 10 секунд

    closePopup.addEventListener('click', () => {
        popup.classList.add('hidden');
    });
});
