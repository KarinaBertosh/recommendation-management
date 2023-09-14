import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';
import { useTranslation } from 'react-i18next';

function Header(): JSX.Element {
  const [t] = useTranslation();
  const router = useNavigate();

  return (
    <div className="header" data-testid="header">
      <button type="button" className="btn btn-info" style={{ marginRight: '5px' }} onClick={() => router('')}>{t('button.sign_in')}</button>
      <button type="button" className="btn btn-info" onClick={() => router('')}>{t('button.sign_up')}</button>
    </div>
  );
}

export default Header;
