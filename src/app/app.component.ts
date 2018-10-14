import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations:[
    trigger('move', [
        state('forward', style({
            'background-color':'green',
            'transform':'translateX(100px)'
        })),
        state('backward', style({
          'background-color':'blue',
          'transform':'translateX(0px)'
        })),
        transition('* => *', animate(500))
    ])
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  move; 

  moveForward(){
      this.move = 'forward';
  }

  moveBackward(){
      this.move = 'backward';
  }
}
