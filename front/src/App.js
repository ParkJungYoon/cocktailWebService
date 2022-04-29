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

  const fetchCurrentUser = async () => {
    try {
      // 이전에 발급받은 토큰이 있다면, 이를 가지고 유저 정보를 받아옴.
      const res = await Api.get("user/current")
        //access 토큰 만료시
        .catch(async (err) => {
          console.log(err.message + " : accessToken만료");
          //access 토큰 재발급
          const foo = await Api.get("refresh")
            //refresh토큰도 만료되었을 경우, 다시 로그인 요청
            .catch((err) => {
              console.log(err.message + " : refreshToken만료");
              userDispatch({
                type: "LOGOUT",
              });
              console.log("logout, 재로그인 요청");
            });
          //access 재발급 완료
          sessionStorage.setItem("userToken", foo.data.data.accessToken);
          sessionStorage.setItem("refreshToken", foo.data.data.refreshToken);
          fetchCurrentUser();
        });
      //fetch성공
      console.log("fetch성공");
      console.log("%c sessionStorage에 access토큰 있음.", "color: #d93d1a;");
      const currentUser = res?.data;

      // dispatch 함수를 통해 로그인 성공 상태로 만듦.
      userDispatch({
        type: "LOGIN_SUCCESS",
        payload: currentUser,
      });
    } catch (err) {
      console.log(`%c err : ${err}`, "color: #d93d1a;");
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
