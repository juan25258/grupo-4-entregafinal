import React from "react";
import "./Style.css";
import { Link as LinkHeader } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container">
          <a href="#" className="a-NombreSitio">
            <h1>Easy Task</h1>
          </a>
          <div className="botonesnav">
            <button className="btn btn-Primary" type="button">
              <LinkHeader id="btn-nav" to="/">
                Home
              </LinkHeader>
            </button>

            <button className="btn btn-Primary" type="button">
              <LinkHeader id="btn-nav" to="/AdminTaskList">
                TaskList
              </LinkHeader>
            </button>
            
            <button className="btn btn-Primary" type="button">
              <LinkHeader id="btn-nav" to="/Register">
                Register
              </LinkHeader>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
