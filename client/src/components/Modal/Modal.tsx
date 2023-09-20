import React, { useState } from 'react';
import { Form, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from 'react-i18next';
import { baseUrl, typeModal } from '../../utils/constants';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type IProps = {
  show: boolean;
  nameModal: string | undefined;
  onHide: () => void;
};

export const MyModal: React.FC<IProps> = (props): JSX.Element => {
  const [t] = useTranslation();
  const { show, nameModal, onHide } = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handlerEmail = (value: string) => setEmail(value);
  const handlerPassword = (value: string) => setPassword(value);

  const regUrl = `${baseUrl}user/reg`;
  const loginUrl = `${baseUrl}user/login`;

  const error = () => toast.error("Failed to send data. An error has occurred.", {
    position: toast.POSITION.TOP_LEFT
  });
  const success = () => toast.success("Success Notification !", {
    position: toast.POSITION.TOP_CENTER
  });

  const sendData = async () => {
    if (email && password) {
      try {
        setIsLoading(true);
        nameModal === typeModal.reg ? await axios.post(regUrl, { email, password }) : await axios.post(loginUrl, { email: email, password: password });
        success();
      }
      catch (e) {
        console.error(e);
        error();
      }
      finally {
        setIsLoading(false);
      }
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
        <Button variant="primary" type="submit" disabled={isLoading} onClick={sendData}>
          {t('button.submit')}
          {isLoading && <Spinner size="sm" />}
        </Button>
      </Modal.Body>
      <ToastContainer />
    </Modal>
  );
};
