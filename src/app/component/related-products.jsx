import React from "react";

const RelatedProducts = ({item}) => {
    return (        
            <div className="p-2 pb-3">
                <div className="product-wap card rounded-0">
                    <div className="card rounded-0">
                        <img className="card-img rounded-0 img-fluid" src={item.pimg} />
                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                            <ul className="list-unstyled">
                                <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-body">
                        <a href="shop-single.html" className="h3 text-decoration-none">{item.proname}</a>
                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                            <li>M/L/X/XL</li>
                            <li className="pt-2">
                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                            </li>
                        </ul>
                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                            <li>
                                <i className="text-warning fa fa-star"></i>
                                <i className="text-warning fa fa-star"></i>
                                <i className="text-warning fa fa-star"></i>
                                <i className="text-warning fa fa-star"></i>
                                <i className="text-muted fa fa-star"></i>
                            </li>
                        </ul>
                        <p className="text-center mb-0">${item.price}</p>
                    </div>
                </div>
            </div>
    )
}

export default RelatedProducts