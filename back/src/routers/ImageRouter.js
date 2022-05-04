import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken";
import { ImageModel } from "../db";
import { storage } from "../db/models/Image";
import multer from 'multer';

const ImageRouter = Router();

ImageRouter.get("/images/:fileName", async (req, res, next) => {
  try {
    // const user = req.user;
    const fileName = req.params.fileName;
    if (fileName == null) {
      throw new Error("이미지 아이디가 없습니다.");
    }
    const image = await ImageModel.getImgFileOne({ fileName });
    console.log(image);
    if (image == null) {
      throw new Error("해당 파일 이름을 가진 이미지가 없습니다.");
    }

    res.sendFile(image.imageUrl)

  } catch (error) {
    next(error);
  }
});

export { ImageRouter };
