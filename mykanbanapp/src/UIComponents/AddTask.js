import React from 'react';


function AddTask({closeModal, addNewTask}){
    const inputRef = React.createRef();
    return(
        <div className="modal-overlay">
            <div className="add-task-modal">
                <span onClick={closeModal} className="closeBtn">close</span>
            <input ref={inputRef} type="text"/>
            <button onClick={()=>addNewTask(inputRef)}>Add</button>
            </div>  
        </div>  
    )
}

export default AddTask;