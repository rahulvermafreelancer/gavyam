import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import "./index.css";
import DeleteCaseStudies from "./DeleteCaseStudies";

const ListCaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const articleRef = collection(db, "Case Studies");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCaseStudies(articles);
    });
  }, []);

  return (
    <>
      {caseStudies.length === 0 ? (
        <h2>No Data found!!!</h2>
      ) : (
        caseStudies.map(
          ({
            id,
            title,
            description,
            imageUrl,
            createdAt,
            createdBy,
            userId,
          }) => (
            <div className="news-list-main" key={id}>
              <div className="list-items-news">
                <div className="image-div">
                  <img
                    src={imageUrl}
                    alt="title"
                    style={{ height: 180, width: 180, borderRadius: "50%" }}
                  />
                </div>
                <div className="text-box-news">
                  <h1 className="font-regular font-bold">{title}</h1>
                  <h3 className="font-regular">{description}</h3>
                  {createdBy && (
                    <span className="font-regular font-bold">{createdBy}</span>
                  )}
                  <p>{createdAt.toDate().toDateString()}</p>
                </div>
                <div className="delete-btn">
                  {user && user.uid === userId && (
                    <DeleteCaseStudies id={id} imageUrl={imageUrl} />
                  )}
                </div>
              </div>
            </div>
          )
        )
      )}
    </>
  );
};

export default ListCaseStudies;
