import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './products-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

    filteredProducts: IProduct[];
    products: IProduct[] =  [];
    errorMessage: string;

    constructor(private _productService: ProductService) {
    }


    ngOnInit():void {
        console.log("OnInit method launched");
        //   this.products = this._productService.getProducts(); comme getProduct est "observable" on ne peut pas assigner le resultat directement
        // mais plutot,  souscrire aux resultats de cet observable
        this._productService.getProducts()
            .subscribe(products => {
                this.products = products; // une fois le resultat émis on l'assigne
                this.filteredProducts = this.products;
            },
                error => this.errorMessage = <any>error);
    } //sinon on recupere l'erreur, on fait un cast et on l'assigne à la var d'erreur



 pageTitle: string = 'Product list';
 imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  _listFilter: string ;
  public get listFilter():string {
    return this._listFilter;
  }
  public set listFilter(value:string) {
    this._listFilter = value;
    this.filteredProducts=this.listFilter ? this.performFilter(this.listFilter): this.products;
  }

  toggleImage(): void{
    this.showImage=!this.showImage;
  }


  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

    onRatingClicked(message: string) {
        this.pageTitle = 'Product List: '+ message;
    }
}