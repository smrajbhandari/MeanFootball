import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder, 
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.myForm =  formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  get f() { return this.myForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.myForm.invalid) {
      return;
    }

    return this.userService.login(this.myForm.value)
      .subscribe((data:any) => {
        if (data) {
          this.userService.setUser(data.user);
          localStorage.setItem('_token',data.token.toString());
          this.router.navigateByUrl('/main');

        }

      }, err => {
        this.snackBar.open(err.error.message, 'Close', { duration: 3000 });
      });
  }
}
