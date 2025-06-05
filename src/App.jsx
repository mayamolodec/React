import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";

import ListQuizzes from "./components/ListQuizzes";
import QuizCard from "./components/QuizCard";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/quizes" element={<ListQuizzes />} />
        <Route path="/signup" element={< RegisterForm />} />
        <Route path="/quizes/:id" element={<QuizCard />} />
        <Route path="/" element={<Navigate to="/quizes" replace />} />
        <Route path="*" element={<Navigate to="/quizes" replace />} />
      </Routes>
    </>
  )
}

export default App
