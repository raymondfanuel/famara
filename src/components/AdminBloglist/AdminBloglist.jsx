import React, { useState, useEffect } from 'react'
import { server } from '../../port/server';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useContext } from 'react';
import { Mycontext } from '../../Mycontext';
import { useNavigate } from 'react-router-dom';
import styles from './AdminBloglist.module.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { toast } from 'react-toastify';


const MySwal = withReactContent(Swal);



const AdminBloglist = () => {
    const [post, setPosts] = useState(null);
    const [postPage, setPostPage] = useContext(Mycontext);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
     useEffect(() => {
        const fetchPosts = async () => {
          try {
            setLoading(true);
            const res = await fetch(`${server}/posts`);
            const data = await res.json();
            setPosts(data);
            setLoading(false);
          } catch (err) {
            console.error('Error fetching posts:', err);
            setLoading(false);
          }
        };
    
        fetchPosts();
        Aos.init({duration: 800, once: true});
    
      }, []);
       const timeAgo = (date)=>{
      const now = new Date();
      const past = new Date(date)
      const diff = now - past;
      const seconds = Math.floor(diff/1000);
      const minutes = Math.floor(diff/60000);
      const hours = Math.floor(diff/3600000);
      const days = Math.floor(diff/86400000);
      const months = Math.floor(days/30);
      const years = Math.floor(days/365);

      if(seconds<60) return `${seconds} second${seconds === 1? "" : "s"} ago`;
      if(minutes<60)return `${minutes} minute${minutes ===1? "" : "s"} ago`;
      if(hours<24) return`${hours} hour${hours===1? "":"s"} ago`;
      if(days<30) return `${days} day${days===1? "":"s"} ago`;
      if(months<12) return `${months} month${seconds ===1? "":"s"} ago`;
      return `${years} year${years===1? "":"s"} ago`;
    }
    const handleDelete = async (id) => {
  MySwal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
   const res = await fetch(`${server}/posts/${id}`, { method: "DELETE" });

     if (res.ok) {
      setPosts((prev) => prev.filter((p) => p.id !== id));
      toast.success("Post deleted successfully");
    } else {
       toast.error("Failed to delete post");
    }
  } catch (err) {
    console.error("Delete error:", err);
   }

    } else {
      console.log('Cancelled');
    }
  })


   
};

     const Blogreview = (id)=>{
   const result = post.filter((posts)=> posts.id === id);
   setPostPage(result);
   navigate(`/blog`);
  }

      if(!post) return(<p>no posts found....</p>)
    
  return (
    <div>
    <div className={styles.blog_list} >
          {loading ? (
            <div className={styles.loading_spinner}>
              <div className={styles.spinner}></div>
              <p>Loading posts...</p>
            </div>
          ) : post.length === 0 ? (
            <p>No posts found.</p>
          ) : (
         post.map(({ id, title, created_at, file_name, author, content }) => (
  <div key={id} className={styles.blog_card}  >
    
    <div className={styles.post_picture}>
      <img src={`${server}/uploads/${file_name[0]}`} alt={title} />
      <span className={styles.time}>{timeAgo(created_at)}</span>
    </div>

    <div className={styles.post_content}>
      <h2>{title}</h2>

      <p>{content[0].slice(0, 80)}...</p>

      <div className={styles.card_actions}>
        <button className={styles.view_btn} onClick={() => Blogreview(id)}>
          View
        </button>

        <button 
          className={styles.delete_btn}
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      
      </div>
    </div>
      
  </div>
))

          )}
        </div>
    </div>
  )
}

export default AdminBloglist
