import { Exchange } from './exchange'
import { Market } from './market'

export class Asset {

  constructor(private id: number,
              private name: string,
              private mybalance: number,
              private exchange: Exchange,
              private market: Market) { }

}
