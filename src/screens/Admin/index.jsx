import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import News from "./New";
import Articles from "./Article";
import CaseStudies from "./CaseStudy";

export const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  return (
    <>
      <div className="dasboard-main-container">
        <div className="dasboard-user-div">
          <div>
            <p className="font-regular">Logged In: </p>
          </div>
        </div>
        <div>
          <div className="user-details">
            <p className="font-regular">{name}</p>
            <p className="font-regular">{user?.email}</p>
          </div>
        </div>
        <div className="logout-btn">
          <div className="design-btn" onClick={logout}>
            <h6>Logout</h6>
          </div>
        </div>
      </div>
      <div className="tab-list-dashboard">
        <Tabs>
          <TabList>
            <Tab>News & More</Tab>
            <Tab>Articles</Tab>
            <Tab>Case Studies</Tab>
          </TabList>

          <TabPanel>
            <News />
          </TabPanel>
          <TabPanel>
            <Articles />
          </TabPanel>
          <TabPanel>
            <CaseStudies />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};
