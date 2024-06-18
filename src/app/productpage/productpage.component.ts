import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../service/get-data.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrl: './productpage.component.css'
})
export class ProductpageComponent implements OnInit {
  getParamValue: any;
  getProductData: any = [];
  filterProductData: any = [];
  constructor(private route: ActivatedRoute, private getData:GetDataService) {}

  ngOnInit(): void {
    this.getParamValue = this.route.snapshot.paramMap.get('name');

    this.getData.productData.filter((ele: any) => {
      if (ele.pdCategory == this.getParamValue) {
        this.getProductData.push(ele);
        this.filterProductData.push(ele);
      }
    });




  }
}