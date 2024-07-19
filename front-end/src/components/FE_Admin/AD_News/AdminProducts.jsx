import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import axios from 'axios';

export default function AdminProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('products').then(resp => setProducts(resp.data));
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const imageBodyTemplate = (rowData) => {
        return <img src={rowData.thumbnail} alt={rowData.name} style={{height:'50px', width:'50px'}} />;
    };

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    };

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.avg_rating} readOnly cancel={false} />;
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

    const Edit = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => editProduct(rowData)} />
            </React.Fragment>
        );
    };

    const Delete = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => deleteProduct(rowData)} />
            </React.Fragment>
        );
    };

     const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">Products</span>
            <Button className="">Thêm sản phẩm</Button>
        </div>
    );

    const footer = `In total there are ${products ? products.length : 0} products.`;

    return (
        <div className="card">
            <DataTable value={products} header={header} footer={footer} tableStyle={{ minWidth: '60rem' }}>
                <Column field="name" header="Name"></Column>
                <Column field="thumbnail" header="Image" body={imageBodyTemplate}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate}></Column>
                <Column field="type_id" header="Category" body={(rowData) => `Category ${rowData.type_id}`}></Column>
                <Column field="avg_rating" header="Reviews" body={ratingBodyTemplate}></Column>
                <Column field="status" header="Status" body={statusBodyTemplate}></Column>
                <Column header="Edit" body={Edit}></Column>
                <Column header="Delete" body={Delete}></Column>
            </DataTable>
        </div>
    );
}
