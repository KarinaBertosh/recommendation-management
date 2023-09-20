import React from 'react';
import './style.scss';
import { useTranslation } from 'react-i18next';
import { DefaultCarousel } from '../../components/DefaultCarousel/DefaultCarousel';

export const AboutPage = () => {
  const [t] = useTranslation();

  return (
    <div className="content">
      <div className="landing">
        <p >{t('welcomePage.hello')}</p>
        <p>{t('welcomePage.description')}</p>
        <DefaultCarousel />
        <p>{t('welcomePage.auth')}</p>
      </div>
    </div>
  );
};
