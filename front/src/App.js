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
/* mbti result page */
import ResultISTJ from "./components/mbti/ResultISTJ";
import ResultISTP from "./components/mbti/ResultISTP";
import ResultISFJ from "./components/mbti/ResultISFJ";
import ResultISFP from "./components/mbti/ResultISFP";
import ResultINTJ from "./components/mbti/ResultINTJ";
import ResultINTP from "./components/mbti/ResultINTP";
import ResultINFJ from "./components/mbti/ResultINFJ";
import ResultINFP from "./components/mbti/ResultINFP";
import ResultESTJ from "./components/mbti/ResultESTJ";
import ResultESTP from "./components/mbti/ResultESTP";
import ResultESFJ from "./components/mbti/ResultESFJ";
import ResultESFP from "./components/mbti/ResultESFP";
import ResultENTJ from "./components/mbti/ResultENTJ";
import ResultENTP from "./components/mbti/ResultENTP";
import ResultENFJ from "./components/mbti/ResultENFJ";
import ResultENFP from "./components/mbti/ResultENFP";

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

  const mbtiRoutes = [
    {
      path: "/cocktailTest/mbti/ISTJ",
      element: <ResultISTJ />,
    },
    {
      path: "/cocktailTest/mbti/ISTP",
      element: <ResultISTP />,
    },
    {
      path: "/cocktailTest/mbti/ISFJ",
      element: <ResultISFJ />,
    },
    {
      path: "/cocktailTest/mbti/ISFP",
      element: <ResultISFP />,
    },
    {
      path: "/cocktailTest/mbti/INTJ",
      element: <ResultINTJ />,
    },
    {
      path: "/cocktailTest/mbti/INTP",
      element: <ResultINTP />,
    },
    {
      path: "/cocktailTest/mbti/INFJ",
      element: <ResultINFJ />,
    },
    {
      path: "/cocktailTest/mbti/INFP",
      element: <ResultINFP />,
    },
    {
      path: "/cocktailTest/mbti/ESTJ",
      element: <ResultESTJ />,
    },
    {
      path: "/cocktailTest/mbti/ESTP",
      element: <ResultESTP />,
    },
    {
      path: "/cocktailTest/mbti/ESFJ",
      element: <ResultESFJ />,
    },
    {
      path: "/cocktailTest/mbti/ESFP",
      element: <ResultESFP />,
    },
    {
      path: "/cocktailTest/mbti/ENTJ",
      element: <ResultENTJ />,
    },
    {
      path: "/cocktailTest/mbti/ENTP",
      element: <ResultENTP />,
    },
    {
      path: "/cocktailTest/mbti/ENFJ",
      element: <ResultENFJ />,
    },
    {
      path: "/cocktailTest/mbti/ENFP",
      element: <ResultENFP />,
    } /* And so on. */,
  ];
  const mbtiRouteComponents = mbtiRoutes.map(({ path, element }, key) => (
    <Route exact path={path} element={element} key={key} />
  ));

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
        {mbtiRouteComponents}
      </Routes>
    </Router>
  );
}

export default App;
