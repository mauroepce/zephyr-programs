import { TokenType } from "../../types/tokens";
import { mockData } from "../loadMockData";
import { fetchTokenList } from "../../services/tokens";
import { getMercuryPools } from "../../zephyr/helpers";
import { buildPoolsInfo } from "../pools";
import { buildTokensInfo } from ".";

const getTokens = async (protocol: string, network: 'MAINNET' | 'TESTNET') => {
  const environment = process.env.ENVIRONMENT;
  const isDev = environment === 'dev';

  if (isDev) {
    return mockData(protocol, 'tokens');
  }

  const tokenList: TokenType[] = await fetchTokenList({ network });
  const data = await getMercuryPools(network);
  const result = await buildPoolsInfo(data, tokenList, network);
  const tokensInfo = await buildTokensInfo(tokenList, result, network);

  return tokensInfo;
};

export default getTokens;
