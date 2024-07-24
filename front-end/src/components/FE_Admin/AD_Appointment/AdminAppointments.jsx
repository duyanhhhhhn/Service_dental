import React, { useState, useEffect, useRef, useCallback } from 'react';
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

export default function AdminAppointment() {
    const [appointment, setAppointment] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const toast = useRef(null);

    const LoadAppointment = useCallback(async () => {
        try {
            const result = await axios.get(`/appointment`);
            setAppointment(result.data);
        } catch (err) {
            showError(err.message);
        }
    }, []);

    useEffect(() => {
        LoadAppointment();
    }, [LoadAppointment]);

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
                deleteAppointment(item);
            }
        });
    };

    async function deleteAppointment(item) {
        try {
            await axios.delete(`${URL}/appointment/${item.id}`);
            setAppointment(appointment.filter(p => p.id !== item.id));
            showSuccess('Delete successful');
        } catch (err) {
            showError(err.message);
        }
    }

    const Delete = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => confirmDelete(rowData)} />
            </React.Fragment>
        );
    };

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">Appointment</span>
        </div>
    );

    const footer = `In total there are ${appointment ? appointment.length : 0} Appointments.`;

    return (
        <Container fluid className='wrapper'>
            <Toast ref={toast} />
            <Row>
                <Col lg={2} className='padding-0 d-xl-flex d-lg-none d-xs-none d-sm-none xs-none'>
                    <AdminNav page={'Appointment'} />
                </Col>
                <ModalAddNews show={showModal} setShowModal={setShowModal} Load={LoadAppointment} />
                <Col className='bg-content d-xl-10 d-md-12 d-xs-12'>
                    <div className="card">
                        <DataTable value={appointment} header={header} footer={footer} tableStyle={{ minWidth: '60rem' }}>
                            <Column field="name" header="Name"></Column>
                            <Column field="address" header="Address"></Column>
                            <Column field="phone_number" header="phone"></Column>
                            <Column header="Delete" body={Delete}></Column>
                        </DataTable>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
