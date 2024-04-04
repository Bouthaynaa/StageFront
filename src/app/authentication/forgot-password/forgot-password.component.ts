import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        RouterLink,
    ],
})
export class ForgotPasswordComponent implements OnInit {
  authForm!: UntypedFormGroup;
  submitted = false;
  returnUrl!: string;
  email: string ="";
  

  constructor(
    private router: Router,
    private http: HttpClient,
    private actRoute: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    
  ) {}


 

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() {
    return this.authForm.controls;
  }
  /* onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.authForm.invalid) {
      return;
    } else {
      this.router.navigate(['/dashboard/main']);
    }
  }*/

  onSubmit(){
    this.submitted = true;
    console.log(this.email);
    
    let bodyData = {
      email: this.email,
      
    };

    if (this.authForm.invalid) {
      return;
    } else {

    this.http.post("  http://localhost:8080/resetPassword ", bodyData).subscribe((resultData: any)=>{
      console.log(resultData);
      this.router.navigate(['#',this.email ]);
     
      alert("check ur email!");
    

    });
  }
 

  }



}
