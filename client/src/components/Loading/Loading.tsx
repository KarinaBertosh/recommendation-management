import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.scss';

function Loading(): JSX.Element {
  const [t] = useTranslation();
  return (
    <div data-testid="loading">
      <div className="spinner-grow text-primary margin-top" role="status">{t('hello')}</div>
    </div>
  );
}

export default Loading;
