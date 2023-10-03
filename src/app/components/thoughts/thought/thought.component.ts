import { Component, OnInit, Input } from '@angular/core';
import { Thought } from '../thoughts';
import { ThougthsService } from '../thougths.service';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() thought: Thought = {
    id: 1,
    content: 'Teste :D',
    author: 'Carolina :)',
    model: 'model3',
    isFavorite: false
  }

  @Input()
  favoritesList: Thought[] =[];

  constructor(private service: ThougthsService) { }

  ngOnInit(): void {
  }

  thoughtWidth(): string {
    if(this.thought.content.length >= 256) {
      return 'thought-g'
    } else {
      return 'thought-p'
    }
  }

  changeFavoriteIcon(): string {
    if(this.thought.isFavorite == false) {
      return 'inativo';
    } else {
      return 'ativo';
    }
  }

  updateFavorites(): void {
    this.service.changeFavorite(this.thought).subscribe(() => {
      this.favoritesList.splice(this.favoritesList.indexOf(this.thought), 1)
    });
  }

}
