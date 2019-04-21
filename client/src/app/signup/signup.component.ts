import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { MustMatch } from '../_helpers/must-match-validator';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  loading: boolean = false;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder, 
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email], 
        [this.validateExistingEmail.bind(this)]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
      'confirmPassword': ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  get f() { return this.myForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.myForm.invalid) {
      return;
    }

    this.loading = true;

    return this.userService.create(this.myForm.value)
      .subscribe(data => {
        this.router.navigateByUrl('login');
      }, error => {
        this.loading = false;
      });
  }

  validateExistingEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        this.userService.checkExistingEmail(control.value)
          .subscribe((res: any) => {
            resolve(null);
          }, error => {
            resolve({ emailExists: true });
          });
      }
    );

    return promise;
  }
}
