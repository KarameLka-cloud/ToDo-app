import React, { useState } from "react";
import PostForm_style from "./PostForm.module.css";

const PostForm = ({create}) => {
  const [title, setTitle] = useState('');

  const addNewTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title
    };
    create(newTask);
    setTitle('');
  };

  return(
    <div className={PostForm_style.item}>
      <input className={PostForm_style.input} type="text" placeholder="Введите задачу" onChange={e => setTitle(e.target.value)} value={title}/>
      <button className={PostForm_style.button} onClick={addNewTask}>+</button>
    </div>
  )
}

export default PostForm;
