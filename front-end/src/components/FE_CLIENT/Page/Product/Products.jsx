import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Container } from 'react-bootstrap';
import { InputText } from 'primereact/inputtext';
import { FaSearch } from 'react-icons/fa';

export default function BasicDemo() {
    const [products, setProducts] = useState([]);
    const [layout, setLayout] = useState('list');
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        axios.get('/products').then((resp) => setProducts(resp.data));
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        axios.get('/products').then((resp) => {
            let result = resp.data.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()));
            setProducts(result);
        });
    };
    const gridItem = (product) => {
        return (
            <div className="col-12 sm:col-6 lg:col-4 xl:col-3 p-2" key={product.id}>
                <div className="p-4 border-1 surface-border surface-card border-round" style={{ height: '100%' }}>
                    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="flex align-items-center gap-2">
                            <i className="pi pi-tag"></i>
                        </div>
                    </div>
                    <div className="flex flex-column align-items-center gap-3 py-3">
                        <img className="w-9 shadow-2 border-round" src={product.thumbnail} alt={product.name} />
                        <div className="text-lg font-bold">{product.name}</div>
                        <div className="text-sm">{product.description}</div>
                    </div>
                    <div className="flex align-items-center justify-content-between">
                        <span className="text-xl font-semibold">${product.price}</span>
                    </div>
                </div>
            </div>
        );
    };

    const itemTemplate = (product) => {
        if (!product) {
            return;
        }
        return gridItem(product);
    };

    const header = () => {
        return (
            <div className="flex justify-content-center align-items-center p-2">
                <form onSubmit={handleSearch} className="flex align-items-center">
                    <InputText 
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        placeholder="Search ..."
                    />
                </form>
            </div>
        );
    };

    return (
            <DataView value={products} layout={layout} itemTemplate={itemTemplate} header={header()} />
    );
}
