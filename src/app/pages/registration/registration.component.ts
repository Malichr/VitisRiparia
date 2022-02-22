import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', [Validators.minLength(8), Validators.required]),
    password2: new FormControl('', [Validators.minLength(8), Validators.required]),
  });

  hidepass = true;
  hidepass2 = true;
  error = false;

  constructor(private router: Router, private authService: AuthService,  public dialogRef: MatDialogRef<RegistrationComponent>) { }

  registration(): void {
    this.error = false;
    if (this.form.valid) {
      if (this.form.value.password1 === this.form.value.password2) {
        this.authService.createUser(this.form.value.email, this.form.value.password1);
        this.router.navigateByUrl('/login');
        this.dialogRef.close();
        return;
      }
    }
    this.error = true;
  }

  close(): void {
    this.dialogRef.close();
  }
}
