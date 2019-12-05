import { ConnectionOptions } from 'typeorm';

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  database: 'nuber',
  synchronize: true,
  logging: true,
  //entities : 모델파일이 들이갈 경로
  entities: ['entities/*.*'],
  /**
   * host : 데이터베이스의 host는 환경변수 안에 있는 process.env.DB_ENDPOINT나 ,그게 없다면 localhost
   * 이 옵션들이 내 컴퓨터와 서버에서 모두 작동하도록 하는 옵션을 만들고 있음.
   * 이 서버를 실제 운영중인 서버에 업로드하면, 환경변수에 실제 값을 적용해야함(amazon(AWS)의 주소)
  */
  host: process.env.DB_ENDPOINT || 'localhost',
  port: 5432, //postgre의 기본 포트(항상 같음)
  username: process.env.DB_USERNAME || 'ellen',
  password: process.env.DB_PASSWORD || 'rldjr2',
};

export default connectionOptions;
