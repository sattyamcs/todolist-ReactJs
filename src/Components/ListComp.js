import React,{useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const ListComp = (props) => {
    // usestate for clicking delete button and cross the input
    const[line,setLine]=useState(false)
    const cutLine=()=>{
        setLine(true)
    }
    return (
        <div className='todo_style'>
            <span onClick={cutLine}>
                <DeleteIcon className='delete_icon'/>
            </span>
            {/* Ternary statement for the cross line condition */}
            <li style={{textDecoration:line?"Line-through":""}}>{props.text}</li>
        </div>
    )
}

export default ListComp;