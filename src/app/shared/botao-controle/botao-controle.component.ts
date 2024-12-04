import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-controle',
  templateUrl: './botao-controle.component.html',
  styleUrls: ['./botao-controle.component.scss']
})
export class BotaoControleComponent {
  @Input() title: string = ''
  @Input() ageUser: string = ''
  @Input() operation: 'incremento' | 'decremento' = 'incremento'
  countItem = 0;

  addItem() {
    this.countItem ++
    console.log(this.countItem);
  }

  removeItem(){
    if(this.countItem != 0){
      this.countItem --
      console.log(this.countItem);
    }
  }
}
