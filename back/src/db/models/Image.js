import { Image } from "../schemas/image";
import path from "path";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import { db } from "..";

const imagePath = () => {
  return path.resolve(__dirname, "../", "../", "../", "images");
};

const imageNamePush = (req, filename) => {
  if (req.images == undefined) {
    req.images = [];
  }

  req.images.push(filename);
  return req;
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imagePath());
  },
  filename: function (req, file, cb) {
    if (file.originalname !== null) {
      var ext = path.extname(file.originalname).replace('.', '');
    
      if(!['png', 'jpg', 'jpeg', 'gif'].includes(ext)) {
        return cb(new Error('Only images are allowed'))
      }
  
      const fileName =
        new Date().valueOf() + "_" + uuidv4() + "_" + file.originalname;
  
      const image = {
        fileName: fileName,
        imageUrl: path.join(imagePath(), fileName),
        owner: req.user,
        type: path.extname(file.originalname),
      };
  
      ImageModel.uploadOne({ image });
      req = imageNamePush(req, fileName);
      cb(null, fileName);
    }
    else {
      return;
    }
  },
});

class ImageModel {
  /**
   * @param {이미지 정보} image
   * @return true or false
   */
  static uploadOne = async ({ image }) => {
    const result = Image.create(image);
    if (result != null) {
      return true;
    }
    return false;
  };

  /**
   * @param {이미지 주인 _id} owner
   * @return true or false
   */
  static deleteByUser = async ({ owner }) => {
    const result = Image.deleteMany({ owner: owner });
    if (result.deletedCount > 0) {
      return true;
    }
    return false; //삭제된 이미지가 없으면
  };

  /**
   * @param {이미지 파일 이름} fileName
   * @return true or false
   */
  static deleteOne = async ({ fileName }) => {
    const result = Image.deleteOne({ fileName: fileName });

    if (result.deletedCount > 0) {
      return true;
    }
    return false; //삭제된 이미지가 없으면
  };

  /**
   * @param {이미지 파일 이름} fileName
   * @param {프론트 => Response} res
   * @return image => {type:.jpg, data:~~~~}
   */
  static getImgOne = async ({ fileName }) => {
    const image = await Image.findOne({ fileName });

    if (image == null) {
      return null;
    }

    const file = fs.readFileSync(image.imageUrl);

    let fileJson = file.toJSON();
    fileJson["type"] = image.type;

    return fileJson;
  };

  /**
   * @param {이미지 파일 이름} fileName
   * @param {프론트 => Response} res
   * @return image => {type:.jpg, data:~~~~}
   */
   static getImgFileOne = async ({ fileName }) => {
    const image = await Image.findOne({ fileName });

    if (image == null) {
      return null;
    }

    return image;
  };

  /**
   * @param {이미지 파일 이름 리스트} fileNameList
   * @param {프론트 => Response} res
   * @return images => [ {type:.jpg, data:~~~~}, {...} ]
   */
  static getImg = async ({ fileNameList }) => {
    let imgList = [];

    for (let i = 0; i < fileNameList.length; i++) {
      const result = await this.getImgOne({ fileName: fileNameList[i] });
      if (result !== null) {
        imgList.push(result);
      }
    }

    return imgList;
  };

  /**
   * @param {이미지 주인 _id} owner
   * @param {프론트 => Response} res
   * @return send images
   */
  static getImgByUser = async (res, { owner }) => {};
}

export { ImageModel, storage };
