export interface TvlChartData {
    date: string;
    tvl: number;
    timestamp?: string;
    valueA?: number;
    valueB?: number;
  }
  
  export interface VolumeChartData {
    date: string;
    volume: number;
    timestamp?: string;
    valueA?: number;
    valueB?: number;
  }
  
  export interface FeesChartData {
    date: string;
    fees: number;
    timestamp?: string;
    valueA?: number;
    valueB?: number;
  }
  
  export interface PriceChartData {
    date: string;
    price: number;
    timestamp?: string;
    valueA?: number;
    valueB?: number;
  }
  