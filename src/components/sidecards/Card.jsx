import React from 'react'
import styles from "./card.module.css";
import { server } from '../../port/server';

const Card = ({posts, timeAgo, Blogreview}) => {
  return (
    <div className={styles.side_cards}>
      {posts.map(({title, created_at, author, category, content, file_name, id }, i)=>(
        <div key={i} className={styles.card}>
            <h4>{title}</h4>
            <p className={styles.date}>{timeAgo(created_at)}</p>
            <div className={styles.cardContents}>
            <img src={`${server}/uploads/${file_name[0]}`} alt="img" />
            <div className={styles.content}>
                <p>{content[0].slice(0,70)}...</p>
                <button onClick={()=>{Blogreview(id)}}>See more..</button>
            </div>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Card
