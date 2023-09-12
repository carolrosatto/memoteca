import { Component, OnInit } from '@angular/core';
import { Thought } from '../thoughts';
import { ThougthsService } from '../thougths.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  thought: Thought = {
    content: '',
    author: '',
    model: ''
  }

  constructor(private service: ThougthsService, private router: Router) { }

  ngOnInit(): void {
  }

  createThought() {
    this.service.create(this.thought).subscribe(() => this.router.navigate(["/listThought"]))
  }

  cancel() {
    this.router.navigate(["/listThought"])
  }

}
