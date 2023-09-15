import React from 'react';
import { Container } from 'react-bootstrap';
import './NotFoundPage.scss';

import { useTranslation } from 'react-i18next';

function NotFoundPage() {
  const [t] = useTranslation();
  return (
    <Container className="not-found-page" data-testid="not-found-page">
      <h2>{t('error.error-page-text')}</h2>
    </Container>
  );
}

export default NotFoundPage;
