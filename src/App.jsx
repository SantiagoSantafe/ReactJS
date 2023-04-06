import React, { useState, useEffect } from "react";

export const CourseList = () => {
  const [curso, setcurso] = useState([
    {
      id: Math.floor(Math.random() * 1000),
      nombre: "calculo",
      descripcion: "para aprender matematicas",
    },
    {
      id: Math.floor(Math.random() * 1000),
      nombre: "Ingles",
      descripcion: "para aprender idiomas",
    },
    {
      id: Math.floor(Math.random() * 1000),
      nombre: "fisica",
      descripcion: "para aprender leyes de newton",
    },
  ]);
  console.log(curso);
  const [nuevoID, setNuevoID] = useState("");
  const [nuevoNombre, setNuevoNombre] = useState("");
  const[nuevaDescripcion,setNuevaDescripcion]=useState("");
  const UseAgregarNuevo = (event) => {
    /*if (Existe) {
      alert("Este curso ya esta en la lista");
      return;
    }*/
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
  const RenCourseItem = curso.map((materia) => {
    return (
      <tr key={materia.id}>
        <table>
          <tr>
            <td>
              <input
                type="checkbox"
                onClick={() =>
                  setcurso(
                    curso.filter((curso) => {
                      return curso.id !== materia.id;
                    })
                  )
                }
              ></input>
            </td>
            <td>
              <p>{materia.id}</p>
            </td>
            <td>
              <p>{materia.nombre}</p>
            </td>
            <td>
              <p>{materia.descripcion}</p>
            </td>
            <td>
              <button
                onClick={() =>
                  setcurso(
                    curso.filter((curso) => {
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
  return (
    <>
      <table>
        <td>{RenCourseItem}</td>
      </table>
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
