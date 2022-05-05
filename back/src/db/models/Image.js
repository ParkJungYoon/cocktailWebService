import { Image } from "../schemas/image";
import path from "path";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import { db, BoardModel } from "../index";

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
  filename: async function (req, file, cb) {
    if (file.originalname !== null) {
      try {
        if (req.boardId !== undefined && req.boardId !== null) {
          const boardId = String(req.boardId);

          const board = await BoardModel.findBoard({ boardId });

          if (String(board.writer._id) !== req.user || board == null) {
            return cb(new Error("작성자가 아닙니다. 수정 할 수 없습니다."));
          }
        }
      } catch {
        return cb(new Error("게시판 아이디가 올바르지 않습니다."));
      }

      var ext = path.extname(file.originalname).replace(".", "");

      if (!["png", "jpg", "jpeg", "gif"].includes(ext)) {
        return cb(new Error("이미지 형식이 올바르지 않습니다."));
      }

      const fileName =
        new Date().valueOf() + "_" + uuidv4() + "_" + file.originalname;

      const image = {
        fileName: fileName,
        imageUrl: path.join(imagePath(), fileName),
        owner: req.user,
        type: path.extname(file.originalname),
      };

      req = imageNamePush(req, fileName);
      ImageModel.uploadOne({ image });

      cb(null, fileName);
    } else {
      return cb(new Error("파일 이름이 없습니다."));
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
    if (fs.existsSync(path.join(imagePath(), fileName))) {
      // 파일이 존재한다면 true 그렇지 않은 경우 false 반환
      try {
        fs.unlinkSync(path.join(imagePath(), fileName));
      } catch (error) {
        console.log(error);
      }
    }

    const result = await Image.deleteOne({ fileName: fileName });

    if (result.deletedCount > 0) {
      return true;
    }
    return false; //삭제된 이미지가 없으면
  };

  static deleteArray = async ({ fileNameList }) => {
    if (!fileNameList) {
      return false;
    }

    for (let i = 0; i < fileNameList.length; i++) {
      await this.deleteOne({ fileName: fileNameList[i] });
    }

    return true;
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
    if (fileNameList == undefined || fileNameList == null) {
      return [];
    }

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
