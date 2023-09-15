import React from 'react';
import './style.scss';
import { MyModal } from '../../components/Modal/Modal';

function LandingPage() {
  const [modalShow, setModalShow] = React.useState(true);
  const nameModal = '1';

  return (
    <div className="content">
      <MyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        nameModal={nameModal}
      />
    </div>
  );
}

export default LandingPage;
