import React from "react";
import PostItem_style from './PostItem.module.css';

const PostItem = ({task, number, remove}) => {
  return(
    <div className={PostItem_style.item}>
      <div className={PostItem_style.number}>{number}</div>
      <div className={PostItem_style.text}>{task.title}</div>
      <button className={PostItem_style.button}><img src="https://cdn-icons-png.flaticon.com/512/4021/4021663.png" alt="#" className={PostItem_style.bin} onClick={() => remove(task)}/></button>
    </div>
  )
}

export default PostItem;
