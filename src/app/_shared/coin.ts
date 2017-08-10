export class Coin {
    symbol: string;
    name: string;
    id: number;

    public getDisplayName(){
         return this.name + ' - ' +
           this.symbol;
    }
}
