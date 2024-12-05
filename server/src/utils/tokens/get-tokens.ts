import { mockData } from "../loadMockData";


const getTokens = async (protocol: string, network: 'MAINNET' | 'TESTNET') => {
  const environment = process.env.ENVIRONMENT;
  const isDev = environment === 'dev';

  if (isDev) {
    return mockData(protocol, 'tokens');
  }


  return[];
};

export default getTokens;
