'use client'
import { useState } from "react"
import Navbar from "@/components/Navbar"
import Input from "@/components/Input"

export default function Home() {
  const [list, setList] = useState([])
  const [newTask, setNewTask] = useState("")
  const handleClick = () => {
    const task = {
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      taskName: newTask,
      complete: false
    }
    setList([...list, task])
  }
  const handleChange = (event) => {
    setNewTask(event.target.value)
  }
  const handleEdit = (id) => {

  }
  const handleComplete = (id) => {
    setList(list.map((task) => {
      if (task.id === id) {
        return { ...task, complete: !task.complete }
      } else
        return task
    }))
  }

  const handleDelete = (id) => {
    setList(list.filter((currTask) => id !== currTask.id))
  }

  return (
    <>
      <Navbar />
      <Input handleChange={handleChange} handleClick={handleClick} />
      <div className='m-2 p-2 mt-24'>
        <h1 className='text-center text-pink-500 font-extrabold'>YOUR TODOS:</h1>
        <div className="m-5 p-5">
          <table className="ml-96">
            {list.map((task) => {
              return (
                <tr key={task.id} className="flex m-2  justify-center">
                  <td>
                    {task.complete ?
                      <h1 className="font-bold m-2 p-2 bg-green-500 text-center line-through">{task.taskName}</h1>
                      : <h1 className="font-bold m-2 p-2 text-pink-500 text-center">{task.taskName}</h1>
                    }
                  </td>
                  <td>
                    <button className=" m-2 rounded-md p-2 text-white bg-pink-400" onClick={() => handleEdit(task.id)}>Edit</button>
                  </td>
                  <td>
                    {task.complete ?
                      <button className=" m-2 rounded-md p-2 text-white bg-pink-400 animate-pulse" onClick={() => handleDelete(task.id)}>Delete</button>
                      : <button className=" m-2 rounded-md p-2 text-white bg-pink-400 " onClick={() => handleDelete(task.id)}>Delete</button>

                    }
                  </td>
                  <td>
                    {task.complete ?
                      <button disabled className=" m-2 rounded-md p-2 text-white bg-green-400" onClick={() => handleComplete(task.id)}>Completed</button>
                      : <button className=" m-2 rounded-md p-2 text-white bg-pink-400" onClick={() => handleComplete(task.id)}>Complete</button>
                    }
                  </td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
    </>
  )
}
