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
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackbar } from "notistack";

import * as Api from "../../api";
import { UserContext } from "../user/reducer/userReducer";

export default function FormDialog({ open, handleLoginClose }) {
  const navigate = useNavigate();
  const { userState, userDispatch } = useContext(UserContext);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

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
      enqueueSnackbar("Login Failed");
    }
  };

  return (
    <Dialog open={open} onClose={handleLoginClose}>
      <DialogTitle width="552px" sx={{ pt: 5, bgcolor: "#212121" }}>
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
      <Box component="form" onSubmit={handleSubmit}>
        <DialogContent sx={{ bgcolor: "#212121" }}>
          <DialogContentText
            align="center"
            sx={{ color: "white", fontWeight: "bold", mb: 3 }}
          >
            저쪽 손님께서
            <br /> 보내신 겁니다
          </DialogContentText>
          <DialogContentText align="center" sx={{ color: "#6EC860" }}>
            어서 오세요. 저희 서비스와 함께 다양한 칵테일을 알아보러 가볼까요?
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
            color="success"
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
            color="success"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isPasswordValid && (
            <FormHelperText id="component-helper-text" sx={{ color: "white" }}>
              비밀번호는 4글자 이상입니다.
            </FormHelperText>
          )}
        </DialogContent>
        <DialogActions sx={{ pb: 5, bgcolor: "#212121" }}>
          <Button
            sx={{ mx: "auto", bgcolor: "#615f5f", color: "white" }}
            type="submit"
            disabled={!isFormValid}
          >
            Login
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
