import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import axios from 'axios';
import { Toast } from 'primereact/toast';
import { Col, Container, Row } from 'react-bootstrap';
import AdminNav from '../Components/AdminNav';
import ModalAddNews from '../Components/ModalAddNews';
import Swal from 'sweetalert2';
import URL from '../../../api/api';

export default function AdminNews() {
    const [news, setNews] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newToEdit, setNewToEdit] = useState(null);
    const toast = useRef(null);
    const [newstoEdit, setNewstoEdit] = useState(null);
    useEffect(() => {
        (async () => await LoadNews())();
    }, []);

    async function LoadNews() {
            const result = await axios.get(`${URL}/news`);
            setNews(result.data);
    }


    const showError = (e) => {
        if (toast.current) {
            toast.current.show({ severity: 'error', summary: 'ERROR', detail: e ? e : "Too many requests", life: 1000 });
        }
    };

    const showSuccess = (e) => {
        if (toast.current) {
            toast.current.show({ severity: 'success', summary: 'SUCCESS', detail: e ? e : "Action successful", life: 1000 });
        }
    };

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
                deleteNew(item);
            }
        });
    };

    async function deleteNew(item) {
        try {
            await axios.delete(`${URL}/news/${item.id}`);
            setNews(news.filter(p => p.id !== item.id));
            showSuccess('Delete successful');
        } catch (err) {
            showError(err.message);
        }
    }
      const editNews = (rowData) => {
        setNewstoEdit(rowData);
        setShowModal(true);
    };

    const imageBodyTemplate = (rowData) => {
        return <img src={rowData.thumbnail} alt='Error' style={{ height: '50px', width: '50px' }} />;
    };

    const editNew = (rowData) => {
        setNewToEdit(rowData);
        setShowModal(true);
    };

    const editBodyTemplate = (rowData) => {
        return (
            <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => editNew(rowData)} />
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
                <span className="text-xl text-900 font-bold">News</span>
                <Button label="Add News" icon="pi pi-plus" className="p-button-success" onClick={() => { setShowModal(true); setNewToEdit(null); }} style={{ marginLeft: '800px' }} />
            </div>
        );
    };

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">News</span>
            <Button style={{ marginLeft: '100px' }}  onClick={() => { setShowModal(true); setNewstoEdit(null); }}>Add+</Button>
        </div>
    );

    const footer = `In total there are ${news ? news.length : 0} News.`;

    return (
        <Container fluid className='wrapper'>
           <Toast ref={toast} />
            <Row>
                <Col lg={2} className='padding-0 d-xl-flex d-lg-none d-xs-none d-sm-none xs-none'>
                    <AdminNav page={'News'} />
                </Col>
                <ModalAddNews show={showModal} setShowModal={setShowModal} Load={LoadNews} newstoEdit={newstoEdit} toast={toast} />
                <Col className='bg-content d-xl-10 d-md-12 d-xs-12'>
                    <div className="card">
                        <DataTable value={news} header={header} footer={footer} paginator rows={10} >
                            <Column field="title" header="Title" />
                            <Column field="thumbnail" header="Image" body={imageBodyTemplate} />
                            <Column field="description" header="Description" />
                            <Column field="content" header="Content" />
                            <Column header="Edit" body={editBodyTemplate} />
                            <Column header="Delete" body={deleteBodyTemplate} />
                        </DataTable>
                    </div>
                </Col>
            </Row>
            <ModalAddNews show={showModal} setShowModal={setShowModal} Load={LoadNews} toast={toast} newToEdit={newToEdit} />
        </Container>
    );
}
