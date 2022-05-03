import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  FormHelperText,
} from "@mui/material";
import "../../scss/Modal.scss";
import CloseIcon from "@mui/icons-material/Close";
import { UserContext } from "../user/reducer/userReducer";
import * as Api from "../../api";

export default function FormDialog({ open, handleLoginClose }) {
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
      // "/login" 엔드포인트로 post요청함.
      const res = await Api.post("login", {
        email,
        password,
      });
      console.log(res);

      // 유저 정보는 response의 data임.
      const user = res.data.discoveredUser;
      // JWT 토큰_access 은 유저 정보의 accessToken임.
      const jwtToken = res.data.accessToken;
      // sessionStorage에 "userToken"이라는 키로 JWT 토큰을 저장함.
      sessionStorage.setItem("userToken", jwtToken);
      //JWT 토큰_refresh 은 유저 정보의 refreshToken임
      const refreshToken = res.data.refreshToken;
      // JWT 토큰_refersh 은 유저 정보의 refreshToken 임.
      sessionStorage.setItem("refreshToken", refreshToken);

      // sessionStorage.setItem("");
      // dispatch 함수를 이용해 로그인 성공 상태로 만듦.
      userDispatch({
        type: "LOGIN_SUCCESS",
        payload: user,
      });
      handleLoginClose();
      // 기본 페이지로 이동함.
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dialog open={open} onClose={handleLoginClose}>
      <DialogTitle className="ModalTitle" width="552px" sx={{ pt: 5 }}>
        <IconButton
          aria-label="close"
          onClick={handleLoginClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent className="ModalContent">
          <DialogContentText
            align="center"
            style={{ color: "white", fontWeight: "bold" }}
          >
            저쪽 손님께서
            <br /> 보내신 겁니다
          </DialogContentText>

          <TextField
            required
            sx={{ mt: 5, bgcolor: "white" }}
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="filled"
            value={email}
            color="secondary"
            onChange={(e) => setEmail(e.target.value)}
          />
          {!isEmailValid && (
            <FormHelperText id="component-helper-text" sx={{ color: "white" }}>
              이메일 형식이 올바르지 않습니다.
            </FormHelperText>
          )}
          <TextField
            required
            sx={{ mt: 2, bgcolor: "white" }}
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            variant="filled"
            color="secondary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isPasswordValid && (
            <FormHelperText id="component-helper-text" sx={{ color: "white" }}>
              비밀번호는 4글자 이상입니다.
            </FormHelperText>
          )}
        </DialogContent>
        <DialogActions className="ModalButton" sx={{ pb: 5 }}>
          <Button
            className="Button"
            sx={{ mx: "auto" }}
            type="submit"
            disabled={!isFormValid}
          >
            Login
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
