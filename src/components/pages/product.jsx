import React from "react";
import { useParams } from "react-router-dom";
import useApi from "../useApi";
import { useCart } from "../useCart";
import { Button } from "../styles/product.styles";

function ProductPage() {
  const { addToCart } = useCart();
  let params = useParams();

  function onAddToCartClick(e) {
    addToCart(e);
  }

  const { data, isLoading, isError } = useApi(
    "https://v2.api.noroff.dev/online-shop/" + params.id
  );

  if (isLoading) {
    return (
      <main id="home">
        <div className="container">
          <h1 className="home-heading">Product Page</h1>
          <div className="loading" aria-label="loading"></div>
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main id="home">
        <div className="container">
          <h1 className="home-heading">Product Page</h1>
          <div className="error">Error! Please refresh.</div>
        </div>
      </main>
    );
  }

  const reviews = data.reviews;

  return (
    <main id="product">
      <div className="container">
        <div className="product-info">
          <div className="product-image">
            <img src={data.image?.url} alt={data.title} />
          </div>
          <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
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
            <Button className="buttons" onClick={() => onAddToCartClick(data)}>
              Add to Cart
            </Button>
          </div>
        </div>
        <h2 className="review-heading">Reviews</h2>
        {reviews
          ? reviews.map((review) => (
              <div className="review-container" key={review.id}>
                <div className="reviews">
                  <h3>{review.username}</h3>
                  <p>{review.description}</p>
                  <div>{review.rating}/5</div>
                </div>
              </div>
            ))
          : ""}
      </div>
    </main>
  );
}

export default ProductPage;
