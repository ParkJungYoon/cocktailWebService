# 🍸 저쪽 손님께서 보내신 겁니다.

### 칵린이들을 위한 칵테일 소개 및 추천 서비스

<br>

## 1. 프로젝트 소개

우리나라의 칵테일 소비 증진을 위한 칵테일 소개 및 레시피 공유, 추천 서비스 입니다.

### 💡 프로젝트 아이디어 동기

칵테일 어렵지 않습니다.

때는 바야흐로 Kaggle에서 데이터를 찾던 4월 19일...

<details><summary>더보기</summary>
<br>

**진영님** : 혹시 칵테일 잘 아시나요?

**그 외 팀원** : 아니요... 잘 모르는데...

**진영님** : 그러면 Kaggle에서 칵테일 데이터를 찾았는데 칵테일을 소개하는 프로젝트를 하면 어떨까요?

📊 **어떤 술을 많이 마실까?**

각국의 세계 주류 소비량을 비교해보면 우리나라는 칵테일 소비에 비해 맥주 소비량이 월등히 높다.

이 그래프를 보면 우리나라는 칵테일 소비가 적고 인지도가 낮다는 것을 알 수 있다.

- 나라별 맥주 대비 칵테일 소비량 비교 그래프

<img src='https://user-images.githubusercontent.com/97580782/167986752-9ad5503a-9b92-4b5d-ac32-f725d7611b49.png' width=550px>

</details>

### 🚩 프로젝트 목표

**칵테일 정의**

> **칵테일은 술과 여러 종류의 음료, 첨가물 등을 섞어 만든 혼합주를 일컫는다**

소맥, 꿀주, 링겔주 등등...

사실 우리는 그동안 알게 모르게 칵테일을 마셔왔습니다.

평소 술자리에서 개인의 취향에 맞게 커스터마이징 해 먹던 술이 바로 칵테일이거든요.

하지만 아직 많은 사람이 칵테일을 어렵고 멀게만 생각하고 있습니다.

**칵테일 입문자를 위한 인기 있는 칵테일 정보 제공 및 자신만의 레시피 공유, 재밌는 칵테일 컨텐츠를 통해 진입장벽을 낮추고자 합니다.**

### 📊 활용 데이터 셋

#### 1. [Cocktails (Hotaling & Co.)](https://www.kaggle.com/datasets/shuyangli94/cocktails-hotaling-co)

- 칵테일 정보 데이터( 제작자, 재료 )
- 이유 : 칵테일에 대한 상세한 정보를 전달하기 위해 데이터를 선택

#### 2. [Cocktail Popularity](https://www.kaggle.com/datasets/laurinbrechter/cocktail-popularity)

- 칵테일 인기 순위 ( 연도별, 월별 )
- 이유 : 칵테일에 대해 생소한 유저들이 칵테일을 쉽게 접할 수 있도록 과거 가장 인기 있었던 칵테일에 대한 정보를 전달하기 위해 데이터를 선택

#### 3. [Alcohol Comsumption around the World](https://www.kaggle.com/datasets/codebreaker619/alcohol-comsumption-around-the-world)

- 나라 별 알코올 소비 비율(beer, wine, sprit(칵테일))
- 이유 : 칵테일이라는 술이 이미 대중적으로 소비되고 있으며 충분히 매력적인 것임을 증명하기 위해 데이터를 선택

<br>

## 2. 서비스 주요 기능

### 메인 기능

### 1) 딕셔너리 형태의 칵테일 정보 제공

<img src='https://user-images.githubusercontent.com/97580782/167991366-60dcf0bd-a210-4f23-8bbb-9b0045ed697e.png'>

<details><summary>자세한 설명 보기</summary>

- 칵테일 카드를 grid 형태로 제공

  <img src='https://user-images.githubusercontent.com/97580782/167992035-13b4080d-2410-419a-9e39-495933fb67ce.png' width=500px>

- 검색, 정렬 가능

  1. mongoose의 .sort와 search를 사용
  2. 정렬 후 페이지네이션 형태로 제공

<img src="https://user-images.githubusercontent.com/97580782/167992355-140fe747-aace-4a66-8fa5-53a0eaedafd2.png">

- 무한 스크롤

<img src='https://user-images.githubusercontent.com/97580782/167992524-a647d2b4-117c-4824-9861-41a6556171dd.png'>

</details>

### 2) 딕셔너리 필터링 Top 10 정보 제공

| Top10                                                                                                                         | 자세한 설명                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| <img src='https://user-images.githubusercontent.com/97580782/167993216-60dc277a-67a5-4868-bfe8-3c5aa45adc8f.png' width=500px> | <img src='https://user-images.githubusercontent.com/97580782/167993814-7bb9ec8a-da8a-43df-8833-1632ddaa01d6.png' width=500px> |

### 3) MBTI 별 칵테일 추천

