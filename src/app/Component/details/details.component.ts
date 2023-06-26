import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/Service/item.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  id!: any;
  single_item!: any

  constructor(private activeRoute: ActivatedRoute, private service: ItemService, private router: Router) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params: any)=> {
      this.id= params.get('id');
      console.log("Collected id of single product: ", this.id);
      
      this.service.viewSingleItems(this.id).subscribe((res)=> {
        this.single_item = res;
        console.log("Single Item: ", this.single_item);
        
      })
    })
  }

  onDelete(){
    this.service.deleteItems(this.id).subscribe((i: any)=> {
      alert ('Item deleted successfully');
      this.router.navigate(['/view'])
    })
  }

}
