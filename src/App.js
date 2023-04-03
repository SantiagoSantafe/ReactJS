import React from 'react';
import { useState } from 'react';
export const CourseList=()=>{
    const [curso, setcurso] = useState(
        [
        {id: Math.floor(Math.random), 
            nombre: 'calculo', 
            descripcion: 'para aprender matematicas'
        },
        {id: Math.floor(Math.random),
        nombre: 'Ingles', 
        descripcion: 'para aprender idiomas'},

        {id: Math.floor(Math.random), 
            nombre: 'fisica', 
            descripcion: 'para aprender leyes de newton'
        },
    ])

    const CourseItem= (Textname, textdescrip) =>{
        const nuevocurso = {id: Math.floor(Math.random)(), nombre: Textname, descripcion: textdescrip};
        setcurso([...curso,nuevocurso])
    };

    const eliminarcurso=(id)=>{
        const nuevocurso = curso.filter((curso)=> curso.id );
        setcurso(nuevocurso);
    };
    const CourseItem1=curso.map((materia)=>{
        
        return(
            <li>
                <p key={materia.id.toString}>{materia.id}</p>
                <p key={materia.nombre.toString}>{materia.nombre}</p>
                <p key={materia.descripcion.toString}>{materia.descripcion}</p>
            </li>
            
        )                
    })
        return (
            <>
            {CourseItem("calculo","matemáticas pura")}
            <ul>{CourseItem1}</ul>

            </>
        )
    };