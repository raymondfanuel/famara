<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import './BlogList.css'
import { server } from '../../port/server'
=======
import React, { useEffect, useState } from 'react';
import './BlogList.css';
>>>>>>> 3cdfc15052a204b2a33fc33d7566a448b35ffa02

const BlogList = ({ filterCategory }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
<<<<<<< HEAD
    setLoading(true) // show loading before fetching
    fetch(`${server}/posts`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
        setLoading(false) // hide loading after data arrives
        console.log(data)
      })
      .catch((err) => {
        console.error('Error fetching posts:', err)
        setLoading(false)
      })
  }, [])
=======
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch('http://localhost:5001/posts');
        const data = await res.json();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setLoading(false);
      }
    };
>>>>>>> 3cdfc15052a204b2a33fc33d7566a448b35ffa02

    fetchPosts();
  }, []);

  // Filter posts by category if filterCategory is provided
  const filteredPosts = filterCategory
    ? posts.filter(post => post.category.toLowerCase() === filterCategory.toLowerCase())
    : posts;

  return (
    <div className='blog-list'>
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading posts...</p>
        </div>
      ) : filteredPosts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        filteredPosts.map(({ id, title, category, file_name, author, content }) => (
          <div key={id} className='blog-card'>
            <h2>{title}</h2>
            <div className='post-picture'>
              <img src={`http://localhost:5001/uploads/${file_name[0]}`} alt={title} />
              <p>{category}</p>
            </div>
            <p className='post-content'>{content[0]}</p>
            <p className='post-author'>{author}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
