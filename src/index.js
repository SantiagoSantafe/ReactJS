import React from 'react';
import ReactDOM from 'react-dom/client';
//import { reminderChart } from './reminderChart';
const ReminderChart=()=>{
  return(
      <>
      <h1>To do list:</h1>
      <div>
      <input type="checkbox"></input>
      <input type='text'></input>
      </div>
      
      <button>Add</button>
      <button>Restart</button>
      </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
    <ReminderChart />
  </React.StrictMode>
);

