
import { Asset } from './asset'
import { Exchange } from './exchange'
import { Market } from './market'

export var ASSETS: Asset[] = [
  { name:'Bitcoin',
    mybalance: 0.00023,
    exchange: new Exchange(1, "Poloniex", new Market('BTC', 'USDT'), 9000)
  },
  { name:'Ethereum',
    mybalance: 0.2340006,
    exchange: new Exchange(59, "Kraken", new Market('BTX', 'EUR'), 260)
  },
  { name:'ZCash',
    mybalance: 125.0233,
    exchange: new Exchange(45, "ZCash", new Market('BTC', 'USDT'), 0.002)
  },
];


