
import { Asset } from './asset'
import { Exchange } from './exchange'
import { Market } from './market'

export var ASSETS: Asset[] = [
  { name:'Bitcoin',
    mybalance: 0.0,
    exchange: new Exchange("Poloniex", new Market('BTC', 'USDT'))
  },
  { name:'Ethereum',
    mybalance: 0.0,
    exchange: new Exchange("Poloniex", new Market('BTC', 'USDT'))
  },
  { name:'Dogecoin',
    mybalance: 0.0,
    exchange: new Exchange("Poloniex", new Market('BTC', 'USDT'))
  },
];
