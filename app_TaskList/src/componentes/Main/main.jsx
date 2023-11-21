import React from "react";
import "./Style.css";
import { Link as LinkMainHome } from "react-router-dom";

export default function Main() {
  return (
    <>
      <div className="px-4 my-5 text-center">
        <img
          id="logo-home"
          className="d-block mx-auto mb-4"
          src={"src/assets/Logo.svg"}
          alt="Logo"
          width="500"
          height="250"
        />
        <h1 className="display-5 fw-bold text-body-emphasis">
          Algo de titulo(o no...)
        </h1>
        <div className="col-lg-6 mx-auto">
          <p>
            ¡Bienvenido a Easy Task, tu compañero perfecto para organizarte de
            manera sencilla y eficiente! En Easy Task, creamos un espacio donde
            la gestión de tus tareas diarias se vuelve, como su nombre indica,
            ¡fácil! Imagina un lugar donde puedas crear, personalizar y seguir
            tus listas de tareas de manera intuitiva. En Easy Task, hacemos que
            la planificación sea una tarea fácil y agradable. Ya sea para
            organizar tu día a día, planificar proyectos o simplemente no
            olvidar las cosas importantes, estamos aquí para simplificarlo todo.
            Nuestra interfaz amigable te permite añadir tareas con un solo clic,
            establecer fechas límite, y hasta priorizar tus pendientes. Y lo
            mejor de todo, ¡puedes acceder a tus listas desde cualquier
            dispositivo en cualquier momento!
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              <LinkMainHome to="/AdminTaskList">Nuestra TaskList</LinkMainHome>
            </button>
            <button type="button" className="btn btn-secondary btn-lg px-4">
              <LinkMainHome to="/Descripcion">Quienes somos</LinkMainHome>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
