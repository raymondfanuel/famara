import React, { useState } from "react";
import axios from "axios";
 import styles from "./AdminPostForm.module.css";
import { server } from "../../port/server";

export default function AdminPostForm() {

const [images, setImages] = useState([{  caption: "" }]);




const addImageField = () => { 
  setImages([...images, {  caption: "" }]); 
};

const handleSubmit = async (e) => {
   e.preventDefault();
const form = e.target;
  const formData = new FormData(form); 
  
 const res =  await axios.post(`${server}/form`, formData, {"content-type" : "multipart/form-data"});
  
alert(res.data.message)

};

return ( <div className={styles.adminContainer}>
   <form onSubmit={handleSubmit} className={styles.adminForm}> <h2>Create New Post</h2>

<div className={styles.formGroup}>
      <label>Title</label>
      <input type="text" name="title" />
    </div>

    <div className={styles.formGroup}>
      <label>Author</label>
      <input type="text" name="author" />
    </div>

    <div className={styles.formGroup}>
      <label>Category</label>
      <select name="category">
        <option value="habari">Habari</option>
        <option value="siasa">Siasa</option>
        <option value="michezo">Michezo</option>
        <option value="burudani">Burudani</option>
      </select>
    </div>

    <div className={styles.imageSection}>
      <label className={styles.imageLabel}>Images</label>

      {images.map((img, index) => (
        <div key={index} className={styles.imageBlock}>
          <label>Upload Image {index + 1}</label>
          <input type="file" name="images" />

          <label>content</label>
          <textarea name="content"></textarea>
        </div>
      ))}

      <button type="button" onClick={addImageField} className={styles.addImageBtn}>
        + Add Another Image
      </button>
    </div>

    <button type="submit" className={styles.submitBtn}>Publish Post</button>
  </form>
</div>

); }