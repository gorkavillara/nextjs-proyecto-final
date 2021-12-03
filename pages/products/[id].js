import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';

export const getStaticPaths = () => {
    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
            { params: { id: '3' } },
            { params: { id: '4' } },
            { params: { id: '5' } },
        ],
        fallback: false
    }
}
export const getStaticProps = async (context) => {
    const { id } = context.params;
    let product;
    try {
        const res = await axios.get('https://fakestoreapi.com/products/' + id);
        product = res.data;
    } catch (e) {
        console.log(e)
    }
    return {
        props: {
            product
        }
    }
}

const ProductDetail = ({ product }) => {
    const [prod, setProd] = useState(product);
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/' + id)
            .then(r => setProd(r.data))
            .catch(e => console.error(e))
    }, []);
    return (
        <div>
            {prod
                ? <div>
                    <h1>{prod.title}</h1>
                    <img src={prod.image} alt={prod.title} className="w-48 h-48" />
                </div>
                : <p>Buscando...</p>
            }
        </div>
    )
}

export default ProductDetail
