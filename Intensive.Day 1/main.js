const menuLinks = document.querySelectorAll('.header__menu-link');

menuLinks.forEach((link) => link.addEventListener('click', event  =>{
    event.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}));

const heroDots = document.querySelectorAll('.hero__dot');
const heroImage = document.querySelector('.hero__image');
const heroTitle = document.querySelector('.hero__title');
const heroSubtitle = document.querySelector('.hero__subtitle');
const titles = [
    'Разработано 2000+ приложений',
    'Бесплатные приложения',
    'Тысячи довольных клиентов'
];

const subtitles = [
    'Для вашего удобства мы разработали множество приложений для вашего бизнеса и команды, которые доступны в любое время суток',
    'К любому сервисному обслуживанию мы подключим советы по управлению компанией совершенно бесплатно',
    'Накопленный нами опыт позволяет предлагать клиентам обширный спектр качественных приложений и сервисов'
];

heroDots.forEach((dot, i) => dot.addEventListener('click', () => {
    heroDots.forEach(el => el.classList.remove('active'));
    dot.classList.add('active');
    heroImage.src = `assets/hero_${i + 1}.jpg`;
    heroTitle.textContent = titles[i];
    heroSubtitle.textContent = subtitles[i];
}));