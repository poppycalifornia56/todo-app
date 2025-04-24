import { useParams } from 'react-router-dom'
import tasks from '../data/tasks.json'

function ItemDetails() {
  const { id } = useParams()
  const task = tasks.find(task => task.id === parseInt(id))

  if (!task) {
    return <div>Item not found</div>
  }

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.completed ? 'Completed' : 'Not Completed'}</p>
    </div>
  )
}

export default ItemDetails