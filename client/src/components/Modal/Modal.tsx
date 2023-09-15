import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from 'react-i18next';

type IProps = {
  show: boolean;
  onHide: () => void;
  nameModal: string | undefined;
};

export function MyModal({ show, onHide, nameModal }: IProps) {
  const [t] = useTranslation();
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
          {nameModal === '1' ? t('button.signIn') : t('button.signUp')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{t('modal.email')}</Form.Label>
            <Form.Control type="email" placeholder={`${t('modal.email')}`} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>{t('modal.password')}</Form.Label>
            <Form.Control type="password" placeholder={`${t('modal.password')}`} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label={`${t('modal.saveData')}`} />
          </Form.Group>
          <Button variant="primary" type="submit">
            {t('button.submit')}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
