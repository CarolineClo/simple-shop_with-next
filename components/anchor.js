import { useRouter } from "next/router";
import React from "react";

function anchor({ href, className, children }) {
  const router = useRouter();
  return (
    <a
      onClick={(event) => {
        event.preventDefault();
        router.push(href);
      }}
      href={href}
      className={className}
    >
      {children}
    </a>
  );
}

export default anchor;
