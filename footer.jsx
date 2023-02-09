import React from "react";
import "../bootstrap.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Hajare Becherifaⓒ {year}</p>
    </footer>
  );
}

export default Footer;