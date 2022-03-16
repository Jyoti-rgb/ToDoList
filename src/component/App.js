import React ,{useEffect,useState} from 'react';
import './App.css';
import ToDoList from '../component/ToDoList'


 function App() {
    //get data from LS
    function getLocalStorage(){
        let list=localStorage.getItem('list1');
        console.log(list);
        if(list){
            return JSON.parse(localStorage.getItem('list1'))
        }
       
    }

    const [input,setInput]=useState("")
    const [items,setItems]=useState(getLocalStorage())
    
   
    
    function itemEvent(event){
        const inputList=event.target.value;
        setInput(inputList);
      }

     
function handleClick(){
          setItems((oldItems)=>{
              return [...oldItems,input];
          })
          setInput('');
}
function deleteItem(id){
    console.log("delete");

    setItems((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{
           return index!==id;
        })
    })
}

// add data in LS

useEffect(()=>{
  localStorage.setItem("list1",JSON.stringify(items))    
},[items])


     return (
     <>
         <div className='main__div'>
             <div className="center__div">
             <br />
               <h1>To-Do-List</h1>
               <br />
               <input type="text" placeholder="add a item"
               value={input}
                onChange={itemEvent}/>
               <button onClick={handleClick}>+</button>
               <br />
               <ol>
                   {items.map((i,index)=>{
                  return <ToDoList
                   id={index}
                    key={index} 
                    
                    text={i}
                        onSelect={deleteItem}
                    />
                   })}
               </ol>

             </div>

         </div>
     </>
     )
 }
 export default App