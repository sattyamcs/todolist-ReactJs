import React,{useState} from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const TodoList = () => {
    //Here we are going to declare state for the list
    const[items, setItems]=useState('Hello Sattyam Chauhan')
    const changeHandler=(event)=>{
        setItems(event.target.value)
    }
  return (
    <div>
        <div className="main">
            <div className="center_div">
                <br />
                <h1>Todo List</h1>
                <br />
                <input type="text" placeholder='Add an Item' onChange={changeHandler} />
                <Button className='btn'>
                <AddIcon/>
                </Button>
                <ol>
                    <li>
                       {items}
                    </li>
                </ol>
            </div>
        </div>
    </div>
  )
}

export default TodoList