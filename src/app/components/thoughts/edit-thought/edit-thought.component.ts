import { Component, OnInit } from '@angular/core';
import { ThougthsService } from '../thougths.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css'],
})
export class EditThoughtComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private service: ThougthsService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchById(parseInt(id!)).subscribe((thought) => {
      this.form = this.formBuilder.group({
        id: [thought.id],
        content: [
          thought.content,
          Validators.compose([
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|\s)*/),
          ]),
        ],
        author: [
          thought.author,
          Validators.compose([
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|\s)*/),
            Validators.minLength(3),
          ]),
        ],
        model: [thought.model],
      });
    });
  }

  editThought() {
    this.service.update(this.form.value).subscribe(() => {
      this.router.navigate(['/listThought']);
    });
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
