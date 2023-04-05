import React from "react";
import { useState, useEffect } from "react";

export const CourseList = () => {
  const [curso, setcurso] = useState([{
        id:Math.floor(Math.random() * 1000),
        nombre: "Calculo",
        descripcion: "para aprender matematicas sad as d                  ssssssssssssssssssssssssssssssssss sssssssssssssssssssssssssssss",
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

  console.log(curso)

  const Existe=(numero)=>{
    return (curso.map((materia)=>{
      if(materia.id===numero){
        return true
      }else{
        return false
      }
      }))
  }
  const RenCourseItem = curso.map((materia) => {
    return(
      <tr key={materia.id}>
        <table className="tableItem">
          <tr>
            <td className="ItemCheckbox">
              <input type="checkbox" onClick={()=>setcurso(curso.filter((curso) => 
              {return curso.id!==materia.id}))}></input>
            </td>
            <td className="ItemID">
              <p >{materia.id}</p>
            </td>
            <td className="ItemNombre">
              <p >{materia.nombre}</p>
            </td>
            <td className="ItemDescripcion">
              <p >{materia.descripcion}</p>
            </td>
            <td>
              <button onClick={()=>setcurso(curso.filter((curso) => 
              {return curso.id!==materia.id}))}>eliminar</button>
            </td>
          </tr>      
        </table>
      </tr>
    );
  });
  
  return (
    <>
      <table className="tableList">
        <td>
          {RenCourseItem}
        </td>
      </table>
    <form className="Agregaritem">
        <label>
          Nombre:
          <input
            name="nombre"
            type="text"
            placeholder="Ingresa el nombre"
          ></input>
        </label>
        <label>
          Descripción:
          <textarea type="text" placeholder="Ingresa una descripcion"></textarea>
        </label>
        <button type="submit">Agregar curso</button>
      </form>
      
    </>
  );
};

