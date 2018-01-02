import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate{

  constructor(private _router: Router){}

  canActivate(route: ActivatedRouteSnapshot): boolean {
        //le + converti l'url de string a number
    let id = +route.url[1].path;         //second element de l'url "products/10"
    if(isNaN(id) || id < 1){             //                             [0] / [1]
      alert("Invalid product ID");
      this._router.navigate(['/products']);
      return false;
    }
    return true;
  }

}
