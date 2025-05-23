import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";

import ListQuizzes from "./components/ListQuizzes";
import QuizCard from "./components/QuizCard";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/quizzes" element={<ListQuizzes />} />
        <Route path="/signup" element={< RegisterForm />} />
        <Route path="/quizzes/:id" element={<QuizCard />} />
        <Route path="/" element={<Navigate to="/quizzes" replace />} />
        <Route path="*" element={<Navigate to="/quizzes" replace />} />
      </Routes>
    </>
  )
}

export default App
