import { useState } from "react";
import './task.css';
import { useDispatch } from "react-redux";
import { addTask } from '../features/task/taskSlice'; 

const AddTask = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        dispatch(addTask(text));
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input 
                value={text}
                placeholder="Add a task" 
                onChange={(e) => setText(e.target.value)} 
                className="input" 
            />
            <button type="submit" className="button">Add</button>
        </form>
    );
};

export default AddTask;
