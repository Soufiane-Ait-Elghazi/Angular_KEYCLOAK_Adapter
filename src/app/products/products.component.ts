import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any ;
  constructor() { }

  ngOnInit(): void {
  this.products=[
  {id:1,name:"name01",price:57522},
  {id:2,name:"name02",price:57522},
  {id:3,name:"name03",price:57522}
  ]
  }

}
