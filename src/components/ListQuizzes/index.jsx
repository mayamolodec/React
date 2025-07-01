import * as React from "react"

// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
import { useGetQuizzesQuery } from "../../store/quizApi";
// import { useAuth } from "../../utils/auth";
import QuizButton from "../QuizButton";

import styles from "./ListQuizzes.module.scss"

export default function ListQuizzes() {
  // const navigate = useNavigate();
  // const token = useSelector((state) => state.auth.token);

  // // const isAuthenticated = useAuth();

  // // if (!isAuthenticated) {
  // //   navigate("quizes/sign-in");

  // //   return null;
  // // }

  const { data, isLoading, error } = useGetQuizzesQuery();

  if (isLoading) return <p>Loading quizzes...</p>;
  if (error) return <p>Error loading quizzes</p>;
  if (!data) return <p>No data found</p>;

  let score = "1/4"
  let questions = 4;

  const listQuizes = data.map(state => {

    let quizStatus = (questions === null) ? "Start" : "Restart";

    return (
      <>
        <QuizButton name={state.name} status={quizStatus} score={score} key={state._id} id={state._id} />
      </>
    );
  });

  return <div className={styles.container}>{listQuizes}</div>
}
