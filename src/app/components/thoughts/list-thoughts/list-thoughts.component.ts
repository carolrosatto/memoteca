import { Component, OnInit } from '@angular/core';
import { Thought } from '../thoughts';
import { ThougthsService } from '../thougths.service';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css'],
})
export class ListThoughtsComponent implements OnInit {
  listThoughts: Thought[] = [];
  currentPage: number = 1;
  hasMoreThoughts: boolean = true;
  filter: string = '';
  isFavorite: boolean = false;
  favoritesList: Thought[] = [];

  constructor(private service: ThougthsService) {}

  ngOnInit(): void {
    this.service
      .list(this.currentPage, this.filter, this.isFavorite)
      .subscribe((listThoughts) => {
        this.listThoughts = listThoughts;
      });
  }

  loadThoughts() {
    this.service
      .list(++this.currentPage, this.filter, this.isFavorite)
      .subscribe((listThoughts) => {
        this.listThoughts.push(...listThoughts);
        if (!listThoughts.length) {
          this.hasMoreThoughts = false;
        }
      });
  }

  searchThoughts() {
    this.currentPage = 1;
    this.hasMoreThoughts = true;

    this.service
      .list(this.currentPage, this.filter, this.isFavorite)
      .subscribe((listThoughts) => {
        this.listThoughts = listThoughts;
      });
  }

  listFavorites() {
    this.isFavorite = true;
    this.hasMoreThoughts = true;
    this.currentPage = 1;
    this.service
      .list(this.currentPage, this.filter, this.isFavorite)
      .subscribe((favoriteThougthsList) => {
        this.listThoughts = favoriteThougthsList
        this.favoritesList = favoriteThougthsList
      });
  }
}
