export type Chain = {
    chainId: string;
    name: string;
    blockExplorerUrl: string;
    rpcUrl: string;
  };
  
export const BinanceSmartChain: Chain = {
    chainId: '97',
    name: 'BinanceSmartChain',
    blockExplorerUrl: 'https://testnet.bscscan.io',
    rpcUrl: 'https://sleek-cold-friday.bsc.discover.quiknode.pro/cb6a6b88272911b287ca81a0a0f82f88d0fc5568/',
};

export const binance: Chain = {
    chainId: '56',
    name: 'Binance Smart Chain',
    blockExplorerUrl: 'https://bscscan.io',
    rpcUrl: 'https://sleek-cold-friday.bsc.discover.quiknode.pro/cb6a6b88272911b287ca81a0a0f82f88d0fc5568/',
};

export const CHAINS_CONFIG = {
    [binance.chainId]: binance,
    [BinanceSmartChain.chainId]: BinanceSmartChain,
};