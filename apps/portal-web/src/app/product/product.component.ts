import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ij-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() data: any;
  @Input() type: string;

  constructor() {}

  ngOnInit() {}

  removeSelection() {
    this.data.qtySelected = null;
  }

}
