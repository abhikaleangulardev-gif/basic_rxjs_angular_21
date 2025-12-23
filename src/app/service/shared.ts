import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Shared {
  // we can create in three api
  recipeApiList: string = 'https://dummyjson.com/recipes';
  fashionApiList: string = 'https://dummyjson.com/products';
  userApiList: string = 'https://jsonplaceholder.typicode.com/users';

  http:HttpClient = inject(HttpClient);

  sendToApiDataList() {
    return forkJoin({
      recipe: this.http.get(this.recipeApiList),
      fashion: this.http.get(this.fashionApiList),
      users: this.http.get(this.userApiList)
    })
  }
}
