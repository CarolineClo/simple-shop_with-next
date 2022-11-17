import React from "react";
import Anchor from "../components/anchor";

import Image from "next/image";
function products({ navData }) {
  return (
    <div className="products">
      <h2>All Products</h2>
      {navData.map((entry) => {
        return (
          <section key={entry.id} className="product-card">
            <Image
              className="image"
              src={`https://kea-alt-del.dk/t7/images/webp/1000/${entry.id}.webp`}
              alt="a product"
              width="1000"
              height="1334"
              priority
              sizes="(max-width:700px) 100vw,
            (max-width:1000px) 50vw, 25vw"
            />
            <div className="product-text">
              <h3>{entry.productdisplayname}</h3>
              <p>{entry.price},-</p>
              <button>
                <Anchor href={"/product/" + entry.id}>Read More</Anchor>
              </button>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default products;
