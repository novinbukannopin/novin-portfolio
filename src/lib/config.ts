type Config = {
  apiUrl: string;
  debugMode: boolean;
};

const devConfig: Config = {
  apiUrl: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  debugMode: true,
};

const prodConfig: Config = {
  apiUrl: process.env.NEXT_PUBLIC_URL || 'https://novin.fun',
  debugMode: false,
};

const config: Config =
  process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
