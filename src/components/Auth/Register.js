import React, { useState } from "react";
import axios from "axios";
import { REGISTER, baseUrl } from "../../Api/Api";
import "../../CSS/components/form.css";
import "../../CSS/components/button.css";
import "../../CSS/components/alert.css";
import Loading from "../Loading/loading";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // تحديث استخدام حالة الخطأ
  const [loading, setLoading] = useState(false);
  const handleChanage = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${baseUrl}/${REGISTER}`, form); // استخدام العنوان الأساسي للخادم من ملف Api.js
      window.location.pathname = "/";
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err.response.status === 422) {
        setError("Email is already been taken");
      } else {
        setError("Internal Server Err");
      }
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className="container">
        <div className="row h-100">
          <form className="form" onSubmit={handleSubmit}>
            <div className="custom-form">
              <h1>Register Now</h1>
              <div className="form-control">
                <div className="mb-3">
                  <input
                    value={form.name}
                    id="name"
                    type="text"
                    placeholder="Enter Your name..."
                    onChange={handleChanage}
                    name="name"
                    required
                  />
                  <label htmlFor="name">Name</label>
                </div>
              </div>
              <div className="form-control">
                <div className="mb-3">
                  <input
                    value={form.email}
                    id="email"
                    type="email"
                    placeholder="Enter Your email..."
                    name="email"
                    onChange={handleChanage}
                    required
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="form-control">
                <div className="mb-3">
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter Your password..."
                    value={form.password}
                    name="password"
                    onChange={handleChanage}
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <button className="btn btn-primary" type="submit">
                Register
              </button>
              {error !== "" && <span className="error">{error}</span>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

 