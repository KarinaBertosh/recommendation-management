import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from 'react-i18next';
import { typeModal } from '../../utils/constants';
import axios from 'axios';

type IProps = {
  show: boolean;
  nameModal: string | undefined;
  onHide: () => void;
};
const baseUrl = 'http://localhost:5000/';

export const MyModal: React.FC<IProps> = (props): JSX.Element => {
  const { show, nameModal, onHide } = props;
  const [t] = useTranslation();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handlerEmail = (value: string) => setEmail(value);
  const handlerPassword = (value: string) => setPassword(value);

  const sendData = async () => {
    const getUserUrl = `${baseUrl}user`;
    console.log(1, getUserUrl);
    if (email && password) {
      const user =
        await axios
          .post(getUserUrl, { email, password })
          .then(data => console.log(data));

      console.log(15, user);
    }
  };


  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {nameModal === typeModal.login ? t('button.signIn') : t('button.signUp')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{t('modal.email')}</Form.Label>
            <Form.Control type="email" placeholder={`${t('modal.email')}`} onChange={(e) => handlerEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>{t('modal.password')}</Form.Label>
            <Form.Control type="password" placeholder={`${t('modal.password')}`} onChange={(e) => handlerPassword(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label={`${t('modal.saveData')}`} />
          </Form.Group>
        </Form>
        <Button variant="primary" type="submit" onClick={async () => await sendData()}>
          {t('button.submit')}
        </Button>
      </Modal.Body>
    </Modal>
  );
};
