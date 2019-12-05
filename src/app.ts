import cors from 'cors';
import { GraphQLServer } from 'graphql-yoga';
import helmet from 'helmet';
import logger from 'morgan';

class App {
  // graphQl 서버를 사용함
  public app: GraphQLServer;
  //App 클래스를 새로 시작할때마다 호출되는 함수
  constructor() {
    this.app = new GraphQLServer({});
    this.middlewares();
  }
  /*
   * middleWare : 요청이 들어오면 중간에서 미들웨어를 거쳐서 로깅(morgan)이나 
   * 요청이 제대로 된 요청인지 검사하는 작업(helmet)을 함 
   */
  private middlewares = (): void => {
    this.app.express.use(cors());
    this.app.express.use(logger('dev'));
    this.app.express.use(helmet());
  };
}

export default new App().app;
