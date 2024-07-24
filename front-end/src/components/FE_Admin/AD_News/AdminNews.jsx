import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import AdminNav from '../Components/AdminNav';
import ModalAddNews from '../Components/ModalAddNews';
import Swal from 'sweetalert2';
import URL from '../../../api/api';
import { Toast } from 'primereact/toast';

export default function AdminNews() {
    const [news, setNews] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const toast = useRef(null);
    const [newstoEdit, setNewstoEdit] = useState(null);
    useEffect(() => {
        (async () => await LoadNews())();
    }, []);

    async function LoadNews() {
        try {
            const result = await axios.get(`/news`);
            setNews(result.data);
        } catch (err) {
            showError(err.message);
        }
    }

    const imageBodyTemplate = (rowData) => {
        return <img src={rowData.thumbnail} alt={rowData.name} style={{ height: '50px', width: '50px' }} />;
    };
  

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
                deleteNews(item);
            }
        });
    };

    async function deleteNews(item) {
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

    const Edit = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => editNews(rowData)} />
            </React.Fragment>
        );
    };

    const Delete = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => confirmDelete(rowData)} />
            </React.Fragment>
        );
    };

    const contentBodyTemplate = (rowData) => {
        const maxLength = 30;
        const content = rowData.content;
        if (content.length > maxLength) {
            return content.substring(0, maxLength) + '...';
        }
        return content;
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
                        <DataTable value={news} header={header} footer={footer} tableStyle={{ minWidth: '60rem' }}>
                            <Column field="title" header="Name"></Column>
                            <Column field="thumbnail" header="Image" body={imageBodyTemplate}></Column>
                            <Column field="description" header="Description"></Column>
                            <Column field="content" header="Content" body={contentBodyTemplate}></Column>
                            <Column header="Edit" body={Edit}></Column>
                            <Column header="Delete" body={Delete}></Column>
                        </DataTable>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
