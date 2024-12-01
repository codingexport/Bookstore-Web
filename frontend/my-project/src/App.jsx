import React from 'react'
import Home from './components/Home/Home'
import { Route, Routes } from "react-router-dom";
import Courses from './components/courses/Courses';
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Signup from './components/Signup';
import { Navigate } from "react-router-dom";

export default function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/Signup" />}
          />
          <Route path="/Signup" element={<Signup />} />


        </Routes>
        <Toaster />
      </div>
    </>
  )
}
