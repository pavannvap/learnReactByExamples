import React from 'react';
import Columns from './UIComponents/Columns';
import AddTask from './UIComponents/AddTask';
import './App.css';

class KANBAN extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          columns:[
              {
                  name: 'Ready For Dev',
                  tasks: [
                      {task: 'task one'},
                      {task: 'task two'},
                  ]
              },
              {
                  name: 'In Dev',
                  tasks: [
                      {task: 'task three'},
                      {task: 'task four'},
                  ]
              },
              {
                  name: 'Ready For ShowCase',
                  tasks: [
                      {task: 'task five'},
                      {task: 'task six'},
                  ]
              },
              {
                  name: 'Ready For Release',
                  tasks: [
                      {task: 'task seven'},
                      {task: 'task eight'},
                      {task: 'task nine'},
                      {task: 'task ten'},
                  ]
              }
          ],
          isModalOpen: false
      }
  }
  handleMoveTasks = (columnIndex, taskIndex, direction) => {
      const dir = (direction === 'left') ? columnIndex-1 : columnIndex+1;
      const columns = this.state.columns;
      const getTask = columns[columnIndex].tasks.splice(taskIndex, 1);
      
      columns[dir].tasks.push(getTask[0]);
      this.setState({'columns': columns});
  }
  openModal = (columnIndex)=>{
      this.setState({'isModalOpen': true, 'currentAddColumnIndex': columnIndex});
  }
  closeModal = ()=>{
      this.setState({'isModalOpen': false});
  }
  addNewTask = (inputRef)=>{
      const val = inputRef.current.value;
      if(val){
          const columns = this.state.columns;
          columns[this.state.currentAddColumnIndex].tasks.push({task: val});
          this.setState({'columns': columns, 'isModalOpen': false});
      }
  }
  render(){
      const addTaskModal = this.state.isModalOpen ? <AddTask closeModal={this.closeModal} addNewTask={this.addNewTask}/> : null;
      return(
          <div className="app">
              {this.state.columns.map((column, index) => (
                  <Columns column={column} columnIndex={index} key={index} eligibleForLeftMove={index !== 0} eligibleForRightMove={index !== this.state.columns.length-1} moveTasks={this.handleMoveTasks} openModal={this.openModal} />
              ))}

              <div id="modal-container">
                  {addTaskModal}
              </div>    
          </div>
      )
  }
}

export default KANBAN;
