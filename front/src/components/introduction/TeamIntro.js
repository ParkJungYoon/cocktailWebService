import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";

import UserDefaultImg from "../../imgs/userDefaultImg.jpg";
import JackPot from "../../imgs/JackPot.gif";

const TeamCard = ({ data }) => {
  return (
    <Grid container sx={{ px: 2, mb: 3 }} spacing={2}>
      <Grid item xs sx={{ my: "auto" }}>
        <Box
          component="img"
          src={data.image}
          alt=""
          width="30vw"
          height="300px"
          minWidth="400px"
        />
      </Grid>
      <Grid
        item
        xs
        sx={{ m: "auto", bgcolor: "rgba(0,0,0,0.5)", p: 3, textAlign: "left" }}
      >
        <Box sx={{ color: "white" }}>
          <Typography variant="body1">이름 : {data.name}</Typography>
          <Typography variant="body1">
            좋아하는 칵테일 : {data.cocktail}
          </Typography>
          <Typography variant="body1">자기소개 :</Typography>
          <Typography variant="body1">{data.introduce}</Typography>
          <Typography variant="body1">소감 :</Typography>
          <Typography variant="body1">{data.impression}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

const team7 = [
  {
    name: "김동현",
    impression:
      "기획부터 빌드업 해 나가는 게 쉽지 않다는 것을 느꼈습니다. 열정적인 팀원들과 함께 해서 많이 배우고 동기부여도 확실하게 된 기간이었습니다. 많이 배우고 지치지 않았으면 좋겠습니다.",
    introduce:
      "남자의 영화 대부. 남자의 칵테일. GodFather 😠남자 중의 남자😠 김.동.현. ☜(ﾟヮﾟ☜)☜(ﾟヮﾟ☜) 이상입니다. 웃지 마세요 진지합니다.",
    cocktail: "GodFather",
    image: UserDefaultImg,
  },
  {
    name: "김상민",
    impression:
      "팀원들 분위기가 좋아서 열심히 개발할 수 있었습니다. 부족한 실력이지만 고수들이 계셔서 많은걸 배웠습니다. 3주내내 팀원들이랑 칵테일을 얘기랑 보기만하고 술 한잔도 못해 끝나고 술 한잔하고 싶습니다 ㅋㅋㅋㅋ 칵테일 한잔? 팀원들 모두에게 감사하고 고생했다고 전하고 싶습니다.",
    introduce: "졸리다 잠은 언제 잘 수 있을까?",
    cocktail: "Martini",
    image:
      "https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg",
  },
  {
    name: "김승주",
    impression:
      "데이터 분석을 통해 웹 서비스를 제작하다보니 신경쓸 것도 더 많았고 최적화까지 신경을 써야해서 많은 것을 배울 수 있었습니다. 써보고 싶었던 MUI 라이브러리나 역동적인 CSS도 직접 찾아보면서 재미있게 개발했습니다. 팀원 분들도 열정있고 재미있어서 편한 분위기에서 개발할 수 있어서 참 좋았습니다👍",
    introduce: "칵테일 자격증 있는데 알쓰에요😵‍💫",
    cocktail: "June Bug",
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
  },
  {
    name: "박정윤",
    impression:
      "기능들을 차곡차곡 쌓아올려 더 단단한 코드를 구현할 수 있어서 즐거웠습니다. 좋은 팀원과 프로젝트할 수 있어 즐겁고 많이 배웠습니다. :) 모두 원하는 길 찾아서 현업에서 뵙고 싶습니다!",
    introduce: "제가 시킨 칵테일 입니다~",
    cocktail: "진토닉",
    image:
      "https://images-ext-1.discordapp.net/external/LZUqczJVjH_S0qSunTgiB22r80nbP1gBU6XWJl6yU44/https/www.mantitlement.com/wp-content/uploads/2013/12/the-godfather-cocktail-close.jpeg",
  },
  {
    name: "백진영",
    introduce: "가장 완벽한 색은 ... 블랙",
    impression:
      "이번 팀 프로젝트를 통해 배운것이 정말 많습니다. 기획부터 의견을 많이 냈는데 팀원 분들 모두 잘 들어주셔서 정말 감사했습니다. 다들 3주 동안 수고하셨습니다!",
    cocktail: "아이리쉬 커피",
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/becce38c-2b76-4443-80fd-9c3f67db2ffd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220507T061352Z&X-Amz-Expires=86400&X-Amz-Signature=2c9cd52b0305b38dc0518f82bbf27874eff19f445ab4a4ae4929b8b4a2d3b3e3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",
  },
  {
    name: "송연석",
    introduce: "칵테일 마시러 가실분!!",
    impression:
      "기획부터 개발까지 쭉 해본건 이번이 처음인데 남이 생각한걸 만들어주는 것보다 자기가 직접 기능을 생각해가며 만드는 게 훨씬 어렵다는 걸 뼈저리게 느꼈습니다. 특히 마지막 주는 이곳 저곳에서 이슈가 많이 발생해 버그 픽스하느라 진이 다 빠졌네요. 팀원분들 3주간 고생 많으셨고 나중에 사회에서도 뵀으면 좋겠습니다.  수고 많으셨습니다.",
    cocktail: "블러디메리 (빨간걸 좋아함)",
    image:
      "https://www.thecocktaildb.com/images/media/drink/t6caa21582485702.jpg",
  },
];

export default function TeamIntro() {
  return (
    <Container
      sx={{
        textAlign: "center",
        color: "white",
        backgroundColor: "rgba(64, 64, 64, 0.4)",
        py: 10,
        width: "90vw",
        borderRadius: "1.5rem",
      }}
    >
      <Box
        component="img"
        src={JackPot}
        alt=""
        width="10%"
        // height="80%"
      />
      <Box sx={{ mb: 5 }}>
        <Typography variant="h5">Team7 JackPot</Typography>
      </Box>
      {team7.map((data, i) => {
        return <TeamCard key={i} data={data} />;
      })}
    </Container>
  );
}
