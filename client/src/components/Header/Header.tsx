import React from 'react';
import './style.scss';
import { useTranslation } from 'react-i18next';
import { MyModal } from '../Modal/Modal';

function Header(): JSX.Element {
  const [t] = useTranslation();
  const [modalShow, setModalShow] = React.useState(false);
  const [nameModal, setNameModal] = React.useState<string | undefined>();

  const openLoginModal = () => {
    setModalShow(true);
    setNameModal('1');
  };

  const openRegModal = () => {
    setModalShow(true);
    setNameModal('2');
  };

  return (
    <div className="header" data-testid="header">
      <button type="button" className="btn btn-light" style={{ marginRight: '5px' }} onClick={() => openLoginModal()}>{t('button.signIn')}</button>
      <button type="button" className="btn btn-light" onClick={() => openRegModal()}>{t('button.signUp')}</button>
      <MyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        nameModal={nameModal}
      />
    </div>
  );
}

export default Header;
