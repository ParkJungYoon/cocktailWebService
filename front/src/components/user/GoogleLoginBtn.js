import React from "react";
import GoogleLogin from "react-google-login";

const clientId = "위의 Google Cloud Platform에서 발급받은 Client ID";

export default function GoogleLoginBtn({ onGoogleLogin }) {
  const onSuccess = async (res) => {
    const {
      googleId,
      profileObj: { email, name },
    } = res;

    await onGoogleLogin();
    // 구글 로그인 성공시 서버에 전달할 데이터s
    const profile = res.getBasicProfile();
    const userdata = {
      email: profile.getEmail(),
      image: profile.getImageUrl(),
      name: profile.getName(),
    };
  };

  const onFailure = (error) => {
    alert("구글 로그인에 실패하였습니다");
    console.log(error);
  };

  return (
    <div>
      <GoogleLogin
        className="google-button"
        clientId={clientId}
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
}
