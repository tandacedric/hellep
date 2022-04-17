declare global {
    namespace NodeJS {
      interface ProcessEnv {
        MONGODB_URI: string; // this is the line you want
        NODE_ENV: 'development' | 'production';
        PORT?: string;
        PWD: string;
      }
    }
  }