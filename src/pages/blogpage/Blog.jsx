import React, { useEffect, useState } from "react";
import styles from "./Blog.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { server } from "../../port/server";

 
const Blog = ({postPage, setModalIsOpen}) => {
    const { id} = useParams();
    const navigate = useNavigate();
    if(!postPage){
      return(<p>No blog found</p>)
    }

  return (
    <div className={styles.container}>
      <button onClick={()=>{setModalIsOpen(false)}} className={styles.backBtn}  >
        ← Back
      </button>

      <h1 className={styles.title}>{postPage[0].title}</h1>

      <div className={styles.meta}>
        <span>By {postPage[0].author || "Unknown"}</span>
        <span>•</span>
        <span>{ new Date(postPage[0].created_at).toLocaleString() || "No date"}</span>
      </div>
        {postPage[0].file_name.map((item, index)=>(
            <div key={index}>
              <img src={`${server}/uploads/${item}`} alt={postPage.title} className={styles.image} />

      <p className={styles.content}>{postPage[0].content[index]}</p>
            </div>
        ))}
    
    </div>
  );
};

export default Blog;
