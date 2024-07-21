import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import axios from 'axios';
import { Col, Container, Row, Toast } from 'react-bootstrap';
import AdminNav from '../Components/AdminNav';

export default function AdminNews() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('/news').then(resp => setNews(resp.data));
    }, []);
    const imageBodyTemplate = (rowData) => {
        return <img src={rowData.thumbnail} alt={rowData.name} style={{height:'50px', width:'50px'}} />;
    };
    const statusBodyTemplate = (rowData) => {
        return (
            <Tag value={rowData.status === 1 ? 'Available' : 'Not Available'} severity={rowData.status === 1? 'success' : 'danger'} />
        );
    };
    const editNews = (rowData) => {
        console.log('Edit News', rowData);
    };

    const deleteNews = (rowData) => {
        console.log('Delete News', rowData);
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
                <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => deleteNews(rowData)} />
            </React.Fragment>
        );
    };

     const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">News</span>
            <Button style={{marginLeft:'100px'}}>Add+</Button>
        </div>
    );

    const footer = `In total there are ${news ? news.length : 0} News.`;

    return (
         <Container fluid className='wrapper'>
      <Row>
        <Col lg={2} className='padding-0 d-xl-flex d-lg-none d-xs-none d-sm-none xs-none'>
          <AdminNav page={'Products'} />
        </Col>
        <Col className='bg-content d-xl-10 d-md-12 d-xs-12'>
          <div className="card">
            <DataTable value={news} header={header} footer={footer} tableStyle={{ minWidth: '60rem' }}>
               <Column field="title" header="Name"></Column>
               <Column field="thumbnail" header="Image" body={imageBodyTemplate}></Column>
               <Column field="description" header="description"></Column>
               <Column field="status" header="Status" body={statusBodyTemplate}></Column>
               <Column header="Edit" body={Edit}></Column>
               <Column header="Delete" body={Delete}></Column>
           </DataTable>
          </div>
        </Col>
      </Row>
    </Container>
    );
}
