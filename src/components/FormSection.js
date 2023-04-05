 import { useState }  from 'react'
    const FormSection = () => {
        const [newTask, setNewTask] = useState("")
        const handleChange = (event) => {
            const taskName = event.target.value
            console.log(taskName)
            setNewTask(taskName)
        }
        return(
            <div className='newtask'> 
                <input type='text' placeholder='Add a task' value={newTask} onChange={handleChange}/> 
                <button className='push'> Add </button>
            </div>
            )
        }
        
        export default FormSection