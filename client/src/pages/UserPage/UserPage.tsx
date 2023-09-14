import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.scss';

function UserPage() {
  const [t] = useTranslation();

  return (<div>{t('button.back')}</div>);
}

export default UserPage;
