export interface MercuryPair {
    tokenA: string;
    tokenB: string;
    address: string;
    reserveA: string;
    reserveB: string;
}

export interface MercuryEvent {
    tokenA: string;
    tokenB: string;
    eType: "swap" | "add" | "remove";
    amountA: string;
    amountB: string;
    account: string;
    timestamp: string;
    txHash: string;
}