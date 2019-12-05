import { Options } from 'graphql-yoga';
import { createConnection } from 'typeorm';
import app from './app';
import connectionOptions from './ormConfig';
//import 순서는 모듈이 먼저 클래스가 나중

//입력받은 port환경변수나 4000을 할당
const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND: string = '/playground';
const GRAPHQL_ENDPOINT: string = '/graphql';

// graphql-yoga 에서 Options타입을 임포드하고,
// appOptions변수의 타입으로 선언하면 됨
const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND,
  endpoint: GRAPHQL_ENDPOINT,
};

//app.start의 콜백함수 정의
const handleAppStart = () => console.log(`Listening on port ${PORT}`);
//데이터베이스를 먼저 연결하고 app을 실행
createConnection(connectionOptions).then(() => {
  app.start(appOptions, handleAppStart);
});

//api 만드는 방법과 쿼리하는 방법, 다른 api resolver들을 만드는 방법 이것들을 하나로 합치는 방법
