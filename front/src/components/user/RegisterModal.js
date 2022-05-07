import React, { useState } from "react";
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

function RegisterModal({ open, handleRegisterClose }) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
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
      await Api.post("register", {
        email,
        password,
        name,
      });
      handleRegisterClose();
      navigate("/", { replace: true });
    } catch (err) {
      enqueueSnackbar(`다른 이메일을 입력해주세요`);
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleRegisterClose}>
        <DialogTitle sx={{ bgcolor: "#212121", pt: 5, width: "552px" }}>
          <IconButton
            aria-label="close"
            onClick={handleRegisterClose}
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
              처음이신가요? 이쪽으로 안내해드릴게요.
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
              <FormHelperText
                id="component-helper-text"
                sx={{ color: "white" }}
              >
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
              <FormHelperText
                id="component-helper-text"
                sx={{ color: "white" }}
              >
                비밀번호는 4글자 이상입니다.
              </FormHelperText>
            )}
            <TextField
              required
              sx={{ mt: 2, bgcolor: "white" }}
              margin="dense"
              label="Password 재확인"
              type="password"
              fullWidth
              variant="filled"
              color="success"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {!isPasswordSame && (
              <FormHelperText
                id="component-helper-text"
                sx={{ color: "white" }}
              >
                비밀번호가 일치하지 않습니다
              </FormHelperText>
            )}
            <TextField
              sx={{ mt: 2, bgcolor: "white" }}
              required
              fullWidth
              label="Nickname"
              variant="filled"
              id="name"
              color="success"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-describedby="component-helper-text"
            />
            {!isNameValid && (
              <FormHelperText
                id="component-helper-text"
                sx={{ color: "white" }}
              >
                이름은 2글자 이상으로 설정해 주세요.
              </FormHelperText>
            )}
          </DialogContent>
          <DialogActions sx={{ bgcolor: "#212121", pb: 5 }}>
            <Button
              sx={{ bgcolor: "#615f5f", mx: "auto", color: "white" }}
              type="submit"
              disabled={!isFormValid}
            >
              회원가입
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
}

export default RegisterModal;
