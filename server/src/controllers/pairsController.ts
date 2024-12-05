import { NextFunction, Request, Response } from 'express';
import getPairs from '../utils/pairs/get-pairs';
import { Network } from '../types/network';

export const getHandlerPairs = async (
    req: Request, 
    res: Response, 
    next: NextFunction): Promise<void> => {

    const { protocol, network, address, full } = req.query as unknown as { 
        protocol: string, 
        network: string,
        address: string,
        full: string
    };
    
    if (!protocol || !network) {
        res.status(400).json({ error: 'Protocol and network parameters are required' });
        return;
    }

    const protocolName = protocol.toLowerCase();
    const networkName = (network as string).toUpperCase() as 'MAINNET' | 'TESTNET';


    if (!['soroswap', 'phoenix', 'aqua'].includes(protocolName)) {
        res.status(400).json({ error: 'Invalid Protocol' });
        return;
      }
    
    if (!['MAINNET', 'TESTNET'].includes(networkName)) {
        res.status(400).json({ error: 'Invalid Network' });
        return;
    }

    try {
      
        const pairs = await getPairs(protocolName, networkName as Network);

        if (full) {
            res.json(pairs);
            return;
          }
      
      
          if (address) {
            const pool = pairs.find((pair) => pair.address === address);
            res.json(pool);
            return;
          }
      
        res.json(pairs);
        return;
    } catch (error: any) {
        next(error);
    }
};
