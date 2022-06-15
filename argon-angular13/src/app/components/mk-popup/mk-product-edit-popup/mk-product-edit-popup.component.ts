import { Component, Input, OnInit } from '@angular/core';
import { mkProducts } from 'src/app/models/mkProducts';

@Component({
  selector: 'qdn-mk-product-edit-popup',
  templateUrl: './mk-product-edit-popup.component.html',
  styleUrls: ['./mk-product-edit-popup.component.css']
})
export class MkProductEditPopupComponent implements OnInit {
  @Input() oMkProducts: mkProducts = new mkProducts();
  constructor() { }

  ngOnInit(): void {
  }

}
