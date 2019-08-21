import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'image-resizer';
  imgUrl:any;
  isValidUrl: boolean ;

  constructor(private data:DataService){}

  ngOnInit(){}

  imageValidation(){
    console.log(this.imgUrl);

    //this.isValidUrl = 
    
    this.data.validateUrl(this.imgUrl).subscribe(
      data=>{
        console.log(data)
      },err=>{
        console.log(err);
        this.isValidUrl = true;
      }
    )
  

  }

}
