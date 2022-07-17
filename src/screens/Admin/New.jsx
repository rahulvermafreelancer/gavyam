import React, { useState } from "react";
import { db, storage } from "../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import {ref,getDownloadURL, uploadBytesResumable} from 'firebase/storage'

export const AddNews = () => {
  const [image, setImage] = useState(null );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [progresspercent, setProgresspercent] = useState(0);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "tasks"), {
        title: title,
        description: description,
        image: image,
        created: Timestamp.now(),
      });
      
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="addNews" name="addNews">
          <input
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value.toUpperCase())}
            value={title}
            placeholder="Enter title"
          />
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task decription"
            value={description}
          ></textarea>
          <input
            type="file"
            name="file"
            onChange={(e) => setImage()}
            value={image}
          />
          <button type="submit">Done</button>
        </form>
      </div>
    </>
  );
};
