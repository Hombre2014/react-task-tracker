// Using Hooks with useState
const Tasks = ({ tasks }) => {
  return (
    // To add a new tasks into the array, you do not use tasks.push(), but setTasks instead
    // setTasks([...tasks, {}])
    <>
      {tasks.map((task) => (<h3 key={task.id} >{task.text}</h3>))}
    </>
  )
}

export default Tasks;
