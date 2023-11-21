import React from "react";
import "./Style.css";

export default function Footer() {
  
  const año = new Date().getFullYear()
  return (
    <>
      <div className="container-fluid bg-dark">
        <footer className="d-flex justify-content-center border-top">
          <div >
            <span className="mb-3 mb-md-0 text-primary">
              © {año} Grupo 4 Company, Inc.
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
