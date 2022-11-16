import React from "react";
import Anchor from "../components/anchor";

import Image from "next/image";
function products() {
  return (
    <div>
      <h1>this will be the products page</h1>
      {prods.map((entry) => {
        return (
          <section key={entry.id}>
            <Image src={`https://kea-alt-del.dk/t7/images/webp/640/${entry.id}.webp`} alt="a product" width="592" height="790" priority />

            <h2>{entry.productdisplayname}</h2>
            <p>{entry.price}</p>
            <button>
              <Anchor href={"/product/" + entry.slug}>Read More</Anchor>
            </button>
          </section>
        );
      })}
    </div>
  );
}

export default products;
