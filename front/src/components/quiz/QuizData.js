<<<<<<< HEAD
import StandardShaker from "./img/StandardShaker.jpg";
=======
import StandardShaker from "../../imgs/StandardShaker.jpg";
>>>>>>> 6d6d25d949215e5786fbe7b9dc4255de21d3e72b

const state = {
  questions: {
    1: "Q1. 술에 술을 섞거나 술에 청량음료나 과즙 음료, 기타 부재료를 이용하여 혼합시킨 것은?",
    2: "Q2. 다음 기구의 이름은?",
    3: "Q3. 다음 설명으로 틀린 것은?",
    4: "Q4. 뜨거운 칵테일은 어떤 것인가?",
    5: "Q5. 칵테일 용어 설명 중 틀린 것은?",
  },
  answers: {
    1: {
      1: "1. 칵테일 ",
      2: "2. 하드 드링크",
      3: "3. 소프트 드링크",
    },
    2: {
      1: "1. 스탠다드 셰이커(Standard Shaker)",
      2: "2. 믹싱 글라스(Mixing Glass)",
      3: "3. 스트레이너(Strainer)",
    },
    3: {
      1: "1. 버진은 논 알코올이 칵테일이다.",
      2: "2. 막테일은 논 알코올이 칵테일이다.",
      3: "3. 체이서는 칵테일 가니쉬 중 하나이다.",
    },
    4: {
      1: "1. Pink Lady",
      2: "2. Irish Coffee",
      3: "3. Pina Colada",
    },
    5: {
      1: "1. Stir : 잘 섞이도록 저어 주는 것.",
      2: "2. Float : 한가지의 술에 다른 술이 혼합되지 않게 띄우는 것.",
      3: "3. Strainer : 과육을 제거하고 껍데기만을 짜 넣는다는 의미.",
      // Strainer → 믹싱글라스에 혼합한 술을 따를 때 얼음이 흘러나오지 않도록 걸러주기 위해 사용하는 도구.
    },
  },
  correctAnswers: {
    1: "1",
    2: "1",
    3: "3",
    4: "2",
    5: "3",
  },
  imgs: {
    1: " ",
    2: StandardShaker,
    3: " ",
    4: " ",
    5: " ",
  },
};
export default state;
