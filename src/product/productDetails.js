import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import axiosInstance from "../axios config/axiosInstance";
import { useSelector } from 'react-redux';
const ProductDetails = (props) => {
    /*  const location = useLocation(); */
    const LoaderState = useSelector((state) => state.loader.isLoading)
    console.log(props);
    const params = useParams();

    const [product, setProduct] = useState({});
    useEffect(() => {
        axiosInstance
            .get(`/products/${params.id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <>

            <div className="card  p-4 " style={{ width: "550px", margin: "auto", marginTop: "2%" }}>
                {LoaderState && <div className="d-flex justify-content-center">
                    <div className="spinner-border " role="status"></div>
                </div>}
                <img src={product.image} className="card-img-top " alt="..." style={{ height: "300px" }} />
                <div className="card-body ">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>

                </div>
                <div className='text-center'>
                    <Link to={`/products`} className="btn btn-dark" style={{ width: "350px" }}>Return</Link>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
