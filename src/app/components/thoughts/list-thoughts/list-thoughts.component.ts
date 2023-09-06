import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent implements OnInit {

  listThoughts = [
    {
      content: 'Teste 2',
      author: 'Carolina :)',
      model: 'model3'
    },
    {
      content: 'Teste 2',
      author: 'Carolina :)',
      model: 'model1'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
