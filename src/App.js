import { Component, useState } from "react";

function App(){
    return(
        <div>
            
        </div>
    );
}

export default App;

 function CourseList(){
    const [curso, setcurso] = useState([
        {id: Math.floor(Math.random), nombre: 'calculo', descripcion: 'para aprender matematicas'},
        {id: Math.floor(Math.random), nombre: 'Ingles', descripcion: 'para aprender idiomas'},
        {id: Math.floor(Math.random), nombre: 'fisica', descripcion: 'para aprender leyes de newton'}
    ]);

    const añadircurso= (Textname, textdescrip) =>{
        const nuevocurso = {id: Math.floor(Math.random)(), nombre: Textname, descripcion: textdescrip};
        setcurso([...curso,nuevocurso])
    };
 };

