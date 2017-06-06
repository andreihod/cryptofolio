
import { Asset } from './asset'
import { Exchange } from './exchange'
import { Market } from './market'

export var ASSETS: Asset[] = [
  {id: 1,
    name:'Bitcoin',
    mybalance: 0.0,
    exchange: new Exchange("Poloniex"),
    market: new Market('BTC', 'USDT')
  },
  {id: 2,
    name:'Ethereum',
    mybalance: 0.0,
    exchange: new Exchange("Poloniex"),
    market: new Market("BTC","USDT")
  },
  {id: 3,
    name:'Dogecoin',
    mybalance: 0.0,
    exchange: new Exchange("Poloniex"),
    market: new Market("BTC","USDT")
  },
];
