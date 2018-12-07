import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CompraItem } from 'src/models/compras/compraItem';

@Injectable({
  providedIn: 'root'
})

export class CompraItemService {

  private compraItem: CompraItem;

  constructor( private http: HttpClient) {}

  getCompraItemParam() {
      return this.compraItem;
  }

  setCompraItemParam(compraItem: CompraItem) {
    this.compraItem = compraItem;
  }

}
