import React, { useEffect, useState } from 'react'
import './BlogList.css'

const BlogList = ({ filterCategory }) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true) //new state for loading

  useEffect(() => {
    setLoading(true) // show loading before fetching
    fetch('http://localhost:5011/api/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
        setLoading(false) // hide loading after data arrives
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
        filteredPosts.map((post) => (
          <div key={post.id} className='blog-card'>
            <h2>{post.title}</h2>
            <div className='post-picture'>
              <img src={post.images} alt={post.title} />
              <p>{post.category}</p>
            </div>
            <p className='post-content'>{post.content}</p>
            <p className='post-author'>{post.author}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default BlogList
