import React, { useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "./../../firebase";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import "./index.css";
import ListNews from "./ListNews";


const AddNews = () => {
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    createdBy: "",
    createdAt: Timestamp.now().toDate(),
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!formData.title || !formData.description || !formData.image || !formData.createdBy) {
      alert("Please fill all the fields");
      return;
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          title: "",
          description: "",
          image: "",
          createdBy: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "News");
          addDoc(articleRef, {
            title: formData.title,
            description: formData.description,
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
            createdBy: formData.createdBy,
            userId: user.uid,
          })
            .then(() => {
              toast("News added successfully", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding news", { type: "error" });
            });
        });
      }
    );
  };

  return (
    <>
      <div className="news-main-container">
        <div className="left-box">
          <h2 className="font-regular font-bold text-center">
            Create News & More
          </h2>
          <div className="news-input-div">
            <label className="font-regular font-bold">Title</label>
            <input
              type="text"
              name="title"
              className="form-control-news"
              value={formData.title}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="news-input-div">
            <label className="font-regular font-bold">Description</label>
            <textarea
              type="text"
              name="description"
              className="form-control-news"
              value={formData.description}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="news-input-div">
            <label className="font-regular font-bold">Created By</label>
            <input
              type="text"
              name="createdBy"
              className="form-control-news"
              value={formData.createdBy}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="news-input-div">
            <label className="font-regular font-bold">Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="form-control-news"
              onChange={(e) => handleImageChange(e)}
            />
          </div>

          {progress === 0 ? null : (
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped mt-2"
                style={{ width: `${progress}%` }}
              >
                {`uploading image ${progress}%`}
              </div>
            </div>
          )}

          <button className="login-btn news-btn" onClick={handlePublish}>
            Publish
          </button>
        </div>
        <div className="right-box">
          <ListNews />
        </div>
      </div>
    </>
  );
};

export default AddNews;
