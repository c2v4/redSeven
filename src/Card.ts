import { Color } from './Color';

export class Card {

  color: Color;
  value: number;
  constructor(color:Color,value:number){
    this.color =color;
    this.value = value;
  }
   
  effective():number {
    return 10*this.value +this.color
  }
}
