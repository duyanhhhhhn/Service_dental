import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import Swal from 'sweetalert2';
import URL from '../../../api/api';

export default function ModalAddNews({ show, setShowModal, Load, newstoEdit,toast }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, SetThumbnail] = useState('');
    const [content, setContent] = useState('');
    useEffect(() => {
        if (newstoEdit) {
            setTitle(newstoEdit.title);
            setDescription(newstoEdit.description);
            SetThumbnail(newstoEdit.thumbnail);
            setContent(newstoEdit.content);
        }
    }, [newstoEdit]);
    const showError = (e) => {
        toast.current.show({ severity: 'error', summary: 'ERROR', detail: e ? e : "Too many requests", life: 1000 });
    }

    const showSuccess = (e) => {
        toast.current.show({ severity: 'success', summary: 'SUCCESS', detail: e ? e : "Success", life: 1000 });
    }

    const resetForm = () => {
       setTitle();
        setDescription('');
        SetThumbnail('');
        setContent('');
    };
const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !thumbnail || !content) {
        Swal.fire({
            icon: 'warning',
            title: 'Warning',
            text: 'All fields are required',
        });
        return;
    }

    const formData = { title, description, thumbnail, content:content, status: 1 };

    try {
        if (newstoEdit) {
            await axios.put(`${URL}/news/${newstoEdit.id}`, formData);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Product updated successfully',
            });
            showSuccess('Product updated successfully');
        } else {
            const response = await axios.post(`${URL}/news`, formData);
            console.log(response.data);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Product added successfully',
            });
            showSuccess('Product added successfully');
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
        <>
            <Modal className='modal-md' show={show} onHide={() => { setShowModal(false); resetForm(); }} centered={true} fullscreen={'lg-down'} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>{newstoEdit ? 'Edit News' : 'Add News'}</Modal.Title>
                </Modal.Header>
                <Form encType='application/json' onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Row>
                            <Form.Group className="mb-3">
                                <Form.Label>Title *</Form.Label>
                                <InputText value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Name" style={{ minWidth: '100%' }} />
                            </Form.Group>
                        </Row>
                        <Row className='mt-4'>
                            <Form.Group>
                                <Form.Label>thumbnail *</Form.Label>
                                <InputText value={thumbnail} onChange={(e) => SetThumbnail(e.target.value)} placeholder='Image Path' style={{ minWidth: '100%' }} />
                            </Form.Group>
                        </Row>
                          <Row>
                            <Form.Group className="mb-3">
                                <Form.Label>description *</Form.Label>
                                <InputText value={description} onChange={(e) => setDescription(e.target.value)} placeholder="description" style={{ minWidth: '100%' }} />
                            </Form.Group>
                        </Row>
                       <Row className='mt-4'>
                            <Form.Group>
                                <Form.Label>Content *</Form.Label>
                                <InputText value={content} onChange={(e) => setContent(e.target.value)} placeholder='Content' style={{ minWidth: '100%', minHeight: '12rem' }} />
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
