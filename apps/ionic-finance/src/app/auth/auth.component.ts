import { Component, OnInit } from '@angular/core';
import { AuthService, SessionStore } from '@bff/client/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'bff-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  value = 'login';
  loginForm: FormGroup;
  regForm: FormGroup;

  constructor(
    private authService: AuthService,
    private sessionStore: SessionStore,
    private toastController: ToastController,
    private router: Router,
    fb: FormBuilder
  ) {
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.regForm = fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
  }

  public login() {
    const { email, password } = this.loginForm.getRawValue();

    this.authService.signIn({
      email,
      password
    })
      .subscribe(async (resp) => {
        this.sessionStore.logged(resp.accessToken, '', '', email);
        this.loginForm.reset();
        const toast = await this.toastController.create({
          message: 'logged',
          duration: 2000,
          color: 'primary'
        });
        await toast.present();
        await this.router.navigate(['']);
      }, async (error) => {
        this.loginForm.reset();

        const toast = await this.toastController.create({
          message: 'email or password not correct',
          duration: 2000,
          color: 'danger'
        });
        await toast.present();
      });
  }

  public registration() {
    const { firstName, lastName, email, password } = this.regForm.getRawValue();

    this.authService.signUp({
      firstName,
      lastName,
      email,
      password
    })
      .subscribe(async (resp) => {
        this.sessionStore.logged(resp.accessToken, firstName, lastName, email);
        this.regForm.reset();
        const toast = await this.toastController.create({
          message: 'logged',
          duration: 2000,
          color: 'primary'
        });
        await toast.present();
        await this.router.navigate(['']);
      }, async (error) => {
        this.regForm.reset();

        const toast = await this.toastController.create({
          message: 'user already exist',
          duration: 2000,
          color: 'danger'
        });
        await toast.present();
      });
  }
}
