import { memo, useRef, useEffect, useState, useCallback } from "react";
import { Grid } from "@mui/material";

import * as Api from "../../api";
import CardSearch from "./CardSearch";
import AllPosts from "./AllPosts";
import AllSortButton from "./AllSortButton";
import Loader from "./Loader";

function AllCard() {
  // state
  const [cocktails, setCocktails] = useState([]);
  const [page, setPage] = useState(0);
  const [load, setLoad] = useState(false);
  const [preventRef, setPreventRef] = useState(true); //중복 실행 방지
  const [endRef, setEndRef] = useState(false); //모든 글 로드 확인
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
    const res = await Api.get(`cocktails/page/${page}`);
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
    setLoad(false); //로딩 종료
  }, [page]);

  return (
    <>
      <Grid container sx={{ ml: "auto", pr: 15, mb: 4 }} spacing={3}>
        <Grid item xs>
          <CardSearch setCocktails={setCocktails} />
        </Grid>
        <Grid item xs={3}>
          <AllSortButton cocktails={cocktails} setCocktails={setCocktails} />
        </Grid>
      </Grid>

      <Grid container spacing={1} sx={{ px: 15 }}>
        {cocktails && <> {<AllPosts cocktails={cocktails} />}</>}
        {load && <Loader />}
        <div ref={obsRef}></div>
      </Grid>
    </>
  );
}

export default memo(AllCard);
