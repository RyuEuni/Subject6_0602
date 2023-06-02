import express, { Express, Request, Response } from 'express';
import path from 'path';

const app: Express = express();
const PORT: number = 5000;

// 정적 파일 서빙
app.use(express.static(path.join(__dirname, 'client/build')));

// 최초 GET 요청 처리
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// 404 에러 핸들링
app.use((req: Request, res: Response) => {
  res.status(404).send('404 Not Found');
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
