import { Oferta } from './shared/oferta.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class OfertasService {
  constructor(private httpc: HttpClient) {}

  public getOfertas(): Observable<Oferta[]> {
    return this.httpc.get<Oferta[]>('http://localhost:3000/ofertas');
  }
}
