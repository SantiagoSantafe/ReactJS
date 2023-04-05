import React from "react";
import { useState, useEffect } from "react";

export const CourseList = () => {
  const [curso, setcurso] = useState([{
        id:Math.floor(Math.random() * 1000),
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
  const [nombre2,setnombre2] =useState('');
  const [descripcion2,setdescripcion2] =useState('');
  const UseAgregarNuevo = (nombre2,descripcion2) =>{
    /*if (Existe) {
      alert("Este curso ya esta en la lista");
      return;
    }*/
    
    const nuevoCurso={
      id: Math.floor(Math.random() * 1000),
      nombre: nombre2,
      descripcion: descripcion2
    };
    useEffect(() => {
      setcurso([...curso, nuevoCurso]);
    }, [])
  };
  const RenCourseItem = curso.map((materia) => {
    return(
      <tr key={materia.id}>
        <table>
          <tr>
            <td>
              <input type="checkbox" onClick={()=>setcurso(curso.filter((curso) => 
              {return curso.id!==materia.id}))}></input>
            </td>
            <td>
              <p >{materia.id}</p>
            </td>
            <td>
              <p >{materia.nombre}</p>
            </td>
            <td>
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
      <table>
        <td>
          {RenCourseItem}
        </td>
      </table>
    <form onSubmit={ev=> {
      ev.preventDefault();
      UseAgregarNuevo(nombre2,descripcion2);
    }}>
        <label>
          Nombre:
          <input
            name="nombre2"
            type="text"
            placeholder="Ingresa el nombre"
            value={nombre2}
            onChange={ev=> setnombre2(ev.target.value)}
          ></input>
        </label>
        <label>
          Descripción:
          <textarea type="text"
           name="descripcion2" 
           placeholder="Ingresa una descripcion"
           value={descripcion2}
           onChange={ev=> setdescripcion2(ev.target.value)}
           ></textarea>
        </label>
        <button type="submit">Agregar curso</button>
      </form>
    </>
  );
  }



