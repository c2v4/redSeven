import { IColor } from "./color/IColor";

export class Card {
  color: IColor;
  value: number;
  constructor(color:IColor,value:number){
    this.color =color;
    this.value = value;
  }
   
  effective():number {
    return 10*this.value +this.color.ordinal
  }
}
