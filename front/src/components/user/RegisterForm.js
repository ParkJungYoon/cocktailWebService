import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imgSrc from "./test.png";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";

import * as Api from "../../api";

function RegisterForm() {
  const navigate = useNavigate();

  //useState로 email 상태를 생성함.
  const [email, setEmail] = useState("");
  //useState로 password 상태를 생성함.
  const [password, setPassword] = useState("");
  //useState로 confirmPassword 상태를 생성함.
  const [confirmPassword, setConfirmPassword] = useState("");
  //useState로 name 상태를 생성함.
  const [name, setName] = useState("");

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
  // 비밀번호와 확인용 비밀번호가 일치하는지 여부를 확인함.
  const isPasswordSame = password === confirmPassword;
  // 이름이 2글자 이상인지 여부를 확인함.
  const isNameValid = name.length >= 2;

  // 위 4개 조건이 모두 동시에 만족되는지 여부를 확인함.
  const isFormValid =
    isEmailValid && isPasswordValid && isPasswordSame && isNameValid;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // "user/register" 엔드포인트로 post요청함.
      await Api.post("user/register", {
        email,
        password,
        name,
      });

      // 로그인 페이지로 이동함.
      navigate("/login");
    } catch (err) {
      console.log("회원가입에 실패하였습니다.", err);
    }
  };

  return (
    <Container>
      <Grid container spacing={1}>
        <Grid items xs={6}>
          <img src={imgSrc} alt="cocktail"></img>
        </Grid>
        <Grid items xs={6}>
          <form onsubmit={handleSubmit}>
            <Grid container justify="center" alignItems="center" spacing={2}>
              <Grid items xs={12}>
                <TextField
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
              <Grid items xs={12}>
                <TextField
                  required
                  variant="standard"
                  id="Password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-describedby="component-helper-text"
                />
                {!isPasswordValid && (
                  <FormHelperText id="component-helper-text">
                    비밀번호는 4글자 이상으로 설정해 주세요.
                  </FormHelperText>
                )}
              </Grid>
              <Grid items xs={12}>
                <TextField
                  required
                  variant="standard"
                  id="Password"
                  placeholder="Password 재확인"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  aria-describedby="component-helper-text"
                />
                {!isPasswordSame && (
                  <FormHelperText id="component-helper-text">
                    비밀번호가 일치하지 않습니다
                  </FormHelperText>
                )}
              </Grid>
              <Grid items xs={12}>
                <TextField
                  required
                  variant="standard"
                  id="name"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-describedby="component-helper-text"
                />
                {!isNameValid && (
                  <FormHelperText id="component-helper-text">
                    이름은 2글자 이상으로 설정해 주세요.
                  </FormHelperText>
                )}
              </Grid>
              <Grid items xs={4}></Grid>
              <Grid items xs={4}>
                <Button variant="text" type="submit" disabled={!isFormValid}>
                  회원가입
                </Button>
              </Grid>
              <Grid items xs={4}></Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default RegisterForm;
