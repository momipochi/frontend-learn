import { useState, useEffect } from "react"
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

const App= () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    

    getTasks();
  }, []);

//get tasks
const getTasks = async () => {
  const tasksFromServer = await fetchTasks();
  console.log(tasksFromServer);
  setTasks(tasksFromServer);
}

//fetch tasks
const fetchTasks = async () => {
  const res = await fetch("http://localhost:5000/tasks")
  const data = await res.json();
  
  return data
}

//add task
const addTask = async (task) => {
  // const newTask = {id:tasks.length+2, ...task};
  // console.log(newTask);
  // setTasks([...tasks,newTask])
  const res = await fetch("http://localhost:5000/tasks", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(task)
  })

  const data = await res.json();
  
  setTasks([...tasks,data])
}

//delete task
const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method: "DELETE"
  });

  setTasks(tasks.filter((task)=>task.id !== id))
}


//get single task
const getSingleTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`);
  return await res.json();
}

//toggle reminder
const toggleReminder = async (id) => {
  // setTasks(
  //   tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
  // )
  // console.log(tasks[id-1])
  
  const taskToToggle = await getSingleTask(id);
  const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder};

  const res = await fetch(`http://localhost:5000/tasks/${id}`,{
    method: "PUT",
    headers:{
      "Content-type": "application/json"
    },
    body: JSON.stringify(updateTask)
  });

  const data = await res.json();

  setTasks(
    tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task)
  )
  console.log('updated');
}

  return (
    <Router>
      <div className="container">
        <Header showAdd={showAddTask} onAdd={()=>setShowAddTask(!showAddTask)}/>

        

        <Route path="/" exact render={(props)=>(
          <>
            {showAddTask && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>: 'No Tasks'}
          </>
        )}/>
        <Route path="/about" component={About}/>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;


//stopped at 1:20:43