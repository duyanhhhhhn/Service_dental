import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import Swal from 'sweetalert2';
import URL from '../../../api/api';

export default function ModalAddProducts({ show, setShowModal, Load, toast, productToEdit }) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (productToEdit) {
            setName(productToEdit.name);
            setImage(productToEdit.thumbnail);
            setPrice(productToEdit.price);
            setDescription(productToEdit.description);
        }
    }, [productToEdit]);

    const handleImageChange = (e) => {
        setImage(e.target.value);
    };

    const showError = (e) => {
        toast.current.show({ severity: 'error', summary: 'ERROR', detail: e ? e : "Too many requests", life: 1000 });
    }

    const showSuccess = (e) => {
        toast.current.show({ severity: 'success', summary: 'SUCCESS', detail: e ? e : "Success", life: 1000 });
    }

    const resetForm = () => {
        setName('');
        setImage('');
        setPrice('');
        setDescription('');
    };
const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !image || !price || !description) {
        Swal.fire({
            icon: 'warning',
            title: 'Warning',
            text: 'All fields are required',
        });
        return;
    }
    const formData = {name,thumbnail:image,price, type_id:1,status:1,description}
    try {
        if (productToEdit) {
            const response = await axios.put(`${URL}/products/${productToEdit.id}`, formData);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Product updated successfully',
            });
            showSuccess('Product updated successfully');
        } else {
            const response = await axios.post(`${URL}/products`, formData);
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
                    <Modal.Title>{productToEdit ? 'Edit Product' : 'Add Product'}</Modal.Title>
                </Modal.Header>
                <Form encType='application/json' onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Row>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <InputText value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" style={{ minWidth: '100%' }} />
                            </Form.Group>
                        </Row>
                        <Row className='mt-4'>
                            <Form.Group>
                                <Form.Label>Image</Form.Label>
                                <Form.Control value={image} onChange={handleImageChange} placeholder='Path Image' />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Price</Form.Label>
                                    <InputText value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" style={{ minWidth: '100%' }} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <InputText value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" style={{ minWidth: '100%' }} />
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
