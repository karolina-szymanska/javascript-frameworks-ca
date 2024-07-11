import React from "react";
import useApi from "../useApi";
import { IoSearch } from "react-icons/io5";
import Search from "../search";
import { Link } from "react-router-dom";

function HomePage() {
  const { data, isLoading, isError } = useApi(
    "https://v2.api.noroff.dev/online-shop"
  );

  if (isLoading) {
    return (
      <main id="home">
        <div className="container">
          <h1 className="home-heading">Homepage</h1>
          <div className="loading" aria-label="loading"></div>
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main id="home">
        <div className="container">
          <h1 className="home-heading">Homepage</h1>
          <div className="search-input">
            <IoSearch />
            <input aria-label="search input" />
          </div>
          <div className="error">Error! Please refresh.</div>
        </div>
      </main>
    );
  }

  return (
    <main id="home">
      <div className="container">
        <h1 className="home-heading">Homepage</h1>
        <div className="search-input">
          <IoSearch />
          <Search />
        </div>
        <div className="products-container">
          {data.map((data) => (
            <Link key={data.id} to={`/product/${data.id}`}>
              <div className="product-img-wrap">
                <img
                  src={data.image.url}
                  className="product-img"
                  alt={data.title}
                />
              </div>
              <div>
                <div className="product-title">{data.title}</div>
                <div className="product-price">
                  {data.discountedPrice === data.price ? (
                    data.discountedPrice + ",-"
                  ) : (
                    <span className="discount">
                      {data.discountedPrice},-{" "}
                      <span className="discount-off">
                        ({(data.price - data.discountedPrice).toFixed(2)},- OFF)
                      </span>
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default HomePage;
