// Перевірка завантаження скрипту та обробка форми
document.addEventListener('DOMContentLoaded', () => {
    console.log('Сайт LexGuard успішно завантажено!');

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Дякуємо! Ваша заявка прийнята. Наш юрист зв\'яжеться з вами найближчим часом.');
            form.reset();
        });
    }
});