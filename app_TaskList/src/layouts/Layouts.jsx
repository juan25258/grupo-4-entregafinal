import React from "react";
import Header from "../componentes/Header/header";
import Footer from "../componentes/Footer/footer";
import { Outlet } from "react-router-dom";

export default function Layouts() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}
