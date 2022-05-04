/**
 * * 이미지 헨들링 예시
 * * 해당 Router는 어디까지나 예시입니다. 실제로 사용하진 않습니다.
 */

 import { Router } from "express";
 import { verifyToken } from "../middlewares/verifyToken";
 
 const photoReview = Router();
 
 //todo: 추가해야 할 라이브러리
 import { ImageModel } from "../db";
 import { storage } from "../db/models/Image";
 import multer from 'multer';
 
 //todo: 추가해야 될 코드
 const upload = multer({ storage: storage });
 
 //todo: 추가해야 할 미들웨어 => upload.array('img')
 // 예시 => 포토리뷰 생성 API
 // 따로 이미지 저장 API가 없으며 전부 미들웨어에서 처리
 photoReview.post("/review", verifyToken, upload.array('img'), async (req, res, next) => {
   try {
     // 아래에 API 코드 작성 
     console.log(req.images) // 이미지 파일 이름 => [이름, 이름, ...]
     res.status(200).json({success : "success"});
   } catch (error) {
     next(error);
   }
 });
 
 // 예시 => 포토리뷰 전달 API
 // getImg를 통해 이미지 buffer를 받아온다. => 프론트에서 buffer to Image 변환
 // 주의할 점은 파일 이름을 배열안에 담아서 줄 것.
 photoReview.get("/review", async (req, res, next) => {
   try {
     // 
     const result = await ImageModel.getImg({ fileNameList : ["1651287187623_5dbd8c1d-6d75-45b4-84e9-fadda3765f58_photo.jpg"] })
     if (result.length < 1) {
       throw new Error("image send error");
     }
 
     res.status(200).json({
       contest : "리뷰 내용",
       owner : "리뷰 작성자",
       images : result
     });
 
   } catch (error) {
     next(error);
   }
 });
 
 export { photoReview };
 