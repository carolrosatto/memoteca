import { Component, OnInit } from '@angular/core';
import { ThougthsService } from '../thougths.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private service: ThougthsService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      content: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ]),
      ],
      author: [
        '',
        Validators.compose([
          Validators.required, 
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
          Validators.minLength(3)
        ]),
      ],
      model: [''],
    });
  }

  createThought() {
    if (this.form.valid) {
      this.service
        .create(this.form.value)
        .subscribe(() => this.router.navigate(['/listThought']));
    }
  }

  cancel() {
    this.router.navigate(['/listThought']);
  }

  enableButton(): string {
    if(this.form.valid) {
      return 'action-button'
    } else {
      return 'disabled__button'
    }
  }
}
