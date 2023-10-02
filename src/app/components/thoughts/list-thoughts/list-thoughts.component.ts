import { Component, OnInit } from '@angular/core';
import { Thought } from '../thoughts';
import { ThougthsService } from '../thougths.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent implements OnInit {

  listThoughts: Thought[] = []
  currentPage: number = 1;

  constructor(private service: ThougthsService) { }

  ngOnInit(): void {
    this.service.list(this.currentPage).subscribe((listThoughts) => {
      this.listThoughts = listThoughts;
    });
  }

}
