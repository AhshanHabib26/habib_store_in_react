import React from 'react';
import { Row } from 'react-bootstrap';
import useProducts from '../../../../Hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {

    const [products] = useProducts()


    return (
        <div className='container'>
            <h2 className='fw-bold my-4'>Flash Sale Today <span className='text-danger fw-bolder display-5'>!</span></h2>
            <Row lg={3} className="gy-3 ">
                {
                products.map( product => <Product
                    product={product}
                    key={product.id}
                
                />)
            }
            </Row>
        </div>
    );
};

export default Products;