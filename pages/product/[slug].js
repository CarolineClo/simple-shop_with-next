import React from "react";
import Image from "next/image";
function product({ data }) {
  return (
    <div className="product">
      <Image src={`https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp`} alt={data.productdisplayname} width="592" height="790" priority />
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

// export async function getStaticPaths() {
//   const res = await fetch("https://kea-alt-del.dk/t7/api/products/product");
//   const data = await res.json();

//   const paths = data.map((entry) => {
//     return {
//       params: { slug: entry.slug },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// }
