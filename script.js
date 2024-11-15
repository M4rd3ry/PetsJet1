document.addEventListener('DOMContentLoaded', () => {
    // Проверка на существование гамбургера и навигации
    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');

    if (hamburger && navbar) {
        console.log('Гамбургер и навигация найдены');
        hamburger.addEventListener('click', () => {
            console.log('Гамбургер кликнут');
            navbar.classList.toggle('active'); // Переключаем класс "active" для отображения/скрытия меню
        });
        
    } else {
        console.error('Не удалось найти элементы: #hamburger или .navbar');
    }

    // Обработчик попапа
    const coupon = document.getElementById('coupon');
    const closeBtn = document.getElementById('close-coupon');
    
    if (coupon && closeBtn) {
        console.log('Попап и кнопка закрытия найдены');

        // Показываем попап через 10 секунд
        setTimeout(() => {
            console.log('Попап показан');
            coupon.classList.add('show');  // Добавляем класс для показа попапа
        }, 10000); // Показываем попап через 10 секунд

        closeBtn.addEventListener('click', () => {
            console.log('Попап закрыт');
            coupon.classList.remove('show');  // Убираем класс для скрытия попапа
        });
    } else {
        console.error('Не удалось найти элементы: #coupon или #close-coupon');
    }

    // Обработчик для отправки формы
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Отключаем стандартную отправку формы

            const formData = new FormData(event.target);

            // Проверяем, что поля не пустые
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const messenger = formData.get('messenger');
            const route = formData.get('route');
            const comments = formData.get('comments');

            if (!name || !email || !phone) {
                alert('Пожалуйста, заполните обязательные поля.');
                return;
            }

            const data = {
                name: name,
                email: email,
                phone: phone,
                messenger: messenger,
                route: route,
                comments: comments || 'Нет'
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
                📝 Комментарии: ${data.comments}
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
                console.error('Ошибка при отправке заявки:', error);
                alert('Не удалось отправить заявку. Проверьте ваше интернет-соединение.');
            });
        });
    }

    // Fade-in элементы на прокрутке
    const fadeInElements = document.querySelectorAll('.fade-in');
    if (fadeInElements.length) {
        let debounceTimer;
        window.addEventListener('scroll', () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                fadeInElements.forEach((element) => {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight) {
                        console.log('Fade-in triggered for:', element);
                        element.classList.add('visible');
                    }
                });
            }, 100);
        });
    }
});
