import React, { useState, useEffect, useReducer, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as Api from "./api";
import axios from "axios";

import { loginReducer } from "./reducer";
import {
  UserContext,
  UserProvider,
} from "./components/user/reducer/userReducer";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Introduce from "./components/introduce/Introduce";
import Mypage from "./components/mypage/Mypage";
import Bookmark from "./components/mypage/Bookmark";
import Dictionary from "./pages/Dictionary";
import Like from "./components/mypage/Like";
import UserInfo from "./components/mypage/UserInfo";
import UserTab from "./components/mypage/UserTab";
import QuizPage from "./pages/QuizPage";

//JY
import SkeletonFunc from "./components/test/SkeletonFunc";
import TopTenSOTB from "./components/test/TopTenSOTB";

function App() {
  const { userState, userDispatch } = useContext(UserContext);
  // 아래의 fetchCurrentUser 함수가 실행된 다음에 컴포넌트가 구현되도록 함.
  // 아래 코드를 보면 isFetchCompleted 가 true여야 컴포넌트가 구현됨.
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);

  /* 1. access Token O, refresh Token O
      2. access Token X, refresh Token O
      3. access Token X, refresh Token X  ( 1_한번도 로그인 하지 않은 유저, 2_두 개의 토큰 기한이 만료된 유저)
      */
  const fetchCurrentUser = async () => {
    try {
      // 현재 유저 정보를 받아옴 (세션 유지)
      await Api.get("user/current")
        /*            1. access Token O, refresh Token O            */
        .then((res) => {
          console.log(
            "%c sessionStorage에 access토큰 있음.",
            "color: #d93d1a;"
          );
          const currentUser = res.data;

          // 로그인 성공 상태
          userDispatch({
            type: "LOGIN_SUCCESS",
            payload: currentUser,
          });
          // 유저 패치 성공 상태 (로그인)
          setIsFetchCompleted(true);
        })
        /*                        2/3. access Token X                     */
        .catch(async (err) => {
          console.log(err.message + " : accessToken만료");
          /*                          refresh 시도                              */
          await Api.get("refresh")
            /*            2. access Token X, refresh Token O         */
            .then((res) => {
              sessionStorage.setItem("userToken", res.data.data.accessToken);
              sessionStorage.setItem(
                "refreshToken",
                res.data.data.refreshToken
              );
              fetchCurrentUser(); //재발급받은 토큰으로 다시 fetch
            })
            /*            3. access Token X, refresh Token X  ( 1_한번도 로그인 하지 않은 유저, 2_두 개의 토큰 기한이 만료된 유저)          */
            .catch((err) => {
              console.log(err.message + " : refreshToken만료");
              //로그아웃 상태
              userDispatch({
                type: "LOGOUT",
              });
              // 유저 패치 성공 상태 (로그아웃)
              setIsFetchCompleted(true);
            });
        });
    } catch (err) {
      console.log(`%c err : ${err}`, "color: #d93d1a;");
    }
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
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/like" element={<Like />} />
        <Route path="/top10" element={<TopTenSOTB />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/usertab" element={<UserTab />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </Router>
  );
}

export default App;
