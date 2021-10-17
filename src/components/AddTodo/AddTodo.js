import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from "../../actions/index"
import cuid from 'cuid'

const AddTodo = () => {
    const [tasks, setTasks] = useState('')
    const dispatch = useDispatch();

    // const handelInputChange = (event) => {
    //     setTasks(event.target.value)
    // }

    const formSubmit = (event) => {
        //event.preventDefault();
        dispatch(addTodo({ task: tasks, id: cuid() }))
        //event.target.userInput.value = "";
        setTasks("")
    }
    return (
        <div className="container my-3">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="✍️Add Todo Items" aria-label="Recipient's username" aria-describedby="button-addon2" value={tasks} onChange={(event) => setTasks(event.target.value)} required />
                    <button disabled={!tasks} className="btn btn-outline-success" type="button" id="button-addon2" onClick={() => formSubmit()}><i className="fa fa-plus"></i></button>
                </div>
        </div>

    )
}

export default AddTodo

/*
        <div className="container my-3">
            <form action="" onSubmit={formSubmit}>
                <input type="text" name="userInput" onChange={(event) => handelInputChange(event)} />
                <button type="submit">Add Todo</button>
            </form> 
        </div>
*/