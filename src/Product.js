import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
function Product() {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setloading] = useState(true);

  const url = "https://fakestoreapi.com/products";

  const fetchApi = async () => {
    const response = await fetch(url);
    const result = await response.json();
    console.log("data", result);

    setdata(result);
    setfilter(data);
    setloading(false);
  };

  useEffect(() => {
    fetchApi();
  }, []);
  const Loading = () => {
    return (
      <div>
        <h1>Loding....</h1>
      </div>
    );
  };

  const filterProduct = (cat) => {
    console.log(cat);
    const Updatelist = data.filter((x) => x.category === cat);
    setfilter(Updatelist);
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5  pb-5">
          <button
            className="btn btn-outline-dark me-2  "
            onClick={() => setfilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark  me-2 "
            onClick={() => filterProduct("men's clothing")}
          >
            Men's
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            womens
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            jewellery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
        {filter.map((product) => {
          const { id, image, title, price, category } = product;
          return (
            <>
              <div className="col-md-3 mb-4  " key={id}>
                <div className="card h-100 text-center p-4 " key={id}>
                  <img
                    height="150px"
                    src={image}
                    className="card-img-top"
                    alt={title}
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0 ">
                      {title.substring(0, 11)}
                    </h5>
                    <p className="card-text lead fw-bold ">$ {price}</p>
                    <NavLink to={`products/${id}`} className="btn btn-primary">
                      buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="continer my-5 py-5 ">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center"> Latest Product</h1>
            <hr></hr>
          </div>
        </div>
        <div className="row justify-content-center ">
          {loading ? <Loading></Loading> : <ShowProduct></ShowProduct>}
        </div>
      </div>
    </div>
  );
}

export default Product;
