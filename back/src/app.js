import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 기본 페이지
app.get('/', (req, res) => {
  res.send('안녕하세요, 레이서 프로젝트 API 입니다.');
});

export { app };
