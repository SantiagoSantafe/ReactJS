import React, { useState, useEffect } from "react";

export const CourseList = () => {
  const [curso, setcurso] = useState([
    {
      id: Math.floor(Math.random() * 1000),
      nombre: "Calculo",
      descripcion: "para aprender matematicas",
    },
    {
      id: Math.floor(Math.random() * 1000),
      nombre: "Ingles",
      descripcion: "para aprender idiomas",
    },
    {
      id: Math.floor(Math.random() * 1000),
      nombre: "Fisica",
      descripcion: "para aprender leyes de newton",
    },
  ]);
  console.log(curso);
  const [nuevoID, setNuevoID] = useState("");
  const [nuevoNombre, setNuevoNombre] = useState("");
  const[nuevaDescripcion,setNuevaDescripcion]=useState("");
  const UseAgregarNuevo = (event) => {
    event.preventDefault();
    if (curso.some((curso) => curso.id === nuevoID)) {
      alert("Ya hay un curso con este mismo ID en la lista");
      setNuevoID("");
    } else if (curso.some((curso) => curso.nombre === nuevoNombre)) {
      alert("Ya se encuentra un curso con el mismo nombre en la lista");
      setNuevoNombre("");
    } else {
      setcurso([...curso, { id: nuevoID, nombre: nuevoNombre,descripcion:nuevaDescripcion}]);
      setNuevoID("");
      setNuevoNombre("");
      setNuevaDescripcion("");
    }
  };
  const [mostrar, setMostrar] = useState(false);
  const [done, setDone] = useState([]);
  const AgregarCurso = () => {
    return (
      <>
        <form onSubmit={UseAgregarNuevo}>
        <label>
          ID:
          <input
            type="text"
            placeholder="Ingresa el ID"
            value={nuevoID}
            onChange={(event) => setNuevoID(event.target.value)}
          ></input>
        </label>
        <label>
          Nombre:
          <input
            className="nombreInput"
            name="nombre2"
            type="text"
            placeholder="Ingresa el nombre"
            value={nuevoNombre}
            onChange={(event) => setNuevoNombre(event.target.value)}
          ></input>
        </label>
        <label>
          Descripción:
          <textarea
           className="descripcionInput"
            type="text"
            name="descripcion2"
            placeholder="Ingresa una descripcion"
            value={nuevaDescripcion}
            onChange={(event)=>setNuevaDescripcion(event.target.value)}
          ></textarea>
        </label>
        <button type="submit">Agregar curso</button>
      </form>
      </>
    );
  };
  const RenCourseItem = curso.map((materia) => {
    return (
      <tr key={materia.id}>
        <table className="tableItem">
          <tr>
            <td className="ItemCheckbox">
              <input
                type="checkbox"
                onClick={() =>
                  setcurso(
                    curso.filter((curso) => {
                      setDone([...done, materia]);
                      return curso.id !== materia.id;
                    })
                  )
                }
              ></input>
            </td>
            <td className="ItemID">
              <p>{materia.id}</p>
            </td>
            <td className="ItemNombre">
              <p>{materia.nombre}</p>
            </td>
            <td className="ItemDescripcion">
              <p>{materia.descripcion}</p>
            </td>
            <td>
              <button
                onClick={() =>
                  setcurso(
                    curso.filter((curso) => {
                      setDone([...done, materia]);
                      return curso.id !== materia.id;
                    })
                  )
                }
              >
                eliminar
              </button>
            </td>
          </tr>
        </table>
      </tr>
    );
  });
  const Done = done.map((materiaDone) => {
    return (
      <tr key={materiaDone.id}>
        <table className="doneTableItem">
          <tr>
            <td className="itemnull"></td>
            <td className="doneItemID">
              <p>{materiaDone.id}</p>
            </td>
            <td className="doneItemNombre">
              <p>{materiaDone.nombre}</p>
            </td>
            <td className="doneItemDescripcion">
              <p>{materiaDone.descripcion}</p>
            </td>
          </tr>
        </table>
      </tr>
    );
  });

  return (
    <>
      <header id="Encabezado">
        <h1>To Do List</h1>
        <p>
          BY: Jose Guzman <br />
          Santiago Santafe <br />
          Oscar Vergara
        </p>
      </header>

      <table className="tableList">
        <h1 className="titleTables">To Do</h1>
        <tr className="descripcionTabla">
          <td className="itemnull"></td>
          <td className="ItemID id">
            <p>ID</p>
          </td>
          <td className="ItemNombre nom">
            <p>Curso</p>
          </td>
          <td className="ItemDescripcion des">Descripcion</td>
          <td></td>
        </tr>
        <td>{RenCourseItem}</td>
      </table>
      <div className="boton">
        <button
          className="btn"
          type="button"
          onClick={() => setMostrar(!mostrar)}
        >
          Agregar
        </button>
        {mostrar ? (
          AgregarCurso()
        ) : (
          <>
            <table className="tableListDone">
              <h1 className="titleTables">Done</h1>
              <tr className="descripcionTabla">
                <td className="itemnull"></td>
                <td className="ItemID id">
                  <p>ID</p>
                </td>
                <td className="ItemNombre nom">
                  <p>Curso</p>
                </td>
                <td className="ItemDescripcion des">Descripcion</td>
                <td></td>
              </tr>
              <tr>{Done}</tr>
            </table>
          </>
        )}
      </div>
    </>
  );
};
