import React, { useState, useEffect, useReducer, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as Api from "./api";
import { loginReducer } from "./reducer";

import Header from "./components/Header";
import LoginForm from "./components/user/LoginForm";
import RegisterForm from "./components/user/RegisterForm";
import Fullpage from "./components/Landingpage/Fullpage";
import Introduce from "./components/introduce/Introduce";
import Mypage from "./components/mypage/Mypage";
import Bookmark from "./components/mypage/Bookmark";
import Like from "./components/mypage/Like";
import UserInfo from "./components/mypage/UserInfo";
import UserTab from "./components/mypage/UserTab";
import QuizPage from "./components/quiz/QuizPage";

//JY
import SkeletonFunc from "./components/test/SkeletonFunc";
import LandingPage from "./components/test/LandingPage";
import TopTenSOTB from "./components/test/TopTenSOTB";

export const UserStateContext = createContext(null);
export const DispatchContext = createContext(null);

function App() {
  // useReducer 훅을 통해 userState 상태와 dispatch함수를 생성함.
  const [userState, dispatch] = useReducer(loginReducer, {
    user: null,
  });

  // 아래의 fetchCurrentUser 함수가 실행된 다음에 컴포넌트가 구현되도록 함.
  // 아래 코드를 보면 isFetchCompleted 가 true여야 컴포넌트가 구현됨.
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);

  const fetchCurrentUser = async () => {
    try {
      // 이전에 발급받은 토큰이 있다면, 이를 가지고 유저 정보를 받아옴.
      const res = await Api.get("user/current");
      const currentUser = res.data;

      // dispatch 함수를 통해 로그인 성공 상태로 만듦.
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: currentUser,
      });

      console.log("%c sessionStorage에 토큰 있음.", "color: #d93d1a;");
    } catch {
      console.log("%c SessionStorage에 토큰 없음.", "color: #d93d1a;");
    }
    // fetchCurrentUser 과정이 끝났으므로, isFetchCompleted 상태를 true로 바꿔줌
    setIsFetchCompleted(true);
  };

  // useEffect함수를 통해 fetchCurrentUser 함수를 실행함.
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  if (!isFetchCompleted) {
    return <SkeletonFunc />;
  }

  return (
    <DispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={userState}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact element={<Fullpage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/introduce" element={<Introduce />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/like" element={<Like />} />
            <Route path="/top10" element={<TopTenSOTB />} />
            <Route path="/userinfo" element={<UserInfo />} />
            <Route path="/usertab" element={<UserTab />} />
            <Route path="/quiz" element={<QuizPage />} />
          </Routes>
        </Router>
      </UserStateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
