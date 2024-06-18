import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../service/get-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{
  images = [
    'https://b.zmtcdn.com/data/pictures/chains/5/65155/ad13cee41f089a32fa0d854e658a2b9a.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*text=Slide+1',
    'https://b.zmtcdn.com/data/pictures/chains/5/67755/93776f3249312397e2c2ba274b4812ec.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*text=Slide+2',
    'https://b.zmtcdn.com/data/pictures/7/18387727/c6d5aa46080c9a3639b1d0bc8f73f0b9.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*text=Slide+3',
      'https://b.zmtcdn.com/data/pictures/chains/4/68854/a89b61f165c9dbeca822fb217901e599.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*text=Slide+4'
  ];
  currentIndex = 0;

  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
  }

  getTransform() {
    return `translateX(-${this.currentIndex * 100}%)`;
  };

  getcategorisData:any;
constructor(private getData:GetDataService){}
  ngOnInit(): void {
    this.getcategorisData = this.getData.categoriesData;
  }

}
