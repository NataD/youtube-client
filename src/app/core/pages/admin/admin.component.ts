import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import { first } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { add, reset } from '../../../redux/actions/custom-card.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  cardForm: FormGroup;
  loading = false;
  submitted = false;
  // returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private store: Store<{ customCards: any[] }>
  ) {}

  ngOnInit() {
    this.cardForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      img: ['', Validators.required],
      video: ['', Validators.required]
    });
  }

  get form() { return this.cardForm.controls; }

  onCreateCard() {
    this.submitted = true;

    if (this.cardForm.invalid) {
      return;
    }

console.log(this.form);
    this.loading = true;
    const payload = {
      title: this.form.title.value,
      description: this.form.description.value,
      img: this.form.img.value,
      video: this.form.video.value,
      createdAt: new Date()
    };
    console.log(payload);
    this.store.dispatch(add(payload));
  }

}
