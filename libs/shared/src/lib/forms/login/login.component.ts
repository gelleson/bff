import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'bff-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  mode: 'desktop' | 'mobile' = 'desktop';

  @Input()
  registerPath: string;

  @Input()
  loginBackground: string;

  @Output()
  submit = new EventEmitter();

  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.validateForm = fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(/(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]*/)]),
    })
  }

  ngOnInit(): void {
  }

  getUrl() {
    return {
      'background-image': `url(${this.loginBackground})`
    }
  }

  onSubmit() {
    return this.submit.emit(this.validateForm.getRawValue());
  }
}
