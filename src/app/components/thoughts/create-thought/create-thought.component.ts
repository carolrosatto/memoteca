import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  thought = {
    id: '1',
    content: 'Aprendendo Angular',
    author: 'Dev',
    model: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  createThought() {
    alert('Funfou')
  }

  cancel() {
    
  }

}
