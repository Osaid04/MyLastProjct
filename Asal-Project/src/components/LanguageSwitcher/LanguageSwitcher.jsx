import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css'; // Import CSS file

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => handleChangeLanguage('en')} className="lang-button">English</button>
      <button onClick={() => handleChangeLanguage('ar')} className="lang-button">Arabic</button>
    </div>
  );
};

export default LanguageSwitcher;
