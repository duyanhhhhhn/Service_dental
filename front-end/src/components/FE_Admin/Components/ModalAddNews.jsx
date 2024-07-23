import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';

export default function ModalAddNews({ show, setShowModal,Load }) {
    return (
        <>
            <Modal className='modal-md' show={show} onHide={() => setShowModal(false)} centered={true} fullscreen={'lg-down'} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Add News</Modal.Title>
                </Modal.Header>
                <Form encType='multipart/form-data'>
                    <Modal.Body>
                        <Row>
                            <Form.Group className="mb-3">
                                <Form.Label>Name *</Form.Label>
                                <InputText placeholder="Name" style={{ minWidth: '100%' }} />
                            </Form.Group>
                        </Row>
                        <Row className='mt-4'>
                            <Form.Group>
                                <Form.Label>Images *</Form.Label>
                                <InputText placeholder='Image Path' style={{ minWidth: '100%' }} />
                            </Form.Group>
                        </Row>
                          <Row>
                            <Form.Group className="mb-3">
                                <Form.Label>description *</Form.Label>
                                <InputText placeholder="description" style={{ minWidth: '100%' }} />
                            </Form.Group>
                        </Row>
                       <Row className='mt-4'>
                            <Form.Group>
                                <Form.Label>Content *</Form.Label>
                                <InputTextarea placeholder='Content' style={{ minWidth: '100%', minHeight: '12rem' }} />
                            </Form.Group>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type='submit'>
                            SAVE
                        </Button>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            CLOSE
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}
