import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/Service/auth-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  register!: FormGroup
  collected_item!: any
  selected_image!: File
  formValues: any;


  constructor(private fbuilder: FormBuilder, private service: AuthServiceService){}

  ngOnInit(): void {

    this.register = this.fbuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  submitData(){
    console.log('Submitted Data: ', this.register.value);
    this.collected_item=this.register.value
   this.service.registration(this.collected_item).subscribe((data: any)=> {
     console.log(data);
     alert(data.message)      ;
    // this.router.navigate(['/view'])
   })
  }

  onFileSelection(event: any){
    this.selected_image = event.target.files[0]
    console.log("selected Image: ", this.selected_image);
    this.formValues = this.register.value
    const formData:FormData=new FormData();
       formData.append('first_name',this.formValues.first_name);
       formData.append('last_name',this.formValues.last_name);
       formData.append('email',this.formValues.email);
       formData.append('password',this.formValues.password);
       formData.append('profile_pic',this.selected_image,this.selected_image.name);
       this.service.registration(formData).subscribe((res: any)=> {
        console.log(res);
       })
  }

}
