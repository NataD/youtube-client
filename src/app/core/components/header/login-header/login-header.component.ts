import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth-service.service';
import { User } from '../../../models/user.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.scss']
})
export class LoginHeaderComponent implements OnInit {
  private username: string;
  private isAuthenticated: any;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.currentUser.pipe(
      map((user: User) => {
        if (user !== null && user !== undefined) {
          this.isAuthenticated = true;
          this.username = user.username;
        } else {
        this.isAuthenticated = false;
        this.username = 'Your name';
      }

    })
    ).subscribe();
  }

  logout() {
       this.authService.logout();
       this.router.navigate(['/auth']);
   }

   // login() {
   //   this.authService.login();
   // }

}
