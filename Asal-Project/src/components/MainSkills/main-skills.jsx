import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import './main-skills.css';

const MainSkills = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <div className="Skills">
      <h1>{t('skills.title')}</h1>
      <p>{t('skills.html')}</p>
      <div id="block-90">{t('skills.percent.90')}</div>
      <div id="percent-90"></div>
      <br />
      <br />
      <p>{t('skills.css')}</p>
      <div id="block-85">{t('skills.percent.85')}</div>
      <div id="percent-85"></div>
      <br />
      <br />
      <p>{t('skills.java')}</p>
      <div id="block-75">{t('skills.percent.75')}</div>
      <div id="percent-75"></div>
      <br />
      <br />
      <p>{t('skills.javascript')}</p>
      <div id="block-70">{t('skills.percent.70')}</div>
      <div id="percent-70"></div>
      <br />
      <br />
      <p>{t('skills.androidStudio')}</p>
      <div id="block-60">{t('skills.percent.60')}</div>
      <div id="percent-60"></div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default MainSkills;
