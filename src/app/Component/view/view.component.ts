import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ItemService } from 'src/app/Service/item.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  //view!:any;
  view:{
    id: number,
    item_name:string,
    company:string,
    price: number,
    desc: string
}[]=[];
  searching!:FormGroup;

  constructor(private service: ItemService) {}

  ngOnInit(): void {
    this.service.viewItems().subscribe((data: any)=> {
      console.log("Data: ", data);
      this.view = data;
      console.log("View", this.view);
      
    })
    this.searching=new FormGroup({
      sText:new FormControl('')
    })
  }

  afterSearch(){
    let serchText = this.searching.value.sText;
    console.log(serchText);
    
    if(serchText=="")
    {
      this.view=this.view;
    }
    else
    {
      this.view=this.view.filter((itm: any) => itm.item_name.toLowerCase().includes(serchText.toLowerCase()) || itm.company.toLowerCase().includes(serchText.toLowerCase()))
    }
    
    console.log("Search item: ", this.view);
    
  }


}
