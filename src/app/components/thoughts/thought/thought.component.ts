import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() thought = {
    content: 'Teste :D',
    author: 'Carolina :)',
    model: 'model3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  thoughtWidth(): string {
    if(this.thought.content.length >= 256) {
      return 'thought-g'
    } else {
      return 'thought-p'
    }
  }

}
