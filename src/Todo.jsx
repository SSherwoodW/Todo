import { useState } from "react";

function Todo({ id = "1", task = "default", remove, update }) {
    const [editTask, setEditTask] = useState(task)
    const [isEditing, setIsEditing] = useState(false)

    const toggleEdit = () => {
        setIsEditing(edit => !edit)
    }

    const handleDelete = () => remove(id)
    
    const handleChange = evt => {
    setEditTask(evt.target.value);
    };
    
    const handleUpdate = evt => {
        evt.preventDefault();
        update(id, editTask);
        setIsEditing(false);
    };
      // default todo view
  let render = (
    <div>
      <li>{task}</li>
      <button onClick={toggleEdit}>Edit</button>
      <button onClick={handleDelete}>X</button>
    </div>
  );
    
    if (isEditing) {
        render = (
            <div>
                <form onSubmit={handleUpdate}>
                    <input type="text" value={editTask} onChange={handleChange} />
                    <button>Update Todo</button>
                </form>
            </div>
        )
    }

    return render;
}

export default Todo;