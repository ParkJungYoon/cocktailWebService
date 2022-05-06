/* mbti result page */
import ResultISTJ from "./components/mbti/ResultISTJ";
import ResultISTP from "./components/mbti/ResultISTP";
import ResultISFJ from "./components/mbti/ResultISFJ";
import ResultISFP from "./components/mbti/ResultISFP";
import ResultINTJ from "./components/mbti/ResultINTJ";
import ResultINTP from "./components/mbti/ResultINTP";
import ResultINFJ from "./components/mbti/ResultINFJ";
import ResultINFP from "./components/mbti/ResultINFP";
import ResultESTJ from "./components/mbti/ResultESTJ";
import ResultESTP from "./components/mbti/ResultESTP";
import ResultESFJ from "./components/mbti/ResultESFJ";
import ResultESFP from "./components/mbti/ResultESFP";
import ResultENTJ from "./components/mbti/ResultENTJ";
import ResultENTP from "./components/mbti/ResultENTP";
import ResultENFJ from "./components/mbti/ResultENFJ";
import ResultENFP from "./components/mbti/ResultENFP";

const mbtiRoutes = [
  {
    path: "/cocktailTest/mbti/ISTJ",
    element: <ResultISTJ />,
  },
  {
    path: "/cocktailTest/mbti/ISTP",
    element: <ResultISTP />,
  },
  {
    path: "/cocktailTest/mbti/ISFJ",
    element: <ResultISFJ />,
  },
  {
    path: "/cocktailTest/mbti/ISFP",
    element: <ResultISFP />,
  },
  {
    path: "/cocktailTest/mbti/INTJ",
    element: <ResultINTJ />,
  },
  {
    path: "/cocktailTest/mbti/INTP",
    element: <ResultINTP />,
  },
  {
    path: "/cocktailTest/mbti/INFJ",
    element: <ResultINFJ />,
  },
  {
    path: "/cocktailTest/mbti/INFP",
    element: <ResultINFP />,
  },
  {
    path: "/cocktailTest/mbti/ESTJ",
    element: <ResultESTJ />,
  },
  {
    path: "/cocktailTest/mbti/ESTP",
    element: <ResultESTP />,
  },
  {
    path: "/cocktailTest/mbti/ESFJ",
    element: <ResultESFJ />,
  },
  {
    path: "/cocktailTest/mbti/ESFP",
    element: <ResultESFP />,
  },
  {
    path: "/cocktailTest/mbti/ENTJ",
    element: <ResultENTJ />,
  },
  {
    path: "/cocktailTest/mbti/ENTP",
    element: <ResultENTP />,
  },
  {
    path: "/cocktailTest/mbti/ENFJ",
    element: <ResultENFJ />,
  },
  {
    path: "/cocktailTest/mbti/ENFP",
    element: <ResultENFP />,
  } /* And so on. */,
];
export default mbtiRoutes;
