
import React from 'react'
import { deleteHandler } from '../redux/actions'
import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';

function Task({ task }) {
  const dispatch = useDispatch()

  const deleteHand = () => {
    dispatch(deleteHandler(task.id))
  }


  return (
    <div>
      <h1> {task.text}</h1>
      <Button onClick={deleteHand}>Delete</Button>
    </div>
  )
}

export default Task
