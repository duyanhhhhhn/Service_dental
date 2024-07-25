import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import Swal from 'sweetalert2';
import axios from 'axios';
import URL from '../../../api/api';

export default function ModalAddNews({ show, setShowModal, Load, toast, newToEdit }) {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (newToEdit) {
            setTitle(newToEdit.title);
            setImage(newToEdit.thumbnail);
            setDescription(newToEdit.description);
            setContent(newToEdit.content);
        } else {
            resetForm();
        }
    }, [newToEdit]);

    const handleImageChange = (e) => {
        setImage(e.target.value);
    };

    const showError = (e) => {
        toast.current.show({ severity: 'error', summary: 'ERROR', detail: e ? e : "Too many requests", life: 1000 });
    };

    const showSuccess = (e) => {
        toast.current.show({ severity: 'success', summary: 'SUCCESS', detail: e ? e : "Success", life: 1000 });
    };

    const resetForm = () => {
        setTitle('');
        setImage('');
        setDescription('');
        setContent('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !image || !description || !content) {
            Swal.fire({
                icon: 'warning',
                title: 'Warning',
                text: 'All fields are required',
            });
            return;
        }

        const formData = { title: title, thumbnail: image, description: description, content: content };

        try {
            if (newToEdit) {
                await axios.put(`${URL}/news/${newToEdit.id}`, formData);
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'News updated successfully',
                });
                showSuccess('News updated successfully');
            } else {
                await axios.post(`${URL}/news`, formData);
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'News added successfully',
                });
                showSuccess('News added successfully');
            }
            setShowModal(false);
            Load();
            resetForm();
        } catch (error) {
            let errorMessage = 'Something went wrong!';
            if (error.response && error.response.data && error.response.data.message) {
                errorMessage = error.response.data.message;
            } else if (error.message) {
                errorMessage = error.message;
            }
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: errorMessage,
            });
            showError(errorMessage);
        }
    };

    return (
        <Modal className='modal-md' show={show} onHide={() => { setShowModal(false); resetForm(); }} centered fullscreen={'lg-down'} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>{newToEdit ? 'Edit News' : 'Add News'}</Modal.Title>
            </Modal.Header>
            <Form encType='application/json' onSubmit={handleSubmit}>
                <Modal.Body>
                    <Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Title *</Form.Label>
                            <InputText value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" style={{ minWidth: '100%' }} />
                        </Form.Group>
                    </Row>
                    <Row className='mt-4'>
                        <Form.Group>
                            <Form.Label>Image *</Form.Label>
                            <InputText value={image} onChange={handleImageChange} placeholder='Image Path' style={{ minWidth: '100%' }} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Description *</Form.Label>
                            <InputText value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" style={{ minWidth: '100%' }} />
                        </Form.Group>
                    </Row>
                    <Row className='mt-4'>
                        <Form.Group>
                            <Form.Label>Content *</Form.Label>
                            <InputTextarea value={content} onChange={(e) => setContent(e.target.value)} placeholder='Content' style={{ minWidth: '100%', minHeight: '12rem' }} />
                        </Form.Group>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type='submit'>
                        SAVE
                    </Button>
                    <Button variant="secondary" onClick={() => { setShowModal(false); resetForm(); }}>
                        CLOSE
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
