import $ from 'jquery';
import React from 'react';
import {connect} from 'react-redux';

function TodoList(props){
    const constructItems = (item, index)=> {
        return (
            <li className="todo-item" key={item.id}>
                <input type="checkbox" checked={item.completed} onChange={ ()=>{props.completed(item.id)} } />
                <span onClick={ ()=>{props.completed(item.id)} } className={item.completed ? 'completed' : 'notcompleted'}>{item.todoItem}</span>
                <span className="actions">
                    <span onClick={ ()=>{props.update(item.id)} }><img src="https://img.icons8.com/plasticine/25/000000/edit.png"/></span>
                    <span onClick={ ()=>{props.delete(item.id)} }><img src="https://img.icons8.com/color/25/000000/cancel.png"/></span>
                </span>
            </li>       
        )
    }
    
    const items =  props.allItems;
    const buildLis = items.map(constructItems);
    return (
        <ul className="todo-list">
            {buildLis}
        </ul>  
    )
}

function mapStateToProps(state){
    return{
        currentTodo: state.currentTodo,
        allItems: state.todos
    }
}

function mapDispatchToProps(dispatch){
    return{
        update: (index)=>{
            debugger;
            const action = {type: 'UPDATE', index: index };
            dispatch(action);
        },
        delete: (index)=>{
            const action = {type: 'DELETE', index: index};
            dispatch(action);
        },
        completed: (index)=>{
            debugger;
            const action = {type: 'COMPLETED', index: index};
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);