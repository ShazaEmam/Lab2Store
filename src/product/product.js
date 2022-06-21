import React from 'react'
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import axiosInstance from '../axios config/axiosInstance';

const Products = () => {
    const [products, setProducts] = useState([]);
    const LoaderState = useSelector((state) => state.loader.isLoading)
    useEffect(() => {
        axiosInstance
            .get("/products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className="container pt-4" style={{ margin: "auto" }}>

             {LoaderState && <div className="d-flex justify-content-center">
                    <div className="spinner-border " role="status"></div>
                </div>}
            <div className="row row-cols-3 " style={{ marginTop: "3%", justifyContent: "center" }}>

               
                {products.map((product) => {
                    return (
                        <div className="card m-2 p-4 col " key={product.id} style={{ width: "350px" }}>
                            <img src={product.image} className="card-img-top " alt="..." style={{ height: "200px" }} />
                            <div className="card-body ">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>

                            </div>
                            <div className='text-center'>
                                <Link to={`/details/${product.id}`} className="btn btn-dark" style={{ width: "250px" }}>Details</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Products;