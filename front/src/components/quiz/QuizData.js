import StandardShaker from "../../imgs/StandardShaker.jpg";
import mojito from "../../imgs/mojito.jpg";
import jigger from "../../imgs/jigger.jpg";
import martini from "../../imgs/martini.jpg";

const state = {
  questions: {
    1: "Q1. 술에 술을 섞거나 술에 청량음료나 과즙 음료, 기타 부재료를 이용하여 혼합시킨 것은?",
    2: "Q2. 다음 기구의 이름은?",
    3: "Q3. 다음 설명으로 틀린 것은?",
    4: "Q4. 다음 중 국제 바텐더 협회의 약칭은?",
    5: "Q5. 영화 킹스맨에도 등장한 이 칵테일의 이름은?",
    6: "Q6. 다음 이미지는 칵테일 조주에 있어 술이나 부재료, 주스의 용량을 재는 기구로 이름은?",
    7: "Q7. 칵테일 용어 설명 중 틀린 것은?",
    8: "Q8. 쿠바의 전통적인 음료 가운데 하나인 이 칵테일의 이름은?",
    9: "Q9. 다음 중 뜨거운 칵테일은 무엇일까요?",
    10: `Q10. 다음 중 진짜 칵테일 이름은?`,
  },
  answers: {
    1: {
      1: "1. 칵테일 ",
      2: "2. 하드 드링크",
      3: "3. 소프트 드링크",
      4: "4. 혼성주",
    },
    2: {
      1: "1. 믹싱 글라스(Mixing Glass)",
      2: "2. 스트레이너(Strainer)",
      3: "3. 전기 블렌더(Electric Blender)",
      4: "4. 스탠다드 셰이커(Standard Shaker)",
    },
    3: {
      1: "1. 버진은 논 알코올이 칵테일이다.",
      2: "2. 막테일은 논 알코올이 칵테일이다.",
      3: "3. 체이서는 칵테일 가니쉬 중 하나이다.",
      4: "4. 아이스 텅은 칵테일 제조에 사용되는 얼음집게이다. ",
    },
    4: {
      1: "1. FBI",
      2: "2. IBA",
      3: "3. NBA",
      4: "4. BTC",
    },
    5: {
      1: "1. Sex On The Beach",
      2: "2. 57 Chevy",
      3: "3. Soju Bomb",
      4: "4. Martini",
    },
    6: {
      1: "1. Strainer",
      2: "2. Mixing Glass",
      3: "3. Jigger",
      4: "4. Squeezer",
    },
    7: {
      1: "1. Stir : 잘 섞이도록 저어 주는 것.",
      2: "2. Float : 한가지의 술에 다른 술이 혼합되지 않게 띄우는 것.",
      3: "3. Strainer : 과육을 제거하고 껍데기만을 짜 넣는다는 의미.",
      4: "4. Double : 칵테일에서 2온스를 말한다.",
      // Strainer → 믹싱글라스에 혼합한 술을 따를 때 얼음이 흘러나오지 않도록 걸러주기 위해 사용하는 도구.
    },
    8: {
      1: "1. Mojito",
      2: "2. Baby Aspirin",
      3: "3. Zombie",
      4: "4. Highfly",
    },
    9: {
      1: "1. Pink Lady",
      2: "2. Irish Coffee",
      3: "3. Pina Colada",
      4: "4. Singapore Sling",
    },
    10: {
      1: "1. 젖지말고 흔들어서",
      2: "2. 사파이어를 머금은 몽마르뜨 언덕",
      3: "3. 안개가 자욱한 바다 한가운데서 길을 잃은 외로운 섬",
      4: "4. 저쪽 손님께서 보내신 겁니다",
    },
  },
  correctAnswers: {
    1: "1",
    2: "4",
    3: "3",
    4: "2",
    5: "4",
    6: "3",
    7: "3",
    8: "1",
    9: "2",
    10: "3",
  },
  imgs: {
    1: "",
    2: StandardShaker,
    3: "",
    4: "",
    5: martini,
    6: jigger,
    7: "",
    8: mojito,
    9: "",
    10: "",
  },
};
export default state;
