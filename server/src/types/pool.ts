import { FeesChartData, TvlChartData, VolumeChartData } from "./chartData";
import { TokenType } from "./tokens";


export interface Pool {
    address: string;
    tokenA: TokenType;
    tokenB: TokenType;
    reserveA: string;
    reserveB: string;
    tokenAPrice: number;
    tokenBPrice: number;
    tvl?: number;
    volume24h?: number;
    volume7d?: number;
    fees24h?: number;
    feesYearly?: number;
    tvlChartData?: TvlChartData[];
    volumeChartData?: VolumeChartData[];
    feesChartData?: FeesChartData[];
  }