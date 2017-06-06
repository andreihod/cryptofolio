import { Exchange } from './exchange'

export class Asset {

  constructor(public name: string, public mybalance: number, public exchange: Exchange) { }

}
