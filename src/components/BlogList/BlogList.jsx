import React, { useEffect, useState } from 'react'
import './BlogList.css'
import { server } from '../../port/server'

const BlogList = ({ filterCategory }) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true) //new state for loading

  useEffect(() => {
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

  // Filter posts if needed
  const filteredPosts = filterCategory
    ? posts.filter(post =>
        post.title.toLowerCase().includes(filterCategory.toLowerCase())
      )
    : posts

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
        filteredPosts.map(({id, title, category, file_name, author, content}) => (
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
  )
}

export default BlogList
