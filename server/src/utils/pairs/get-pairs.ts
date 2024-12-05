import { mockData } from '../loadMockData';
interface Pair {
    tokenA: string;
    tokenB: string;
    address: string;
    reserveA: string;
    reserveB: string;
}

const getPairs = async (protocol: string, network: 'MAINNET' | 'TESTNET') => {

    const environment = process.env.ENVIRONMENT;
    const isDev = environment === 'dev';

    if (isDev) {
        const data = mockData(protocol, 'pairs');
        return data as Pair[];
    }
    
    return[];
};

export default getPairs;