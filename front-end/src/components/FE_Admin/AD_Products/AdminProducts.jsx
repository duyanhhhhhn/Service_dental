import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import axios from 'axios';
import { Toast } from 'primereact/toast';
import AdminNav from '../Components/AdminNav';
import { Col, Container, Row } from 'react-bootstrap';

export default function AdminProducts() {
    const [products, setProducts] = useState([]);
    const toast = useRef(null);

    useEffect(() => {
        axios.get('products')
            .then(response => setProducts(response.data))
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const imageBodyTemplate = (rowData) => {
        return <img src={rowData.thumbnail} alt={rowData.name} style={{ height: '50px', width: '50px' }} />;
    };

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    };
    const statusBodyTemplate = (rowData) => {
        return (
            <Tag value={rowData.status === 1 ? 'Available' : 'Not Available'} severity={rowData.status === 1 ? 'success' : 'danger'} />
        );
    };

    const editProduct = (rowData) => {
        console.log('Edit product', rowData);
    };

    const deleteProduct = (rowData) => {
        console.log('Delete product', rowData);
    };

    const editBodyTemplate = (rowData) => {
        return (
            <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => editProduct(rowData)} />
        );
    };

    const deleteBodyTemplate = (rowData) => {
        return (
            <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => deleteProduct(rowData)} />
        );
    };
    const renderHeader = () => {
        return (
            <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                <span className="text-xl text-900 font-bold">Products</span>
                   <Button label="Thêm sản phẩm" icon="pi pi-plus" className="p-button-success " style={{marginLeft:'800px'}}/>
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
            <Toast ref={toast} />
            <DataTable value={products} header={header} footer={footer} paginator rows={10} rowsPerPageOptions={[5, 10, 20]} >
              <Column field="name" header="Name" />
              <Column field="thumbnail" header="Image" body={imageBodyTemplate} />
              <Column field="price" header="Price" body={priceBodyTemplate} />
              <Column field="type_id" header="Category" body={(rowData) => `Category ${rowData.type_id}`} />
              <Column field="status" header="Status" body={statusBodyTemplate} />
              <Column header="Edit" body={editBodyTemplate} />
              <Column header="Delete" body={deleteBodyTemplate} />
            </DataTable>
          </div>
        </Col>
      </Row>
    </Container>
        
    );
}
