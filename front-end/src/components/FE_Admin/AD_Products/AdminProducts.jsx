import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import axios from 'axios';
import { Toast } from 'primereact/toast';
import AdminNav from '../Components/AdminNav';
import { Col, Container, Row } from 'react-bootstrap';
import ModalAddProducts from '../Components/ModalAddProducts';
import URL from '../../../api/api';
import Swal from 'sweetalert2';

export default function AdminProducts() {
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [productToEdit, setProductToEdit] = useState(null);
    const toast = useRef(null);

    const showError = (e) => {
        toast.current.show({ severity: 'error', summary: 'ERROR', detail: e ? e : "Too many requests", life: 1000 });
    };

    const showSuccess = (e) => {
        toast.current.show({ severity: 'success', summary: 'SUCCESS', detail: e ? e : "Action successful", life: 1000 });
    };

    useEffect(() => {
        (async () => await LoadProducts())();
    }, []);

    async function LoadProducts() {
        const result = await axios.get(`${URL}/products`);
        setProducts(result.data);
    }

    const confirmDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Deleted cannot be restored!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(item);
            }
        });
    };

    async function deleteProduct(item) {
        try {
            await axios.delete(`${URL}/products/${item.id}`);
            setProducts(products.filter(p => p.id !== item.id));
            showSuccess('Delete successful');
        } catch (err) {
            showError(err.message);
        }
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const imageBodyTemplate = (rowData) => {
        return <img src={rowData.thumbnail} alt='Error' style={{ height: '50px', width: '50px' }} />;
    };

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    };

    const editProduct = (rowData) => {
        setProductToEdit(rowData);
        setShowModal(true);
    };

    const editBodyTemplate = (rowData) => {
        return (
            <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => editProduct(rowData)} />
        );
    };

    const deleteBodyTemplate = (rowData) => {
        return (
            <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => confirmDelete(rowData)} />
        );
    };

    const renderHeader = () => {
        return (
            <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                <span className="text-xl text-900 font-bold">Products</span>
                <Button label="Add products" icon="pi pi-plus" className="p-button-success" onClick={() => { setShowModal(true); setProductToEdit(null); }} style={{ marginLeft: '800px' }} />
            </div>
        );
    };

    const header = renderHeader();
    const footer = `In total there are ${products ? products.length : 0} products.`;

    return (
        <Container fluid className='wrapper'>
            <Toast ref={toast} />
            <Row>
                <Col lg={2} className='padding-0 d-xl-flex d-lg-none d-xs-none d-sm-none xs-none'>
                    <AdminNav page={'Products'} />
                </Col>
                <Col className='bg-content d-xl-10 d-md-12 d-xs-12'>
                    <div className="card">
                        <DataTable value={products} header={header} footer={footer} paginator rows={10} rowsPerPageOptions={[5, 10, 20]}>
                            <Column field="name" header="Name" />
                            <Column field="thumbnail" header="Image" body={imageBodyTemplate} />
                            <Column field="price" header="Price" body={priceBodyTemplate} />
                            <Column header="Edit" body={editBodyTemplate} />
                            <Column header="Delete" body={deleteBodyTemplate} />
                        </DataTable>
                    </div>
                </Col>
            </Row>
            <ModalAddProducts show={showModal} setShowModal={setShowModal} Load={LoadProducts} toast={toast} productToEdit={productToEdit} />
        </Container>
    );
}
