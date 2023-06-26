import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/Service/item.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  editData!: FormGroup
  collected_item!: any
  id!: any;
  single_item!: any

  constructor (private activeRoute: ActivatedRoute, private fbuilder: FormBuilder, private service: ItemService, private router: Router){}

  ngOnInit(): void {
    this.editData = this.fbuilder.group({
      item_name: [''],
      company: [''],
      price: [''],
      desc: ['']
    })
    
    this.activeRoute.paramMap.subscribe((params: any)=> {
      this.id= params.get('id');
      
      this.service.viewSingleItems(this.id).subscribe((res)=> {
        this.single_item = res;
        console.log("Single Item: ", this.single_item);
        this.editData = this.fbuilder.group({
          item_name: [this.single_item.item_name],
          company: [this.single_item.company],
          price: [this.single_item.price],
          desc: [this.single_item.desc]
        })
        
      })
    })

  

  }

  submitData(){
    console.log('Submitted Data: ', this.editData.value);
    this.collected_item=this.editData.value
    this.service.editItems(this.id, this.editData.value).subscribe((data: any)=> {
      console.log(data);
      alert('Data edited successfully')      ;
      this.router.navigate(['/view'])
    })
  }

}
