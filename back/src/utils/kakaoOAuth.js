import { UserModel } from "../db";
import axios from "axios";
import { makeRefreshToken } from "./makeToken";

const config = {
  clientID: process.env.KAKAO_REST_API,
  clientSecret: process.env.KAKAO_CLIENT_SECRET,
  callbackURL: process.env.KAKAO_REDIRECT_URI,
};

const findOrCreateUser = async ({ name, email }) => {
  const user = await UserModel.findByEmail({ email });
  if (user) return user;

  const newUser = await UserModel.addUser({
    name,
    email,
    password: "KAKAO_OAUTH",
  });

  return newUser;
};

const getKakaoData = async (req, token) => {
    try{
        let user;
        user = await axios({
            method:'get',
            url:'https://kapi.kakao.com/v2/user/me',
            headers:{
                Authorization: `Bearer ${token.data.access_token}`
            }//헤더에 내용을 보고 보내주겠다.
        })

        req.session.kakao = user.data;
        //req.session = {['kakao'] : user.data};

        console.log(req.session.kakao);
        return req;
    }catch(e){
        return null;
    }
}


module.exports = {config, findOrCreateUser, getKakaoData}