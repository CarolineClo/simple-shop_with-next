import React from "react";
import Anchor from "./anchor";
function Layout({ children }) {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Anchor href="/">Home</Anchor>
          </li>
          <li>
            <Anchor href="/products">Shop All</Anchor>
          </li>
        </ul>
      </header>
      <main>{children}</main>
      <footer>
        <p>
          student project by <Anchor href="https://carolineclo.dk/">Caroline Clo</Anchor>
        </p>
      </footer>
    </div>
  );
}

export default Layout;
