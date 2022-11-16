import React from "react";
import Image from "next/image";
function product({ data }) {
  return (
    <div className="product">
      <Image
        src={`https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp`}
        //src=´https://kea-alt-del.dk/t7/images/webp/1000/${data.id}.webp´
        alt={data.productdisplayname}
        width="592"
        height="790"
        priority
      />
      <section className="product-info">
        <h2>{data.productdisplayname}</h2>
        <p>{data.category}</p>
        <p>{data.subcategory}</p>
        <p>{data.price},-</p>
        <button>Add to cart</button>
      </section>
    </div>
  );
}

export default product;

export async function getServerSideProps(context) {
  const res = await fetch("https://kea-alt-del.dk/t7/api/products/" + context.params.slug);
  if (res.status != 200) {
    return {
      notFound: true,
    };
  }
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
