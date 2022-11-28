import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import ProductCard from './ProductCard';

const MyProducts = () => {
    const [productsData, setProductsData] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://used-products-resale-server-pied.vercel.app/myProductsData?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setProductsData(data);
        })
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8'>
            {
                productsData?.map(productData => <ProductCard
                    key={productData._id}
                    productData={productData}
                ></ProductCard>)
            }
        </div>
    );
};

export default MyProducts;