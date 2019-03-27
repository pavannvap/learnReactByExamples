import { createStore } from 'redux';

const initialState = {
    validationMsg: '',
    currentAction: 'ADD',
    currentTodo: '',
    todos: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'CHANGE':
            const todo = action.payload.value
            return {...state, ...{currentTodo: todo}};
        case 'ADD':
            if(state.currentTodo.trim() !== ""){    
                if(state.currentAction === 'ADD'){
                    const todos = [];
                    const todoObj = {
                        id: state.todos.length,
                        todoItem: state.currentTodo,
                        completed: false
                    }
                    todos.push(todoObj);
                    const extendedtodos =  [...state.todos, ...todos];
                    return {...state, ...{todos: extendedtodos, currentTodo: '', validationMsg: ''}};
                }else if (state.currentAction === 'UPDATE') {
                    debugger;
                    const updateditems =  state.todos.map((todo) =>{
                        return todo.id === state.curIndex ? { ...todo, todoItem: state.currentTodo } : todo
                    });
                    return {...state, ...{todos: updateditems, currentTodo: '', currentAction: 'ADD'}};
                }
            }else{
                return {...state, validationMsg: 'Please enter your todo'};
            }
        case 'UPDATE':
            const updateval = state.todos[action.index].todoItem;
            return {...state, ...{currentTodo: updateval, currentAction: 'UPDATE', curIndex: action.index,  validationMsg: ''}}
        case 'DELETE':
            const allTodoitems = state.todos;
            const filteredItems = allTodoitems.filter((todo)=>{
                return todo.id !== action.index
            });
            return {...state, ...{todos: filteredItems}};
        case 'COMPLETED':
            const completeditems =  state.todos.map((todo) =>{
                return todo.id === action.index ? { ...todo, completed: !todo.completed } : todo
            });
            return {...state, ...{todos: completeditems}};
        default:
            return state
    }
}

const store = createStore(reducer);

export default store;
