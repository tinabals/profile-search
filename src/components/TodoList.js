
//data source
const tasks = [
         {  id:1, 
            name:'Teach React'
        }, 
         {  id:2, 
            name: 'Teach Js'
        },
         {  id:3, 
            name:'Teach Html'
        }
]
const TodoList = () => {
   const renderTasks = tasks.map((item) => {
    return(
      <div className='task' key={item.id}>
        <span className='taskName'> 
          {item.name}
        </span>
        <div className='btn-grp'>
          <button className='edit-btn'>
            Edit
          </button>
          <button className='delete-btn'>
            Delete
          </button>
        </div>
   </div>
    )
   })
    return(
        <div className='tasks'>
          {renderTasks}
        </div>
    )
}

export default TodoList