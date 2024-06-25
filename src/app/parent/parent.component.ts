import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  title = 'output';
  Counter =0;
  onCounterChange(val:number){
    this.Counter = val;
  }
}
