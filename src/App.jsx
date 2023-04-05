import React from "react";
import { useState, useEffect } from "react";

export const CourseList = () => {
  const [curso, setcurso] = useState([{
        id:Math.floor(Math.random() * 1000),
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
  const[mostrar,setMostrar]=useState(true);

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
  const AgregarCurso=()=>{
    return (
      <>
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
  </>)
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
    <header id="Encabezado">
      <h1>To Do List</h1>
      <p>BY: Jose Guzman <br />
        Santiago Santafe <br />
        Oscar Vergara</p>

    </header>

      <table className="tableList">
      <tr className="descripcionTabla">
            <td className="itemnull"></td>
            <td className="ItemID id"><p>ID</p></td>
            <td className="ItemNombre nom"><p>Curso</p></td>
            <td className="ItemDescripcion des">Descripcion</td>
            <td></td>
          </tr>
        <td>
          {RenCourseItem}
        </td>
        
      </table>
      <div className="boton">
        <button className="btn" type="button" onClick={()=>setMostrar(!mostrar)}>Agregar</button>
        {mostrar ?(AgregarCurso()):(1)}
      </div>
      
    </>
  );
};

