import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Container,
  Box,
  TextField,
  Input,
  InputLabel,
  FilledInput,
  FormControl,
  FormHelperText,
  Button,
  FormGroup,
} from "@mui/material";

import { UserContext } from "../user/reducer/userReducer";
import * as Api from "../../api";

function LoginForm() {
  const navigate = useNavigate();
  const { userState, userDispatch } = useContext(UserContext);

  //useState로 email 상태를 생성함.
  const [email, setEmail] = useState("");
  //useState로 password 상태를 생성함.
  const [password, setPassword] = useState("");

  //이메일이 abc@example.com 형태인지 regex를 이용해 확인함.
  const validateEmail = (email) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  //위 validateEmail 함수를 통해 이메일 형태 적합 여부를 확인함.
  const isEmailValid = validateEmail(email);
  // 비밀번호가 4글자 이상인지 여부를 확인함.
  const isPasswordValid = password.length >= 4;
  //
  // 이메일과 비밀번호 조건이 동시에 만족되는지 확인함.
  const isFormValid = isEmailValid && isPasswordValid;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // "user/login" 엔드포인트로 post요청함.
      const res = await Api.post("user/login", {
        email,
        password,
      });
      //유저 정보 확인용 (test)
      console.log(`console log res : ${res}`);
      // 유저 정보는 response의 data임.
      const user = res.data;
      // JWT 토큰은 유저 정보의 token임.
      const jwtToken = user.token;
      // sessionStorage에 "userToken"이라는 키로 JWT 토큰을 저장함.
      sessionStorage.setItem("userToken", jwtToken);

      /* sessionStorage에 'userRefreshToken'이라는 키로 JWT 토큰을 저장함..?
      sessionStorage.setItem('userRefreshToken',)*/

      // dispatch 함수를 이용해 로그인 성공 상태로 만듦.
      userDispatch({
        type: "LOGIN_SUCCESS",
        payload: user,
      });

      // 기본 페이지로 이동함.
      navigate("/", { replace: true });
    } catch (err) {
      console.log("로그인에 실패하였습니다.\n", err);
    }
  };

  return (
    <Container>
      <form onsubmit={handleSubmit}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              variant="standard"
              id="Email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="component-helper-text"
            />
            {!isEmailValid && (
              <FormHelperText id="component-helper-text">
                이메일 형식이 올바르지 않습니다.
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              variant="standard"
              id="Passwordl"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-describedby="component-helper-text"
            />
            {!isPasswordValid && (
              <FormHelperText id="component-helper-text">
                비밀번호는 4글자 이상입니다.
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            <Button variant="text" type="submit" disabled={!isFormValid}>
              로그인
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="text" onClick={() => navigate("/register")}>
              회원가입하기
            </Button>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default LoginForm;
