import React from "react";
import { db, storage } from "../../firebase";
import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";
import { deleteDoc, doc } from "firebase/firestore";

const DeleteArticles = ({ id, imageUrl }) => {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      try {
        await deleteDoc(doc(db, "Articles", id));
        toast("Articles deleted successfully", { type: "success" });
        const storageRef = ref(storage, imageUrl);
        await deleteObject(storageRef);
      } catch (error) {
        toast("Error deleting article", { type: "error" });
        console.log(error);
      }
    }
  };

  return (
    <div style={{ padding: 10 }}>
      <button onClick={handleDelete} style={{ cursor: "pointer" }}>
        Delete
      </button>
    </div>
  );
};

export default DeleteArticles;
