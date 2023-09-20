import React from 'react';
import './style.scss';
import { useTranslation } from 'react-i18next';
import { MyModal } from '../Modal/Modal';
import { typeModal } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';

function Header(): JSX.Element {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const [nameModal, setNameModal] = React.useState<string | undefined>();

  const openLoginModal = () => {
    setModalShow(true);
    setNameModal(typeModal.login);
  };

  const openRegModal = () => {
    setModalShow(true);
    setNameModal(typeModal.reg);
  };

  return (
    <div className="header" data-testid="header">
      <button type="button" className="btn btn-light" style={{ marginRight: '5px' }} onClick={() => openLoginModal()}>{t('button.signIn')}</button>
      <button type="button" className="btn btn-light" style={{ marginRight: '5px' }} onClick={() => openRegModal()}>{t('button.signUp')}</button>
      <button type="button" className="btn btn-light" style={{ marginRight: '5px' }} onClick={() => navigate('/about')}>{t('button.about')}</button>
      <button type="button" className="btn btn-light" onClick={() => navigate('/')}>{t('button.main')}</button>
      <MyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        nameModal={nameModal}
      />
    </div>
  );
}

export default Header;
