import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

function ListTask() {
  const tasks = useSelector(state => state.tasks);

  const taskStyle = {
    display:'flex',
    backgroundColor: '#3205',
    border: '1px solid #ddd',
    padding: '50px',
    margin: '50px',
    borderRadius: '10px',
    flexDirection: 'column',
    alignItems: 'center',
  };



  return (
    <div>
      {
        tasks.map((el, key) => (
          <div key={el.id} style={taskStyle}>
            <Task task={el} />

          </div>
        )
        )
      }
    </div>
  );
}

export default ListTask;

