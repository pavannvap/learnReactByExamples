import React from 'react';

 function Task({columnTasks, columnIndex, elm, erm, moveTasks}){
    return(
        <div className="tasks">
            <ul>
                {columnTasks.map((task, taskIndex)=>(
                    <li key={taskIndex}>
                        {elm && <button onClick={()=>{ moveTasks (columnIndex, taskIndex, 'left') } }>{'<'}</button>}
                        {task.task}
                        {erm && <button onClick={()=>{ moveTasks (columnIndex, taskIndex, 'right') }}>{'>'}</button>}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Task;