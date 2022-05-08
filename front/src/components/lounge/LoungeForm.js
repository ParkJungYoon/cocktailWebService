import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  styled,
} from "@mui/material";
import * as Api from "../../api";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});
function LoungeForm({ userState, item, setIsForm, type }) {
  const [form, setForm] = useState({
    title: [item?.title] ? [item?.title] : "",
    content: [item?.content] ? [item?.content] : "",
    img: "",
  });

  //submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = makeForm();
    if (type === "add") {
      await Api.postForm("board", data).catch((err) => {
        console.log(err);
      });
      setIsForm(false);
    } else {
      await Api.putForm(`board/${item._id}`, data).catch((err) => {
        console.log(err.response);
      });
      setIsForm();
    }
  };
  //file change
  const handleFileChange = (e) => {
    setForm({ ...form, img: e.target.files[0] });
  };
  //form change
  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const makeForm = () => {
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("content", form.content);
    formData.append("img", form.img);
    return formData;
  };
  //enctype="multipart/form-data"
  return (
    <Container
      sx={{
        color: "white",
        bgcolor: "rgba(64,64,64,0.5)",
        width: "70vw",
        mt: 10,
        mx: "auto",
        mb: 30,
        p: 5,
      }}
    >
      <Box
        component="form"
        onSubmit={handleFormSubmit}
        enctype="multipart/form-data"
      >
        <Typography variant="h5" sx={{ my: "auto" }} component="span">
          Cocktail :
        </Typography>
        <CssTextField
          fullWidth
          type="text"
          name="title"
          label="title"
          value={form.title}
          onChange={handleFormChange}
          sx={{ bgcolor: "rgba(255,255,255,0.2)", mb: 3 }}
        />
        <Typography variant="h5" sx={{ my: "auto" }} component="span">
          Content :
        </Typography>
        <CssTextField
          multiline
          fullWidth
          type="text"
          name="content"
          label="content"
          value={form.content}
          onChange={handleFormChange}
          rows={10}
          sx={{ bgcolor: "rgba(255,255,255,0.2)", mb: 3 }}
        />
        <Typography variant="h5" sx={{ my: "auto" }} component="span">
          File :
        </Typography>
        <CssTextField
          fullWidth
          type="file"
          name="img"
          file={form.img}
          onChange={handleFileChange}
          sx={{ bgcolor: "rgba(255,255,255,0.2)", mb: 3 }}
        />
        <Box textAlign="right" sx={{ mt: 3 }}>
          <Button
            type="submit"
            sx={{ color: "white", border: "2px solid white", mr: 3 }}
          >
            Submit
          </Button>

          <Button
            onClick={() => {
              setIsForm(false);
            }}
            sx={{ color: "white", border: "2px solid white" }}
          >
            withdraw
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default LoungeForm;
