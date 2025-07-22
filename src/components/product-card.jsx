import {
  faChevronLeft,
  faChevronRight,
  faCircle,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useRef } from "react";

function ProductCard(props) {
  const [current, setCurrent] = useState(0);

  // Null check for valid products.
  if (props?.products == null) return <div></div>;

  // Carousel logic.
  return (
    <div className="product-card">
      <button
        className={
          "progress-button progress-left " + (current == 0 ? "invisible" : "")
        }
        onClick={() => setCurrent(current - 1)}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className={
          "progress-button progress-right " +
          (current == props.products.length - 1 ? "invisible" : "")
        }
        onClick={() => setCurrent(current + 1)}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <div className={"progress-bar " +
          (props.products.length <= 1 ? "hidden" : "")}>
        {props.products.map((product) => (
          <FontAwesomeIcon
            className={product == props.products[current] ? "selected" : ""}
            icon={faCircle}
          />
        ))}
      </div>
      <div className="product-card-carousel">
        <div
          className="product-card-container"
          style={{ left: `${-100 * current}%` }}
        >
          {props.products.map((p) => RenderProduct(p, props.title))}
        </div>
      </div>
    </div>
  );
}

// Deals with a single product card rendering.
function RenderProduct(product, title) {
  const descriptionHover = useRef(null);
  return (
    <div className="product-card-render">
      <div className="card-image">
        <img src={product.image} alt={`imagem ${product.name}`} />
      </div>

      <div className="card-description">
        <div ref={descriptionHover} className="description-hover">
          <span className="poppins-regular">Descrição</span>
          <p className="poppins-thin">
            {product.description}
          </p>
        </div>

        <FontAwesomeIcon
          icon={faCircleInfo}
          
          className={(product.description?.length > 0?"active":"")}
          onMouseEnter={() => descriptionHover.current.classList.add("active")}
          onMouseLeave={() => descriptionHover.current.classList.remove("active")}
        />
        <span className="poppins-extralight">{title}</span>
        <h4 className="poppins-regular">{product.name}</h4>
      </div>
    </div>
  );
}

export default ProductCard;
