import { Component, OnInit } from '@angular/core';
import { Thought } from '../thoughts';
import { ThougthsService } from '../thougths.service';
import { Router } from '@angular/router';

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
  title: string = 'Meu Mural'

  constructor(private service: ThougthsService, private router: Router) {}

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
    this.title = 'Meus favoritos'
    this.isFavorite = true;
    this.hasMoreThoughts = true;
    this.currentPage = 1;
    this.service
      .list(this.currentPage, this.filter, this.isFavorite)
      .subscribe((favoriteThougthsList) => {
        this.listThoughts = favoriteThougthsList;
        this.favoritesList = favoriteThougthsList;
      });
  }

  reloadComponent() {
    this.isFavorite = false;
    this.currentPage = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url])
  }
}
