import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addhandler } from '../redux/actions'

function AddTask() {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()
  const addTask = () => {
    const newTodo = { text: input, id: Math.random() }
    dispatch(addhandler(newTodo))
    setInput("")

  }
  const styles = `
    .add-button {
      padding: 5px 10px;
      background-color: #28a745;
      color: white;
      border: none;
      border-radius: 5px;
    }

    .add-button:hover {
      background-color: #218838;
    }`;

  return (
    <div>
      <style>{styles}</style>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Add a task..."
      />
      <Button className="add-button" onClick={addTask}>Add Task</Button>
    </div>
  )
}

export default AddTask
