import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ItemService } from 'src/app/Service/item.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addData!: FormGroup
  collected_item!: any

  constructor (private fbuilder: FormBuilder, private service: ItemService, private router: Router) {}

  ngOnInit(): void {

    this.addData = this.fbuilder.group({
      item_name: ['', Validators.required],
      company: ['', Validators.required],
      price: ['', Validators.required],
      desc: ['']
    })

  }

  submitData(){
    console.log('Submitted Data: ', this.addData.value);
    this.collected_item=this.addData.value
    this.service.addItems(this.collected_item).subscribe((data: any)=> {
      console.log(data);
      alert('Data submitted successfully')      ;
      this.router.navigate(['/view'])
    })
  }

}
