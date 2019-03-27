import React from 'react';
import Task from './Task';

function Columns({column, columnIndex, eligibleForLeftMove, eligibleForRightMove, moveTasks, openModal}){
                
    return(
        <div className="column">
            <h1>{column.name}</h1>
            <Task columnTasks={column.tasks} columnIndex={columnIndex} elm={eligibleForLeftMove} erm={eligibleForRightMove}  moveTasks={moveTasks}/>

            <button onClick={()=>openModal(columnIndex)}>Add New Task</button>
            
        </div>
    )            
}

export default Columns;