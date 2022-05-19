import React from "react";
import PostList_style from "./PostList.module.css";
import PostItem from "./PostItem";

const PostList = ({tasks, remove}) => {
  return(
    <div className={PostList_style.item}>
      {tasks.length !== 0
      ? tasks.map((task, number) => 
        <PostItem task={task} number={number + 1} remove={remove} key={task.id}/>
      )
      : <div className={PostList_style.none}>Задач нет ¯\_(ツ)_/¯</div>}
    </div>
  )
}

export default PostList;
