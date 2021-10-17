import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../../actions/index';


const TodoItem = ({ task }) => {
    const dispatch = useDispatch();
    const [isUpdate, setIsUpdate] = useState(false)
    const textRef = useRef(null)

    var myStyle1 = {
        margin: "40px auto",
        background: "lightcyan",
        padding: "10px",
        borderRadius: "10px",
    }

    const editItemToState = (event) => {
        //event.preventDefault();
        dispatch(updateTodo({ message: textRef.current.value, id: task.id }));
        setIsUpdate(false);
        textRef.current = null;
    }

    const renderForm = () => {
        return (
            // <form onSubmit={editItemToState}>
            //     <input ref={textRef} type="text" defaultValue={task.task} />
            //     <button type="submit">Edit Todo</button>
            // </form>
            <div className="container" style={myStyle1} >
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="✍️Edit Todo Items" aria-label="Recipient's username" aria-describedby="button-addon2" ref={textRef} defaultValue={task.task}/>
                    <button className="btn btn-outline-success" type="button" id="button-addon2" onClick={() => editItemToState()}><i className="fas fa-check"></i></button>
                </div>
            </div>
        )
    }

    const renderItem = () => {
        return (
            <div className="container" style={myStyle1} >
                <h5>{task.task}</h5>

                <button className="btn btn-sm btn-info m-2" onClick={() => setIsUpdate(true)}><i className="fa fa-edit"></i></button>

                <button className="btn btn-sm btn-danger m-2" onClick={() => dispatch(deleteTodo(task.id))}><i className="fa fa-trash-alt"></i></button>

            </div>
            // <div>
            //     {task.task}
            //     <button onClick={() => setIsUpdate(true)}>Edit</button>
            //     <button onClick={() => dispatch(deleteTodo(task.id))}>Delete</button>
            // </div>
        )
    }

    return (
        <>
            <p></p>
            {isUpdate ? renderForm() : renderItem()}
        </>
    )
}

export default TodoItem


