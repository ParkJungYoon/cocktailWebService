import React, { useState, useEffect } from "react";
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
  Form,
  Stack,
} from "@mui/material";
import Chart2 from "./Chart2";
import * as Api from "../../api";
import styles from "./detailCocktail.module.scss";

function TestDetailCocktail({ opendedCocktail, setIsDetailOpen }) {
  const name = opendedCocktail.name;
  const imgUrl = opendedCocktail.img;
  const ingredient = opendedCocktail.ingredient;

  useEffect(() => {
    Api.get("/rank10").then((res) => {
      const data = res.data;
    });
  }, [opendedCocktail]);

  const handleButton = () => {
    setIsDetailOpen(false);
  };

  return (
    <>
      <Stack className={styles.container}>
        <Grid></Grid>
        <Box>
          <h1>{name}</h1>
        </Box>
        <Box>
          <img src={imgUrl} alt="img" width={"300px"} />
        </Box>
        <Box>
          <p>ingredient : {ingredient}</p>
        </Box>
        <Box>
          <Chart2 />
        </Box>
        <Box>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est hic
            autem blanditiis repellat? Explicabo quod adipisci, optio eveniet
            soluta ad officiis eum eaque cum numquam porro iste molestiae alias
            voluptates!
          </p>
        </Box>
        <Box>
          <button onClick={handleButton}> Close</button>
        </Box>
      </Stack>
    </>
  );
}

export default TestDetailCocktail;
