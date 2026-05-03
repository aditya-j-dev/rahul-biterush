import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AdminContext = createContext(null);

const AdminContextProvider = (props) => {

  // 🔥 IMPORTANT: PUT YOUR BACKEND URL HERE
  const url = "https://biterush-food-delivery.onrender.com"; 

  const [token, setToken] = useState(localStorage.getItem("adminToken") || "");
  const [user, setUser] = useState(null);

  // 🔹 Fetch admin/user info
  const loadUser = async () => {
    try {
      if (!token) return;
      const res = await axios.get(`${url}/api/user/profile`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.data.success) {
        setUser(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadUser();
  }, [token]);

  const value = {
    url,
    token,
    setToken,
    user,
    setUser
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;