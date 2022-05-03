import React, { useState, useEffect, useReducer, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as Api from "./api";
import "./scss/index.scss";
import axios from "axios";

import { loginReducer } from "./reducer";
import {
  UserContext,
  UserProvider,
} from "./components/user/reducer/userReducer";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Introduction from "./pages/Introduction";
import Mypage from "./components/mypage/Mypage";
import Bookmark from "./components/mypage/Bookmark";
import CocktailBar from "./pages/CocktailBar";
import Like from "./components/mypage/Like";
import UserInfo from "./components/mypage/UserInfo";
import UserTab from "./components/mypage/UserTab";
import CocktailTest from "./pages/CocktailTest";
import LoungePage from "./pages/LoungePage";
import Mbti from "./components/mbti/Mbti";
import Quiz from "./components/quiz/Quiz";
import CellarPage from "./pages/CellarPage";

//JY
import SkeletonFunc from "./components/test/SkeletonFunc";
import AccountPage from "./pages/AccountPage";

function App() {
  const { userState, userDispatch } = useContext(UserContext);
  // 아래의 fetchCurrentUser 함수가 실행된 다음에 컴포넌트가 구현되도록 함.
  // 아래 코드를 보면 isFetchCompleted 가 true여야 컴포넌트가 구현됨.
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);

  const fetchCurrentUser = async () => {
    try {
      // 이전에 발급받은 토큰이 있다면, 이를 가지고 유저 정보를 받아옴.
      const res = await Api.get("user/current");
      console.log(res);
      const currentUser = res.data;

      // dispatch 함수를 통해 로그인 성공 상태로 만듦.
      userDispatch({
        type: "LOGIN_SUCCESS",
        payload: currentUser,
      });

      console.log("%c sessionStorage에 토큰 있음.", "color: #d93d1a;");
    } catch {
      console.log("%c SessionStorage에 토큰 없음.", "color: #d93d1a;");
      userDispatch({
        type: "LOGOUT",
      });
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
    <Router>
      <Header user={userState} />
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/cocktailBar" element={<CocktailBar />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/like" element={<Like />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/usertab" element={<UserTab />} />
        <Route path="/cocktailTest" element={<CocktailTest />} />
        <Route path="/lounge" element={<LoungePage />} />
        <Route path="/cocktailTest/mbti" element={<Mbti />} />
        <Route path="/cocktailTest/quiz" element={<Quiz />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/cellar" element={<CellarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
