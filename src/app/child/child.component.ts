import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  c=0;
  @Output() CounterChange= new EventEmitter();
  incr(){
    this.c++;
    this.CounterChange.emit(this.c);
  }
  decr(){
    this.c--;
    this.CounterChange.emit(this.c);
  }
  reset(){
    this.c=0;
    this.CounterChange.emit(this.c);
  }
}
