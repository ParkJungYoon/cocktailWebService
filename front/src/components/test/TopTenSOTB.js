// import React, { useState, useEffect } from "react";
// import {
//   Grid,
//   Container,
//   Box,
//   TextField,
//   Input,
//   InputLabel,
//   FilledInput,
//   FormControl,
//   FormHelperText,
//   Button,
//   Form,
//   Stack,
// } from "@mui/material";
// import Chart2 from "./Chart2";

// function TopTenSOTB() {
//   const [Cocktail, setCocktail] = useState({});
//   const [imgUrl, setUrl] = useState("");
//   useEffect(() => {
//     const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12754`;
//     fetchCocktail(endpoint);
//   }, []);

//   const fetchCocktail = (endpoint) => {
//     fetch(endpoint)
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res.drinks["0"]);
//         setUrl(res.drinks["0"]["strDrinkThumb"]);
//       });
//   };
//   return (
//     <>
//       <Stack justifyContent={"center"} alignItems={"center"}>
//         <Box>
//           <h1>TOPTEN - SOTB</h1>
//         </Box>
//         <Box>
//           <img src={imgUrl} alt="img" width={"300px"} />
//         </Box>
//         <Box>
//           <p>💖Likes......... 🛒bookMark..........</p>
//         </Box>
//         <Box>
//           <Chart2 props={Cocktail} />
//         </Box>
//         <Box>
//           <p>ㅠㅠㅠㅠㅠㅠㅠㅠ흑흑 어려워요 </p>
//           <br />
//           <p>asdlikjahkfhiuhlwkfhAUJFOHWlfiuayhfuyuil</p>
//         </Box>
//       </Stack>
//     </>
//   );
// }

// export default TopTenSOTB;
