import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const [getusers, setGetusers] = useState("");

  const getData = async () => {
    try {
      const getToken = localStorage.getItem("jwttoken");

      const getValue = await axios.get("", {
        headers: { Authorization: getToken },
      });

      setGetusers(getValue.data.Users);
    } catch (error) {
      alert(error.response.data.msg);
      navigate("/");
      localStorage.removeItem("jwttoken");
    }
  };

  return <div>Dashboard</div>;
};

export default Dashboard;
