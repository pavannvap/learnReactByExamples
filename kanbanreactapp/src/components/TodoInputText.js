import React from 'react';
import { connect } from 'react-redux';

function TodoInputText(props){
    return(
        <form name="todoform" onSubmit={props.onAddTodo}>
            <input className="todo-input" onChange={props.onChange} type="text" value={props.currentTodo }name="todoinput" autoComplete="off" placeHolder="Enter Your ToDo"/>
            <div>{props.validationMsg}</div>
           
        </form>
    )
}

function mapStateToProps(state){
    return {
        currentTodo: state.currentTodo,
        action: state.currentAction,
        validationMsg: state.validationMsg
    }
}

function mapDispatchToProps(dispatch){
    return {
        onChange: (e)=>{
          const action = {type: 'CHANGE', payload:{value:e.target.value}};
          dispatch(action);
        },
        onAddTodo: (e)=>{
            e.preventDefault();
            const action = {type: 'ADD'};
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoInputText);