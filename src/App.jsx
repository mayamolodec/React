import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";

import ListQuizzes from "./components/ListQuizzes";
import QuizCard from "./components/QuizCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/quiz" element={<ListQuizzes />} />
        <Route path="/quiz/:id" element={<QuizCard />} />
        <Route path="/" element={<Navigate to="/quiz" replace />} />
      </Routes>
    </>
  )
}

export default App
