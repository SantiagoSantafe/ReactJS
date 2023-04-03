import { Component, useState } from "react";


export default App;

 function CourseList(){
    const [curso, setcurso] = useState([
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
        }
    ]);

    const CourseItem= (Textname, textdescrip) =>{
        const nuevocurso = {id: Math.floor(Math.random)(), nombre: Textname, descripcion: textdescrip};
        setcurso([...curso,nuevocurso])
    };

    const eliminarcurso=(id)=>{
        const nuevocurso = curso.filter((curso)=> curso.id );
        setcurso(nuevocurso);
    };


    return (
        <><h1> PEPEPIPIOLO</h1> 
        </>
    )
 };

