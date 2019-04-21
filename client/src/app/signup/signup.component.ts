import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.myForm = formBuilder.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', [
         Validators.required, 
         Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]], 
        // [this.validateEmailNotTaken.bind(this)]],
      'password': ['', Validators.required],
      'confirmPassword': ['', [Validators.required]],
      // 'confirmPassword': ['', [Validators.required, this.validatePasswords]],
      // 'acceptTerm': [true]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const user = this.myForm.value;

    if (this.myForm.valid) {
      return this.userService.create(user)
        .subscribe(data => console.log(data));
    } else {
      console.log('Invalid form');
    }
  }

  validateEmailNotTaken(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        this.userService.checkEmailNotTaken(control.value)
          .subscribe((res: any) => {
            const result = res.emailNotTaken ? null : {emailTaken: true};
            resolve(result);
          });
      }
    );

    return promise;
  }

  // validatePasswords(group: FormGroup): { [s: string]: boolean } {
  //   const pass = group.controls.password.value;
  //   const confirmPass = group.controls.confirmPassword.value;

  //   return pass === confirmPass ? null : { notSame: true };
  // }
}
