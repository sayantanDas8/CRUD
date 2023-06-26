import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/Service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  signin!: FormGroup
  collected_item!: any

  constructor(private fbuilder: FormBuilder, private service: AuthServiceService){}

  ngOnInit(): void {

    this.signin = this.fbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  submitData(){
    console.log('Submitted Data: ', this.signin.value);
    this.collected_item=this.signin.value
   this.service.login(this.collected_item).subscribe((data: any)=> {
     console.log(data);
     alert(data.message)      ;
    // this.router.navigate(['/view'])
   })
  }

}
