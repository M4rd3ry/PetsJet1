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

document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Отключаем стандартную отправку формы

    const formData = new FormData(event.target);

    // Собираем данные из формы
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        messenger: formData.get('messenger'),
        route: formData.get('route'),
        comments: formData.get('comments')
    };

    // Отправляем данные в Telegram-бот
    const telegramBotToken = '7517099152:AAFrNoJT-BENa922VSLvHIB_gwmtveMXYuQ';
    const chatId = '793874940';
    const message = `
        📋 Новая заявка:
        🧑 Имя: ${data.name}
        ✉️ Email: ${data.email}
        📱 Телефон: ${data.phone}
        💬 Мессенджер: ${data.messenger}
        📍 Маршрут: ${data.route}
        📝 Комментарии: ${data.comments || 'Нет'}
    `;

    fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message })
    })
    .then((response) => {
        if (response.ok) {
            alert('Заявка успешно отправлена!');
            event.target.reset(); // Сбрасываем форму
        } else {
            alert('Ошибка при отправке заявки. Попробуйте позже.');
        }
    })
    .catch((error) => {
        console.error('Ошибка:', error);
        alert('Не удалось отправить заявку.');
    });
});

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}
