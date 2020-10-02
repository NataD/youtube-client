import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import { first } from 'rxjs/operators';

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
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.cardForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      img: ['', Validators.required],
      video: ['', Validators.required]
    });

    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/client';
  }

  get form() { return this.caForm.controls; }

  onCreateCard() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    const payload = {

    }
    this.authService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          return this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
