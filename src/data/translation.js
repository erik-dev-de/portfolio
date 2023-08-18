import i18next from 'i18next';

const promise = new Promise((resolve) => {
    document.addEventListener('DOMContentLoaded', () => {
        i18next.init({
            lng: 'en',
            fallbackLng: 'en',
            resources: {
                en: {
                    translation: require('../locales/en.json'),
                },
                de: {
                    translation: require('../locales/de.json'),
                },
            },
        }, resolve);
    });
});

function toggleLanguage() {
    const currentLang = i18next.language;
    const newLang = currentLang === 'en' ? 'de' : 'en';
    i18next.changeLanguage(newLang).then(() => {
        document.getElementById('hero-title').innerHTML = i18next.t('heroTitle');
        document.getElementById('hero-title-two').innerHTML = i18next.t('heroTitleTwo');
        document.getElementById('swap-language').innerHTML = i18next.t('swapLanguage');
        document.getElementById('know-more-button').innerHTML = i18next.t('knowMoreButton');
        document.getElementById('about-me-header').innerHTML = i18next.t('aboutMeHeader');
        document.getElementById('about-me-info').innerHTML = i18next.t('aboutMeInfo');
        document.getElementById('about-me-extra-info').innerHTML = i18next.t('aboutMeExtraInfo');
    }); 
}

document.getElementById('language-toggle').addEventListener('click', toggleLanguage);

promise.then(() => {
    document.getElementById('hero-title').innerHTML = i18next.t('heroTitle');
    document.getElementById('hero-title-two').innerHTML = i18next.t('heroTitleTwo');
    document.getElementById('swap-language').innerHTML = i18next.t('swapLanguage');
    document.getElementById('know-more-button').innerHTML = i18next.t('knowMoreButton');
    document.getElementById('about-me-header').innerHTML = i18next.t('aboutMeHeader');
    document.getElementById('about-me-info').innerHTML = i18next.t('aboutMeInfo');
    document.getElementById('about-me-extra-info').innerHTML = i18next.t('aboutMeExtraInfo');
    document.getElementById('view-resume').innerHTML = i18next.t('viewResume');

});
