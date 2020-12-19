import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'bff-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  @Input()
  mode: 'desktop' | 'mobile' = 'desktop';

  @Input()
  loginPath: string;

  @Input()
  background: string;

  @Output()
  submit = new EventEmitter();

  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.validateForm = fb.group({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(/(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]*/)]),
    })
  }

  ngOnInit(): void {
  }

  getUrl() {
    return {
      'background-image': `url(${this.background})`
    }
  }

  onSubmit() {
    return this.submit.emit(this.validateForm.getRawValue());
  }

}
