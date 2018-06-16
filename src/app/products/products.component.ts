import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any;
  selectedProduct: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router, private _data: DataService) {
    this.route.params.subscribe(res => console.log(res));
  }

  ngOnInit() {
    this._data.product.subscribe(res => this.products = res);
  }

  sendMeHome() {
    this.router.navigate(['']);
  }

  selectProduct(product) {
    this.selectedProduct = product;
    console.log('Selected: ', this.selectedProduct);
  }
}
