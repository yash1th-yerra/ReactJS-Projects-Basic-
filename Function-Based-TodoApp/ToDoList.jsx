import React,{useState} from "react"


function ToDoList(){
    const [tasks,setTasks] = useState([]);
    const [newTask,setNewTask] = useState("");
    const [isEditing, setIsEditing] = useState(null);
    const [editTask, setEditTask] = useState("");


    function handleInputChange(event){
        setNewTask(event.target.value);

    }
    function handleEditChange(event) {
        setEditTask(event.target.value);
      }

    function addTask(){
        if(newTask!=="" && newTask.trim()!==""){
            setTasks(t=> ([...t,newTask]));
            setNewTask("")
        }
    }

    function deleteTask(index){
        setTasks(t=> t.filter((_,i)=> i !== index));
    }

    function moveTaskUp(index){
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }

        
    }

    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }
    function startEditing(index) {
        setIsEditing(index);
        setEditTask(tasks[index]);
      }
    
      function cancelEditing() {
        setIsEditing(null);
        setEditTask("");
      }
    
      function saveTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index] = editTask;
        setTasks(updatedTasks);
        setIsEditing(null);
        setEditTask("");
      }






    return(
        <div className ="to-do-list">
            <h1>TO-DO-List</h1>
            <div>
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}>Add Task</button>
            </div>
            <ol>
                {tasks.map((task,index) => <li key={index}>
            {isEditing === index ? (
              <>
                <input type="text" value={editTask} onChange={handleEditChange} />
                <button className="save-button" onClick={() => saveTask(index)}>Save</button>
                <button className="cancel-button" onClick={cancelEditing}>Cancel</button>
              </>
            ) : (
              <>
                <span className="text">{task}</span>
                <button className="edit-button" onClick={() => startEditing(index)}>Edit</button>
                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                <button className="move-button" onClick={() => moveTaskUp(index)}>☝</button>
                <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
              </>
            )}
          </li>)}
            </ol>
        
            
        </div>


    );
}
export default ToDoList