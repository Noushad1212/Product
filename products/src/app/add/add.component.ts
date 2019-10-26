import { Component, OnInit } from '@angular/core';
import { IProduct } from '../productlist/product.model';
import { ProductlistComponent } from '../productlist/productlist.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
productItem= new IProduct(null,null,null,null,null,null,null,null);
  constructor(private productService:ProductService) { }

  ngOnInit() {
  }
AddProduct()
{
  this.productService.newProduct(this.productItem);
  alert("SUCCESS");
}
}
