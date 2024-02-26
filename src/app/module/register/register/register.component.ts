import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.None,

})
export class RegisterComponent {

  public registerForm!: FormGroup;
  public loader: boolean = false;
  constructor(private formbulider: FormBuilder,private authservice: AuthService,private router:Router){}
 
  ngOnInit(): void {
    
     this.registerForm = this.formbulider.group({
       emailid: ['',Validators.required],
       mobil: ['',Validators.required],
     })
  }

  get f() {
    return this.registerForm.controls;
  }

  submitForm(): void {
    if(this.registerForm.valid) { 
      this.loader = true;
      this.authservice.login(this.f['emailid'].value, this.f['mobil'].value).subscribe(res =>  {
        console.log(res);
        this.loader = false;
      },
       )
    }
  }

  loginaccount() {
    this.router.navigate(['/admin/login']);
  }
}
