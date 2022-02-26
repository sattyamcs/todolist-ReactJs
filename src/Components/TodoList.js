import React,{useState} from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListComp from './ListComp';

const TodoList = () => {
    // Here for the todo list logic is that the list data we wnat to store in a empty array and then called to the list

    //Here we are going to declare state for the list
    const[items, setItems]=useState("")
    const[list,setList]=useState([])// Empty array 
    const changeHandler=(event)=>{
        setItems(event.target.value)
    }
    //Adding Items by clicking add button
    const addItems=()=>{
        setList((prevValue)=>{
            return [...prevValue,items]//prevValue is for the latest added items we added and items  are added newly.
        })
        setItems('') // for empty space after data entered
    }
  return (
    <div>
        <div className="main">
            <div className="center_div">
                <br />
                <h1>Todo List</h1>
                <br />
                <input type="text" placeholder='Add an Item' onChange={changeHandler} value={items} />
                <Button className='btn' onClick={addItems}>
                <AddIcon/>
                </Button>
                <ol>
                    <li>
                      {list.map((item,index)=><ListComp key={index} text={item}/>)}
                    </li>
                </ol>
            </div>
        </div>
    </div>
  )
}

export default TodoList