import React, { useEffect, useState } from 'react';
import './BlogList.css';
import { server } from '../../port/server';
import Card from '../sidecards/Card';
import { Slider } from 'infinite-react-carousel';
import Aos from 'aos';
import "aos/dist/aos.css";

const BlogList = ({ filterCategory }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sideCards, setSidecards] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${server}/posts`);
        const data = await res.json();
        setPosts(data);
        setSidecards(data.slice(0, 3))
        setLoading(false);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setLoading(false);
      }
    };

    fetchPosts();
    Aos.init({duration: 800, once: true});

  }, []);

  // Filter posts by category if filterCategory is provided
  const filteredPosts = filterCategory
    ? posts.filter(post => post.category.toLowerCase() === filterCategory.toLowerCase())
    : posts;
    const duplicated = [...filteredPosts, filteredPosts];
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

 return (
  <div className='main-blog'>
    <div className='heading'><h2>HABARI ZA HIVI PUNDE</h2></div>
    
    <div className='blog-top'>
      <div className='top'>
        <Slider className='slider' autoplay infinite>
{loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading posts...</p>
        </div>
      ) : filteredPosts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.slice(0, 5).map(({title, content, created_at, file_name, author, id })=>(
           <div className='main-card'>
           <div className='post-picture'>
              <img src={`${server}/uploads/${file_name[0]}`} alt={title} />
              <p>{timeAgo(created_at)}</p>
            </div>
            <div className='post-content'>
               <h2>{title}</h2>
             <p> {content[0].slice(0, 50)}... </p>
              <div> <button>see more...</button></div>
            </div>
        </div>
        ))
       
      )}
        </Slider>
      <Card posts = {sideCards} timeAgo={timeAgo}/>
      </div>
       <div className='blog-list'>
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading posts...</p>
        </div>
      ) : filteredPosts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        filteredPosts.map(({ id, title, created_at, file_name, author, content }, index) => (
          <div key={id} className='blog-card' data-aos= "flip-up" >
            <div className='post-picture'>
              <img src={`${server}/uploads/${file_name[0]}`} alt={title} />
              <p>{timeAgo(created_at)}</p>
            </div>
            <div className='post-content'>
               <h2>{title}</h2>
             <p> {content[0].slice(0, 50)}... </p>
              <div> <button>see more...</button></div>
            </div>
          </div>
        ))
      )}
    </div>
    </div>
  </div>
);

};

export default BlogList;
