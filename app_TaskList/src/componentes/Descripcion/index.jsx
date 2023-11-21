import React from "react";
import "./Style.css";
import { Link as LinkDescripcion } from "react-router-dom";

export default function Descripcion() {
  return (
    <>
      <div id="descripcion" className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
          Acerca de nosotros
        </h1>
        <p className="lead">
          TaskList, fundada por los visionarios Juan Martín Domínguez y Federico
          Adach, es la solución perfecta para optimizar tu productividad.
          Nuestra plataforma intuitiva y eficiente te ayuda a gestionar tus
          tareas diarias de manera fácil y organizada. Descubre una nueva forma
          de alcanzar tus metas con TaskList, la creación de dos mentes
          brillantes comprometidas con simplificar tu vida laboral y personal.
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
          >
            <LinkDescripcion to="/">Volver al Home</LinkDescripcion>
          </button>
        </div>
      </div>
    </>
  );
}
