import { Component, inject, OnInit } from '@angular/core';
import { Shared } from '../../service/shared';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-forksjoin',
  imports: [JsonPipe],
  templateUrl: './forksjoin.html',
  styleUrl: './forksjoin.css',
})
export class Forksjoin implements OnInit{
  sharedservice:Shared = inject(Shared);
  myRecipe:any;
  myFashion:any;
  myUser:any;
  
  ngOnInit(): void {
    this.sharedservice.sendToApiDataList().subscribe((_resp:any)=>{
      console.log(_resp);
      this.myRecipe = _resp.recipe.recipes,
      this.myFashion = _resp.fashion.products,
      this.myUser = _resp.users
    })
  }
}
