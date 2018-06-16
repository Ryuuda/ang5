import {Component, NgModule, OnInit, TemplateRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {DataService} from '../data.service';
import {ButtonsModule, ModalModule, BsModalService, BsModalRef} from 'ngx-bootstrap';

@NgModule({
  imports: [ButtonsModule.forRoot(), ModalModule.forRoot()],
  declarations: []
})

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any;
  selectedProduct: any;
  newProduct: any;
  modalRef: BsModalRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService,
    private _data: DataService) {
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

  addProduct() {
    this.products.push(this.newProduct);
    this.newProduct = {};
    this._data.updateProduct(this.products);
  }

  removeProduct(i) {
    this.products.splice(i, 1);
    this._data.updateProduct(this.products);
  }


}
