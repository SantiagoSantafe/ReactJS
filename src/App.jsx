import React from "react";
import { useState , useEffect} from "react";

export const CourseList = () => {
  const [curso, setcurso] = useState([{
        id:  Math.floor(Math.random()*1000),
        nombre: "calculo",
        descripcion: "para aprender matematicas",
    },
    {
      id: Math.floor(Math.random()*1000),
      nombre: "Ingles",
      descripcion: "para aprender idiomas",
    },
    {
      id: Math.floor(Math.random()*1000),
      nombre: "fisica",
      descripcion: "para aprender leyes de newton",
    },
    
  ]);
  
  console.log(curso)
const CourseItem = (Textname, textdescrip) => {
    const nuevocurso = {
        id: Math.floor(Math.random() * 1000),
        nombre: Textname,
        descripcion: textdescrip,
      
    };
    useEffect(()=>{
      setcurso([...curso, nuevocurso]);
    }, [])
    
  };
  const CourseItem1 = curso.map((materia) => {
    return(
      <li key={materia}>
        <p >{materia.id}</p>
        <p >{materia.nombre}</p>
        <p >{materia.descripcion}</p>
        <button onClick={()=>setcurso(curso.filter((curso) => curso.id!==materia.id))}>eliminar</button>
      </li>
    );
  });
  return (
    <>
      {CourseItem("njsand","ndnasjdn")}
      <ul>{CourseItem1}</ul>
    </>
  );
};
