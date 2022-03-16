import React  from 'react';
import './ToDoList.css'
import DeleteIcon from '@material-ui/icons/Delete';
 

function ToDoList(props){
    
 
    return(
     <>
      
       <div className="item__list">
        <li onClick={()=>{
          props.onSelect(props.id)
        }}><DeleteIcon/></li>

        <li>{props.text}</li>
    </div>  
     

     </>

    )
    

 }
 export default ToDoList;