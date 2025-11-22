import React, { useEffect, useState } from "react";
import styles from "./Blog.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { server } from "../../port/server";

 
const Blog = () => {
    const { id} = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();
    useEffect( ()=>{
    const getPosts = async ()=>{
          try{
      const res = await fetch(`${server}/posts?id=${id}`);
    const result = await res.json();
    setPost(result);

    }
    catch(err){
        console.error(err);
    }

    }
    getPosts();
  
    
  }, [])

  if (!post) return <p>No blog found.</p>;

  return (
    <div className={styles.container}>
      <button onClick={()=>{navigate(`/`)}} className={styles.backBtn} >
        ← Back
      </button>

      <h1 className={styles.title}>{post[0].title}</h1>

      <div className={styles.meta}>
        <span>By {post[0].author || "Unknown"}</span>
        <span>•</span>
        <span>{ new Date(post[0].created_at).toLocaleString() || "No date"}</span>
      </div>
        {post[0].file_name.map((item, index)=>(
            <div key={index}>
              <img src={`${server}/uploads/${item}`} alt={post.title} className={styles.image} />

      <p className={styles.content}>{post[0].content[index]}</p>
            </div>
        ))}
    
    </div>
  );
};

export default Blog;
