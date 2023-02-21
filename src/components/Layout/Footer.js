import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        position: "sticky",
        bottom: 0,
        backgroundColor: "#f5f5f5",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <Link href="/profile">
        <span>PERFIL</span>
      </Link>
      <Link href="/new-product">
        <span>CREAR + </span>
      </Link>
      <Link href="/user/login">
        <span>LOGIN</span>
      </Link>
    </footer>
  );
};

export default Footer;
