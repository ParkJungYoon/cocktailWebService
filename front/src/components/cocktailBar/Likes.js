import { memo, useRef, useEffect, useState, useCallback } from "react";
import { Grid } from "@mui/material";

import useUserHook from "../commons/useUserHook";
import * as Api from "../../api";
import AllCardItem from "./AllCardItem";
import Loader from "./Loader";

function Likes() {
  // state
  const [cocktails, setCocktails] = useState([]);
  const [page, setPage] = useState(0);
  const [load, setLoad] = useState(false);
  const [preventRef, setPreventRef] = useState(true); //중복 실행 방지
  const [endRef, setEndRef] = useState(false); //모든 글 로드 확인

  const userState = useUserHook();
  const obsRef = useRef(null); //observer Element

  // Infinite Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, {
      threshold: 0.5,
      rootMargin: "15%",
    });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  const obsHandler = (entries) => {
    const target = entries[0];
    if (!endRef && target.isIntersecting && preventRef) {
      //옵저버 중복 실행 방지
      setPreventRef(false); //옵저버 중복 실행 방지
      setPage((prev) => prev + 1); //페이지 값 증가
    }
  };

  useEffect(() => {
    if (page !== 1) getPost();
  }, [page]);

  const getPost = useCallback(async () => {
    //글 불러오기
    setLoad(true); //로딩 시작
    // ---- Get Data Code ---
    if (userState.user) {
      const res = await Api.get(`cocktails/likeList`);
      if (res.data) {
        if (res.data.end) {
          //마지막 페이지일 경우
          setEndRef(true);
        }
        setCocktails((prev) => [...prev, ...res.data]); //리스트 배열에 추가
        setPreventRef(true);
      } else {
        console.log(res);
      }
    }

    setLoad(false); //로딩 종료
  }, [page]);
  return (
    <>
      <Grid container spacing={2} sx={{ px: 15 }}>
        {cocktails.map((cocktail, i) => {
          return (
            cocktail.isLiked && (
              <Grid key={i} item xs>
                <AllCardItem cocktail={cocktail} />
              </Grid>
            )
          );
        })}
        {load && <Loader />}
        <div ref={obsRef}></div>
      </Grid>
    </>
  );
}

export default memo(Likes);
