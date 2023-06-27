import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  ngOnInit(): void {}

  products: any[] = [1,2,3,4,5,6,7,8
    // Aquí puedes definir los productos que deseas mostrar en la tabla
  ];

  productRows: any[][] = [];

  constructor() {
    this.generateProductRows();
  }

  generateProductRows() {
    let rowIndex = 0;
    this.productRows[rowIndex] = [];

    for (let i = 0; i < this.products.length; i++) {
      this.productRows[rowIndex].push(this.products[i]);

      if ((i + 1) % 4 === 0) {
        rowIndex++;
        this.productRows[rowIndex] = [];
      }
    }
  }
}