- MBTI 테스트 후 유저에게 대표 칵테일 추천
- 대표 칵테일에 대한 정보 및 소셜미디어 공유용 사이트 링크 제공

<img src='https://user-images.githubusercontent.com/97580782/167994260-7463250c-ce5f-4379-b11e-ce60d2f40248.png'>

<img src='https://user-images.githubusercontent.com/97580782/167994963-bb79351b-f3dc-4e92-a5f7-3ddfc312d84f.png'>

<br>

### 서브 기능

### 1) 커뮤니티 ( 레시피, 후기 공유 )

- 자신이 만든 칵테일 레시피를 게시판에 작성하여 공유
- 댓글을 작성하여 후기 공유

### 2) 유저 콘텐츠 ( 좋아요 )

- 로그인 한 유저는 칵테일 상단에 있는 하트 버튼을 눌러 좋아요 추가 가능
- 유저는 좋아요를 누른 칵테일 리스트 확인 가능

### 3) 각 칵테일의 좋아요 정보 WordCloud 형태의 데이터 시각화 제공

- 워드 수에 대해선 제한이 없고 좋아요 수가 많아질 수록 글씨가 커진다.
- 목적
  - 칵테일을 처음 접하는 유저가 쉽게 접근할 수 있도록 인기 있는 칵테일을 워드 클라우드 형태로 제공하는게 좋다고 생각했다.

### 4) 칵테일 관련 퀴즈 콘텐츠 ( 칵린이 TEST )

- 칵테일 관련 상식 퀴즈를 통해 칵테일에 대한 흥미도 향상
- 퀴즈 결과 및 점수를 알려주고, 틀린 문제에 대해 정답 제공

<br>

### 🎥 시연 영상

<br>

## 3. 프로젝트 구성도

### 📑 와이어프레임

[figma](https://www.figma.com/file/NXgYyU9V2scU1c1P2RrhDZ/%EC%A0%80%EC%AA%BD-%EC%86%90%EB%8B%98%EA%BB%98%EC%84%9C-%EB%B3%B4%EB%82%B4%EC%8B%A0%EA%B2%81%EB%8B%88%EB%8B%A4?node-id=0%3A1)

### 📎 기술 스택

<img src='https://user-images.githubusercontent.com/97580782/167986507-cdddae5f-5f5c-435c-9b68-59b50abac2a9.png' width=550px>

1. Front-End : SCSS, React
2. Back-End : NodeJS, MongoDB, Express
3. develop: Docker, Docker Compose, Nginix
4. Data Analysis : Python, Jupyter, Google Cloud Platform

### 📎 라이브러리

Front

- Mui
- uuidChart.js

Back

- babel
- nodemon
- swagger
- cors
- dotenv
- express
- joi
- jsonwebtoken
- mongoose
- multer
- passport
- passport-google-oauth

Data Analysis

- Numpy
- Pandas
- wordCloud
- beautiful soup

### 📌 프로젝트 구조도

<img src='https://user-images.githubusercontent.com/97580782/167986510-9b64299d-0f80-4c9c-98c3-7db4b90bdd77.png' width=550px>

<br>

## 4. API 문서

👉 [API 문서 보러가기](https://app.swaggerhub.com/apis/elice_jackpot/Cocktail_Service/1.0.0)

<br>

## 5. 프로젝트 팀원 역할 분담

### 🎰 TEAM JackPot

| 이름   | 담당 업무                   |
| ------ | --------------------------- |
| 박정윤 | 팀장/백엔드 개발            |
| 김동현 | 백엔드 개발/데이터 분석     |
| 송연석 | 백엔드 개발/데이터 분석     |
| 김승주 | 프론트엔드 개발/데이터 분석 |
| 김상민 | 프론트엔드 개발             |
| 백진영 | 프론트엔드 개발             |

### 멤버별 responsibility

1. 팀장

- 기획 단계: 구체적인 설계와 지표에 따른 프로젝트 제안서 작성
- 개발 단계: 팀원간의 일정 등 조율 + 프론트 or 백엔드 개발
- 수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비

2. 프론트엔드

- 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, 데이터 수집, 와이어프레임 작성
- 개발 단계: 와이어프레임을 기반으로 구현, 데이터 처리 및 시각화 담당, UI 디자인 완성
- 수정 단계: 피드백 반영해서 프론트 디자인 수정

3.  백엔드 & 데이터 담당

- 기획 단계: 기획 데이터 분석을 통해 해결하고자 하는 문제를 정의
- 개발 단계: 웹 서버 사용자가 직접 백엔드에 저장할수 있는 기능 구현, 데이터 베이스 구축 및 API 활용, 데이터 분석 개념 총동원하기
- 수정 단계: 코치님 피드백 반영해서 분석/ 시각화 방식 수정

## 6. 버전

1.0.0

## 7. FAQ

- 자주 받는 질문 정리
