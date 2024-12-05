import { mockData } from "../loadMockData";



const getEvents = async (
  protocol: string,
  network: 'MAINNET' | 'TESTNET',
  eventType?: string
) => {

  const environment = process.env.ENVIRONMENT;
    const isDev = environment === 'dev';

  if (isDev) {
    const data = mockData(protocol, 'events');
    return data;
}

  return[];
};

export default getEvents;